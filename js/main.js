
// Preloader when onload
$(window).on("load", function() {
    $(".preloader").fadeOut(400, "swing")
})


$(document).ready(function() {

    // ScrollIT JS
    $.scrollIt({
        topOffset: -70  
    });

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
        // autoplay: true,
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
    });

    $('.screenshots-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
        dots: true, 
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            575:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1220:{
                items:5,
            }
        }
    });

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
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
    });

    $('.teams-carousel').owlCarousel({
        loop:true,
        margin:0,
        // autoplay: true,
        dots: true, 
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            640:{
                items:2,
            },
            992:{
                items:3,
            },
        }
    });


    // Navbar Collapse
    $(".nav-link").on("click", function() {
        $(".navbar-collapse").collapse("hide");
    })

    // Toogle Theme --- light mode and dark mode 
    function toggleClassTheme() {
        if(localStorage.getItem("landing-page-theme") !== null) {
            if(localStorage.getItem("landing-page-theme") === "dark") {
                $("body").addClass("dark");
            }
            else {
                $("body").removeClass("dark");
            }
        }
        updateIconTheme();
    }
    toggleClassTheme();

    $(".toggle-theme").on("click", function() {
        $("body").toggleClass("dark");

        if($("body").hasClass("dark")) {
            localStorage.setItem("landing-page-theme", "dark");
        }
        else {
            localStorage.setItem("landing-page-theme", "light");
        }
        updateIconTheme();
    })

    function updateIconTheme() {
        if($("body").hasClass("dark")) {
            $(".toggle-theme i").addClass("fa-sun");
            $(".toggle-theme i").removeClass("fa-moon");
        }
        else {
            $(".toggle-theme i").addClass("fa-moon");
            $(".toggle-theme i").removeClass("fa-sun");
        }
    }
})