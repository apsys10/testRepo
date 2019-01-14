import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) =>
{
return <div className={classes.BuildControl}>
    <div className = {classes.Label}>
        {props.label}
    </div>
    <button disabled ={props.disabled} onClick = {props.removed} className={classes.Less}>less</button>
    <button className={classes.More}
    onClick = {props.added}>more</button>
</div>
};

export default buildControl;