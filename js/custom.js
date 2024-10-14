
// // main menu dropdown toggle
// (function ($) {
//   $.fn.menumaker = function (options) {
//       var cssmenu = $(this),
//           settings = $.extend({
//               format: "dropdown",
//               sticky: false
//           }, options);
//       return this.each(function () {
//           $(this).find(".button").on('click', function () {
//               $(this).toggleClass('menu-opened');
//               var mainmenu = $(this).next('ul');
//               if (mainmenu.hasClass('open')) {
//                   mainmenu.slideToggle().removeClass('open');
//               } else {
//                   mainmenu.slideToggle().addClass('open');
//                   if (settings.format === "dropdown") {
//                       mainmenu.find('ul').show();
//                   }
//               }
//           });
//           cssmenu.find('li ul').parent().addClass('has-sub');
//           multiTg = function () {
//               cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
//               cssmenu.find('.submenu-button').on('click', function () {
//                   $(this).toggleClass('submenu-opened');
//                   if ($(this).siblings('ul').hasClass('open')) {
//                       $(this).siblings('ul').removeClass('open').slideToggle();
//                   } else {
//                       $(this).siblings('ul').addClass('open').slideToggle();
//                   }
//               });
//           };
//           if (settings.format === 'multitoggle') multiTg();
//           else cssmenu.addClass('dropdown');
//           if (settings.sticky === true) cssmenu.css('position', 'fixed');
//           resizeFix = function () {
//               var mediasize = 1000;
//               if ($(window).width() > mediasize) {
//                   cssmenu.find('ul').show();
//               }
//               if ($(window).width() <= mediasize) {
//                   cssmenu.find('ul').hide().removeClass('open');
//               }
//           };
//           resizeFix();
//           return $(window).on('resize', resizeFix);
//       });
//   };
// })($);

// (function ($) {
//   $(document).ready(function () {
//       $("#cssmenu").menumaker({
//           format: "multitoggle"
//       });
//   });
// })($);



$('document').ready(function(){
    $('#nav-icon1').click(function(){
        $('.navlist').toggleClass('navlist-active');
    });
    $('li').click(function(){
      $(this).toggleClass('li-active')
    });
    $('.shopping-cart').click(function(){
        $('.navlist').removeClass('navlist-active');
        $('#nav-icon1').removeClass('open');
    });
    $('.search-flat-icon').click(function(){
        $('.navlist').removeClass('navlist-active');
        $('#nav-icon1').removeClass('open');
    })
});


// nav fixed 
$("document").ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.navmenu').addClass('fixed-top');
        } else {
            $('.navmenu').removeClass('fixed-top');
        }
    });
});


// search popup
$('document').ready(function(){
  $('.search-flat-icon').click(function(){
    $('.search-area').addClass('search-area-active')
  });
  $('.search-overlay, .search-area form .close').click(function(){
    $('.search-area').removeClass('search-area-active')
  });
});


// menu icon toggle
$(document).ready(function() {
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
});



    // shopping cart toggle
    $('.shopping-cart').click(function() {
        $('.shopping-cart-box').addClass('shopping-cart-box-active');
    });
    $('.close-cart, .overlay').click(function() {
        $('.shopping-cart-box').removeClass('shopping-cart-box-active');
    });

    // banner carousel
    $('.banner .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
        items:1,
        dots: false,
        animateOut: 'fadeOut',
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                autoplay:false,
            },
            1000:{
                autoplay:true,
            }
        }
    });

    //carousel cat four
    $('.carousel-four').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                autoplay:false,
            },
            600:{
                items:2,
                autoplay:false,
                nav:true,
            },
            1000:{
                items:4,
                autoplay:true,
            }
        }
    })
});

 //carousel cat five
 $('.carousel-five').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            navText: ['<i class="fa-solid fa-chevron-left"></i>','<i class="fa-solid fa-chevron-right"></i>'],
            autoplay:false,
        },
        500:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
});

   // brand carousel

   $('.brand .owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});



// product zoom single product
$(document).ready(function(){
    $('#produto').zoom();
});

$(document).ready(function(){
    $('.zoom').zoom();
});

// product single Select Quantity trigger
let value = 0
function increaseValue() {
    value++;
    document.getElementById('valuee').textContent = value;
}
function decreaseValue() {
    if (value > 0) {
        value--;
        document.getElementById('valuee').textContent = value;
    }
}


// tabs
$( function() {
    var tabs = $( ".theme-tabs" ).tabs();
    var previouslyFocused = false;
 
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      start: function(event, ui) {
        previouslyFocused = document.activeElement === ui.item[ 0 ];
      },
      stop: function(event, ui) {
        tabs.tabs( "refresh" );
        if (previouslyFocused) {
          ui.item.trigger( "focus" );
        }
      }
    });
  } );



// cart popup
$(function () {
    $('.quick_view').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true,
        }
    });
});


$(document).ready(function(){
    $('.add-to-cart').click(function(){

        $('.popup-cart-added').addClass('popup-cart-added-active');

        setTimeout(function() {
            $('.popup-cart-added').removeClass('popup-cart-added-active');
        }, 2000);
    });
});


$(document).ready(function(){
    $('.add-to-wish').click(function(){
        $('.popup-wishlist').addClass('popup-wishlist-active');
        setTimeout(function() {
            $('.popup-wishlist').removeClass('popup-wishlist-active');
        }, 2000);
    });
    $('.add-to-wish').click(function(){
        $(this).addClass('add-to-wish-active')
    })
    $('.add-cart').click(function(){
        $(this).addClass('add-cart-active')
    })
});


// accordion
$(function() {
    $(".theme_accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: 2,
    });
});


// cart page input number
$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
$('.quantity').each(function() {
  var spinner = $(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});


// price range slider
$(function() {
    // Set min and max price range
    var minPrice = 0;
    var maxPrice = 5000;

    // Initialize the price slider
    $("#slider-range").slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        },
        change: function(event, ui) {
            $("#loader").show();
            setTimeout(function() {
                filterProducts(ui.values[0], ui.values[1]);
                $("#loader").hide();
            }, 500); 
        }
    });

    // Set price range label
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    function filterProducts(minPrice, maxPrice) {
        var selectedCategories = $(".category-filter:checked").map(function() {
            return $(this).val();
        }).get();

        $(".productss").each(function() {
            var price = parseInt($(this).data("price"), 10);
            var category = $(this).data("category");

            var priceMatch = (price >= minPrice && price <= maxPrice);
            var categoryMatch = (selectedCategories.length === 0 || selectedCategories.indexOf(category) !== -1);

            if (priceMatch && categoryMatch) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

    // Trigger filtering when a category checkbox is clicked
    $(".category-filter").on("change", function() {
        $("#loader").show();
        setTimeout(function() {
            var minPrice = $("#slider-range").slider("values", 0);
            var maxPrice = $("#slider-range").slider("values", 1);
            filterProducts(minPrice, maxPrice);
            $("#loader").hide();
        }, 500); 
    });
});



// product single gallery carousel
$(document).ready(function () {

    var sync1 = $(".sync1");
    var sync2 = $(".sync2");
    var slidesPerPage = 4; 
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: false,
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
       
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


// timer
function makeTimer() {
    var endTime = new Date("29 December 2024 9:56:00 GMT+01:00");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $(".days").html(days + "<span></span>");
        $(".hours").html(hours + "<span></span>");
        $(".minutes").html(minutes + "<span></span>");
        $(".seconds").html(seconds + "<span></span>");		

	}

	setInterval(function() { makeTimer(); }, 1000);



// scroll top function

var progressPath = document.querySelector('.progress-wrap path');
var pathLength = progressPath.getTotalLength();
progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
progressPath.style.strokeDashoffset = pathLength;
progressPath.getBoundingClientRect();
progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
}
updateProgress();
$(window).scroll(updateProgress);

var offset = 50;
var duration = 550;
$(window).on('scroll', function () {
    if ($(this).scrollTop() > offset) {
        $('.progress-wrap').addClass('active-progress');
    } else {
        $('.progress-wrap').removeClass('active-progress');
    }
});
$('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, duration);
return false;});


// choose product size
function selectSize(size) {
    // Remove the active class from all size options
    let sizes = document.querySelectorAll('.size');
    sizes.forEach(function(sizeDiv) {
        sizeDiv.classList.remove('active');
    });

    // Add the active class to the selected size
    document.querySelector(`#checkmark-${size}`).parentElement.classList.add('active');

    // Display the selected size text
    document.getElementById('selected-size-text').textContent = `Selected ${size}`;
}




// toggle password
const togglePasswordIcons = document.querySelectorAll('.toggle-password');

togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function () {
        // Find the sibling input field
        const passwordField = this.previousElementSibling;

        // Toggle the input field's type between 'password' and 'text'
        const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordField.setAttribute('type', type);

        // Toggle the eye icon between 'fa-eye' and 'fa-eye-slash'
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});



// delete item from wishlist
const closeButtons = document.querySelectorAll('.close-btn button');

closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productBox = this.closest('.product-box');
        productBox.style.display = 'none';
    });
});

// delete item from the cart popup
document.querySelectorAll('.trash').forEach(trashIcon => {
    trashIcon.addEventListener('click', function() {
      const contentSection = this.closest('.contentt');
      if (contentSection) {
        contentSection.style.display = 'none'; 
      }
    });
});
  



