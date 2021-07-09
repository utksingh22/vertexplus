import React from 'react';
import image1 from './assets/images/SR0169S_3.webp';
import image2 from './assets/images/SR0169S_4.webp';
import image3 from './assets/images/SR0169S-WG-AAA-8x6.webp';
import image4 from './assets/images/SR0169S-WG-AAA-8x6_1.webp';
import image5 from './assets/images/SR0169S-WG-AAA-8x6_2.webp';
import image6 from './assets/images/SR0169S-WG-AAA-8x6_3.webp';
import image7 from './assets/images/SR0169S-WG-AAA-8x6_4.webp';
import image8 from './assets/images/gift-box-above-$2000.webp';
import classes from './Css/Thumb.module.css';

const IMAGES = [image1, image2, image3, image4, image5, image6, image7, image8];

function thumbnails (props) {
    return (
        <div className={classes.Thumb}>
            {IMAGES.map( (image, index) => <div key={index} className={[classes.Thumbinner, classes[props.data[index].active ? "active": null]].join(" ")} onChange={ () => props.changed(index)} onMouseEnter={() => props.mouseEnter(index)} >
                <img src={image} alt="Princess Diana Inspired Blue Sapphire Ring with Diamond Halo - Side_1 - Thumbnail" />
            </div>)}            
        </div>
    );
};

export default thumbnails;