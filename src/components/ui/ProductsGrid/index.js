import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import './ProductsGrid.scss'
import ProductItem from '../../../components/ui/ProductItem'

const ProductsGrid = ({ products, gridProperties }) => {
   return (
      <>
         <Grid container className='products-wrapper' spacing={4}>
            {
               products.map((productItem) => {
                  //Mobile carousel MUI to be used for mobile view
                  return (
                     <Grid item key={productItem?.productId} xs={gridProperties.xs} sm={gridProperties.sm} md={gridProperties.md} >
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