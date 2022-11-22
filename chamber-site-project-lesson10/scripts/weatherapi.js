
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=Fairbankss&appid=eca28685f631a2e2a2a95d8ba248ff08&units=imperial'

const requestData = async(url)=>{
    const response = await fetch(url);
    console.log(response);

    if(response.ok === true){
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    else{
        console.log("The requested url is invalid please check your URL and API key to make sure they are correct.");
    }
};

function capFirstLetter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const displayResults = (weatherData)=>{
    let temperature = parseInt(weatherData.main.temp);
    currentTemp.innerHTML = `<strong>${temperature}</strong>`;

    const iconImg = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`
    const descript = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconImg);
    weatherIcon.setAttribute('alt','weather-icon');

    captionDesc.innerText = capFirstLetter(descript);

}


requestData(url);
