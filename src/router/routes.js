import { About } from "../components/about/About";
import { Apps } from "../components/portfolio/Apps";
import { Blog } from "../components/portfolio/Blog";
import { Education } from "../components/about/Education";
import { EmailForm } from "../components/contact/EmailForm";
import { Exercises } from "../components/portfolio/Exercises";
import { Featured } from "../components/portfolio/Featured";
import { Portfolio } from "../components/portfolio/Portfolio";
import { Profile } from "../components/about/Profile";
import { Recommendations } from "../components/about/Recommendations";
import { Resume } from "../components/resume/Resume";

export const routesParams = {
  "about": {
    "path": "/about",
    "component": About
  },
  "about/profile": {
    "path": "/about/profile",
    "component": Profile
  },
  "about/recommendations": {
    "path": "/about/recommendations",
    "component": Recommendations
  },
  "about/education": {
    "path": "/about/education",
    "component": Education
  },
  "portfolio": {
    "path": "/portfolio",
    "component": Portfolio
  },
  "portfolio/featured": {
    "path": "/portfolio/featured",
    "component": Featured
  },
  "portfolio/blog": {
    "path": "/portfolio/blog",
    "component": Blog
  },
  "portfolio/apps": {
    "path": "/portfolio/apps",
    "component": Apps
  },
  "portfolio/exercises": {
    "path": "/portfolio/exercises",
    "component": Exercises
  },
  "resume": {
    "path": "/resume",
    "component": Resume
  },
  "contact": {
    "path": "/contact",
    "component": EmailForm
  }
}