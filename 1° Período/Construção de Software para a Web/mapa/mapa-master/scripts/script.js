onload = init;
var mymap;
function init() {
	//Setar para aparecer na posição do usuário
	mymap = L.map('mapid').setView([51.505, -0.09], 13);
	mymap.on('click', onMapClick);
	navigator.geolocation.getCurrentPosition(showPosition);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    //criar seu token no mapbox
    accessToken: 'pk.eyJ1IjoibWFyY2tvenp6IiwiYSI6ImNqd2x5aGw0MzE1N3Y0NG4wbW9mZ2R3dnQifQ.dhMf5nr4zZkrVZMT9dZweA '
	}).addTo(mymap);
	//Add Button Listener
	document.getElementById("btn_add").addEventListener("click", f);
}

function onMapClick(event) {
	// body...
	var lt = event.latlng.lat;
	var lg = event.latlng.lng;
	var lat = document.getElementById("lat").value = lt;
	
	var long = document.getElementById("long").value = lg;
}

function f(event) {
	// body...
	var lat = document.getElementById("lat").value;
	var long = document.getElementById("long").value;
	var desc = document.getElementById("desc").value;
	var m = L.marker([lat , long]).addTo(mymap); 
	m.bindPopup(desc);
	mymap.setView([lat, long], 10);
}

//atualiza a posição
function showPosition(pos) {
	// body...
	var latitude = pos.coords.latitude;
	var longitude = pos.coords.longitude;
	mymap.setView([latitude, longitude])
	console.log(latitude, longitude);
}

//Função para adicionar marcador


//Challenge: Mostrar a foto do lugar no balão. Dica: desc pode ser um HTML
//Challenge: Auto preencher lat e long ao clicar em algum lugar do mapa