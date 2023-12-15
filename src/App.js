import React from 'react'
import './App.css';
import Test from './test/test';

function App() {
  const handleclick = () => {
    window.location.href = 'mailto:parthrudy@gmail.com';
  }

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/Resume.pdf';
    downloadLink.download = 'Resume.pdf';
    downloadLink.click();
  }
  return (
    <>
      <div>
         <header className="glass-effect">
          <nav>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header> 
        <section id="hero" className="hero-section">
           <div className="gradient-background" /> 
          <div className="hero-content"> 
            <div className="hero-container">
              <button className="hero-btn1" onClick={handleclick}>Hire</button>
              <button className="hero-btn2" onClick={handleDownload}>Resume</button>
            </div> 
            <h1>
              <span className="first-name">Parth</span>
              <span className="last-name">Shethji</span>
            </h1> 
            <div className="hero-text">
              <p id="role1">
                Unlocking Blockchain Potential, Crafting Powerful Websites, and Mastering AI Magic.
              </p>
            </div> 
            
          </div>
          
        </section>
        
        <section id="about">
          <h2>About me</h2>
          <div className="about-container">
            <div className="about-detail">
              <div id="profile-image" className="about-detail" />
            </div>
            <div className="vertical-line" />
            <div className="about-detail" id="about-txt">
              <h2>My skills</h2>
              <div>⭐ BlockChain developer</div>
              <div>⭐ Web developer</div>
              <div>⭐ AI &amp; ML</div>
              <div>⭐ Data Structure and Algorithm</div>
              <div>⭐ Java</div>
              <br />
              <h3 align="left">Languages and Tools:</h3>
              <br />
              <p align="left">
                <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width={40} height={40} />
                </a>
                <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width={40} height={40} />
                </a>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width={40} height={40} />
                </a>
                <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width={40} height={40} />
                </a>
                <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width={40} height={40} />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width={40} height={40} />
                </a>
                <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width={40} height={40} />
                </a>
                <a href="https://www.java.com" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width={40} height={40} />
                </a>
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width={40} height={40} />
                </a>
                <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width={40} height={40} />
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width={40} height={40} />
                </a>
                <a href="https://opencv.org/" target="_blank" rel="noreferrer">
                  <img src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" alt="opencv" width={40} height={40} />
                </a>
                <a href="https://www.python.org" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width={40} height={40} />
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width={40} height={40} />
                </a>
              </p>
              <br />
              <h2>Get in touch with me</h2>
              <a href="https://linkedin.com/in/parth shethji" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="parth shethji" height={30} width={40} /></a>
              <a href="https://instagram.com/parth.shethji26" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="parth.shethji26" height={30} width={40} /></a>
              <a href="https://discord.gg/#1092" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/discord.svg" alt="#1092" height={30} width={40} /></a>
            </div>
          </div>
        </section>
        <section id="projects">
          <h2>My Projects</h2>
          <div>
            <div className="cols">
              <div className="col" ontouchstart="this.classList.toggle('hover');">
                <div className="container">
                  <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/500/500/)' }}>
                    <div className="inner">
                      <p>GETGO</p>
                      <span>Nodejs, HTML, CSS, JS</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" ontouchstart="this.classList.toggle('hover');">
                <div className="container">
                  <div className="front" classname ="back" style={{ backgroundImage: 'url(https://unsplash.it/503/503/)' }}>
                    <div className="inner">
                      <p>Flappy Bird</p>
                      <span>Python</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" ontouchstart="this.classList.toggle('hover');">
                <div className="container">
                  <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/506/506/)' }}>
                    <div className="inner">
                      <p>Bloggers Website</p>
                      <span>HTMl, CSS, JS</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" ontouchstart="this.classList.toggle('hover');">
                <div className="container">
                  <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/508/508/)' }}>
                    <div className="inner">
                      <p>Cartoonifer</p>
                      <span>Python</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" ontouchstart="this.classList.toggle('hover');">
                <div className="container">
                  <div className="front" style={{ backgroundImage: 'url(https://unsplash.it/508/508/)' }}>
                    <div className="inner">
                      <p>Stammer Detection</p>
                      <span>Python, MERN Stack</span>
                    </div>
                  </div>
                  <div className="back">
                    <div className="inner">
                      <div className="button-container">
                        <button>
                          <img src="./github.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                        <button>
                          <img src="./external.png" alt srcSet viewbox="0 0 1 1" className="bi bi-instagram" fill="currentColor" height={56} width={56} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <p>© 2023 Your Name. All rights reserved.</p>
          <p>Designed and Developed by <b>Parth Shethji</b></p>
        </footer>
      </div>


    </>
  );
}

export default App;
