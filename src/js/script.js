var	eviolinLink  = document.querySelector('.js-eviolinLink'),
	  eviolinPopup = document.querySelector('.js-eviolinPopup');
eviolinLink.addEventListener('click', function(event) {
	event.preventDefault();
	eviolinPopup.classList.add('js-show');
	function func() {
		eviolinPopup.classList.remove('js-show');
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
		$(".main").addClass("js-scaleAway");
		$(".vendor-info__text").addClass("js-fadeAway1s");
	});
});
