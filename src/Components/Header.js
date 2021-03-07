import React, { Component } from 'react';
import Particles from 'react-particles-js';

 //<li><a className="smoothscroll" href="#contact">Contact</a></li>

class Header extends Component {
  render() {
    if(this.props.data){
        var project = this.props.data.project;
        var github = this.props.data.github;
        var name = this.props.data.name;
        var description= this.props.data.description;
        var city= this.props.data.address.city;
        var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
    <React.Fragment>
    <Particles className="particles" params={{
                                              "particles": {
                                                "number": {
                                                  "value": 10,
                                                  "density": {
                                                    "enable": true,
                                                    "value_area": 100
                                                  }
                                                },
                                                "color": {
                                                  "value": "#F2D6AA"
                                                },
                                                "shape": {
                                                  "type": "circle",
                                                  "stroke": {
                                                    "width": 0,
                                                    "color": "#000000"
                                                  },
                                                  "polygon": {
                                                    "nb_sides": 4
                                                  },
                                                },
                                                "opacity": {
                                                  "value": 0.44093831673801875,
                                                  "random": true,
                                                  "anim": {
                                                    "enable": false,
                                                    "speed": 1,
                                                    "opacity_min": 0.1,
                                                    "sync": false
                                                  }
                                                },
                                                "size": {
                                                  "value": 20,
                                                  "random": true,
                                                  "anim": {
                                                    "enable": false,
                                                    "speed": 40,
                                                    "size_min": 1,
                                                    "sync": true
                                                  }
                                                },
                                                "line_linked": {
                                                  "enable": true,
                                                  "distance": 150,
                                                  "color": "#F1B24A",
                                                  "opacity": 0.4,
                                                  "width": 1
                                                },
                                                "move": {
                                                  "enable": true,
                                                  "speed": 6,
                                                  "direction": "none",
                                                  "random": true,
                                                  "straight": false,
                                                  "out_mode": "out",
                                                  "bounce": false,
                                                  "attract": {
                                                    "enable": true,
                                                    "rotateX": 600,
                                                    "rotateY": 1200
                                                  }
                                                }
                                              },
                                              "interactivity": {
                                                "detect_on": "window",
                                                "events": {
                                                  "onhover": {
                                                    "enable": true,
                                                    "mode": "grab"
                                                  },
                                                  "onclick": {
                                                    "enable": true,
                                                    "mode": "push"
                                                  },
                                                  "resize": true
                                                },
                                                "modes": {
                                                  "grab": {
                                                    "distance": 200,
                                                    "line_linked": {
                                                      "opacity": 1
                                                    }
                                                  },
                                                  "bubble": {
                                                    "distance": 400,
                                                    "size": 40,
                                                    "duration": 2,
                                                    "opacity": 8,
                                                    "speed": 3
                                                  },
                                                  "repulse": {
                                                    "distance": 200,
                                                    "duration": 0.4
                                                  },
                                                  "push": {
                                                    "particles_nb": 4
                                                  },
                                                  "remove": {
                                                    "particles_nb": 2
                                                  }
                                                }
                                              },
                                              "retina_detect": true
                                            }}/>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%"
              }}>
              <header id="home">
               <nav id="nav-wrap">
                  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                  <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                  <ul id="nav" className="nav">
                     <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                     <li><a className="smoothscroll" href="#about">About</a></li>
                     <li><a className="smoothscroll" href="#resume">Resume</a></li>
                     <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  </ul>
               </nav>


               <div className="row banner">

                  <div className="banner-text">

                     <h1 className="responsive-headline">{name}</h1>
                     <h3>{description}.</h3>
                     <hr />
                     <ul className="social">
                        <a href={project} className="button btn project-btn"><i className="fa fa-book"></i>Project</a>
                        <a href={github} className="button btn github-btn"><i className="fa fa-github"></i>Github</a>
                     </ul>
                  </div>
               </div>
               <p className="scrolldown">
                  <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
               </p>
            </header>
            </div>
           </React.Fragment>
    );
  }
}

export default Header;
