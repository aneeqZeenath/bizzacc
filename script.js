/*Initialize the plugin to generate a basic slider*/
$('#box').boxSlider();

/* Change the default transition effect.

scrollVert3d (default)
scrollHorz3d
tile3d
tile
scrollVert
scrollHorz
blindLeft
blindDown
fade
 */
$('#box').boxSlider({
    effect:'scrollVert3d'
});


/* Determine whether or not to automatically transition between these slides. Default: false.*/
$('#box').boxSlider({
    auto<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>: true,
pauseOnHover: true
});


/* Determine whether or not to automatically resize the slider to fit the screen width. Default: true. */
$('#box').boxSlider({
    responsive: true
});


/* Config the transition effect.*/
$('#box').boxSlider({
    speed: 800,
    timeout: 5000,
    perspective: 1000
});

/* API methods.*/
// go to slide 2
$('#box').boxSlider('showSlide', 1);

// go to the next slide
$('#content-box').boxSlider('next');

// back to the previous slide
$('#content-box').boxSlider('prev');

// play/pause the slider
$('#box').boxSlider('playPause');

// get/set an option
$('#content-box').boxSlider('option', 'speed');
$('#content-box').boxSlider('option', 'speed', 2000);

// destroy the slider
$('#content-box').boxSlider('destroy');

