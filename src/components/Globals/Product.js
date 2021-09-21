import React from 'react'
import Img from 'gatsby-image'

export default function Product({product}) {
    return(
    
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{minHeight:"100"}}>
                <Img 
                    fluid={product.image.fluid} 
                    className="card-img-top" />
                    <h5>{product.title}</h5>
                    <h5>${product.price}</h5>
                    <button className="btn btn cybr-btn mt-3 mb-3 mx-auto text-capitalize snipcart-add-item"
                    style={{backgroundColor: "hsl(217, 100%, 21%)", width: "50px"}}
                    bsClass="custom-class"
                    data-item-id={product.id}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-url="https://capstone-website-ca.netlify.app/shop" //"localhost:8000/shop"
                    data-item-image={product.image.fluid.src}
                    >
                        Add to Cart<span aria-hidden></span>
                        <span aria-hidden class="cybr-btn__glitch">Add to Cart</span>
                        <span aria-hidden class="cybr-btn__tag"></span>
                    </button>
            </div>
        </div>
    )
}

// {category}<span aria-hidden></span>
// <span aria-hidden class="cybr-btn__glitch">{category}</span>
// <span aria-hidden class="cybr-btn__tag">R25</span>