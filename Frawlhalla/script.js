function toggleDropdown() {
    dropdownContent = $('.dropdown-content')

    if (dropdownContent.css('display') === 'none')
        dropdownContent.css({ 'display': 'block' })
    else
        dropdownContent.css({ 'display': 'none' })
}

var slideIndex = 1
var SlideId = "slide-1"
showSlides(1, 0);

function plusSlides(a, b) {
    showSlides(slideIndex += a, b);
}

function showSlides(a, b) {
    var i;
    var x = document.getElementsByClassName(SlideId)

    if (a > x.length) {
        slideIndex = 1
    }

    if (a < 1) {
        slideIndex = x.length
    }

    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"
    }
    x[slideIndex - 1].style.display = "block"
}