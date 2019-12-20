import React from "react";

import { WebLink } from "./common/WebLink";

/* This component will need to be re-developed to a DRY
configuration, storing the education data in a JSON and 
programmatically rendering the education entries. */

export const Education = () => {
  return (
    <>
      <div className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src="./src/img/icon/ucsd.png"
              alt="dev-icon"
              height="160px"
              width="160px"
            />
          </div>
          <b>
            University of California, <br />
            San Diego
          </b>
        </div>
        <div className="education-feature-description">
          <b>
            <p>
              Doctor of Philosophy
              <br />
              Materials Science and Engineering
            </p>
          </b>
          <p>
            La Jolla, California, USA
            <br />
            2013
          </p>
          <p>
            <i>
              Dissertation degree acheived by simulating and measuring physical
              properties of semiconductor materials. Alumnus of the{" "}
              <WebLink
                url="http://maeresearch.ucsd.edu/bandaru/Students_Staff_meetings.htm"
                linkText="Prof. Bandaru Research Group"
                className="weblink"
              />
              .
            </i>
          </p>
        </div>
      </div>
      <div className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src="./src/img/icon/cornell.png"
              alt="cornell-icon"
              height="200px"
              width="200px"
            />
          </div>
          <b>Cornell University</b>
        </div>
        <div className="education-feature-description">
          <b>
            Bachelors of Science
            <br />
            Materials Science and Engineering
          </b>
          <p>
            Ithaca, New York, USA
            <br />
            2007
          </p>
          <p>
            <i>
              A well rounded engineering degree with a experimental research and
              thesis component. Alumnus of the{" "}
              <WebLink
                url="https://baker.mse.cornell.edu/Alumni.html"
                linkText="Prof. Baker Research Group"
                className="weblink"
              />
              .
            </i>
          </p>
        </div>
      </div>
      <div className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src="./src/img/icon/craftacademy.png"
              alt="craftacademy-icon"
              height="200px"
              width="200px"
            />
          </div>
          <b>Craft Academy</b>
        </div>
        <div className="education-feature-description">
          <b>
            Bootcamp Student
            <br />
            Full Stack Development
          </b>
          <p>
            Stockholm, Sweden
            <br />
            2019
          </p>
          <p>
            <i>
              Mastered web development fundamentals and Agile principles in a 60
              hours per week, laboratory setting.
            </i>
          </p>
        </div>
      </div>
      <div className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src="./src/img/icon/ucsd.png"
              alt="ucsd-icon"
              height="160px"
              width="160px"
            />
          </div>
          <b>
            UCSD Leadership and <br /> Teamwork Program
          </b>
        </div>
        <div className="education-feature-description">
          <b>
            Leadership Trainee
            <br />
            Engineering and Business Management
          </b>
          <p>
            La Jolla, California, USA
            <br />
            2015
          </p>
          <p>
            <i>
              Studied personality, motivation, and case studies involving work
              psychology and ethics.
            </i>
          </p>
        </div>
      </div>
      <div className="education-section education-feature">
        <div className="education-feature-title">
          <div>
            <img
              src="./src/img/icon/pli.png"
              alt="pli-icon"
              height="160px"
              width="160px"
            />
          </div>
          <b>Practicing Law Institute</b>
        </div>
        <div className="education-feature-description">
          <b>
            Patent Agent, Reg. No. 77,295
            <br />
            Independent Study course for the USPTO Bar Exam
          </b>
          <p>
            USA
            <br />
            2018
          </p>
          <p>
            <i>
              Studied laws, rules, and procedures for evaluating intellectual
              property. My registration is recorded in the USPTO's{" "}
              <WebLink
                url="https://www.uspto.gov/web/offices/com/sol/og/2018/week26/TOC.htm"
                linkText="Official Gazette"
                className="weblink"
              />
              .
            </i>
          </p>
        </div>
      </div>
    </>
  );
};
