$(document).ready(function(){

    /* Events */
    $('.tab').hover(function() {
        $('.tab').removeClass('tabhover');
        $(this).addClass('tabhover');
    });
    $('.tab').click(function() {
        $('.tab').removeClass('tabcurrent');
        $(this).addClass('tabcurrent');
    });
    $('#panels a').click(function(event) {
        var panel_id = $(this).attr('href');
        $('.panel').hide();
        event.preventDefault();
        $(panel_id).show();
    });

    /* Officers */
    $('.photoone').hover(function() {
        $(this).next().css({'z-index': '3'});
        $(this).next().fadeIn(400);
    }, function() {
    });
    $('.phototwo').hover(function() {
    }, function() {
        $(this).stop().fadeOut(400);
    });

});
