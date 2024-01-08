import React from 'react';
import '../css/profile.css'
export default function ProfileScreen() {
  return (
    <div className="profile container">
      <h1 className="name">Kenneth Adjei-mensah</h1>

      <p className="description">
        I am a software developer with 1 year of experience building web and mobile applications using React, Node.js, expo, and other modern technologies.
      </p>

      <div>
        <h2 className="subHeading ">Skills</h2>
        <ul className="list">
          <li>React</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
          <li>React Native/expo</li>
        </ul>
      </div>

      <div>
        <h2 className="subHeading">Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1...</p>
        </div>

        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2...</p>
        </div>
      </div>

      <div>
      <h2 className="subHeading">Github Username</h2>
          <p>kencal20</p>

        <h2 className="subHeading">Contact</h2>
        <p className="contact">
          Email: kenadjei20@gmail.com<br />
          Phone: +233(0)209037925 / +233(0)534948445
        </p>
        <i className="bi bi-telephone-inbound icon"></i>
      </div>
    </div>
  );
};

