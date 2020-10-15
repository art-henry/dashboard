;(function () {

    // sidebar mobile

    var menuBtn = $('.menu-btn');
    var body = $('body');
    var mobileSidebarClass = '_mobileSidebar';
    var mobileBreakPoint = 1920;
    var openInMobileClass = '_openInMobile';


    menuBtn.on('click', function (e) {

        var width = $(window).width();
        body.toggleClass(mobileSidebarClass);
        if(width < mobileBreakPoint) {
            body.toggleClass(openInMobileClass);
        }

    });


    $(window).on('resize load', function (e) {
        var width = $(this).width();

        if(width < mobileBreakPoint && !body.hasClass(openInMobileClass)){
            body.addClass(mobileSidebarClass);
        }
        else if(width > mobileBreakPoint){
            body.removeClass(mobileSidebarClass);
            body.removeClass(openInMobileClass);
        }
    })

    // loader hide
    var  loader = $('#loading');

    $(window).on('load', function (e) {
        loader.addClass('hide');
    })

})();

// modal init

var modalBtns = $('[data-modal]');

modalBtns.on('click', function (event) {
    event.prventDefault();

    var target = $(this).attr('data-modal');

    $(target).bPopup({
        closeClass: 'close-modal-btn'
    });

});