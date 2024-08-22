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



/*Creating fetch, handle JSON data, Handling errors*/
fetch('https://api.github.com/users/faridahyderi/repos')
.then(res => {
  return res.text();
})
.then (text => {
      const data=JSON.parse(text);
      
     
         data.forEach(repo =>{
          const repositories=repo.name;
          console.log(repositories);
     
 })

  //Display Repositories in list
const projectSection = document.getElementById('Projects');
const projectList = projectSection.querySelector('ul');
for(let i=0 ;i< data.length ; i++ )
  {
   
    const projectli = document.createElement('li');
    projectli.innerHTML = data[i].name;
    projectList.appendChild(projectli);
   
  }

 })
.catch(error => {
  console.log(error)});

  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  .then (response =>{
    return response.json();
  })
  .then (data =>{
    console.log(data);
  })
  