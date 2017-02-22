/* GP 2017 */


var timer;

$(document).ready(function () {
    var biezacy =  $('.galleryItem:first');
    var animuj = function () {
        var nastepny = biezacy.next();
        if (nastepny.length === 0) {
            nastepny = $('.galleryItem:first');
        }
        
        biezacy.removeClass("visible");
        nastepny.addClass("visible");
        
        biezacy = nastepny;
        timer = setTimeout(animuj, 4000);
    };
    animuj();
});