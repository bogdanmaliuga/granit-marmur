
 $(document).ready(function() {
            // execute
            (function() {
                // map options
                var options = {
                    zoom: 13,
                    center: new google.maps.LatLng(49.840745, 23.990453), 
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    mapTypeControl: false
                };

                // init map
                var map = new google.maps.Map(document.getElementById('googleMap'), options);
                var image = {
    url: '../img/kitchen2.jpg',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(50, 50),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
                var marker1 = new google.maps.Marker({
                        position: new google.maps.LatLng(49.832402, 23.966342),
                        map: map,
                        title: 'Офіс та склад '+'../img/kitchen2.jpg',
                        icon:image
                    });

                (function(marker) {
                        // add click event
                        google.maps.event.addListener(marker, 'click', function() {
                            infowindow = new google.maps.InfoWindow({
                                content: 'Hello, World!!'
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
                                content: 'Hello, World!!'
                            });
                            infowindow.open(map, marker2);
                        });
                    })(marker2);
                                  
                
            })();
        });


$(document).ready(function() {
 $("#owl-demo").owlCarousel({
       
        autoplay: true,
        autoplayTimeout: 5500,
        items: 1,                
        loop: true       
 });
 $(".but").click(function(){
    $(".nav li").slideToggle();
 });
});

$(document).ready(function(){
  $('.bxslider').bxSlider({slideWidth: 180,
    minSlides: 5,
    maxSlides: 6,
    slideMargin: 10});
});