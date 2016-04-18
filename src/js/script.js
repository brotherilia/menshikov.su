var	eviolinLink  = document.querySelector('.js-eviolinLink'),
	  eviolinPopup = document.querySelector('.eviolin');
eviolinLink.addEventListener('click', function(event) {
	event.preventDefault();
  eviolinPopup.classList.remove('js-hide');
  eviolinPopup.classList.add('js-show');
	function func() {
		eviolinPopup.classList.remove('js-show');
    eviolinPopup.classList.add('js-hide');
	}
	setTimeout(func, 1000);
});

$(function(){
	$(".js-link").on("mouseover", function(){
		$(this).addClass("js-linkHover");
	}).on("mouseleave", function(){
		$(this).removeClass("js-linkHover");
	});
	$(".js-commonLink").on("click", function(){
		$(".js-link").addClass("js-fadeAway");
		$(".guide--vert").addClass("js-fadeAway");
		$(this).removeClass("js-fadeAway");
		$(this).addClass("js-linkChosen");
		$(".menu").addClass("js-scaleAway");
		$(".page-footer__text").addClass("js-fadeAway1s");
	});
});
