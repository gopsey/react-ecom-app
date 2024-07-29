import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import ProductItem from '../../../components/ui/ProductItem'
import './ProductsGrid.scss'

const ProductsGrid = ({ products, gridProperties }) => {
   const [productsData, setProductsData] = useState([])

   useEffect(() => {
      products ? setProductsData(products) : setProductsData(null)
   }, [products])

   return (
      <>
         <Grid container className='products-wrapper' spacing={4} flexWrap={gridProperties.flexWrap}>
            {
               productsData && productsData.map((productItem) => {
                  const productItemId = productItem?._id;
                  const productItemDefaultVariantId = productItem?.variants ? productItem?.variants[0]?._id : '';
                  return (
                     <Grid item key={productItem?._id} className='product-item' >
                        <Link to={`/${productItemId}/${productItemDefaultVariantId}`} className='product-link'>
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