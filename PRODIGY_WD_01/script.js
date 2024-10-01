// Change navbar background on scroll
window.onscroll = function() {
    var navbar = document.getElementById("navbar");

    if (window.pageYOffset > 100) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
