import React from "react";

const Profile = () => {
  return (
    <>
      <div className="intro">
        <div className="section-profile headshot-container">
          <div>
            <img className="headshot" src="./src/img/headShot.png" />
          </div>
          <br></br>
          <div>Max Aubain, Ph.D.</div>
        </div>
        <div className="section-profile headline-container">
          <div className="headline-item">
            <p>
              Big nerd and lover of all things sci-fi. Also an engineer at
              heart, always asking, "what do you DO with it?"
            </p>
          </div>
          <div className="headline-item">
            <p>
              Recently moved from the USA and enjoying the Swedish lifestyle.
            </p>
          </div>
          <div className="headline-item">
            <p>
              Motivated team player and an advocate for getting the job done
              right. Over 10 years of experience researching, developing, and
              applying emerging technologies.
            </p>
          </div>
        </div>
      </div>
      <div className="section-profile feature-profile" id="project-manager">
        <div className="feature-title">
          <div>
            <img
              src="./src/img/icon/project-manager.png"
              alt="PM-icon"
              height="100px"
              width="100px"
            />
          </div>
          <br></br>
          Project Manager
        </div>
        <div className="feature-description">
          <p>
            Max has been a project manager, passionate about enhancing the
            quality of products and business flows, and enabling his team to be
            creative and efficient. He thrives when working with
            interdisciplinary projects and is energized by the prospect of
            bringing structure to the chaos of building something new.
          </p>
          <p>
            His experience includes Scrum Master in Agile development settings
            and technical project management in the semiconductor industry.
          </p>
        </div>
      </div>
      <div className="section-profile feature-profile" id="full-stack-developer">
        <div className="feature-title">
          <div>
            <img
              src="./src/img/icon/developer.png"
              alt="dev-icon"
              height="100px"
              width="100px"
            />
          </div>
          <br></br>
          Full Stack Developer
        </div>
        <div className="feature-description">
          <p>
            Max has written applications in various languages throughout his
            career for equally as many tasks, from lab test automation in
            Labview to numerical integration in MATLAB.
          </p>
          <p>
            Now he is laser focused on adding web development to his toolkit.
            His core competences include Agile development, testing frameworks,
            Ruby on Rails, and ReactJS.
          </p>
          <p>
            Development-centered opportunities are his next ideal career move.
          </p>
        </div>
      </div>
      <div className="section-profile feature-profile" id="data-analyst">
        <div className="feature-title">
          <div>
            <img
              src="./src/img/icon/analyst.png"
              alt="analyst-icon"
              height="100px"
              width="100px"
            />
          </div>
          <br></br>
          Analyst
        </div>
        <div className="feature-description">
          <p>
            Max has a unique combination of professional experiences that have
            shaped his analytic abilities.
          </p>
          <p>
            He has passed the U.S. Patent Bar Exam and worked as a registered
            Patent Agent. As an engineer, he is an inventor of semiconductor
            device patents.
          </p>
          <p>
            He has been a technical lead on product reliability, design, and
            development projects.
          </p>
          <p>
            Finally, his analytical foundation lies in the completion of an
            engineering Ph.D. that resulted in the publication of peer reviewed
            journal articles.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
