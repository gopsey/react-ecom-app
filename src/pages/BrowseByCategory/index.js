import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import TuneIcon from '@mui/icons-material/Tune';
import ProductsGrid from '../../components/ui/ProductsGrid'
import CategoryFilter from '../../components/ui/CategoryFilter'
import CommonPagination from '../../components/ui/CommonPagination'
import ModalDialog from '../../components/ui/ModalDialog'
import CommonButton from '../../components/form/CommonButton'
import tee1 from "../../assets/svg/tee1.svg"
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"
import './BrowseByCategory.scss'

const BrowseByCategory = () => {
   const urlParam = useLocation()
   const [productsList, setProductsList] = useState([])
   const [gridProperties] = useState({
      flexWrap: 'wrap'
   })
   const [productsFilterButtonProps] = useState({
      variant: 'outlined', btnText: <TuneIcon />, color: '#000000', borderColor: 'rgba(0,0,0,0)', bgColor: 'rgb(240, 240, 240)'
   })
   const [pageNumber, setPageNumber] = useState(1);
   const [filterParameters, setFilterParameters] = useState({});
   const [filterDialog, setfilterDialog] = React.useState(false);

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
      const filterParams = {
         generalFilters: [
            {
               id: 'tshirts',
               description: 'T-Shirts'
            },
            {
               id: 'shorts',
               description: 'Shorts'
            },
            {
               id: 'shirts',
               description: 'Shirts'
            },
            {
               id: 'hoodie',
               description: 'Hoodie'
            },
            {
               id: 'jeans',
               description: 'Jeans'
            },
         ],
         pricesFilter: {
            startLimit: 0,
            endLimit: 300
         },
         colorsFilter: [
            { id: '00C12B', code: '#00C12B', isSelected: false, },
            { id: 'F50606', code: '#F50606', isSelected: false, },
            { id: 'F5DD06', code: '#F5DD06', isSelected: false, },
            { id: 'F57906', code: '#F57906', isSelected: false, },
            { id: '06CAF5', code: '#06CAF5', isSelected: false, },
            { id: '063AF5', code: '#063AF5', isSelected: false, },
            { id: '7D06F5', code: '#7D06F5', isSelected: false, },
            { id: 'F506A4', code: '#F506A4', isSelected: false, },
            { id: 'FFFFFF', code: '#FFFFFF', isSelected: false, },
            { id: '000000', code: '#000000', isSelected: false, },
         ],
         sizesFilter: [
            {
               id: 'xxSmall',
               description: 'XX-Small',
            },
            {
               id: 'xSmall',
               description: 'X-Small',
            },
            {
               id: 'small',
               description: 'Small',
            },
            {
               id: 'medium',
               description: 'Medium',
            },
            {
               id: 'large',
               description: 'Large',
            },
            {
               id: 'xLarge',
               description: 'X-Large',
            },
            {
               id: 'xxLarge',
               description: 'XX-Large',
            },
            {
               id: 'xxxLarge',
               description: '3X-Large',
            },
            {
               id: 'xxxxLarge',
               description: '4X-Large',
            },
         ],
         dressStyleFilter: [
            {
               id: 'casual',
               description: 'Casual'
            },
            {
               id: 'formal',
               description: 'Formal'
            },
            {
               id: 'party',
               description: 'Party'
            },
            {
               id: 'gym',
               description: 'Gym'
            },
         ]
      }
      // Make API call here with pathname as req and update response accordingly
      if (urlParam?.pathname === '/casual') {
         setProductsList(listOfProducts)
      }
      setFilterParameters(filterParams)
   }, [urlParam])

   // Trigger http call when pagination changes from child
   useEffect(() => {
      console.log('currentPageNumber: ', pageNumber)
   }, [pageNumber])

   const setCurrentPageNumber = (pageNo) => {
      setPageNumber(pageNo)
   }

   const onFilterApply = (filterValues) => {
      console.log(filterValues)
      filterDialogClose()
   }

   const filterDialogClose = () => {
      setfilterDialog(false)
   }

   const openFilterDialog = () => {
      setfilterDialog(true)
   }

   return (
      <>
         <Container maxWidth='xl'>
            <Divider variant='fullWidth' />
            <Grid container className='category-main' spacing={2}>
               <Grid item xs={12} sm={12} md={3} className='filter-component'>
                  <div className='category-filter'>
                     <CategoryFilter filterParameters={filterParameters} onFilterApply={onFilterApply} />
                  </div>
               </Grid>
               <Grid item xs={12} sm={12} md={9}>
                  <Stack direction='row' className='category-actions' alignItems='center'>
                     <div>
                        <span className='category-title'>Casual</span>
                     </div>
                     <div className='data-filter-info'>
                        <span className='count-products'>Showing 1-10 of 100 Products</span>
                        <span className='sort-products'>Sort by: Most popular V</span>
                        <div className='products-filter-button'>
                           <CommonButton {...productsFilterButtonProps} onButtonClick={openFilterDialog} />
                        </div>
                        <ModalDialog currentState={filterDialog} handleClose={filterDialogClose}>
                           <CategoryFilter filterParameters={filterParameters} onFilterApply={onFilterApply} />
                        </ModalDialog>
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