$(document).ready(function(){

    /* Navigation Bar */
    $('#about-header').hover(function() {
        $('#about').show();
    }, function() {
        $('#about').hide();
    });
    $('.dropdownitem').hover(function() {
        $(this).css({'background-color': '#555'});
    }, function() {
        $(this).css({'background-color': '#333'});
    });

    /* Links*/
    $('.linkheader').hover(function() {
        $(this).css({'color': '#7fa958'});
    }, function() {
        $(this).css({'color': '#629632'});
    });
    $('.greylinkheader').hover(function() {
        $(this).css('color', '#333');
    }, function() {
        $(this).css('color', 'grey');
    });
    $('.link').hover(function() {
        $(this).css({'color': 'grey'});
    }, function() {
        $(this).css({'color': 'black'});
    });

    /* Footer */
    $('.credit').hover(function() {
        $(this).css({'color': '#7fa958'});
    }, function() {
        $(this).css({'color': '#629632'});
    });
    $('.creditgrey').hover(function() {
        $(this).css({'color': 'black'});
    }, function() {
        $(this).css({'color': 'grey'});
    });

    
    /* Events */
    $('.event-name').hover(function() {
        $(this).css({'color': 'grey'});
    }, function() {
        $(this).css({'color': 'black'});
    });
    $('.tab').click(function() {
        $('.tab').css({'color': 'grey'});
        $(this).css({'color': 'white'});
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
