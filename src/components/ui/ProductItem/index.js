import React from 'react'
import Rating from '@mui/material/Rating'
import Chip from '@mui/material/Chip'
import './ProductItem.scss'

const ProductItem = (props) => {
   const defaultVariant = props.variants[0];
   const mrp = defaultVariant.maximumRetailPrice;
   const currencyCode = defaultVariant.currencyCode;
   const discountPercentage = defaultVariant.discountPercent;
   const currentPrice = discountPercentage ? Math.trunc(mrp - (mrp * (discountPercentage / 100))) : Math.trunc(mrp);

   return (
      <>
         <div className='product-wrapper'>
            <div className='product-image'>
               <img src={props.productImages[0]} alt="" className='pdt-img' loading='lazy' />
            </div>
            <div className='product-details'>
               <span className='product-title'>{props.name}</span>
               <div className='product-ratings'>
                  <Rating value={props.rating} precision={0.5} readOnly></Rating> <span>{props.rating}/5</span>
               </div>
               <div className='product-price'>
                  <div className='current-price'>{currencyCode}{currentPrice.toLocaleString()}</div>
                  <div className='previous-price'><del>{currencyCode}{mrp.toLocaleString()}</del></div>
                  <Chip
                     variant='outlined'
                     color='error'
                     label={`-${discountPercentage}%`}
                     className='discount-price' />
               </div>
            </div>
         </div>
      </>
   )
}

export default ProductItem