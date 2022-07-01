import { projectData, projectLanguage} from "./project-data.js";

// Variables

// Constants

// CERs

const projectList = document.getElementById('projects')
const mainEl = document.querySelector('.main')
const name = document.querySelector('.name')
const nameSecondLine = document.querySelector('.name2')
const nameThirdLine = document.querySelector('.name3')
const nameFourthLine = document.querySelector('.name4')
const body = document.body
const frame = document.querySelector('.frame')


// Event Listeners

window.addEventListener('load' , function load() {
  mainEl.classList.toggle('opacity-transition')
  name.classList.toggle('underline-animation')
  nameSecondLine.classList.toggle('underline-animation-2')
  nameThirdLine.classList.toggle('underline-animation-3')
  nameFourthLine.classList.toggle('underline-animation-4')
})


// window.addEventListener()
// Functions



// Modules
// const projectModule = projectData.map(project => 
// `
// <p class="header">Projects (Develop & Design)</p>
// <h1>
//   <a id="project-title" href="${project.deployment}">
//     ${project.title}
//   </a>
//   <a href="${project.github}">
//     <i class="fa-brands fa-github icon"></i>
//   </a>
// </h1>
// <p>
//   <span class="project-year">2022</span> 
//   / JavaScript <i class="fa-brands fa-js-square"></i> , 
//   HTML <i class="fa-brands fa-html5"></i> , 
//   CSS <i class="fa-brands fa-css3-alt"></i>
// </p>
// <h1>
//   <a href="">
//     Placeholder 
//   </a>
//   <a href="${project.github}">
//     <i class="fa-brands fa-github icon"></i>
//   </a>
// </h1>
// <p>
//   <span class="project-year">2022</span> / Placeholder 
// </p>
// <h1>
//   <a href="">
//     Placeholder 
//     </a>
//   <a href="${project.github}">
//     <i class="fa-brands fa-github icon"></i>
//   </a>
// </h1>
// <p>
//   <span class="project-year">2022</span> / Placeholder 
// </p>
// <h1>
//   <a href="">
//     Placeholder 
//   </a>
//   <a href="${project.github}">
//     <i class="fa-brands fa-github icon"></i>
//   </a>
// </h1>
// <p>
//   <span class="project-year">2022</span> / Placeholder 
// </p>
// `
// ).join('')

// projectList.innerHTML = projectModule

