import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
 import ScrollAnimation from 'react-animate-on-scroll';
import {SectionsContainer, Section} from 'react-fullpage';
import "animate.css/animate.min.css";
import home from './assets/image/home.jpg'
import html from './assets/image/html.png'
import css from './assets/image/css.png'
import js from './assets/image/js.png'
import angular from './assets/image/angular.png'
import react from './assets/image/react.png'
import mongo from './assets/image/mongo.png'
import git from './assets/image/git.webp'
import firebase from './assets/image/firebase.png'
import api from './assets/image/api.png'
 import profile from './assets/image/praveen.jpg'
import node from './assets/image/express.png'
import word from './assets/image/word.png'
import photoshop from './assets/image/photoshop.png'
import SideDrawer from './component/SideDrawer/SideDrawer'
import DrawerToggleButton from './component/DrawerToggleButton/DrawerToggleButton'
import Backdrop from './component/Backdrop/BackDrop'
import { FaGithub,FaFacebook ,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
class App extends Component {
	state = {
		sideDrawerOpen: false,  
	};	  
	drawerToggleClickHandler = () => {
		this.setState(prevState => {
			return { 
				sideDrawerOpen: !prevState.sideDrawerOpen
			};
			
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};
    render() { 
		let backdrop;
		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
		}
		console.log(this.state.sideDrawerOpen)

        return ( 
            <div className="App">
				
	{/* <SectionsContainer {...options}> */}
    {/* <Section> */}
		   {/* //////////////////// HOME/////////////////// */}
		   <div className="home" id= "home">
		  
	<div className="header">
				  <h3 className="">My Portfolio</h3>
		  <nav className="navbar">
			  <ul>
				  <li><a href="#home">Home</a></li>
				  <li><a href="#skills">Skills</a></li>
				  <li><a href="#about">About</a></li>
				  <li><a href="#education">Education</a></li>
				  
			  </ul>
			  
		  </nav>	  
	</div>
	<div className="toggle_button">
	<DrawerToggleButton click ={this.drawerToggleClickHandler} id="button"/>
	</div>
			  <SideDrawer show = {this.state.sideDrawerOpen}  click ={this.drawerToggleClickHandler}/>
			  {backdrop}
			  <ScrollAnimation animateIn="fadeInDown" duration = {3}  animateOnce={true}>
		  <h2 className="name-heading">Praveen  Shukla </h2>
		  <h4 className="quoto"> I'm here to to create beautiful design , that makes diffrence</h4>
		  </ScrollAnimation>
		  <ScrollAnimation animateIn="fadeInLeft" duration = {3}  animateOnce={true} >
	  <div className="social-link">
			  <a href ="https://github.com/Pvrock786"> <FaGithub/></a>
			  <a href ="http://praveen.shukla.77312477@fb.com"> <FaFacebook/></a>
			  <a href ="https://www.instagram.com/pv_shukla/"> <FaInstagram/></a>
			  <a href ="https://in.linkedin.com/in/praveen-shukla-3522b6162"> <FaLinkedinIn/></a>
		  </div>
		  </ScrollAnimation>
		  
			
		  <a className="btn" href="#skills">&#8964;</a>
		
	
    </div>
		{/* ****************************************  SKILLS   ********************************************* */}
    <div className="skills" id="skills">	 
			<h3 className="heading">MY SKILLS</h3>
			<hr/>
			<div className="interest">
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
				 <img src= {html} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
                 <img src= {css} alt = ""   className= "img"/>
		    </ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {js} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {angular} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true} className="scroll">
			     <img src= {react} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
                 <img src= {photoshop} alt = ""   className= "img"/>
		     </ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {mongo} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {firebase} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {word} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {git} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {node} alt = ""   className= "img"/>
			</ScrollAnimation>
			<ScrollAnimation animateIn="zoomIn" duration = {3}  animateOnce={true}>
			     <img src= {api} alt = ""   className= "img"/>
			</ScrollAnimation>
			</div>
	</div>
		{/* ****************************************ABOUT****************************************************** */}
<div className="about" id="about">
		  <h2 className="heading">ABOUT ME</h2>
		  <hr/>
	<div className="about-me">
		<div>
		<ScrollAnimation animateIn="fadeInLeft" duration= {2}  animateOnce={true} delay = {500}>
		  <img src={profile} className="img"/>
		  </ScrollAnimation>
		  </div>
	<div className="me">
	<ScrollAnimation animateIn="fadeInRight" duration= {2}  animateOnce={true}>
		  <h2 className="hello">HELLO, I'M PRAVEEN SHUKLA</h2>
		  <p className="me-desc">I'm a self taught web designer, developer. I'm currently part of a small web 
		  development team in an upcoming start-up, building web and mobile applications. My passion is to use 
		  technology based solutions, to help solve real world challenges. Competences: Languages and Frameworks:
		   Javascript, HTML5, CSS3, jQuery, Bootstrap3, Angular js, React js,JavaScript. Tools & expertise: Git, 
		   Responsive Web Design, Agile Methodologies.</p>
		  </ScrollAnimation>
		  	</div>
	</div>
	  </div>
          {/* ***********************************Education***************************************************** */}
		  <div className="education" id="education">
			   <h3 className = "heading edu"> EDUCATION</h3>
			    <hr/>
				<ScrollAnimation animateIn='fadeInLeft' duration = {3} animateOnce={true}>
                 <div className="card one">
					 <h5> Bachelor of Engineering (B.E), Computer Science</h5> 
					  <p> SLIET, Longowal, Punjab (Deemed University) </p>
					  <p> Year Of Starting: 2017</p>
				 </div>
				 </ScrollAnimation>
				 <ScrollAnimation animateIn='fadeInLeft' duration = {3}  delay={1000} animateOnce={true}>
				 <div className="card two">
					 <h5> XII (Senior Secondary), Science</h5> 
					  <p> CBSE Board (Brij Behari Sahai Vidya Mandir Kadilpur)    </p>
					  <p> Year of Completion: 2016</p>
				 </div>
				 </ScrollAnimation>
				 <ScrollAnimation animateIn='fadeInLeft' duration = {2}  delay={1300} animateOnce={true}>
				 <div className="card three">
					 <h5> X (Secondary) , Science</h5> 
					  <p> CSBE Board (Brij Behari Sahai Vidya Mandir Kadilpur)</p>
					  <p> Year of Completion: 2014</p>
				 </div>
				 </ScrollAnimation>
		  </div>
    </div>
         );
    }
}
 
export default App;