import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import ProductItem from '../../../components/ui/ProductItem'
import './ProductsGrid.scss'

const ProductsGrid = ({ products }) => {
   return (
      <>
         <Stack direction='row' container className='products-wrapper' spacing={4}>
            {
               products.map((productItem) => {
                  //Mobile carousel MUI to be used for mobile view
                  return (
                     <Grid item key={productItem?.productId} >
                        <Link to={`${productItem?.category}/${productItem?.productId}`} className='product-link'>
                           <ProductItem {...productItem} />
                        </Link>
                     </Grid>
                  )
               })
            }
         </Stack>
      </>
   )
}

export default ProductsGrid