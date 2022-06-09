import { projectData } from "./project-data.js";

// Variables

// Constants

// CERs

const projectList = document.getElementById('projects')

// Event Listeners

// Functions




// Modulea
const projectModule = projectData.map(project => 
  `
<p class="header">Projects (Develop & Design)</p>
<h1>
  <a href="${project.deployment}">
    ${project.title}
  </a>
  <a href="${project.github}">
    <i class="fa-brands fa-github icon"></i>
  </a>
</h1>
<p>
  <span class="project-year">2022</span> 
  / JavaScript <i class="fa-brands fa-js-square"></i> , 
  HTML <i class="fa-brands fa-html5"></i> , 
  CSS <i class="fa-brands fa-css3-alt"></i>
</p>
<h1>
  <a href="">
    Placeholder <i class="fa-brands fa-github icon"></i>
  </a>
</h1>
<p>
  <span class="project-year">2022</span> / Placeholder 
</p>
<h1>
  <a href="">
    Placeholder <i class="fa-brands fa-github icon"></i>
  </a>
</h1>
<p>
  <span class="project-year">2022</span> / Placeholder 
</p>
<h1>
  <a href="">
    Placeholder <i class="fa-brands fa-github icon"></i>
  </a>
</h1>
<p>
  <span class="project-year">2022</span> / Placeholder 
</p>

  `
).join('')

projectList.innerHTML = projectModule