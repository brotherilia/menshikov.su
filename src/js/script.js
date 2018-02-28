$(document).ready(function(){

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
    var linkLocation = this.href;
    var linkId = $(this).attr("id");
    $("#"+linkId).addClass("js-linkChosen");
    $(".menu__link").addClass("js-fadeAway");
    $("#"+linkId).removeClass("js-fadeAway");
    $("#christendom").addClass("js-fadeAway");
    $("#house").addClass("js-fadeAway");
    $(".guide").addClass("js-fadeAway");
    $(".menu").addClass("js-scaleAway");
    $(".page-footer__text").addClass("js-fadeAway1s");
    setTimeout (function(){
      window.location = linkLocation;
    }, 1500);
  });
});
