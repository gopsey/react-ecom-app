import React from 'react'
import { Rating, Chip } from '@mui/material'
import './ProductItem.scss'

const ProductItem = (props) => {

   return (
      <>
         <div className='product-wrapper'>
            <div className='product-image'>
               <img src={props.defaultImage} alt="" className='pdt-img' loading='lazy' />
            </div>
            <div className='product-details'>
               <div className='product-title'>{props.title}</div>
               <div className='product-ratings'>
                  <Rating value={props.rating} precision={0.5} readOnly></Rating> <span>{props.rating}/5</span>
               </div>
               <div className='product-price'>
                  <div className='current-price'>{props.currentPrice}</div>
                  {props.previousPrice && <div className='previous-price'><del>{props.previousPrice}</del></div>}
                  {props.discount &&
                     <Chip
                        variant='outlined'
                        color='error'
                        label={`-${props.discount}`}
                        className='discount-price' />}
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductItem