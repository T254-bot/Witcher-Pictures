var carouselWidth = ('.carousel-inner')[0].scrollWidth;
var imgWidth = ('carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    scrollPosition = scrollPosition + imgWidth;
    $('.carousel-inner').animate({scrollPosition},
    600);
})