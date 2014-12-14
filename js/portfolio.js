/*  Carousel Slider Function for mobile
*********************************************/

$(document).ready(function() {  
   $("#AppCarousel").swiperight(function() {  
      $("#AppCarousel").carousel('prev');  
    });  
   $("#AppCarousel").swipeleft(function() {  
      $("#AppCarousel").carousel('next');  
   });  
});  
