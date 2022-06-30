$(document).ready(function () {

    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.header__navbar').toggleClass('nav-toggle');
    })

    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.header__navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 30) {
            $('.header').addClass('header-active');
        } else {
            $('.header').removeClass('header-active');
        }

        $('section').each(function () {
            var top = $(window).scrollTop();
            var id = $(this).attr('id');
            var height = $(this).height();
            var top = $(this).offset().top - 200;
            if (top >= offset && top < height + offset) {
                $('.header__navbar ul li a').removeClass('header__navbar--active');
                $('.header__navbar').find('[href="#' + id + '"]').addClass('header__navbar--active');
            }
        });

    });

});