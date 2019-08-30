import React from "react";

import "./css/profile.css";

const Profile = () => {
  return (
    <div class="intro">
      <div class="section headshot-container">
        <div>
          <img class="headshot" src="./src/img/headShot.png" />
        </div>
        <br></br>
        <div>Max Aubain, Ph.D.</div>
      </div>
      <div class="section headline-container">
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
      <div class="button-container">
        <a href="./#project-manager" class="button-1">
          Project Manager
        </a>
        <a href="./#full-stack-developer" class="button-2">
          Full Stack Developer
        </a>
        <a href="./#data-analyst" class="button-3">
          Analyst
        </a>
      </div>
      <div class="section feature" id="project-manager">
        <div class="feature-title">Project Manager</div>
        <div class="feature-description">
          <p>
            Max is passionate about being a project manager and using associated
            methods as a tool to enhance the quality of products and business
            flows, and to enable developers and engineers to be creative and
            efficient. He thrives when working in teams and is energized by the
            prospect of bringing structure to the chaos of building something
            new.
          </p>
          <p>
            His experience includes Scrum Master in Agile development settings
            and technical project management in the semiconductor industry.
          </p>
        </div>
      </div>
      <div class="section feature" id="full-stack-developer">
        <div class="feature-title">Full Stack Developer</div>
        <div class="feature-description">
          <p>
            Max has written applications in various languages throughout his
            career for equally as many tasks, from lab test automation in
            Labview to numerical integration in MATLAB.
          </p>
          <p>
            Now he laser focused on web development. Specifically, he is
            completing the final project of a four month bootcamp at Craft
            Academy in Stockholm. His core competences include Agile
            development, testing frameworks, Ruby on Rails, and ReactJS.
          </p>
          <p>
            Opportunites to manage development projects and products, or
            technical positions that are development-centered, are his next
            ideal career move.
          </p>
        </div>
      </div>
      <div class="section feature" id="data-analyst">
        <div class="feature-title">Analyst</div>
        <div class="feature-description">
          <p>
            Max has a unique combination of professional experiences that have
            shaped his analytic abilities.
          </p>
          <p>
            He has passed the U.S. Patent Bar Exam and worked as a registered
            Patent Agent, drafting patent applications and legal documents while
            performing intellectual property research on a wide range of
            emerging technologies.
          </p>
          <p>
            He has been a technical lead on product reliability, design, and
            development projects, including thermal risk management for
            smartphone semiconductor parts.
          </p>
          <p>
            Finally, his analytical foundation lies in the completion of an
            engineering Ph.D. that resulted in the publication of peer reviewed
            journal articles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
