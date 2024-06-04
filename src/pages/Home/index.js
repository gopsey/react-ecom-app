import React, { useEffect, useState } from 'react'
import { Divider, Container } from '@mui/material'
import Header from '../../components/ui/Header'
import ProductItem from '../../components/ui/ProductItem'
import MasonryGrid from '../../components/ui/MasonryGrid'
import HomeBanner from '../../components/ui/HomeBanner'
import HomeBrandsStack from '../../components/ui/HomeBrandsStack'
import CommonButton from '../../components/form/CommonButton'
import tee1 from "../../assets/svg/tee1.svg"
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"
import './Home.scss';

const Home = () => {
   const [newArrivals, setNewArrivals] = useState([]);

   // On Init
   useEffect(() => {
      const newArrivals = [
         {
            productId: 99871,
            image: tee1,
            title: 'T-Shirt with tape details',
            rating: 4.5,
            currentPrice: '$120',
            previousPrice: null,
            discount: null,
         }, {
            productId: 99872,
            image: jeans1,
            title: 'Skinny fit jeans',
            rating: 3.5,
            currentPrice: '$240',
            previousPrice: null,
            discount: null,
         }, {
            productId: 99873,
            image: shirt1,
            title: 'Checked Shirt',
            rating: 2.5,
            currentPrice: '$180',
            previousPrice: '$260',
            discount: '20%',
         }, {
            productId: 99874,
            image: tee2,
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
         },
      ]
      setNewArrivals(newArrivals)
   }, [])

   return (
      <>
         <section>
            <Header></Header>
         </section>
         <section className='home-section home-banner'>
            <HomeBanner></HomeBanner>
         </section>
         <section className='home-section home-brands'>
            <HomeBrandsStack></HomeBrandsStack>
         </section>
         <Container maxWidth='xl' className='container'>
            <section className='home-section'>
               <div className='section-title'>New Arrivals</div>
               <div className='products-wrapper'>
                  {
                     newArrivals.map((productItem) => {
                        //Mobile carousel MUI to be used for mobile view
                        return <ProductItem
                           productId={productItem.productId}
                           image={productItem.image}
                           title={productItem.title}
                           rating={productItem.rating}
                           currentPrice={productItem.currentPrice}
                           previousPrice={productItem.previousPrice}
                           discount={productItem.discount}
                           key={productItem?.productId}>
                        </ProductItem>
                     })
                  }
               </div>
               <div className='button-view-all'>
                  <CommonButton
                     variant='outlined'
                     bgColor={''}
                     btnText={'View All'}
                     color={'#000000'}
                     borderColor={'rgba(0,0,0,.1)'}></CommonButton>
               </div>
            </section>

            <Divider variant='fullWidth' className='divider' />

            <section className='home-section top-selling'>
               <div className='section-title'>Top Selling</div>
               <div className='products-wrapper'>
                  {
                     newArrivals.map((productItem) => {
                        //Mobile carousel MUI to be used for mobile view
                        return <ProductItem
                           productId={productItem.productId}
                           image={productItem.image}
                           title={productItem.title}
                           rating={productItem.rating}
                           currentPrice={productItem.currentPrice}
                           previousPrice={productItem.previousPrice}
                           discount={productItem.discount}
                           key={productItem?.productId}>
                        </ProductItem>
                     })
                  }
               </div>
               <div className='button-view-all'>
                  <CommonButton
                     variant='outlined'
                     bgColor={''}
                     btnText={'View All'}
                     color={'#000000'}
                     borderColor={'rgba(0,0,0,.1)'}></CommonButton>
               </div>
            </section>
            <section className='home-section browse-dress-style'>
               <div className='section-title'>Browse by dress style</div>
               <MasonryGrid></MasonryGrid>
            </section>
         </Container>
      </>
   )
}

export default Home