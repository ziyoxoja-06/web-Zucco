( function( $ ) {

"use strict";

// *** On ready *** //
$( document ).on( "ready" , function() {
	responsiveClasses();
	dataCustomOptions();
	fullscreenSection();
	imageBG();
	fitVideos();
	BGVideoYTPlayer();
	lightboxImage();
	lightboxGallery();
	lightboxIframe();
	scrollToAnchor();
	bannerParallaxImageBG();
	sectionParallaxImageBG();
	sliderChoosingCourse();
	sliderOurInstructors();
	sliderClients();
	sliderTestimonials();
	formCTASubscribe2();
	scrollTopIcon();
});

// *** On load *** //
$( window ).on( "load" , function() {
	parallaxStellar();
	scrollProgress();
});

// *** On resize *** //
$( window ).on( "resize" , function() {
	responsiveClasses();
	fullscreenSection();
	parallaxStellar();
});

// *** On scroll *** //
$( window ).on( "scroll" , function() {
	scrollTopIcon();
	scrollProgress();
});

// *** On Scroll In On load *** //
$( window ).on( "load" , function() {
	$( window ).on( "scroll" , function() {

	});
});


// *** jQuery noConflict *** //
var $ = jQuery.noConflict();


// *** General Variables *** //
var $window = $( window ),
	$this = $( this ),
	$body = $( "body" );

// *** Data Custom Options *** //
function dataCustomOptions(){$("*[data-pattern-overlay-darkness-opacity]").each(function(){var a=$(this).data("pattern-overlay-darkness-opacity");$(this).css("background-color",convertHex("#000000",a))}),$("*[data-pattern-overlay-background-image]").each(function(){"none"==$(this).data("pattern-overlay-background-image")?$(this).css("background-image","none"):"yes"==$(this).data("pattern-overlay-background-image")&&$(this).css("background-image")}),$("*[data-remove-pattern-overlay]").each(function(){"yes"==$(this).data("remove-pattern-overlay")&&$(this).css("background","none")}),$("*[data-bg-color]").each(function(){var a=$(this).data("bg-color");$(this).css("background-color",a)}),$("*[data-bg-color-opacity]").each(function(){var a=$(this).data("bg-color-opacity"),t=$(this).css("background-color").replace("rgb","rgba").replace(")",", "+a+")");$(this).css("background-color",t)}),$("*[data-bg-img]").each(function(){var a=$(this).data("bg-img");$(this).css("background-image","url('"+a+"')")}),$("*[data-parallax-bg-img]").each(function(){var a=$(this).data("parallax-bg-img");$(this).css("background-image","url('./images/files/parallax-bg/"+a+"')")})}


// Custom banner height
$( ".banner-parallax" ).each(function() {
	var customBannerHeight = $( this ).data( "banner-height" ),
		boxContent = $( this ).find( ".row > [class*='col-']" );
	$( this ).css( "min-height" , customBannerHeight );
	$( boxContent ).css( "min-height" , customBannerHeight );
});



// *** Responsive Classes *** //
function responsiveClasses() {
	var jRes = jRespond([
		{
			label: "smallest",
			enter: 0,
			exit: 479
		},{
			label: "handheld",
			enter: 480,
			exit: 767
		},{
			label: "tablet",
			enter: 768,
			exit: 991
		},{
			label: "laptop",
			enter: 992,
			exit: 1199
		},{
			label: "desktop",
			enter: 1200,
			exit: 10000
		}
	]);
	jRes.addFunc([
		{
			breakpoint: "desktop",
			enter: function() { $body.addClass( "device-lg" ); },
			exit: function() { $body.removeClass( "device-lg" ); }
		},{
			breakpoint: "laptop",
			enter: function() { $body.addClass( "device-md" ); },
			exit: function() { $body.removeClass( "device-md" ); }
		},{
			breakpoint: "tablet",
			enter: function() { $body.addClass( "device-sm" ); },
			exit: function() { $body.removeClass( "device-sm" ); }
		},{
			breakpoint: "handheld",
			enter: function() { $body.addClass( "device-xs" ); },
			exit: function() { $body.removeClass( "device-xs" ); }
		},{
			breakpoint: "smallest",
			enter: function() { $body.addClass( "device-xxs" ); },
			exit: function() { $body.removeClass( "device-xxs" ); }
		}
	]);
}


// *** Loading Progress *** //
$("body").waitForImages({finished:function(){setTimeout(function(){$(".lp-content, #loading-progress .logo").css({opacity:0}),$("#loading-progress").addClass("hide-it"),setTimeout(function(){$(".banner-parallax > .bg-element, .banner-parallax > .overlay-pattern").addClass("appeared")},1400)},0)},each:function(a,t,e){var n=Math.floor((a+1)/t*100);$("#lp-counter").animate({$this:n},{duration:150,easing:"",queue:!1,step:function(a){var t=Math.round(a);$("#lp-counter").text(t+"%")}}),$("#lp-bar").animate({width:n+"%"},0)},waitForAll:!0});

// *** Fullscreen Section *** //
function fullscreenSection() {
	$( ".fullscreen, #home-header, #home-banner" ).css( "height", $( window ).height() );
	$( "#banner.fullscreen" ).css( "height", $( window ).height() );
}


// *** RTL Case *** //
var HTMLDir = $( "html" ).css( "direction" ),
	owlRtl;

// If page is RTL
if ( HTMLDir == "rtl" ) { 
	// Owl Carousel
	owlRtl = true 
} else { 
	owlRtl = false 
}


// *** Image Background *** //
function imageBG() {
	$( ".img-bg" ).each(function() {
		var $this = $( this ),
			imgSrc = $this.find( "img" ).attr( "src" );

		if ( $this.parent( ".section-image" ).length ) {
			$this.css( "background-image", "url('" + imgSrc + "')"  );
		} else {
			$this.prepend( "<div class='bg-element'></div>" );
			var bgElement = $this.find( ".bg-element" );
			bgElement.css( "background-image", "url('" + imgSrc + "')"  );
		}
		$this.find( "img" ).css({ "opacity" : 0 , "visibility" : "hidden" });		
	});
}


// *** Stellar Parallax *** //
function parallaxStellar() {
	$(function() {
		if ( $body.hasClass( "device-lg" ) || $body.hasClass( "device-md" ) || $body.hasClass( "device-sm" ) ) {
			$.stellar({
				horizontalScrolling: false, // don't change this option
				// verticalScrolling: false,
				verticalOffset: 0,
		    	responsive: true, // false
			});
        }
	});
}


// *** Fit Videos *** //
function fitVideos() {
	$( "#full-container" ).fitVids();
}


// *** Background Videos *** //
function BGVideoYTPlayer() {
	$(".video-background").each( function() {
		$( this ).YTPlayer({
			mute: false,
			autoPlay: false,
			opacity: 1,
			containment: ".video-background",
			showControls: false,
			startAt: 0,
			addRaster: true,
			showYTLogo: false,
			stopMovieOnBlur: false
		});
	});
}


// *** Lightbox Iframe *** //
function lightboxIframe() {
	$( ".lightbox-iframe" ).magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Image *** //
function lightboxImage() {
	$( ".lightbox-img" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: false
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Lightbox Gallery *** //
function lightboxGallery() {
	$( ".lightbox-gallery" ).magnificPopup({
		type: 'image',
		gallery:{
			enabled: true
		},
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});	
}


// *** Scroll Top Icon *** //
function scrollTopIcon() {
	var windowScroll = $( window ).scrollTop(),
		scrollIcon = $( ".scroll-top-icon" );
	if ( $( window ).scrollTop() > 800 ) {
		scrollIcon.addClass( "show" );
	} else {
		scrollIcon.removeClass( "show" );
	}
}

$( ".scroll-top" ).on( "click" , function(e) {
	e.preventDefault();
    $( "html, body" ).animate({
        scrollTop: 0
    }, 1200, "easeInOutExpo" ); //1200 easeInOutExpo
});


// *** Scroll Progress *** //
function scrollProgress() {
    var docheight = $(document).height();
    var winheight = $(window).height();
    var height = docheight - winheight;
    var scroll = $(document).scrollTop();
    var scrollperc = scroll/(height/100);
    $("#scroll-progress .scroll-progress").width(scrollperc+'%');
    $(".scroll-percent").text(scrollperc.toFixed(0)+'%');	
}


// *** Scroll To Anchor *** //
function scrollToAnchor() {
   	var stickyBar = $( ".header-bar.sticky" ),
   		stickyBarHeight = stickyBar.height(),
	    offsetDifference = ( ! stickyBar ) ? 0 : stickyBarHeight;

    $(  ".scroll-to" ).on( "click", function( e ) {
        e.preventDefault();
        var $anchor = $( this );

        // scroll to specific anchor
        $(  "html, body" ).stop().animate({
            scrollTop: $( $anchor.attr( "href" ) ).offset().top - offsetDifference
        } , 1200 , "easeInOutExpo" );
    });    
}


// *** Banner Parallax Image BG *** //
function bannerParallaxImageBG() {
	var bannerParallax = $( ".banner-parallax" ),
		imgSrc = bannerParallax.children( "img:first-child" ).attr( "src" );

	bannerParallax.prepend( "<div class='bg-element'></div>" );
	var bgElement = bannerParallax.find( "> .bg-element" );
	bgElement.css( "background-image", "url('" + imgSrc + "')"  ).attr( "data-stellar-background-ratio" , 0.2 );
}


// *** Section Parallax Image BG *** //
function sectionParallaxImageBG() {
	$( ".parallax-section" ).each( function() {
		var parallaxSection = $( this ),
			imgSrc = parallaxSection.children( "img:first-child" ).attr( "src" );

		parallaxSection.prepend( "<div class='bg-element'></div>" );
		var bgElement = parallaxSection.find( "> .bg-element" );
		bgElement.css( "background-image", "url('" + imgSrc + "')"  ).attr( "data-stellar-background-ratio" , 0.2 );
	} );
}


// *** Slider Choosing Course *** //
function sliderChoosingCourse() {
	var sliderChoosingCourse = $( ".slider-choosing-course > .owl-carousel" );
	sliderChoosingCourse.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    600 : {
		        items : 2
		    },
		    768 : {
		        items : 2
		    },
		    1024 : {
		        items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Slider Our Instructors *** //
function sliderOurInstructors() {
	var sliderOurInstructors = $( ".slider-our-instructors > .owl-carousel" );
	sliderOurInstructors.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    600 : {
		        items : 2
		    },
		    768 : {
		        items : 2
		    },
		    1024 : {
		        items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Slider Clients *** //
function sliderClients() {
	var sliderClients = $( ".slider-clients > .owl-carousel" );
	sliderClients.owlCarousel({
		items: 6,
		rtl: owlRtl,
		autoplay: 3000,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 3000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: true,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: false, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 2
		    },
		    480 : {
		        items : 3
		    },
		    768 : {
		        items : 4
		    },
		    992 : {
		        items : 5
		    },
		    1200 : {
		        items : 6
		    }
		},
		autoHeight: false,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Slider Testimonials *** //
function sliderTestimonials() {
	var sliderTestimonials = $( ".slider-testimonials > .owl-carousel" );
	sliderTestimonials.owlCarousel({
		// items: 3,
		rtl: owlRtl,
		autoplay: false,
		autoplaySpeed: 500, // Sliding autoplay speed
		autoplayTimeout: 5000, // Autoplay interval timeout.
		dragEndSpeed: 400, // Sliding speed by mouse drag
		autoplayHoverPause: true, // Stop autoplay on mouse hover
		loop: false,
		slideBy: 1, // Number of item are slided for each one transition
		margin: 30, // space between each item. Very useful!
		stagePadding: 0, // This used to see part of left an right items as preview style
		nav: false, // show prev and next buttons
		dots: true, // Show dots navigation
		navText: ["<i class=\"fa fa-angle-left\"></i>","<i class=\"fa fa-angle-right\"></i>"], // prev and next buttons content
		responsive : {
			0 : {
		        items : 1
		    },
		    480 : {
		        items : 1
		    },
		    600 : {
		        items : 2
		    },
		    768 : {
		        items : 2
		    },
		    1024 : {
		        items : 3
		    }
		},
		autoHeight: true,
		autoWidth: false,
		// animateOut: 'goDownOut',
	    // animateIn: 'goDownIn',
		navRewind: true,
		center: false, // It's used to make the carousel start from the centered item
		dotsEach: 1, // Number of items per dot
		dotData: false,
		lazyLoad: false, // img tag needs class="owl-lazy" and data-src="url-to-img" or/and data-src-retina="url-to-highres-img"
		smartSpeed: 600, // Sliding speed when hover next or prev nav
		fluidSpeed: 5000,
		navSpeed: 400,
		// fallbackEasing: "ease-in-out",
		dotsSpeed: 400 // Sliding speed by using dots
	});
}


// *** Scroll To *** //
$(  ".scroll-to" ).on(  "click", function( e ) {
    e.preventDefault();
    var $anchor = $(this);      

    // scroll to specific anchor
    $(  "html, body" ).stop().animate({
        scrollTop: $( $anchor.attr( "href" ) ).offset().top
    } , 1200 , "easeInOutExpo" );
});    


// *** Form CTA Subscribe 2 *** //
var csNotifications = $( ".cs-notifications" );

function formCTASubscribe2() {
	$( "#form-cta-subscribe-2" ).validate({
		// rules
		rules: {
			cs2Name: {
				required: true,
				minlength: 3
			},
			cs2Email: {
				required: true,
				email: true
			},
			cs2Course: {
				required: true
			}
		}
	});

	var errorMsgData = csNotifications.data( "error-msg" ),
		errorMsgDefault = 'Please Follow Error Messages and Complete as Required',
		errorMsg = ( errorMsgData ) ? ( errorMsgData ) : errorMsgDefault;

	// Submit event
	$( "#form-cta-subscribe-2" ).on( "submit" , function( event ) {
	    if ( event.isDefaultPrevented() ) {
		    var errorContent = '<i class="cs-error-icon fa fa-close"></i>' +
		                       errorMsg;
			cs2SubmitMSG(false, errorContent);
	        cs2Error();
	    } else {
	        event.preventDefault();
	        cs2SubmitForm();
	    }
	});
}

function cs2SubmitForm(){
    // Initiate Variables With Form Content
    var name = $( "#cs2Name" ).val();
    var email = $( "#cs2Email" ).val();
    var course = $( "#cs2Course" ).val();

    $.ajax({
        type: "POST",
        url: "./php/cs2-process.php",
        data: "cs2Name=" + name + "&cs2Email=" + email + "&cs2Course=" + course,
        success : function(text){
            if ( text == "success" ){
                cs2Success();
            } else {
                cs2Error();
                cs2SubmitMSG( false, text );
            }
        }
    });
}

function cs2Success(){var i=csNotifications.data("success-msg"),n=i||"Thank you for your submission :)";$("#form-cta-subscribe-2")[0].reset(),cs2SubmitMSG(!0,'<i class="cs-success-icon fa fa-check"></i>'+n),$(".cs-notifications-content").addClass("sent"),csNotifications.css("opacity",0),csNotifications.slideDown(300).animate({opacity:1},300).delay(5e3).slideUp(400),$("#form-cta-subscribe-2").hasClass("redirected")&&setTimeout(function(){window.location.href="thank-you-page.html"},3e3)}function cs2Error(){csNotifications.css("opacity",0),csNotifications.slideDown(300).animate({opacity:1},300),$(".cs-notifications-content").removeClass("sent")}function cs2SubmitMSG(i,n){var s;s="shake animated",csNotifications.delay(300).addClass(s).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),csNotifications.children(".cs-notifications-content").html(n)}

// *** Mailchimp Subscribe Form *** //
$( "#form-cta-subscribe-1" ).ajaxChimp({
    callback: mailchimpCallback,
    url: "https://themeforest.us12.list-manage.com/subscribe/post?u=271ee03ffa4f5e3888d79125e&amp;id=163f4114e2" //Replace this with your own mailchimp post URL.
});

function mailchimpCallback(n){var i=csNotifications;"success"===n.result?($("#form-cta-subscribe-1")[0].reset(),i.children(".cs-notifications-content").html('<i class="cs-success-icon fa fa-check"></i>'+n.msg).addClass("sent shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),i.css("opacity",0),i.slideDown(300).animate({opacity:1},300).delay(8e3).slideUp(400)):"error"===n.result&&(i.children(".cs-notifications-content").html('<i class="cs-error-icon fa fa-close"></i>'+n.msg).removeClass("sent").addClass("bounce animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass("shake bounce animated")}),i.css("opacity",0),i.slideDown(300).animate({opacity:1},300))}


// *** Popup Preview *** //
if ( $( ".popup-preview" ).length ) {
	$( "body" ).append( "<div class='popup-preview-overlay'>" );
}
$( ".popup-btn, .popup-bg, .popup-close" ).on( "click" , function( e ) {
	e.preventDefault();
	$( ".popup-preview" ).toggleClass( "viewed" );
	$( ".popup-preview-overlay" ).toggleClass( "viewed" );
	$( "html" ).toggleClass( "scroll-lock" );
} );


// *** Countdown Timer *** //
(function($) {
    $.fn.countdown = function(options, callback) {

        //custom 'this' selector
        var thisEl = $(this);

        //array of custom settings
        var settings = {
            'date': null,
            'format': null
        };

        //append the settings array to options
        if (options) {
            $.extend(settings, options);
        }

        //main countdown function
        function countdown_proc() {

            var eventDate = Date.parse(settings['date']) / 1000;
            var currentDate = Math.floor($.now() / 1000);

            if (eventDate <= currentDate) {
                callback.call(this);
                clearInterval(interval);
            }

            var seconds = eventDate - currentDate;

            var days = Math.floor(seconds / (60 * 60 * 24)); //calculate the number of days
            seconds -= days * 60 * 60 * 24; //update the seconds variable with no. of days removed

            var hours = Math.floor(seconds / (60 * 60));
            seconds -= hours * 60 * 60; //update the seconds variable with no. of hours removed

            var minutes = Math.floor(seconds / 60);
            seconds -= minutes * 60; //update the seconds variable with no. of minutes removed

            //conditional Ss
            if (days == 1) {
                thisEl.find(".timeRefDays").text("day");
            } else {
                thisEl.find(".timeRefDays").text("days");
            }
            if (hours == 1) {
                thisEl.find(".timeRefHours").text("hour");
            } else {
                thisEl.find(".timeRefHours").text("hours");
            }
            if (minutes == 1) {
                thisEl.find(".timeRefMinutes").text("minute");
            } else {
                thisEl.find(".timeRefMinutes").text("minutes");
            }
            if (seconds == 1) {
                thisEl.find(".timeRefSeconds").text("second");
            } else {
                thisEl.find(".timeRefSeconds").text("seconds");
            }

            //logic for the two_digits ON setting
            if (settings['format'] == "on") {
                days = (String(days).length >= 2) ? days : "0" + days;
                hours = (String(hours).length >= 2) ? hours : "0" + hours;
                minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
            }

            //update the countdown's html values.
            if (!isNaN(eventDate)) {
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds);
            } else {
                alert("Invalid date. Here's an example: 12 Tuesday 2016 17:30:00");
                clearInterval(interval);
            }
        }

        //run the function
        countdown_proc();

        //loop the function
        var interval = setInterval(countdown_proc, 1000);

    }
})(jQuery);
  
var get_date = $('.countdown').data('event-date');

if (get_date) {
    $(".countdown").countdown({
        date: get_date,
        /*Change date and time in HTML data-event-date attribute */
        format: "on"
    },function(){
        console.log('event ended')
    });
}

} )( jQuery );


function convertHex( hex , opacity ){
	// "use strict";
	// var r, g, b, result;
    hex = hex.replace( '#' , '' );
    r = parseInt( hex.substring( 0 , 2 ) , 16 );
    g = parseInt( hex.substring( 2 , 4 ) , 16 );
    b = parseInt( hex.substring( 4 , 6 ) , 16 );

    result = 'rgba('+r+', '+g+', '+b+', '+opacity+')';
    return result;
}
