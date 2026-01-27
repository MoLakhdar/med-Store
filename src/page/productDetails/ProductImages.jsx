import React from 'react'

function productImages({ product }) {
    return (
        <div className="images">
            <div className='big_img'>
                <img id='big_img' src={product.images[0]} alt={product.title} />

            </div>
            <div className="smal_img"  >
                {product.images.map((img, index) => (

                    <div className="dev_smal_img" key={index}>
                        <img  src={img} alt={product.title} onClick={() => document.getElementById('big_img').src = img} />

                    </div>
                ))}

            </div>
        </div>
    )
}

export default productImages