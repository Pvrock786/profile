import React from 'react'
import {Link} from 'react-router-dom'
import './SideDrawer.css'
import { FaGithub,FaFacebook ,FaInstagram,FaLinkedinIn} from 'react-icons/fa';
const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
      drawerClasses = 'side-drawer open';
      console.log(props.show)
    }
    return (
      <nav className={drawerClasses}>
        <ul>
        <li><a href="#home" onClick={props.click} >Home</a></li>
				  <li><a href="#skills" onClick={props.click}>Skill</a></li>
				  <li><a href="#about" onClick={props.click}>About</a></li>
          <li><a href="#education" onClick={props.click}>Education</a></li>
        
          <div className="social-link-mobile">
          <a href ="https://github.com/Pvrock786"> <FaGithub/></a>
			  <a href ="http://praveen.shukla.77312477@fb.com"> <FaFacebook/></a>
			  <a href ="https://www.instagram.com/pv_shukla/"> <FaInstagram/></a>
			  <a href ="https://in.linkedin.com/in/praveen-shukla-3522b6162"> <FaLinkedinIn/></a>
		  </div>
        </ul>
       
      </nav>
    );
  };
  

export default SideDrawer