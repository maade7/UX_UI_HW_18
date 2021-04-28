


function main() {


(function () {
   'use strict';

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

	
    // Show Menu on Book
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 800;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

	// Hide nav on click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });


    });
	

    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
        effect: 'slideDown',
        keyboardNav: true,
    });


}());


}
main();


$(document).ready(function () {
    $('.vp-center').css({'display':'block'});
});

$('#myModal').modal('handleUpdate');

$(".img-responsive").on("click", function() {
    // $('#video').attr('src','img/clear.png');
    // $('#video').attr('src','img/Loading_icon.gif');

    if ($(this).attr("id")) {

        var vimeoLink = $(this).attr("id");

        // $('#video').attr('name','vimeoplayer');
        $('#video').attr('src','//player.vimeo.com/video/'+ vimeoLink +'?api=1&player_id=vimeoplayer&title=0&amp;byline=0&amp;portrait=0');
        document.getElementById("video").style.backgroundColor = "transparent";
        // document.getElementById("video").style.height = "30vw";
        $('#video').addClass('iframe-video');
        // document.getElementById("video").style.maxHeight = "70vh";
        $('#link').text('');
        $('#link').attr('href','#');
        $('.modal').modal('show');
        var iframe = document.querySelector('iframe');
        var player = new Vimeo.Player(iframe);
        $('.modal').on('shown.bs.modal', function () {
            player.play();
            // console.log("play");
        });
    }
    if ($(this).attr("data")) {
        // $('#video').attr('src','img/clear.png');
        var webLink = $(this).attr("data");
        // $('#video').attr('name','');
        $('#video').attr('src',webLink);
        document.getElementById("video").style.backgroundColor = "transparent";
        // document.getElementById("video").style.height = "calc(100vh - 100px)";
        $('#video').addClass('iframe-website');
        // document.getElementById("video").style.maxHeight = "calc(100vh - 100px)";
        $('#link').text('OPEN IN NEW WINDOW');
        $('#link').attr("href", webLink);
        $('.modal').modal('show');
    }
    if ($(this).attr("data-2")) {
        // $('#video').attr('src','img/clear.png');
        var doc = $(this).attr("data-2");
        // $('#video').attr('name','');
        $('#video').attr('src',doc);
        document.getElementById("video").style.backgroundColor = "transparent";
        // document.getElementById("video").style.height = "60vw";
        $('#video').addClass('iframe-ux');
        // document.getElementById("video").style.maxHeight = "70vh";
        $('#link').text('OPEN IN NEW WINDOW');
        $('#link').attr('href',doc);
        $('.modal').modal('show');
    }
});

// $(window).on('resize', function(){
//     $('#myModal').modal('handleUpdate');
// });

// var iframe = document.querySelector('iframe');
// var player = new Vimeo.Player(iframe);
// $('.modal').on('shown.bs.modal', function () {
//     player.play();
//     console.log("play");
// });

// $('.close').on('click', function () {
//     $('#video').attr('src','');
//     // console.log("click");
// });

// $('#video').attr('src','img/preloader.gif');

$('.modal').on('hidden.bs.modal', function () {
    // player.pause();
    $('#video').attr('src','');
    $('#video').removeClass('iframe-ux');
    $('#video').removeClass('iframe-website');
    $('#video').removeClass('iframe-video');
    // $("#video").css({"mix-blend-mode": "multiply"});
    // console.log("done");
});






// Add scrollspy to <body>
$('body').scrollspy({target: ".nav", offset: 50});

// Add smooth scrolling on all links inside the navbar
$("#myNavbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });

    } // End if

});

// window.onresize = () => { window.location.reload()}

// var previousOrientation = window.orientation;
// var checkOrientation = function(){
//     if(window.orientation !== previousOrientation){
//         previousOrientation = window.orientation;
//         // orientation changed, do your magic here
//     }
// };
//
// window.addEventListener("resize", checkOrientation, false);
// window.addEventListener("orientationchange", checkOrientation, false);
//
// // (optional) Android doesn't always fire orientationChange on 180 degree turns
// setInterval(checkOrientation, 2000);


