import React from 'react';

import classes from './BackDrop.module.css';

const BackDrop = ({ click }) => (
	<div className={classes.backdrop} onClick={click} />
);

export default BackDrop;
