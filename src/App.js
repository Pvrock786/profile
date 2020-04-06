import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {SectionsContainer, Section} from 'react-fullpage';
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
		let options = {
			sectionClassName:     'section',
			anchors:              ['sectionOne', 'sectionTwo', 'sectionThree' , 'sectionFour'],
			scrollBar:           false,
			navigation:          false,
			verticalAlign:       false,
			arrowNavigation:      false
		  };
        return ( 
            <div className="App">
				
	<SectionsContainer {...options}>
    <Section>
		   {/* //////////////////// HOME/////////////////// */}
		   <div className="home">
	
	<div className="header">
				  <h3 className="">My Portfolio</h3>
		  <nav className="navbar">
			  <ul>
				  <li><a href="#sectionOne">Home</a></li>
				  <li><a href="#sectionTwo">Skill</a></li>
				  <li><a href="#sectionThree">About</a></li>
				  
			  </ul>
			  
		  </nav>	  
	</div>
	<div className="toggle_button">
	<DrawerToggleButton click ={this.drawerToggleClickHandler}/>
	</div>
			  <SideDrawer show = {this.state.sideDrawerOpen}  click ={this.drawerToggleClickHandler}/>
			  {backdrop}
		  <h2 className="heading">WEB DEVELOPMENT </h2>
		 
	  <div className="social-link">
			  <a href ="https://github.com/Pvrock786"> <FaGithub/></a>
			  <a href ="http://praveen.shukla.77312477@fb.com"> <FaFacebook/></a>
			  <a href ="https://www.instagram.com/pv_shukla/"> <FaInstagram/></a>
			  <a href ="https://in.linkedin.com/in/praveen-shukla-3522b6162"> <FaLinkedinIn/></a>
		  </div>
		  <a className="btn" href="#sectionTwo">&#8964;</a>
  
    </div>
	    </Section>
    <Section>
		{/* ///////////////// SkILLS///////////////////// */}
  <div className="skills">
		 
			<h2 className="sk-head">MY SKILLS</h2>
			<hr/>
			<div className="interest">
				<img src= {html} alt="" />
        <img src= {css} alt="" />
        <img src= {js} alt="" />
        <img src= {angular} alt="" />
        <img src= {react} alt="" />
       
        {/* <img src= {mongo} alt="" /> */}
        {/* <img src= {photoshop} alt="" /> */}
		<img src= {mongo} alt="" />
		
        <img src= {firebase} alt="" />
        {/* <img src= {api} alt="" /> */}
        <img src= {word} alt="" />
        
        <img src= {node} alt="" />
        <img src= {git} alt="" />
       
			</div>
		</div>
		</Section>
		{/* //////////////////////// Skills #2 //////////////////////////// */}
		{/* <Section>
		
  <div className="skills">
		 
			<h2 className="sk-head">MY SKILLS</h2>
			<hr/>
			<div className="interest">
			
			
			</div>
		</div>
		</Section>*/}
    <Section> 
		{/* ///////////////////// ABOUT ///////////////////////// */}

<div className="about">
		  <h2 className="text-center me-about">ABOUT ME</h2>
		  <hr/>
	<div className="about-me">
		  <img src={profile} />
	<div className="me">
		  <h2 className="hello">HELLO, I'M PRAVEEN SHUKLA</h2>
		  <p className="me-desc">I'm a self taught web designer, developer. I'm currently part of a small web development team in an upcoming start-up, building web and mobile applications. My passion is to use technology based solutions, to help solve real world challenges. Competences: Languages and Frameworks: Javascript, HTML5, CSS3, jQuery, Bootstrap3, Angular js, React js,JavaScript. Tools & expertise: Git, Responsive Web Design, Agile Methodologies.</p>
	</div>
	</div>
	  </div>
	  </Section>
	  </SectionsContainer>
		{/* //////////////////////// CONTACT /////////////////////////// */}
   {/* <div className="contact" id="contact">
	
			<h2 className="c-hd">CONTACT US</h2>
			<hr/>
      <div className="get-touch">
			<input type="text" className="input" placeholder="Name"/>
			<input type="text" className="input" placeholder="E-mail"/>
			<textarea  className="textarea" placeholder="Message"></textarea>
		<br/>
    	<input type="submit" name="submit" value="Send" className="submit"/>
		</div>
	</div> */}
	
   
  
    </div>
         );
    }
}
 
export default App;