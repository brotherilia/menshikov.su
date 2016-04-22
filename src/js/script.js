$(function() {

  $(".menu__link").on("mouseover", function(){
    $(this).addClass("js-linkHover");
  }).on("mouseleave", function(){
    $(this).removeClass("js-linkHover");
  });

  $(".js-eviolinLink").on("click", function(){
    $(".eviolin").fadeIn(500).fadeOut(500);
  });

  $(".js-commonLink").click(function(event){
    $(this).addClass("js-linkChosen");
    $(".menu__link").addClass("js-fadeAway");
    $(this).removeClass("js-fadeAway");
    $(".guide").addClass("js-fadeAway");
    $(".menu").addClass("js-scaleAway");
    $(".page-footer__text").addClass("js-fadeAway1s");
  });

});
