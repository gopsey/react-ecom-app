import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import ProductItem from '../../../components/ui/ProductItem'
import './ProductsGrid.scss'

const ProductsGrid = ({ products, gridProperties }) => {
   return (
      <>
         <Grid container className='products-wrapper' spacing={4} flexWrap={gridProperties.flexWrap}>
            {
               products.map((productItem) => {
                  return (
                     <Grid item key={productItem?.productId} className='product-item' >
                        <Link to={`${productItem?.category}/${productItem?.productId}`} className='product-link'>
                           <ProductItem {...productItem} />
                        </Link>
                     </Grid>
                  )
               })
            }
         </Grid>
      </>
   )
}

export default ProductsGrid