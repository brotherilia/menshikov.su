"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  require("time-grunt")(grunt);

  grunt.initConfig({

    //*** Очистка ***//
    clean: {
      build: ["build"]
    },

    //*** Копирование ***//
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "src/",
          src: [
            "img/*.{jpg,png,svg}",
            "js/**/*.js",
            "*.html",
            "favicon.ico"
          ],
          dest: "build"
        }]
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["*.html"],
          dest: "build"
        }]
      },
      js: {
        files: [{
          expand: true,
          cwd: "src/",
          src: ["js/**/*.js"],
          dest: "build"
        }]
      }
    },

    //*** Сборка CSS из LESS ***//
    less: {
      style: {
        files: {
          "build/css/style.css": "src/less/style.less"
        }
      }
    },

    //*** Обработка CSS: префиксование и "упаковка" медиа-запросов ***//
    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: [
            "last 1 version",
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Opera versions",
            "last 2 Edge versions"
          ]}),
          require("css-mqpacker")({
            sort: true
          })
        ]
      },
      style: {
        src: "build/css/*.css"
      }
    },

    //*** "Причесывание" CSS ***//
    csscomb: {
      style: {
        options: {
          config: "csscomb.json"
        },
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },

    //*** Минификация CSS ***//
    csso: {
      style: {
        options: {
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    //*** Сборка SVG-спрайта ***//
    svgstore: {
      options: {
        svg: {
          style: "display: none"
        }
      },
      sprite: {
        files: {
          "src/img/sprite.svg": ["src/img/sprite/*.svg"]
        }
      }
    },

    //*** Минификация SVG ***//
    svgmin: {
      allsvg: {
        files: [{
          expand: true,
          src: ["build/img/**/*.svg"]
        }]
      }
    },

    //*** Минификация остальной графики ***//
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif}","build/img/**/*.{png,jpg,gif}"]
        }]
      }
    },

    //*** Минификация JS ***//
    uglify: {
      options: {
        mangle: false
      },
      scripts: {
        files: {
          "build/js/script.min.js": ["build/js/script.js"]
        }
      }
    },

    //*** Сборка и обработка HTML-файлов ***//
    processhtml: {
      target: {
        files: {
          "build/index.html": ["build/index.html"]
        }
      }
    },

    //*** Локальный сервер с обновлением браузера ***//
    browserSync: {
      server: {
        bsFiles: {
          src: [
            "build/*.html",
            "build/css/*.css"/*,
            "build/js/*.js"*/
          ]
        },
        options: {
          server: "build/",
          watchTask: true,
          notify: false,
          open: true,
          ui: false
        }
      }
    },

    //*** Отслеживание изменений в исходниках ***//
    watch: {
      html: {
        files: ["src/*.html"],
        tasks: ["copy:html"/*, "processhtml"*/],
        options: {spawn: false}
      },
      style: {
        files: ["src/less/**/*.less"],
        tasks: ["less", "postcss", "csscomb", "csso"],
        options: {spawn: false}
      }//,
      //scripts: {
        //files: ["src/js/**/*.js"],
        //tasks: ["copy:js","uglify"],
        //options: {spawn: false}
      //}
    },

    //*** Отправка сборки в удаленную ветку "gh-pages" ***//
    "gh-pages": {
      options: {
        base: "build",
        clone: "gh-pages",
        only: ["**/*", "!README.md"]
      },
      src: "**/*"
    }

  });

  grunt.registerTask("serve", ["browserSync", "watch"]);
  grunt.registerTask("svg", ["svgstore", "svgmin"]);
  grunt.registerTask("css", ["less", "postcss", "csscomb", "csso"]);
  grunt.registerTask("build", [
    "clean",
    "copy:build",
    "css",
    //"svg",
    //"imagemin",
    //"uglify",
    //"processhtml"
  ]);

};
