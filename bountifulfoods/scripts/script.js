 

let elems = document.querySelectorAll('nav ul li:nth-child(1)')

for (let i = 0; i<elems.length; i++) {
    elems[i].addEventListener('click', (() => {
        elems[i].parentElement.parentElement.classList.toggle('out')
    }))
}



document.getElementById("year").innerHTML = new Date().getFullYear()
document.getElementById("lastMod").innerHTML = "Last Modified: "+document.lastModified




var lat ='';
var lon = '';
var api = 'https://api.openweathermap.org/data/2.5/weather?';
var week = '';
var days = ['Sunday','Monday','Tuesday','Wensday','Thursday','Friday','Saturday'];
var day = new Date();
var tempUnit = '';
var tempFar='';
 



  
$(document).ready(function(){						 
			 
	if (navigator.geolocation) {	
		navigator.geolocation.getCurrentPosition(function(position) {
		var lat = 'lat='+position.coords.latitude;
		var lon = 'lon='+position.coords.longitude;							
		$('#day').text(days[day.getDay()]);
		getWeather(lat, lon);				
});
} else {
		alert('Weather forecast is not found');
}

$('#unit').click(function() {
	var currentUnit =$('#unit').text();
	var newUnit = currentUnit;
	if (currentUnit == 'F'){						
	   $('#unit').text('C');
		   
		   var tempCel = Math.round((1*tempFar-32)*5/9);
		   $('#temp').text('Temperature: '+tempCel+String.fromCharCode(176));
		} else {
		   $('#unit').text('F');
		   $('#temp').text('Temperature: '+tempFar+String.fromCharCode(176));			
		}
		});	
		
		});





function getWeather(lat, lon) {
		var UrlString = api+lat+'&'+lon;
		$.ajax({
			url: "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad&units=imperial"+lat+"&"+lon+"&APPID=eca28685f631a2e2a2a95d8ba248ff08",
			success: function(res){
				$('#geo').text(res.name+", "+res.sys.country);				
				$('#weather').text(res.weather[0].description);
				 
				$('#icon').css("background-image", "url('http://openweathermap.org/img/w/"+res.weather[0].icon+".png')");
				// Temperature
				tempFar = Math.round(1.8*(1*res.main.temp-273)+32);
				$('#temp').text('Temperature: '+ tempFar + String.fromCharCode(176));		
				$('#humidity').text('Humidity: '+res.main.humidity+'%');
				$('#wind').text('Wind: '+res.wind.speed+' m\/s');
				var dir = Math.round(res.wind.deg);
				$('#direction').text('Wind direction: '+dir +String.fromCharCode(176));
			}
		});
}




const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); 


const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;















