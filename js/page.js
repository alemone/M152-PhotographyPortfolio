var HDpics = [];

//Photoswipe
var pswpElement = document.querySelectorAll('.pswp')[0];

//Define Options
var options = {
    index: 0
};

//
//FunctionCallsForImageArray
//

//Compare1
generateImgArray("images/highres/pic01_a.jpg", 1920, 1442, "");
generateImgArray("images/highres/pic01_b.jpg", 1920, 1442, "");
//Compare2
generateImgArray("images/highres/pic02_a.jpg", 1920, 1442, "");
generateImgArray("images/highres/pic02_b.jpg", 1920, 1442, "");
//Compare3
generateImgArray("images/highres/pic03_a.jpg", 1920, 1442, "");
generateImgArray("images/highres/pic03_b.jpg", 1920, 1442, "");
//Compare4
generateImgArray("images/highres/pic04_a.jpg", 1920, 1442, "");
generateImgArray("images/highres/pic04_b.jpg", 1920, 1442, "");
//Compare5
generateImgArray("images/highres/pic05_a.jpg", 1920, 1442, "");
generateImgArray("images/highres/pic05_b.jpg", 1920, 1442, "");

// -----------------------------------------------------------------------------
//INIT
//TWENTY TWENTY
$(function(){
    $(".compare1, .compare2, .compare3, .compare4, .compare5").twentytwenty({
        default_offset_pct: 0.1, // How much of the before image is visible when the page loads
        orientation: 'horizontal',
        before_label: 'Vorher',
        after_label: 'Nachher',
        no_overlay: false //Do not show the overlay with before and after
    });
});


//EVENTS
//CLICK-EVENTS
$(".compare1").click(function() {
    showGallery(0, 2);
});
$(".compare2").click(function() {
    showGallery(2, 4);
});
$(".compare3").click(function() {
    showGallery(4, 6);
});
$(".compare4").click(function() {
    showGallery(6, 8);
});
$(".compare5").click(function() {
    showGallery(8, 10);
});


//FUNCTIONS
// Initializes and opens PhotoSwipe
function showGallery(von, bis = 0){
    if(bis == 0)
        var items = HDpics.slice(von);
    else
        var items = HDpics.slice(von, bis);

    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}
//Generates the image Array for Photowswipe
function generateImgArray(source, width, height, caption){
    HDpics[HDpics.length] =
    {
        src: source,
        w: width,
        h: height,
        title: caption
    };
}
