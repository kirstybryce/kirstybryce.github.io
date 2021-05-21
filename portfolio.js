// window.onload is typically needed to tell JavaScript
// to wait until the page is fully loaded before doing
// the function its been given
// This is important because things like the button
// need to load before we can attach functions to it
window.onload = function() {
    // Getting the back to top button, and keeping it in a variable
    const backToTopButton = document.getElementById("back-to-top");

    // onclick to define what to do when the button is clicked
    backToTopButton.onclick = function() {
        // Using a slightly different way of `scrollTo`
        // Using these options allows us to define position
        // and type of scrolling
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    // Add an "event listener", in this case "scroll"
    // When a "scroll" is performed, it will do the
    // given function
    window.addEventListener("scroll", function(event) {

        // scrollY refers to the amount of
        // vertical scrolling performed in pixels
        if(this.scrollY > 250) {
            // Remove the "hide" class when
            // 250 or more has been scrolled
            backToTopButton.classList.remove("hide");
        } else {
            // Add the "hide" class when less
            // than 250 has been scrolled
            backToTopButton.classList.add("hide");
        }
    });
};

function openLinksMenu() {
    const openMenu = document.getElementById('inner-menu');
    openMenu.classList.toggle("hide-contents");
};

window.addEventListener( 'load', function() {
    flkty.resize();
  });