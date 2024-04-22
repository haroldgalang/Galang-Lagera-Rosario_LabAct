$(document).ready(function () {
    $('.slider').slider({
        height: 450,
        indicators: false,
        intervals: 6000
    });
    $('.dropdown-trigger').dropdown();
});

document.addEventListener("DOMContentLoaded", function () {
    window.next = function () {
        var elem = document.querySelector(".slider");
        var instance = M.Slider.getInstance(elem);

        instance.next();
    }
});