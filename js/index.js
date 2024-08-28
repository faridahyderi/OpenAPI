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





  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&forecast_days=1&models=gfs_seamless&timezone=America/New_York')
  .then (response =>{
    return response.json();
  })
  .then (data =>{
    //creating a var to point to element where max temp to be displayed
    const temp = document.getElementById('maxtemp');
    temp.innerHTML=`Maximum tempearture is ${data.daily.temperature_2m_max}`;

    //creating a var to point to element where min temp to be displayed
    const temp1 = document.getElementById('mintemp');
    temp1.innerHTML = `Minimum tempearture is ${data.daily.temperature_2m_min}`;
    })
    .catch(erroe => {
      console.log(error)
    });

    const input = document.getElementById('inputlat');
    const input1 = document.getElementById('inputlong');
    const button = document.getElementById('sub');
    button.addEventListener('click',event =>{
      event.preventDefault();
    
    const apiURL =  `https://api.open-meteo.com/v1/forecast?latitude=${input.value}&longitude=${input1.value}&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&forecast_days=1&models=gfs_seamless&timezone=America/New_York`;
    console.log(apiURL);
    fetch(apiURL)
    .then (response1 => {
       return response1.json();
    })
    .then (apidata =>{
      const temp = document.getElementById('maxtemp');
      temp.innerHTML=`Maximum tempearture for new latitude and longitude is ${apidata.daily.temperature_2m_max}`;
  
      //creating a var to point to element where min temp to be displayed
      const temp1 = document.getElementById('mintemp');
      temp1.innerHTML = `Minimum tempearture for new latitude and longitude is is ${apidata.daily.temperature_2m_min}`;
      console.log(apidata);
    })
    .catch(error=>{
      console.log(error)
    });
    });