

mapboxgl.accessToken = 'pk.eyJ1IjoicHJhdGhtZXNoLWZ1dGFuZSIsImEiOiJja2o4MzN6ZGkyZWZqMnNsZ2xsYWd2ZGkxIn0._xXFyWQmJyvPHsSlEOBOEQ';



let successLocation = (position) =>{
	console.log(position);
	setupMap([position.coords.longitude, position.coords.latitude]);
}

let errorLocation = () =>{
	alert("WARNING turn on your location , By default it is showing the location of developer.");
	setupMap([-19.7514798, 75.713884]);
}

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy:true });



let setupMap = (center) =>{

	var map = new mapboxgl.Map({

	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center:center,
	zoom: 15

});

	const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');


var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
  
});


map.addControl(directions, 'top-right');
}









