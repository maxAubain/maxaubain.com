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
            Max is passionate about project management as a tool to enhance the
            quality of products and business methods, and to enable developers
            and engineers to be creative and efficient. He thrives when working
            in teams and is energized by the prospect of bringing structure to
            the chaos of building something new.
          </p>
          <p>
            His experience includes Scrum Master in Agile development settings
            and technical project management in the semiconductor industry.
          </p>
        </div>
      </div>
      <div class="section feature" id="full-stack-developer">
        <div class="feature-name">Full Stack Developer</div>
        <div class="feature-description">
          <p>
            Max has written applications in various languages throughout his
            career for equally as many tasks, from lab test automation to
            numerical integration fuctions.
          </p>
          <p>
            Now he laser focused on web development. Specifically, he is
            completing the final project for a four month bootcamp at Craft
            Academy in Stockholm.
          </p>
          <p>
            Opportunites to manage development projects and products, or
            technical positions that are development-centered, are his next
            ideal career move.
          </p>
        </div>
      </div>
      <div class="section feature" id="data-analyst">
        <div class="feature-name">Analyst</div>
        <div class="feature-description">
          <p>
            Max has a unique combination of professional experiences that shaped
            his analytic abilities.
          </p>
          <p>
            He has passed the U.S. Patent Bar Exam and worked as a registered
            Patent Agent, drafting patent applications and legal documents while
            performing intellectual property research.
          </p>
          <p>
            He has been the technical lead on many engineering projects,
            including thermal risk management for semiconductor chips
            manufactored for tier 1 smart phone manufactorers.
          </p>
          <p>
            Finally, his analytical foundation lies in the completion of a Ph.D.
            dissertation that resulted in the publication of peer reviewed
            journal articles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
