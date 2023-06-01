

$(document).ready(function() {

    /* ----------------- Navbar Shrink ----------------- */
    $(window).on("scroll", function() {
        if($(this).scrollTop() > 60) {
            $(".navbar").addClass("navbar-shrink");
        }
        else {
            $(".navbar").removeClass("navbar-shrink");
        }
    });

    /* ----------------- Video Popup ----------------- */
    const videoSrc = $(".iframe-box #play-1").attr("src");
    $(".video-btn-play, .video-popup").on("click", function() {
        if($(".video-popup").hasClass("open")) {
            $(".video-popup").removeClass("open");
            $(".iframe-box #play-1").attr("src", "");
        }
        else {
            $(".video-popup").addClass("open");
            if($(".iframe-box #play-1").attr("src") === "") {
                $(".iframe-box #play-1").attr("src", videoSrc);
            }
        }
    });

    /* ----------------- Owl Carousel JS ----------------- */
    $('.features-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }
    })
    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        dots: true, 
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1220:{
                items:4,
            }
        }
    })
    $('.teams-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay: true,
        dots: true, 
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
        }
    })
})