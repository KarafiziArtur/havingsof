
// Preloader
$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
});


$(document).ready(function() {
    $("body").removeClass("transition_disabled");

    $(".menu_btn").click(function(){
        $("#navbar").slideToggle();
    });
    
    $(".proc-button, .bottom-button").click(function(){
        setTimeout (function() {
        $(".order-consult").addClass("wow pulse");
        }, 1000);
        setTimeout (function() {
            $(".order-consult").removeClass("wow pulse animated");
        }, 5000);
    });

    $('body').scrollspy({
        target: '.navbar-fixed-top'
    })

    $(".profit-gallery").colorbox({
        closeButton: true,
        scrolling: false,
        width: '90%',
        maxWidth: '1000px',
    });
    $(".profit-gallery-price").colorbox({
        closeButton: true,
        scrolling: false,
        width: '90%',
        maxWidth: '580px',
    });

    $('.box-6').popover({
        trigger: 'hover',
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3></div>',
    });
    $('.top-box').popover({
        trigger: 'hover',
        html: true,
    });
    
    
    
    
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1000, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    //Ajax отправка формы
    $("#order").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $("#order").serialize()
        }).done(function() {
            $(".form-container, .order-title").remove();
            $("#order").append("<h3>Спасибо за заявку! <br />Вы поставлены в очередь на звонок.</h3>")
        });
        return false;
    });


});