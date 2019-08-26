var mymap = L.map('mapid').setView([47.24099, 39.71062], 17);


var crossIcon = L.icon({
	iconUrl: 'cross.png',
	iconSize:     [25, 35], // size of the icon
});

var monumentIcon = L.icon({
	iconUrl: 'monument.png',
	iconSize:     [25, 35], // size of the icon
});

var shopIcon = L.icon({
	iconUrl: 'shop.png',
	iconSize:     [25, 25], // size of the icon
});

var spoolIcon = L.icon({
	iconUrl: 'spool.png',
	iconSize:     [25, 25], // size of the icon
});

var parkingIcon = L.icon({
	iconUrl: 'parking.png',
	iconSize:     [25, 25], // size of the icon
});


L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);


var marker1 = L.marker([47.23940, 39.71105], {icon: crossIcon}).addTo(mymap);
marker1.bindPopup("Храм Святой Великомученицы Татьяны");

var marker2 = L.marker([47.23940, 39.71030], {icon: monumentIcon}).addTo(mymap);
marker2.bindPopup("Памятник студентам и сотрудникам РИСХМ");

var marker3 = L.marker([47.24045, 39.70815], {icon: shopIcon}).addTo(mymap);
marker3.bindPopup("Апекс");

var marker4 = L.marker([47.23877, 39.71098], {icon: spoolIcon}).addTo(mymap);
marker4.bindPopup("Бассейн ДГТУ");

var marker5 = L.marker([47.23884, 39.71264], {icon: parkingIcon}).addTo(mymap);
marker5.bindPopup("Парковка");

L.control.mousePosition().addTo(mymap);
