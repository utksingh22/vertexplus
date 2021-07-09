import React from 'react';
import classes from './Css/Sizechart.module.css'; 

function SizeChart(props) {
    return (
        <div className={classes.sizearray} style={{"width": (8*54)-14+"px"}}>
            <div style={{"transform": "translateX(" +props.moveX + "px)" }}>
                <div className={classes.sizes} style={{"width": ((props.sizes.length * 54) - 14)+"px"}}>
                    {props.sizes.map( (el, ind) => <div key={ind} className={[classes.size, classes[ el.active ? "active":null]].join(" ")} onClick={props.ringSel.bind(this, ind)} >{el.size}</div>)}
                </div>
            </div>            
        </div>
    );
}

export default SizeChart;