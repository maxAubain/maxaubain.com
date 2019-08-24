import React from "react"
import { NavLink} from 'react-router-dom';

const Home = () => {
  return (
    <div class='homepage'>
      <div class='section header'>
        <img class='headshot' src='./src/img/headShot.png' />
      </div>
      <div class='section headline'>
        <h1>Max Aubain</h1><br></br>
        <h2><ul>
          <li>Project manager</li>
          <li>Full stack developer</li>
          <li>Data analyst</li>
        </ul></h2>
      </div>
      <div class='section content'>
        <p>
          I am a dedicated engineer with over 10 years of experience in emerging technologies, passionate about addressing concurrent technical
          and business challenges.
        </p><br></br>
        <p>
          My career goals are currently focused on project management, web-based application development, and data analysis.
        </p>
      </div >
      <a href="https://www.linkedin.com/in/maxaubain/" class='section feature-1'>
        <h2>Curriculum Vitae</h2>
      </a>
      <NavLink class="navlink section feature-2" to='/DeveloperProjects'>
        <h2>Developer Projects</h2>
      </NavLink>
    </div >
  )
}

export default Home