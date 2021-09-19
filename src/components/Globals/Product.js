import React from 'react'
import Img from 'gatsby-image'

export default function Product({product}) {
    return(
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{minHeight:"100"}}>
                <Img 
                    fluid={product.image.fluid} 
                    className="card-img-top" />
                    <h6>{product.title}</h6>
                    <h6>${product.price}</h6>
                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                    data-item-id={product.id}
                    data-item-name={product.title}
                    data-item-price={product.price}
                    data-item-url="localhost:8000/shop" //https://capstone-website-ca.netlify.app/shop
                    data-item-image={product.image.fluid.src}
                    >
                        Add to Cart
                    </button>
            </div>
        </div>
    )
}