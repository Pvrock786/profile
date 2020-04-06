import React from 'react'
import {Link} from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
      drawerClasses = 'side-drawer open';
      console.log(props.show)
    }
    return (
      <nav className={drawerClasses}>
        <ul>
        <li><a href="#sectionOne" onClick={props.click} >Home</a></li>
				  <li><a href="#sectionTwo" onClick={props.click}>Skill</a></li>
				  <li><a href="#sectionThree" onClick={props.click}>About</a></li>
				  <li><a href="#contact" onClick={props.click}> Contact</a></li>
        </ul>
      </nav>
    );
  };
  

export default SideDrawer