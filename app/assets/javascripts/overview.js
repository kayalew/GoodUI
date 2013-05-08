$(document).ready(function() {
	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(setLocation,noLocation,{enableHighAccuracy: true});
	}
	
	function setLocation(geo) 
	{
		var query = "&lat="+geo.coords.latitude+",lng="+geo.coords.longitude;
		document.getElementById("location").setAttribute("href","http://www.yelp.com/search?#find_desc=fabric+store"+query+"&show_filters=1");
	}
	
	function noLocation()
	{
		document.getElementById("location").setAttribute("href","http://www.yelp.com/search?#find_desc=fabric+store&show_filters=1");
	}
});