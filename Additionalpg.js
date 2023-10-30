var slideIndex = 0;
var timer1, timer;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");

function showSlides() {//called by automatic slideshow
    clearTimeout(timer1);//clear previously set timer 

    //clear styles
    for (var i = 0; i < slides.length; i++)
        slides[i].style.display = "none";           
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");
    
    //reset slideIndex
    if (++slideIndex == slides.length)
        slideIndex = 0;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";
    
    //reset timer
    timer1 = setTimeout(showSlides, 3000);
}

function showSlide(n) {//called when user manually choose particular slide
    //clear previously set timers
    clearTimeout(timer1);
    clearTimeout(timer);

    //clear styles
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");

    //reset slideIndex
    if (n == slides.length)
        slideIndex = 0; 
    if (n < 0)
        slideIndex = slides.length;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";

    //reset timer for automatic slideshow
    timer = setTimeout(showSlides, 10000);
}
function showSlide(n) {//called when user manually choose particular slide
    //clear previously set timers
    clearTimeout(timer1);
    clearTimeout(timer);

    //clear styles
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");

    //reset slideIndex
    if (n == slides.length)
        slideIndex = 0; 
    if (n < 0)
        slideIndex = slides.length;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";

    //reset timer for automatic slideshow
    timer = setTimeout(showSlides, 10000);
}
function showSlide(n) {//called when user manually choose particular slide
    //clear previously set timers
    clearTimeout(timer1);
    clearTimeout(timer);

    //clear styles
    for (var i = 0; i < slides.length; i++) 
        slides[i].style.display = "none";
    for (var i = 0; i < dots.length; i++) 
        dots[i].className = dots[i].className.replace(" active", "");

    //reset slideIndex
    if (n == slides.length)
        slideIndex = 0; 
    if (n < 0)
        slideIndex = slides.length;

    //reset styles
    slides[slideIndex].style.display = "block"; 
    dots[slideIndex].className += " active";

    //reset timer for automatic slideshow
    timer = setTimeout(showSlides, 10000);
}





    // let appendNumber = 6;
    // let prependNumber = 1;
    // const swiper = new Swiper('.swiper', {
    //   slidesPerView: 3,
    //   centeredSlides: true,
    //   spaceBetween: 30,
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'fraction',
    //   },
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   virtual: {
    //     slides: (function () {
    //       const slides = [];
    //       for (var i = 0; i < 6; i += 1) {
    //         slides.push('Slide ' + (i + 1));
    //       }
    //       return slides;
    //     })(),
    //   },
    // });

    // document
    //   .querySelector('.slide-1')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(0, 0);
    //   });

    // document
    //   .querySelector('.slide-3')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(2, 0);
    //   });

    // document
    //   .querySelector('.slide-500')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.slideTo(5, 0);
    //   });

    // document
    //   .querySelector('.prepend-2-slides')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.virtual.prependSlide([
    //       'Slide ' + --prependNumber,
    //       'Slide ' + --prependNumber,
    //     ]);
    //   });

    // document
    //   .querySelector('.append-slide')
    //   .addEventListener('click', function (e) {
    //     e.preventDefault();
    //     swiper.virtual.appendSlide('Slide ' + ++appendNumber);
    //   });
  