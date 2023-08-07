//const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd6fe965f27msh852955c17a4c274p16111ajsn58a43530807a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const cities = ['Lucknow', 'Kolkata', 'Jaipur', 'Bangalore','Delhi'];


const getWeather =(city)=>{
cityname.innerHTML=city;

    fetch( 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+  city
    , options)
	.then(response=>response.json())
	.then((response)=>{
        console.log(response)
        temp.innerHTML = response.temp
        max_temp.innerHTML =  response.max_temp
        min_temp.innerHTML = response.min_temp
        cloud_pct.innerHTML = response.cloud_pct
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        temp2.innerHTML = response.temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        if (city === 'Lucknow') {
            document.getElementById(`cloud_pct_${city.toLowerCase()}`).textContent = response.cloud_pct;
            document.getElementById(`feels_like_${city.toLowerCase()}`).textContent = response.feels_like;
            document.getElementById(`humidity_${city.toLowerCase()}`).textContent = response.humidity;
            document.getElementById(`max_temp_${city.toLowerCase()}`).textContent = response.max_temp;
            document.getElementById(`min_temp_${city.toLowerCase()}`).textContent = response.min_temp;
            document.getElementById(`temp_${city.toLowerCase()}`).textContent = response.temp;
            document.getElementById(`wind_degrees_${city.toLowerCase()}`).textContent = response.wind_degrees;
            document.getElementById(`wind_speed_${city.toLowerCase()}`).textContent = response.wind_speed;
          }
        if (city === 'Kolkata') {
            document.getElementById(`cloud_pct_${city.toLowerCase()}`).textContent = response.cloud_pct;
            document.getElementById(`feels_like_${city.toLowerCase()}`).textContent = response.feels_like;
            document.getElementById(`humidity_${city.toLowerCase()}`).textContent = response.humidity;
            document.getElementById(`max_temp_${city.toLowerCase()}`).textContent = response.max_temp;
            document.getElementById(`min_temp_${city.toLowerCase()}`).textContent = response.min_temp;
            document.getElementById(`temp_${city.toLowerCase()}`).textContent = response.temp;
            document.getElementById(`wind_degrees_${city.toLowerCase()}`).textContent = response.wind_degrees;
            document.getElementById(`wind_speed_${city.toLowerCase()}`).textContent = response.wind_speed;
          }
        if (city === 'Jaipur') {
            document.getElementById(`cloud_pct_${city.toLowerCase()}`).textContent = response.cloud_pct;
            document.getElementById(`feels_like_${city.toLowerCase()}`).textContent = response.feels_like;
            document.getElementById(`humidity_${city.toLowerCase()}`).textContent = response.humidity;
            document.getElementById(`max_temp_${city.toLowerCase()}`).textContent = response.max_temp;
            document.getElementById(`min_temp_${city.toLowerCase()}`).textContent = response.min_temp;
            document.getElementById(`temp_${city.toLowerCase()}`).textContent = response.temp;
            document.getElementById(`wind_degrees_${city.toLowerCase()}`).textContent = response.wind_degrees;
            document.getElementById(`wind_speed_${city.toLowerCase()}`).textContent = response.wind_speed;
          }
        if (city === 'Bangalore') {
            document.getElementById(`cloud_pct_${city.toLowerCase()}`).textContent = response.cloud_pct;
            document.getElementById(`feels_like_${city.toLowerCase()}`).textContent = response.feels_like;
            document.getElementById(`humidity_${city.toLowerCase()}`).textContent = response.humidity;
            document.getElementById(`max_temp_${city.toLowerCase()}`).textContent = response.max_temp;
            document.getElementById(`min_temp_${city.toLowerCase()}`).textContent = response.min_temp;
            document.getElementById(`temp_${city.toLowerCase()}`).textContent = response.temp;
            document.getElementById(`wind_degrees_${city.toLowerCase()}`).textContent = response.wind_degrees;
            document.getElementById(`wind_speed_${city.toLowerCase()}`).textContent = response.wind_speed;
          }
        
    })
	.catch(err=>console.error(err)); 
    }

    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        getWeather(city.value)
    })

    getWeather("Delhi");
   


     function fetchWeatherForCommonPlaces() {
        cities.forEach(city => getWeather(city));
      }
       fetchWeatherForCommonPlaces()