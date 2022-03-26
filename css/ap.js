$(function() {
    let intro = $("#intro");
    let header = $("#header");
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();

    headerScrol();

    $(window).on("scroll resize", function() {
        headerScrol();

    });

    function headerScrol() {
        scrollTop = $(window).scrollTop();
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        if( scrollTop >= (introH - (headerH / 0.3) ) ) {
            header.addClass("header-dark");

        } else {
            header.removeClass("header-dark");
        }
    };


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        headerH = header.innerHeight();
        let elementId = $(this).data("scroll");
        let elementIdOffset = $(elementId).offset().top;
        $("html, body").animate({scrollTop: elementIdOffset - headerH

        }, 500);
    });

});





/* */












