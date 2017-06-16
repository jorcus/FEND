var map;

function MapError() {
    "use strict";
    alert('A function is triggered if an error occurs when loading the map, please contact our developer kiang.ng@hotmail.com');
}

function initialize() {
    "use strict";
    var mapSettings = {
        center: {
            lat: 3.08,
            lng: 101.6
        },
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: true,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        scaleControl: true,
        streetViewControl: true,
        streetViewControlOptions: {
            position: google.maps.ControlPosition.LEFT_CENTER
        },
        optimized: false,
        styles: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 13
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#144b53"
            }, {
                "lightness": 14
            }, {
                "weight": 1.4
            }]
        }, {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [{
                "color": "#08304b"
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#0c4152"
            }, {
                "lightness": 5
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#0b434f"
            }, {
                "lightness": 25
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#0b3d51"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }]
        }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "color": "#146474"
            }]
        }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#021019"
            }]
        }]
    };


    map = new google.maps.Map(document.getElementById('map'), mapSettings);


    var MenuControlDiv = document.createElement('div');
    var MenuControl = new Control(MenuControlDiv, map);

    MenuControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(MenuControlDiv);

    // To display the filter bar
    var input = document.getElementById("input");
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);

    setMarkers(markers);
    direction();
    AllMap();


}

function Control(controlDiv, map) {
    "use strict";
    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontSize = '14px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '10px';
    controlText.style.paddingRight = '10px';
    controlText.innerHTML = 'Map List';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
        $("#list-toggle").toggle();
    });

}

function direction() {
    "use strict";
    // init directions service
    var dirService = new google.maps.DirectionsService();
    var dirRenderer = new google.maps.DirectionsRenderer();
    dirRenderer.setMap(map);

    // highlight a street
    var request = {
        origin: "3.146786, 101.711304",
        destination: "3.0437283, 101.44657860000007",
        //waypoints: [{location:"48.12449,11.5536"}, {location:"48.12515,11.5569"}],
        travelMode: google.maps.TravelMode.DRIVING
    };
    dirService.route(request, function(result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
            dirRenderer.setDirections(result);
        }
    });
}

function AllMap() {
    "use strict";
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].bool === true) {
            markers[i].holdMarker.setMap(map);
        } else {
            markers[i].holdMarker.setMap(null);
        }
    }
}

var markers = [{
    title: "Mid Valley City",
    lat: 3.118148,
    lng: 101.6748894,
    streetAddress: "75, Lingkaran Syed Putra",
    cityAddress: "Mid Valley City, 58000",
    id: "nav0",
    image: "http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/klshopping/bangsar/pagePropertiesImage/midvalley.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Pavilion Kuala Lumpur",
    lat: 3.1489108,
    streetAddress: "168, Jalan Bukit Bintang",
    cityAddress: "Bukit Bintang, 55100 Kuala Lumpur",
    lng: 101.71333709999999,
    id: "nav1",
    image: "http://www.travelkey.com.au/wp-content/uploads/2016/08/pavilion-shopping-mall.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Sunway Pyramid",
    lat: 3.0727104,
    lng: 101.60788609999997,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav2",
    image: "http://1.bp.blogspot.com/-iN0AO6PuugM/UFX6QWz3RvI/AAAAAAAAApI/l-loJ8KqjLU/s1600/david-archuleta-sunway-pyramid-mall.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Setia City Mall",
    lat: 3.10915,
    lng: 101.460319,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav3",
    image: "http://www.tonyromas.com.my/i/outlet-SetiaCity1.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "IOI City Mall",
    lat: 2.969822,
    lng: 101.7110123,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav4",
    image: "http://gowhere.my/wp-content/uploads/2015/06/IOI-Shopping-Mall.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Berjaya Times Square",
    lat: 3.142197,
    lng: 101.71054989999993,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav5",
    image: "http://static.asiawebdirect.com/m/kl/portals/kuala-lumpur-ws/homepage/klshopping/berjaya-times-square/pagePropertiesImage/time-square-main.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Kelab Golf Negara Subang",
    lat: 3.087757,
    lng: 101.597824,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav6",
    image: "http://static.panoramio.com/photos/large/22851487.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Management & Science University",
    lat: 3.0775094,
    lng: 101.550658,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav7",
    image: "https://www.easyuni.com/media/institution/photo/2016/03/01/A_VIEW.jpg.1200x1200_q80_crop-smart.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Universiti Teknologi MARA Shah Alam",
    lat: 3.0696223,
    lng: 101.5015697,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav8",
    image: "https://www.easyuni.com/media/institution/photo/2015/05/28/8114667275_499586079a_b.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "JPJ Negeri Selangor",
    lat: 3.060979,
    lng: 101.487606,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav9",
    image: "http://www.solidgold.com.my/eventspic/20140810_181105.JPG",
    visible: ko.observable(true),
    bool: true
}, {
    title: "i-City",
    lat: 3.063791,
    lng: 101.484444,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav10",
    image: "http://static.wixstatic.com/media/1f305a_cfee5f2dc5ad4c3c94831e9d7e5a561c.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Shah Alam Convention Center",
    lat: 3.06678,
    lng: 101.56538,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav11",
    image: "http://1.bp.blogspot.com/-i0c0qOcilxw/URG96jZnECI/AAAAAAAAABY/ZRB_EMsf7uo/s1600/DSC_4724+as+Smart+Object-1+2.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "AMCORP MALL",
    lat: 3.1050254,
    lng: 101.644905,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav12",
    image: "https://c1.staticflickr.com/6/5243/5324139144_829769e2df_b.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Heineken Malaysia Berhad",
    lat: 3.088014,
    lng: 101.626051,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav13",
    image: "http://www.heinekenmalaysia.com/wp-content/uploads/2014/10/heineken-building-homepage.jpg",
    visible: ko.observable(true),
    bool: true
}, {
    title: "Royal Museum",
    lat: 3.128124,
    lng: 101.691057,
    streetAddress: "6th & Constitution Ave NW",
    cityAddress: "Washington, DC 20565",
    id: "nav14",
    image: "http://www.fosdecor.com/blog/wp-content/uploads/WebRom02.jpg",
    visible: ko.observable(true),
    bool: true
}];

function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    "use strict";
    infowindow.marker = marker;
    var mobileContent = '<div class="mobile-infowindow"><div class="mobile-infowindow-content"><div class="mobile-infowindow-contentdiv"><strong>' + marker.title + '</strong><div class="mobile-infowindow-address"><small><img src="images/googlemap.png" style="height:12px;width:12px;">: ' + marker.streetAddress + ',' + marker.cityAddress +
        '</small></div></div></div>' +
        '<div class="mobile-infowindow-image"><img src="' + marker.image + '" style="width:  100px; height: 120px;"></div></div>';

    var computerContent = '<div class="vertical flipper flip-container"><div class="front-infowindow">' +
        '<div class="background"></div><div class="redlinebottom"><img src="images/redlinebottom.png"></div>' +
        '<div class="bottomline"></div><div class="developer"><h1>Developed by jorcus.com</h1></div>' +
        '<div class="googlemap"><img src="images/googlemap.png"></div>' +
        '<div class="googlefont"><img src="images/layer1.png"></div></div>' +
        '<div class="back-infowindow"><div class="background"></div>' +
        '<div class="halfbg"></div><div class="bottomline"></div>' +
        '<div class="verticalsep"><img src="images/verticalsep.png"></div>' +
        '<div class="redlinebottom"><img src="images/redlinebottom.png"></div>' +
        '<div class="globe"><img src="' + marker.image + '" class="info-image"></div>' +
        '<div class="marker"><img src="images/marker.png"></div>' +
        '<div class="web"><img src="images/web.png"></div>' +
        '<div class="email"><img src="images/email.png"></div>' +
        '<div class="phone"><img src="images/phone.png"></div>' +
        '<div class="mobilephone"><img src="images/mobilephone.png"></div>' +
        '<div class="infowindow-address"><small>' + marker.streetAddress + ', ' + marker.cityAddress + '</small></div>' +
        '<div class="infowindow-website">http://www.website.com</div>' +
        '<div class="infowindow-email">kiang.ng@hotmail.com</div>' +
        '<div class="infowindow-telephone">(603) 3323 1234</div>' +
        '<div class="infowindow-mobile">(60) 10 7888792 </div>' +
        '<div class="infowindow-title"><h2>' + marker.title +
        '</h2></div></div></div>';
    var displayContent;
    if ($(window).width() > 650) {
        displayContent = computerContent;
    } else {
        displayContent = mobileContent;
    }
    infowindow.setContent(displayContent);
    infowindow.open(map, marker);
    marker.setAnimation(google.maps.Animation.BOUNCE);
    var windowWidth = $(window).width();
    if (windowWidth <= 1080) {
        map.setZoom(14);
    } else if (windowWidth > 1080) {
        map.setZoom(15);
    }
    map.setCenter(marker.getPosition());
    infowindow.addListener("closeclick", function() {
        infowindow.marker = null;
        marker.setAnimation(null);
    });

}

function setMarkers(location) {
    "use strict";
    var infowindow = new google.maps.InfoWindow({
        maxWidth: 600
    });
    var iconBase = "images/Zombie.gif";
    var markerInfo = function() {
        populateInfoWindow(this, infowindow);
    };
    for (var i = 0; i < location.length; i++) {
        location[i].holdMarker = new google.maps.Marker({
            position: new google.maps.LatLng(location[i].lat, location[i].lng),
            map: map,
            title: location[i].title,
            animation: google.maps.Animation.DROP,
            id: "nav" + i,
            image: location[i].image,
            icon: iconBase,
            streetAddress: location[i].streetAddress,
            cityAddress: location[i].cityAddress
        });

        location[i].holdMarker.addListener("click", markerInfo);

        var searchNav = $('#nav' + i);
        searchNav.click((function(marker, i) {
            return function() {
                populateInfoWindow(marker, infowindow);
            };
        })(location[i].holdMarker, i));
    }
}

var viewModel = {
    query: ko.observable(''),
};

viewModel.markers = ko.dependentObservable(function() {
    var self = this;
    var search = self.query().toLowerCase();
    return ko.utils.arrayFilter(markers, function(marker) {
        if (marker.title.toLowerCase().indexOf(search) >= 0) {
            marker.bool = true;
            return marker.visible(true);
        } else {
            marker.bool = false;
            AllMap();
            return marker.visible(false);
        }
    });
}, viewModel);

ko.applyBindings(viewModel);

//show $ hide markers in sync with nav
$("#input").keyup(function() {
    "use strict";
    AllMap();
});


//Expand .forecast div on click to see Weather Underground forecast
//and shrink back when additionally clicked
//size is repsonsive to smaller screens
var weatherContainer = $("#weather-image-container");
var WeatherVisible = false;
weatherContainer.click(function() {
    "use strict";
    if (WeatherVisible === false) {
        if ($(window).width() < 670) {
            $(".forecast li").css("display", "block");
            weatherContainer.animate({
                width: "245"
            }, 500);
        } else {
            $(".forecast li").css("display", "inline-block");
            weatherContainer.animate({
                width: "380"
            }, 500);
        }
        WeatherVisible = true;
    } else {
        weatherContainer.animate({
            width: "80"
        }, 500);
        WeatherVisible = false;
    }
});

//GET Weather Underground JSON
//If error on GET JSON, display message
var weatherUgUrl = "http://api.wunderground.com/api/8f309a7f2fbb9bbc/conditions/q/Malaysia/Kuala_Lumpur.json";
var success = false;

$.getJSON(weatherUgUrl, function(data) {
    "use strict";
    success = true;
    var list = $(".forecast ul");
    var detail = data.current_observation;
    list.append('<li>Temp: ' + detail.temp_f + '° F</li>');
    list.append('<li><img style="width: 25px" src="' + detail.icon_url + '">  ' + detail.icon + '</li>');
});

// Set a 5-second (or however long you want) timeout to check for errors
setTimeout(function() {
    "use strict";
    if (!success) {
        alert("We have a problem on $.getJSON.");
    }
}, 5000);