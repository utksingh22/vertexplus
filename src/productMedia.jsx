import React, { useState } from 'react';
import Thumbnails from './thumb';
import classes from './Css/ProductMedia.module.css';
import image1 from './assets/images/SR0169S_3.webp';
import image2 from './assets/images/SR0169S_4.webp';
import image3 from './assets/images/SR0169S-WG-AAA-8x6.webp';
import image4 from './assets/images/SR0169S-WG-AAA-8x6_1.webp';
import image5 from './assets/images/SR0169S-WG-AAA-8x6_2.webp';
import image6 from './assets/images/SR0169S-WG-AAA-8x6_3.webp';
import image7 from './assets/images/SR0169S-WG-AAA-8x6_4.webp';
import image8 from './assets/images/gift-box-above-$2000.webp';


function ProductMedia () {

    const [Images, setImages] = useState([{image: image1, active: true}, {image: image2, active: false}, {image: image3, active: false}, {image: image4, active: false}, {image: image5, active: false}, {image: image6, active: false}, {image: image7, active: false}, {image: image8, active: false}]);

    const [imagee, setImage] = useState(Images[0].image);

    const setMainImage = (ind) => {
        setImage(Images[ind].image);
        const imgs = Images;
        imgs.forEach(img => img.active = false);
        imgs[ind].active = true;
        setImages(imgs);
    }   
    
    return (
        <div className={classes.productleftsec}>
            <div className={classes.productMedia}>
                <Thumbnails changed = {setMainImage} mouseEnter = {setMainImage} data={Images}/>
                <div className={classes.MainImage}>
                    <img src={imagee} alt="Princess Diana Inspired Blue Sapphire Ring with Diamond Halo - Side_1 - Thumbnail" />
                    <div className={classes.ProductTitle}>As Shown: Best | 1.90 ct.tw | 14K White Gold</div>
                </div>                
            </div>
        </div>
        
    );
};

export default ProductMedia;