$('#mainbtn2').on('click', () => {
    $('.links').toggleClass('links-open');
});

$(window).on('scroll', () => {
    if ($(window).scrollTop()) {
        $('header').addClass('faded')
    }
    else {
        $('header').removeClass('faded')
    }
});