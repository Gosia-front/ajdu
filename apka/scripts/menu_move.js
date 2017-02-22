
/* GP 2017 */

unction initMenuToggle() {
    $(".navbar-toggle").click(function () {
        $("#mainNavbar").toggle();
    });

    $(".nav li").click(function () {
        $(".nav").children().removeClass("active");
        $(this).toggleClass("active")
    });
}

function initMenuScroll(){
    $('body').scrollspy({target: ".navbar", offset: 50});
    $(".navbar a, .back a, .action-call").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
}