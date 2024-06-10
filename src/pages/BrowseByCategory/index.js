import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import './BrowseByCategory.scss'
import ProductsGrid from '../../components/ui/ProductsGrid'
import CategoryFilter from '../../components/ui/CategoryFilter'
import CommonPagination from '../../components/ui/CommonPagination'
import tee1 from "../../assets/svg/tee1.svg"
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"

const BrowseByCategory = () => {
   const urlParam = useLocation()
   const [productsList, setProductsList] = useState([])
   const [gridProperties] = useState({
      xs: 6,
      sm: 6,
      md: 4,
   })
   const [pageNumber, setPageNumber] = useState(1);

   const setCurrentPageNumber = (pageNo) => {
      setPageNumber(pageNo)
   }

   // On init
   useEffect(() => {
      console.log(urlParam.pathname);
      const listOfProducts = [
         {
            productId: 99871,
            defaultImage: tee1,
            productImages: [jeans1, shirt1, tee2],
            title: 'T-Shirt with tape details',
            rating: 4.5,
            currentPrice: '$120',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99872,
            defaultImage: jeans1,
            productImages: [jeans1, shirt1, tee2],
            title: 'Skinny fit jeans',
            rating: 3.5,
            currentPrice: '$240',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99873,
            defaultImage: shirt1,
            productImages: [jeans1, shirt1, tee2],
            title: 'Checked Shirt',
            rating: 2.5,
            currentPrice: '$180',
            previousPrice: '$260',
            discount: '20%',
            category: 'new-arrivals',
         }, {
            productId: 99855,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99874,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99866,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99824,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99888,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99899,
            defaultImage: tee2,
            productImages: [jeans1, shirt1, tee2],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         },
      ]
      // Make API call here with pathname as req and update response accordingly
      if (urlParam?.pathname === '/casual') {
         setProductsList(listOfProducts)
      }
   }, [urlParam])

   // Trigger http call when pagination changes from child
   useEffect(() => {
      console.log('currentPageNumber: ', pageNumber)
   }, [pageNumber])

   return (
      <>
         <Container maxWidth='xl'>
            <Divider variant='fullWidth' />
            <Grid container className='category-main' spacing={2}>
               <Grid item xs={12} sm={12} md={3}>
                  <CategoryFilter />
               </Grid>
               <Grid item xs={12} sm={12} md={9}>
                  <Stack direction='row' className='category-actions' alignItems='center'>
                     <div>
                        <span className='category-title'>Casual</span>
                     </div>
                     <div>
                        <span>Showing 1-10 of 100 Products</span>
                        <span>Sort by: Most popular V</span>
                     </div>
                  </Stack>
                  <ProductsGrid products={productsList} gridProperties={gridProperties} className='products-grid' />
                  <Divider variant='fullWidth' />
                  <CommonPagination setPageNumber={setCurrentPageNumber} />
               </Grid>
            </Grid>
         </Container>
      </>
   )
}

export default BrowseByCategory