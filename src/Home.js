import React from "react"

const Home = () => {
  return (
    <div class='homepage'>
      <div class='section header'>
        <img class='headshot' src='./src/img/headShot.png' />
      </div>
      <div class='section headline'>
        <h1>Max Aubain</h1>
        <h2><ul>
          <li>Full stack developer</li>
          <li>Project manager</li>
          <li>Data analyst</li>
        </ul></h2>
      </div>
      <div class='section content'>
        <p>
          I am a dedicated engineer with over 10 years of experience, passionate about solving technical
          and business problems.  I enjoy leading teams to success and continually
          improving my own skills.  My career goals are currently focused on web-based application development, 
          project management, and data processing.
        </p>
      </div >
      <div class='section feature-1'>
        <h2>Curriculum Vitae</h2>
      </div>
      <div class='section feature-2'>
        <h2>Web Development Projects</h2>
      </div>
    </div >
  )
}

export default Home