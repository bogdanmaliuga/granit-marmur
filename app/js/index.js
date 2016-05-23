$(document).ready(function() {
    // execute
    (function() {
        // map options
        var options = {
            zoom: 12,
            center: new google.maps.LatLng(49.840745, 23.990453),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: false
        };

        // init map
        var map = new google.maps.Map(document.getElementById('googleMap'), options);

        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(49.832402, 23.966342),
            map: map,
            title: 'Офіс, виробництво та склад'
        });

        (function(marker) {
            // add click event
            google.maps.event.addListener(marker, 'click', function() {
                infowindow = new google.maps.InfoWindow({
                    content: '(Офіс, виробництво та склад) м.Львів, вул.Городоцька 174/20'
                });
                infowindow.open(map, marker1);
            });
        })(marker1);


        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(49.840371, 24.012276),
            map: map,
            title: 'Магазин'
        });

        (function(marker) {
            // add click event
            google.maps.event.addListener(marker, 'click', function() {
                infowindow = new google.maps.InfoWindow({
                    content: '(Магазин) м.Львів, вул.Городоцька 44'
                });
                infowindow.open(map, marker2);
            });
        })(marker2);


    })();
});


$(document).ready(function() {
    $("#owl-demo").owlCarousel({

        autoplay: true,
        autoplayTimeout: 4000,
        items: 1,
        loop: true
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






$(document).ready(function() {
    $('.bxslider').bxSlider({
        slideWidth: 180,
        minSlides: 3,
        maxSlides: 6,
        slideMargin: 10,
        
        captions: true
    });
});


$(document).ready(function() {
    $("#show-menu").click(function() {
        $(".hide-menu").toggle();
    });
});

$(document).ready(function($) {
    $("#show-gallary-menu").click(function() {
        $(".gallary-nav").toggle();
    });
});

