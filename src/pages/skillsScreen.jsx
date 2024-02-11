import React from 'react';
import '../css/skills.css'

export default function SkillsComponent() {
  return (
    <div className="skills-container container">
      <h2 id='skillsHeading' >Skills</h2>
      <ul className="skills-list">
        <li>JavaScript</li>
        <li>HTML/CSS</li>
      </ul>
        <h2 id='skillsHeading' >Technologies</h2>
        <ul className="skills-list">
          <li>React</li>
          <li>Node.js</li>
          <li>React Native/Expo</li>
        </ul>

        <h2 id='skillsHeading' >Others</h2>
        <ul className="skills-list">
          <li>Git </li>
          <li>github</li>
          <li>unix</li>
          <li>bash scripting</li>
        </ul>
    </div>
  );
};


