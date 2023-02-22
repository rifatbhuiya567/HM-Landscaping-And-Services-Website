$(window).load(function(){
  $(".back-to-top i").hide();
});
// Load Funtion End

$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if( scrolling > 40){
      $(".myNav").addClass("nav-anim");
    }
    else{
      $(".myNav").removeClass("nav-anim");
    }

    if( scrolling > 100){
        $(".back-to-top i").fadeIn(500);
      }
      else{
        $(".back-to-top i").fadeOut(500);
      }
});
// Scroll Function End

$(".back-to-top i").click(function(){
    $("html, body").animate({
        scrollTop:0
    },500)
});
// Click Function End

function mainSlider() {
    var myBannerSlider = $('.banner-slide');
    myBannerSlider.on('init', function (e, slick) {
          var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);
    });

    myBannerSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });

    myBannerSlider.slick({
        autoplay: true,
        autoplaySpeed: 9000,
        speed: 500,
        dots: true,
        fade: true,
        arrows: false,
    });

    function doAnimations(elements) {
      var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
              });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();
// Banner Slide End

var myTestimonial = $(".testimonials-slide");

myTestimonial.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
});
// Testimonial Slide End

var myGalleryOne = $(".gallery-slide-one");

myGalleryOne.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.gal-next1',
    prevArrow: '.gal-prev1',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});

var myGalleryTwo = $(".gallery-slide-two");

myGalleryTwo.slick({
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '.gal-next2',
    prevArrow: '.gal-prev2',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
});
// Gallery Slide End