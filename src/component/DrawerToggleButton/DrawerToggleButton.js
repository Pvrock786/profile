import React from 'react'

import classes from './DrawerToggleButton.module.css'

const DrawerToggleButton = props => (
  <button className={classes.toggle_button} onClick={props.click}>
    <div className={classes.toggle_button__line} />
    <div className={classes.toggle_button__line} />
    <div className={classes.toggle_button__line} />
  </button>
)

export default DrawerToggleButton 