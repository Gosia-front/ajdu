
/* GP 2017 */

$(document).ready(function(){
    var elementZTlem = $('.header');
    $(window).on("load scroll",
        function() {
            var aktualnyScrollOkna = $(window).scrollTop();
            var wektorZmianyTla = aktualnyScrollOkna *(0.8) ;
            elementZTlem.css('background-position-y', wektorZmianyTla - 280);
        }
    )

});


