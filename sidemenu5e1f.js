(function ($) {
    var size;

    //SMALLER HEADER WHEN SCROLL PAGE
    function smallerMenu() {
        var sc = $(window).scrollTop();
        if (sc > 40) {
            $('#header-sroll').addClass('small');
        } else {
            $('#header-sroll').removeClass('small');
        }
    }

    // VERIFY WINDOW SIZE
    function windowSize() {
        size = $(document).width();
        if (size >= 991) {
            $('body').removeClass('open-menu');
            $('.hamburger-menu .bar').removeClass('animate');
        }
    };

    // ESC BUTTON ACTION
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            $('.bar').removeClass('animate');
            $('body').removeClass('open-menu');
            $('#page-content .desk-menu .menu-container .menu .menu-item-has-children a ul').each(function (index) {
                $(this).removeClass('open-sub');
            });
        }
    });

    $('#cd-primary-nav > li').hover(function () {
        $whidt_item = $(this).width();
        $whidt_item = $whidt_item - 8;

        $prevEl = $(this).prev('li');
        $preWidth = $(this).prev('li').width();
        var pos = $(this).position();
        pos = pos.left + 4;
        $('#page-content .desk-menu .menu-container .menu>li.line').css({
            width: $whidt_item,
            left: pos,
            opacity: 1
        });
    });

    // ANIMATE HAMBURGER MENU
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu .bar').toggleClass('animate');
        if ($('body').hasClass('open-menu')) {
            $('body').removeClass('open-menu');
        } else {
            $('body').toggleClass('open-menu');
        }
    });

    // RESPONSIVE MENU NAVIGATION
    $('#page-content .desk-menu .menu-container .menu .menu-item-has-children > a').on('click', function (e) {
        e.preventDefault();
        console.log('hello');
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('open-sub');
    });

    // CLICK FUNCTION BACK MENU RESPONSIVE
    $('#page-content .desk-menu .menu-container .menu .menu-item-has-children ul .back').on('click', function (e) {
        e.preventDefault();
        $(this).parent('ul').removeClass('open-sub');
    });

    $('body .over-menu').on('click', function () {
        $('body').removeClass('open-menu');
        $('.bar').removeClass('animate');
    });

    $(document).ready(function () {
        windowSize();
    });

    $(window).scroll(function () {
        smallerMenu();
    });

    $(window).resize(function () {
        windowSize();
    });

})(jQuery);