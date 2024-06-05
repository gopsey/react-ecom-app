import React, { useEffect, useState } from 'react'
import { Divider, Container } from '@mui/material'
import MasonryGrid from '../../components/ui/MasonryGrid'
import HomeBanner from '../../components/ui/HomeBanner'
import HomeBrandsStack from '../../components/ui/HomeBrandsStack'
import ProductsGrid from '../../components/ui/ProductsGrid'
import CommonButton from '../../components/form/CommonButton'
import tee1 from "../../assets/svg/tee1.svg"
import jeans1 from "../../assets/svg/jeans1.svg"
import shirt1 from "../../assets/svg/shirt1.svg"
import tee2 from "../../assets/svg/tee2.svg"
import casual from "../../assets/svg/casual.svg"
import formal from "../../assets/svg/formal.svg"
import party from "../../assets/svg/party.svg"
import gym from "../../assets/svg/gym.svg"
import './Home.scss';

const Home = () => {
   const [newArrivals, setNewArrivals] = useState([]);
   const [masonryGridProps, setMasonryGridProps] = useState([]);
   const [gridProperties] = useState({
      xs: 6,
      sm: 6,
      md: 3,
   })

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
      const masonryGridProperties = [
         {
            gridText: 'Casual',
            gridImage: casual,
            routeLink: '/casual',
            sm: 12,
            lg: 4,
         },
         {
            gridText: 'Formal',
            gridImage: formal,
            routeLink: '/formal',
            sm: 12,
            lg: 8,
         },
         {
            gridText: 'Party',
            gridImage: party,
            routeLink: '/party',
            sm: 12,
            lg: 8,
         },
         {
            gridText: 'Gym',
            gridImage: gym,
            routeLink: '/gym',
            sm: 12,
            lg: 4,
         },
      ]
      setMasonryGridProps(masonryGridProperties)
      setNewArrivals(newArrivals)
   }, [])

   return (
      <>
         <section className='home-section home-banner'>
            <HomeBanner></HomeBanner>
         </section>
         <section className='home-section home-brands'>
            <HomeBrandsStack></HomeBrandsStack>
         </section>
         <Container maxWidth='xl' className='container'>
            <section className='home-section'>
               <div className='section-title'>New Arrivals</div>
               <ProductsGrid products={newArrivals} gridProperties={gridProperties}></ProductsGrid>
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
               <ProductsGrid products={newArrivals} gridProperties={gridProperties}></ProductsGrid>
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
               <MasonryGrid masonryGridProps={masonryGridProps}></MasonryGrid>
            </section>
         </Container>
      </>
   )
}

export default Home