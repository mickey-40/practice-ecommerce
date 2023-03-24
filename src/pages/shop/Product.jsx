import React from 'react'

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className='product'>
      <img src={productImage} alt='product' />
      <div className='description'>
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className='addToCartButton'> Add To Cart </button>
    </div>
  )
}


export default Product;
