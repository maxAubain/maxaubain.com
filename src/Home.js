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
          <li>Full stack developer</li>
          <li>Project manager</li>
          <li>Data analyst</li>
        </ul></h2>
      </div>
      <div class='section content'>
        <p>
          I am a dedicated engineer and registered Patent Agent with over 10 years of experience in emerging technologies, passionate about addressing concurrent technical
          and business challenges.
        </p><br></br>
        <p>
          My career goals are currently focused on web-based application development,
          project management, and data analysis.
        </p>
      </div >
      <div class='section feature-1'>
        <h2>Curriculum Vitae</h2>
      </div>
      <NavLink class="navlink section feature-2" to='/TileArray'>
        <h2>Developer Projects</h2>
      </NavLink>
    </div >
  )
}

export default Home