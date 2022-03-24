let map;
let myCity;
function initMap() {
    let pleurtuit = new google.maps.LatLng(48.600687, -2.057252);
    let mapProp = { center: pleurtuit, zoom: 10, mapTypeId: google.maps.MapTypeId.ROADMAP };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    myCity = new google.maps.Circle({
        center: pleurtuit, radius: 10000, strokeColor: "#0000FF", strokeOpacity: 0.8, strokeWeight: 2, fillColor: "#0000FF", fillOpacity: 0.2
    });
    myCity.setMap(map);
    google.maps.event.trigger(map, 'resize');
}
