import React from "react";

const Profile = () => {
  return (
    <div class="component">
      <div class="section header">
        <div>
          <img class="headshot" src="./src/img/headShot.png" />
        </div>
        <br></br>
        <div>Max Aubain, Ph.D.</div>
      </div>
      <div class="section headline">
        <div class="headline-item">
          Motivated team player and an advocate for getting the job done
          right.
        </div>
        <div class="headline-item">
          Proven record of generating group cohesion and business value in
          interdisciplinary, technical projects.
        </div>
        <div class="headline-item">
          Over 10 years of experience researching, developing, and applying
          emerging technologies.
        </div>
      </div>
      <div class="section content">
        <a href="./#project-manager" class="feature-ref-1">
          Project Manager
        </a>
        <a href="./#full-stack-developer" class="feature-ref-2">
          Full Stack Developer
        </a>
        <a href="./#data-analyst" class="feature-ref-3">
          Data Analyst
        </a>
      </div>
      <div class="section feature" id="project-manager">
        <div class="feature-name">Project Manager</div>
        <div class="feature-description">
          I am passionate about project management as a tool to enhance the quality of products and business methods, and to enable developers and engineers to be creative and efficient.  I thrive when working in teams and I am energized by the prospect of bringing structure to the chaos of creating something new.  My experience includes Scrum Master in Agile development settings and technical project manager as a Senior Design Engineer.
        </div>
      </div>
      <div class="section feature" id="full-stack-developer">
        <div class="feature-name">Full Stack Developer</div>
        <div class="feature-description">I develop.</div>
      </div>
      <div class="section feature" id="data-analyst">
        <div class="feature-name">Data Analyst</div>
        <div class="feature-description">I analyze.</div>
      </div>
    </div>
  );
};

export default Profile;
