//bootstrap init
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
// tabs
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
});

// slick carousel init

$(document).ready(function(){
    $('.slides').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1
    });

    // scrollbar init
    $('.scrollbar-inner').scrollbar();
    $(window).on('resize', function(){
        $('.scrollbar-inner').scrollbar();
    })

});



// dark mode toggle


$('#toggle-mode').on('change', function(){
    if($(this).is(':checked')){
        $('body').addClass('night-mode');
        $('.fa-moon').addClass('active-mode-icon');
        $('.fa-sun').removeClass('active-mode-icon');
    } else {
        $('body').removeClass('night-mode');
        $('.fa-moon').removeClass('active-mode-icon');
        $('.fa-sun').addClass('active-mode-icon');
    }


});





