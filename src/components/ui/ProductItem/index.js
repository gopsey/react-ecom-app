import React from 'react'
import { Rating, Chip } from '@mui/material'
import './ProductItem.scss'

const ProductItem = ({ productId, image, title, rating, currentPrice, previousPrice, discount }) => {

   return (
      <>
         <div className='product-wrapper'>
            <div className='product-image'>
               <img src={image} alt="" className='pdt-img' loading='lazy' />
            </div>
            <div className='product-details'>
               <div className='product-title'>{title}</div>
               <div className='product-ratings'>
                  <Rating value={rating} precision={0.5} readOnly></Rating> <span>{rating}/5</span>
               </div>
               <div className='product-price'>
                  <div className='current-price'>{currentPrice}</div>
                  {previousPrice && <div className='previous-price'><del>{previousPrice}</del></div>}
                  {discount &&
                     <Chip
                        variant='outlined'
                        color='error'
                        label={`-${discount}`}
                        className='discount-price' />}
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductItem