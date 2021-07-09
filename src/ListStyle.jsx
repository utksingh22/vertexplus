import React from 'react';
import classes from './Css/ListStyle.module.css';

function listStyle (props){
    
    return (
        <div>
            <h3 className={classes.title}>{props.data.title} {props.current}</h3>
            <div className={classes.category}>
                {props.data.stones.map( (el, index) => <div key={index} className={classes.list} onClick={props.clicked.bind(this, props.data.title, index)}>
                    <div className={[classes.image, classes[el.curentlyactive && "active"]].join(" ")}>
                        < img src = {el.path} alt=''/>
                    </div>
                    <div className={classes.name}>{el.quality}</div>
                    <div className={classes.pop}>{el.popular}</div>
                </div>)}
            </div>            
        </div>
    );
}

listStyle.defaultProps = {
    popular: ''
}

export default listStyle;