import React from 'react';
import { Link } from 'react-router-dom';
import img from '../img/logo2.png'
export default function HomePage() {
    const Year = new Date().getFullYear()
    return (
        <div className="homepage container">
            <header>
                <h1>Welcome to My Portfolio</h1>
            </header>

            <main>
                <div className="infoText">

                    <section className='intro'>
                        <p>Hi, my name is <span className="name">Kenneth Adjei-mensah</span>  and I'm a Web developer as well as a Mobile developer. This is my portfolio website where you can learn more about me and see examples of my work.</p>
                        <img src={img} alt=''  className='profile-pic' />
                    </section>
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


            </main>

            <footer>
                <p>&copy;{Year} Kenneth Adei-mensah</p>
            </footer>
        </div>
    );
}
