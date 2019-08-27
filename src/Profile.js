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
          <p>
            Motivated team player and an advocate for getting the job done
            right.
          </p>
        </div>
        <div class="headline-item">
          <p>
            Proven record of generating group cohesion and business value in
            interdisciplinary, technical projects.
          </p>
        </div>
        <div class="headline-item">
          <p>
            Over 10 years of experience researching, developing, and applying
            emerging technologies.
          </p>
        </div>
      </div>
      <div class="section-small content">
        <a href="./#project-manager" class="feature-ref-1">
          Project Manager
        </a>
        <a href="./#full-stack-developer" class="feature-ref-2">
          Full Stack Developer
        </a>
        <a href="./#data-analyst" class="feature-ref-3">
          Analyst
        </a>
      </div>
      <div class="section feature" id="project-manager">
        <div class="feature-name">Project Manager</div>
        <div class="feature-description">
          <p>
            I am passionate about project management as a tool to enhance the
            quality of products and business methods, and to enable developers
            and engineers to be creative and efficient. I thrive when working in
            teams and I am energized by the prospect of bringing structure to
            the chaos of building something new.
          </p>
          <p>
            My experience includes Scrum Master in Agile development settings
            and technical project management in the semiconductor industry.
          </p>
        </div>
      </div>
      <div class="section feature" id="full-stack-developer">
        <div class="feature-name">Full Stack Developer</div>
        <div class="feature-description">
          <p>
            I have written applications in various languages throughout my
            career for equally as many tasks, from lab test automation to
            numerical integration fuctions.
          </p>
          <p>
            Now, I am laser focused on web development. Specifically, I am
            finishing the final project for a four month bootcamp at Craft
            Academy in Stockholm. Opportunites to manage development projects
            and products, or technical positions that are development-centered,
            would be my next, ideal career move.
          </p>
        </div>
      </div>
      <div class="section feature" id="data-analyst">
        <div class="feature-name">Analyst</div>
        <div class="feature-description">I analyze.</div>
      
      </div>
    </div>
  );
};

export default Profile;
