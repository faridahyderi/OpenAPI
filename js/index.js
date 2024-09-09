
/*n your index.js file, using DOM manipulation, add a 'footer' child element to your index.html.*/

const footer1 = document.createElement('footer');
footer1.className ='Footer';
document.body.appendChild(footer1);

/*Creating today variable*/
const today = new Date();

/*create thisYear variable and assign it the current year from your date object*/
const thisYear = today.getFullYear();

/*Create a variable named footer and assign it the footer element by using 
"DOM Selection" to select the <footer> element from the DOM */

const footer = document.querySelector('.Footer');

/*Create a variable named copyright and use it to create a new paragraph (p) element*/
const copyright = document.createElement('p');

/*Set the inner HTML of your copyright element to display your name and the current year*/
copyright.innerHTML = `Farida Hyderi ${thisYear} \u{00A9}`;

/*Append the copyright element to the footer using "DOM Manipulation"*/
footer.append(copyright);
  
//Hidding both sections
      const weather_section = document.getElementById('aboutweather');
      weather_section.style.visibility = 'hidden';
      const aboutairquality_section = document.getElementById('aboutairquality');
      aboutairquality_section.style.visibility = 'hidden';
   
//This function gets called when the user clicks on whether forecast link
function weathercheck(value)
{ 
  
  //Making the weather section visible
  const about_weather = document.getElementById('aboutweather');
  about_weather.style.visibility = 'visible';
  

  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&forecast_days=1&models=gfs_seamless&timezone=America/New_York')
  .then (response =>{
        return response.json();
  })
  .then (data =>{
    //creating a var to point to element where max temp to be displayed
    const temp = document.getElementById('maxtemp');
    temp.innerHTML=`<b> Maximum temperature for 52.52 latitude and 13.41 longitude is </b> : ${data.daily.temperature_2m_max}\u{00B0}F`;

    //creating a var to point to element where min temp to be displayed
    const temp1 = document.getElementById('mintemp');
    temp1.innerHTML = `<strong> Minimum temperature for 52.52 latitude and 13.41 longitude is </strong> : ${data.daily.temperature_2m_min}\u{00B0}F`;
    })
    .catch(error => {
      console.log(error)
    });
    
    //Getting the latitude and longitude and temperature unit inputs from the user
    const input = document.getElementById('inputlat');
    const input1 = document.getElementById('inputlong');
    const button = document.getElementById('sub');
    const tempunit = document.getElementById('temperatureunit');
   
    //Adding the event click to the button Submit
    button.addEventListener('click',event =>{
      event.preventDefault();
    
    // creating URL using the inputs received  
    const apiURL =  `https://api.open-meteo.com/v1/forecast?latitude=${input.value}&longitude=${input1.value}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=${tempunit.value}&forecast_days=1&models=gfs_seamless&timezone=America/New_York`;
    console.log(apiURL);

    fetch(apiURL)
    .then (response1 => {
       return response1.json();
    })
    .then (apidata =>{
      //creating a var to point to element where max temp to be displayed
      const max_temp = document.getElementById('maxtemp');
      max_temp.innerHTML=`<strong> Maximum temperature for ${apidata.latitude} latitude and ${apidata.longitude} longitude is </strong> :${apidata.daily.temperature_2m_max}${apidata.daily_units.temperature_2m_max}`;
  
      //creating a var to point to element where min temp to be displayed
      const min_temp = document.getElementById('mintemp');
      min_temp.innerHTML = `<strong> Minimum temperature for ${apidata.latitude} latitude and ${apidata.longitude} longitude is </strong> :${apidata.daily.temperature_2m_min}${apidata.daily_units.temperature_2m_min}`;

      console.log(apidata);
    })
    .catch(error=>{
      console.log(error);
      const temp = document.getElementById('maxtemp');
      const temp1 = document.getElementById('mintemp');
      const temp3 = document.getElementById('message');

      //Not displaying the maximum and minimum temperature
      temp.style.display = "none";
      temp1.style.display = "none";
      temp3.style.display= "none";

      //creating an variable to point where error message needs to be displayed
      const errmsg = document.getElementById("errormessage");
      errmsg.innerHTML = `<strong>ERROR:</strong>Enter a valid Floating point number for latitude and longitude`;
    });
   });
  }

  //This function is called when Air Quality link is clicked
  function checkairquality()
  {
    //Making the air Quality section visible
    const about_air = document.getElementById('aboutairquality');
    about_air.style.visibility = 'visible';

    //calling fetch with default latitude and longitude
    fetch('https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=us_aqi&forecast_days=1')
  .then (response =>{
        return response.json();
  })
  .then (data =>{
    //creating a variable to point where the Air Quality is to be displayed
    const aqi = document.getElementById('aqi');
      aqi.innerHTML = `<strong> Air Quality Index for 52.52 latitude and 13.41 longitude is :</strong>${data.current.us_aqi}`;
    })
    .catch(error => {
      console.log(error)
    });
    
    //Getting the latitude and longitude inputs from the user
    const input = document.getElementById('inputlat1');
    const input1 = document.getElementById('inputlong1');
    const button = document.getElementById('sub1');

    //Adding a click event to the submit button
    button.addEventListener('click',event =>{
      event.preventDefault();
    
     //creating the URL based on user inputs 
    const apiURL =  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${input.value}&longitude=${input1.value}&current=us_aqi&forecast_days=1`;
    console.log(apiURL);

    //Fetching the URL
    fetch(apiURL)
    .then (response1 => {
       return response1.json();
    })
    .then (apidata =>{
      //creating a variable to point where the Air Quality is to be displayed
      const aqi = document.getElementById('aqi');
      aqi.innerHTML = `<strong> Air Quality Index for ${apidata.latitude} latitude and ${apidata.longitude} longitude is :</strong>${apidata.current.us_aqi}`;

      console.log(apidata);
    })
    .catch(error=>{
      console.log(error);

      //creating a variable to point where AQI is to be displayed
      const aqi = document.getElementById('aqi');
      aqi.style.display = 'none';

      //Creating a variable to [oint where the error message needs to be displayed
      const errmsg = document.getElementById("errormessage1");
      errmsg.innerHTML = `<strong>ERROR:</strong>Enter a valid Floating point number for latitude and longitude`;
    })
  });
  }