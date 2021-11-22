import React from 'react'
import BtnRender from './BtnRender'

function ProductItem({product, isAdmin, deleteProduct, handleCheck}) {

    return (
        <div className="product_card">
            <BtnRender product={product} deleteProduct={deleteProduct} />
            {
                isAdmin && <input type="checkbox" checked={product.checked}
                onChange={() => handleCheck(product._id)} />
            }
           {/* { product.images.map((image)=>{return <img key={image.public_id} src={image.url} alt="" />})}
             
             {/*<img src={product.images[0].url} alt="" />*/}

            <div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <span>${product.price}</span>
                <p>{product.description}</p>
            </div>

            
            
        </div>
    )
}

export default ProductItem
