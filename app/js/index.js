
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

                var marker1 = new google.maps.Marker({
                        position: new google.maps.LatLng(49.832402, 23.966342),
                        map: map,
                        title: 'Офіс та склад'
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