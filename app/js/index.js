

$(document).ready(function() {
    $("#owl-demo").owlCarousel({

        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        loop: true
    });
});

$(document).ready(function() {
    $('.bxslider').bxSlider({
        slideWidth: 180,
        minSlides: 3,
        maxSlides: 6,
        slideMargin: 10,        
        captions: true
    });
});

$(document).ready(function($) {
    $("#show-menu").click(function() {
        $(".hide-menu").toggle();
    });
});

$(document).ready(function($) {
    $("#show-gallary-menu").click(function() {
        $(".gallary-nav").toggle();
    });
});


jQuery(window).resize(function () {
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    if(width>820){
         $(document).ready(function(){
         $(".hide-menu").hide();
         });
     }    
});


jQuery(window).resize(function () {
      var width = jQuery(window).width();
      var height = jQuery(window).height();
    if(width<992){
        
        $(".gallary-nav li").click(function() {
              $(".gallary-nav").hide();
          });
    }
    
       else {
      
       
              $(".gallary-nav").show();
          
       }

 });


$(document).ready(function(){
          $(".hide-menu li").click(function() {
              $(".hide-menu").hide();
          });
    
});
