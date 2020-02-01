// $('.sl').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     // arrows: false,
//     dots: true,
// });
// $('.sl').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear',
//     arrows: false,
// });
$(document).ready(function () {
    $('.sl').slick({
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: false,
        verticalSwiping: true,
        vertical: true,
        dots: true
    });
});
$(document).ready(function () {

    $('.autoplay').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: true,
        adaptiveHeight: false,
        responsive: [{
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 698,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    });
});
// $(document).ready(function () {

//     $("a[href^='#']").click(function () {
//         elementClick = $(this).attr("href");
//         destination = $(elementClick).offset().top;
//         $("body,html").animate({
//             scrollTop: destination
//         }, 800);
//     });

//     $('.sl').slick({
//         arrows: false,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         verticalSwiping: true,
//         vertical: true,
//         dots: true
//     });

// });