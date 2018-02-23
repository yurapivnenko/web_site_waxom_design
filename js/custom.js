$(function(){
	$('.slider').slick({
		draggable: false,
		dots: true,
		infinite: true,
		speed: 700,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"><span class="path1"></span><span class="path2"></span></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"><span class="path1"></span><span class="path2"></span></span></button>',
	});

	$('.recent-posts__slider').slick({
		draggable: false,
		appendArrows: '.recent-post__buttons',
		prevArrow: '<button type="button" class="slick-prev"><span class="icon-arrow_left"><span class="icon-left"><span class="path1"></span><span class="path2"></span></span></button>',
		nextArrow: '<button type="button" class="slick-next"><span class="icon-arrow_right"><span class="icon-right"><span class="path1"></span><span class="path2"></span></span></button>',
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		mobileFirst: true,
	});
});