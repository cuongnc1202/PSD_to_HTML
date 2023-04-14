jQuery(document).ready(function ($) {
    $('#lastestWorks').owlCarousel({
        items: 4,
        loop: true,
        margin: 40,
        nav: true,
        responsive: {
            0: {
                items: 2
            },
            640: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            }
        }
    });
    $('#banner').owlCarousel({
        items: 1,
        loop: true
    });
});