import React from 'react'
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
                  return <Grid item key={productItem?.productId} xs={gridProperties.xs} sm={gridProperties.sm} md={gridProperties.md} >
                     <ProductItem
                        productId={productItem.productId}
                        image={productItem.image}
                        title={productItem.title}
                        rating={productItem.rating}
                        currentPrice={productItem.currentPrice}
                        previousPrice={productItem.previousPrice}
                        discount={productItem.discount}>
                     </ProductItem>
                  </Grid>
               })
            }
         </Grid>
      </>
   )
}

export default ProductsGrid