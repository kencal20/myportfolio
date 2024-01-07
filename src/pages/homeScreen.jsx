import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/44649257.png'
export default function HomePage() {
    const Year = new Date().getFullYear()
    return (
        <div className="homepage">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>

            <main style={{ display: 'flex', flexDirection: 'row' }}>
                <div className="infoText">


                    <p>Hi, my name is <span style={{ fontSize: 27, color: 'navy', fontWeight: '600' }}>Kenneth Adjei-mensah</span>  and I'm a Web developer as well as a Mobile developer. This is my portfolio website where you can learn more about me and see examples of my work.</p>

                    <Link to="/about" className="button">Learn More About Me</Link>

                    <h2>My Skills</h2>
                    <p>I have experience in Html,css and Javascript.Specializing in React & React Native</p>
                    <Link to="/skills" className="button">More About My Skills</Link>

                    <h2>My Work</h2>
                    <p>Here are some highlights of my previous projects:</p>

                    <div className="work-examples">
                        {/* Show images/descriptions of your top 3-5 projects */}
                    </div>



                </div>

                <img src={img} alt="My Profile Picture" />
            </main>

            <footer>
                <p>&copy;{Year} Kenneth Adei-mensah</p>
            </footer>
        </div>
    );
}
