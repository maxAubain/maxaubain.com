import { About } from "../components/about/About";
import { Education } from "../components/about/Education";
import { EmailForm } from "../components/contact/EmailForm";
import { Portfolio } from "../components/portfolio/Portfolio";
import { Profile } from "../components/about/Profile"
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
  "resume": {
    "path": "/resume",
    "component": Resume
  },
  "contact": {
    "path": "/contact",
    "component": EmailForm
  }
}