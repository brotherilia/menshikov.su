$(document).ready(function() {

  $("body").css("display", "none");
  $("body").fadeIn(2000);

  $(".menu__link").on("mouseover", function(){
    $(this).addClass("js-linkHover");
  }).on("mouseleave", function(){
    $(this).removeClass("js-linkHover");
  });

  $(".js-eviolinLink").on("click", function(){
    $(".eviolin").fadeIn(500).fadeOut(500);
  });

  $(".js-commonLink").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $(this).addClass("js-fadeAway");
    $(this).removeClass("js-fadeAway");
    $(this).addClass("js-linkChosen");
    $(".guide--vert").addClass("js-fadeAway");
    $(".menu").addClass("js-scaleAway");
    $(".page-footer__text").addClass("js-fadeAway1s");
  });

});
