import React, {Component} from 'react';

import classes from './Css/ProductDescription.module.css';
import {data} from './productData';
import ListStyle from './ListStyle';
import SizeChart from './Sizechart';

const RING_SIZES = data.ringSizes.map(el => { return { size: el , active: false}});

class ProductDescription extends Component{
    state = {
        gemstones: JSON.parse(localStorage.getItem("gemstones")) ?? data.gemstone,
        currentStone: localStorage.getItem('stoneSel') ?? '', 
        caratWeight: JSON.parse(localStorage.getItem("caratWeights")) ?? data.caratWeight,
        currentCaratWeight: localStorage.getItem('weightSel') ?? '',    
        metalType: JSON.parse(localStorage.getItem("metalTypes")) ?? data.metalType,
        currentMetal: localStorage.getItem('metalSel') ?? '',
        ringSizes: JSON.parse(localStorage.getItem('ringSizes')) ?? [...RING_SIZES],
        currentSize: localStorage.getItem('currentRingSize') ?? '',
        movePos: 0,
        sizebtn1: true,
        sizebtn2: false,
    }

    findSelected = (title, index) => {
        let arr = []
        if(this.state.gemstones.title === title){
            arr = [...this.state.gemstones.stones];
            arr.forEach(el =>  el.curentlyactive = false);            
            arr[index].curentlyactive = true; 
            this.setState({currentStone: this.state.gemstones.stones[index].quality, gemstones: {...this.state.gemstones, stones: arr} });
            localStorage.setItem('stoneSel',  this.state.gemstones.stones[index].quality);
            localStorage.setItem('gemstones', JSON.stringify({...this.state.gemstones, stones: arr}));
        }
        else if(this.state.caratWeight.title === title){
            arr = [...this.state.caratWeight.stones];
            arr.forEach(el =>  el.curentlyactive = false);
            arr[index].curentlyactive = true;
            this.setState({currentCaratWeight: this.state.caratWeight.stones[index].quality, caratWeight: {...this.state.caratWeight, stones: arr}});
            localStorage.setItem('weightSel',  this.state.caratWeight.stones[index].quality);
            localStorage.setItem('caratWeights', JSON.stringify({...this.state.caratWeight, stones: arr}));
        }
        else{
            arr = [...this.state.metalType.stones];
            arr.forEach(el =>  el.curentlyactive = false);
            arr[index].curentlyactive = true;
            this.setState({currentMetal: this.state.metalType.stones[index].quality, metalType: {...this.state.metalType, stones: arr}});
            localStorage.setItem('metalSel',  this.state.metalType.stones[index].quality);
            localStorage.setItem('metalTypes', JSON.stringify({...this.state.metalType, stones: arr}));
        }
    }

    movesize = (val) => {
        this.setState(prev => {
            let value = prev.movePos + val;
            let btn1 = value === 0 ? true: false; 
            let btn2 = value === -864 ? true: false; 
            return { movePos: value, sizebtn1: btn1, sizebtn2: btn2}
        })        
    }

    ringSel = (index) => {
        const sizearray = [...this.state.ringSizes];
        sizearray.forEach(el => el.active = false);
        sizearray[index].active = true;
        this.setState({
            ringSizes: sizearray,
            currentSize: sizearray[index].size
        })
        localStorage.setItem("ringSizes", JSON.stringify(sizearray));
        localStorage.setItem("currentRingSize", sizearray[index].size);
    }


    render(){
        return (
            <div className={classes.productDescription}>
                <div className={classes.productTitle}>
                    <h2>Princess Diana Inspired Blue Sapphire Ring with Diamond Halo</h2> <span className={classes.productSku}> (SKU #: SR0169S)</span>
                </div>
                <div className={classes.ReviewSection}>
                    <span className={classes.reviewStars}>&#9733; &#9733; &#9733; &#9733; &#9733;</span> <span className={classes.reviews}>160 Reviews</span>
                </div>
                <div className={classes.priceContainer}>
                    <div className={classes.priceSec}>
                        <div className={classes.newprice}>$8,999</div>
                        <div className={classes.oldprice}><strike>$5,999</strike></div>
                    </div>
                    <div className={classes.orSec}>
                        <div className={classes.line}></div> OR <div className={classes.line}></div>   
                    </div>
                    <div className={classes.emioption}>
                        Easy Pay Installments Available
                        <div className={classes.emidropbox}>
                            <div>2 payments of $3,555</div>
                            <div className={classes.selectplan}>Select Plan </div>
                            <div className={classes.dropbox}>
                                <div className={classes.emiwrapper}>
                                    <div className={classes.emiheading}>Select Your Plan:</div>
                                    <div className={classes.crossOption}> </div>
                                </div> 
                                <div className={classes.selectpayment}>
                                    <div>2 payments of $2,999</div>
                                    <button>Select</button>
                                    <div className={classes.remove}>Remove</div>
                                </div> 
                                <div className={classes.dotteddiv}>
                                30% Off + Free Jewelry Gift(s) with code FOREVER applicable on easy pay Installments as well
                                </div>  
                                <div className={classes.otherDropdata}>
                                    {data.dropboxData.map( (p, i) => <div key={i}>
                                        <h3>{p.title}</h3>
                                        <ul>
                                            {p.data.map( (li, ind) => <li key={ind}>{li}</li>)}
                                        </ul>
                                    </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div>
                    <ListStyle data={this.state.gemstones} clicked={this.findSelected} current={this.state.currentStone}/>
                </div>

                <div>
                    <ListStyle data={this.state.caratWeight} clicked={this.findSelected} current={this.state.currentCaratWeight}/>
                </div>

                <div>
                    <ListStyle data={this.state.metalType} clicked={this.findSelected} current={this.state.currentMetal}/>
                </div>

                <div className={classes.sizeChart}>
                    <h3 className={classes.sizetitle}>Ring Size: {this.state.currentSize}</h3>
                    <div className={classes.sizes}>
                        <button disabled={this.state.sizebtn1} className={classes.sizeArrow1} onClick={this.movesize.bind(this, 216)}><i class="las la-angle-left"></i></button>
                        <button disabled={this.state.sizebtn2} className={classes.sizeArrow2} onClick={this.movesize.bind(this, -216)}><i class="las la-angle-right"></i></button>
                        <div className={classes.sizesChart}>
                            <SizeChart sizes={this.state.ringSizes} moveX={this.state.movePos} ringSel={this.ringSel}/>
                        </div>
                    </div>
                </div>

                <div className={classes.addTocart}>
                    Add To Cart
                </div>

                <div className={classes.aboutproduct}>
                    <h3 className={classes.productdetails}>Product Details</h3>
                    <p>At the core of a scintillating floral halo is an oval blue sapphire, held in a prong setting. This oval blue sapphire ring is inspired by Princess Diana's beautiful engagement ring. It is crafted in 14k white gold and bespeaks glamour and elegance.</p>
                    <h3 className={classes.certificate}>
                        <span><img src='./images/certificate.svg' alt=''/></span>
                        View Certificate of Authenticity</h3>
                    
                    <div className={classes.prodSpecs}>
                        <h4 className={classes.heading}>Product Specifications:</h4>
                        <div className={classes.row}>
                            <div >Angara Item #:</div>
                            <div>SR0169S</div>
                        </div>
                        <div className={classes.row}>
                            <div>Metal:</div>
                            <div>{this.state.currentMetal}</div>
                        </div>
                    </div>
                    <div className={classes.prodSpecs}>
                        <h4 className={classes.heading}>Gemstone Information:</h4>
                        <div className={classes.row}>
                            <div>Number of Oval Blue Sapphire:</div>
                            <div>1</div>
                        </div>
                        <div className={classes.row}>
                            <div>Enhancement:</div>
                            <div>Heated&nbsp; <i class="las la-question-circle"></i></div>
                        </div>
                        <div className={classes.row}>
                            <div>Approximate Dimensions:</div>
                            <div>8x6mm:&nbsp; <i class="las la-question-circle"></i></div>
                        </div>
                    </div>
                    <div className={classes.viewmore}><span className={classes.know}>View More</span></div>
                </div>

                <div className={classes.aboutproduct}>
                    <h3 className={classes.productdetails}>Shipping & Returns</h3>
                    <p>Every Angara item is custom made after your order is placed. The estimated arrival date is calculated based on the production time of your item. You can select the delivery date as per your preference at the cart page. All items are fully insured. For added security, an adult signature is required at the time of delivery.</p>
                    
                    
                    <div className={classes.prodSpecs}>
                        <h4 className={classes.heading}>Free Shipping</h4>
                        <div className={[classes.row, classes.shipingsecrow].join(" ")}>
                            <div className={classes.shipingsecrowcol1}><img src="./images/shipping.svg" alt='' /></div>
                            <div className={classes.shipingsecrowcol2}>Free Shipping and Free Return Shipping within the USA.</div>
                        </div>
                    </div>
                    <div className={[classes.prodSpecs, classes.shipingsec].join(" ") }>
                        <h4 className={classes.heading}>Free 30-Days Returns</h4>
                        <div className={[classes.row, classes.shipingsecrow].join(" ")}>
                            <div className={classes.shipingsecrowcol1}><img src="./images/return.svg" alt='' /></div>
                            <div className={classes.shipingsecrowcol2}>If you are not 100% satisfied with your purchase, you can return it for a full refund or exchange it within 30 days from Date of Delivery. Returns, including free gift(s), must be unworn and in the state that you received them.</div>
                        </div>
                    </div>
                    <div className={classes.viewmore}><span>Know More <i class="las la-question-circle"></i></span></div>
                </div>

                <div className={classes.otherData}>
                    <div className={classes.sharesec}>
                        <div className={classes.share}>Share</div>
                        <div className={[classes.icons, classes.face].join(" ")}><i class="lab la-facebook-f"></i></div>
                        <div className={[classes.icons, classes.pin].join(" ")}><i class="lab la-pinterest-p"></i></div>
                        <div className={[classes.icons, classes.twit].join(" ")}><i class="lab la-twitter"></i></div>
                    </div>
                    <div className={classes.hintwishlist}>
                        <div className={classes.hintsec}>
                            <div className={classes.share}>Hint It</div>
                            <div className={[classes.icons, classes.envel].join(" ")}><i class="las la-envelope"></i></div>
                        </div>
                        <div className={classes.wishsec}>
                            <div className={classes.share}>Wishlist</div>
                            <div className={[classes.icons, classes.heart].join(" ")}><i class="las la-heart"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};

export default ProductDescription;