import React, { useEffect, useState } from 'react'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import MasonryGrid from '../../components/ui/MasonryGrid'
import HomeBanner from '../../components/ui/HomeBanner'
import HomeBrandsStack from '../../components/ui/HomeBrandsStack'
import ProductsGrid from '../../components/ui/ProductsGrid'
import TestimonialCarousel from '../../components/ui/TestimonialCarousel'
import CommonButton from '../../components/form/CommonButton'
import { useTestimonials } from '../../hooks/useTestimonials';
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
      flexWrap: 'nowrap'
   })
   const [prevSlide, setPrevSlide] = useState(false);
   const [nextSlide, setNextSlide] = useState(false);

   const { data } = useTestimonials()

   // On Init
   useEffect(() => {
      const newArrivals = [
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
            productImages: [shirt1, tee1, tee2],
            title: 'Skinny fit jeans',
            rating: 3.5,
            currentPrice: '$240',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         }, {
            productId: 99873,
            defaultImage: shirt1,
            productImages: [tee1, tee2, jeans1],
            title: 'Checked Shirt',
            rating: 2.5,
            currentPrice: '$180',
            previousPrice: '$260',
            discount: '20%',
            category: 'new-arrivals',
         }, {
            productId: 99874,
            defaultImage: tee2,
            productImages: [tee1, jeans1, shirt1],
            title: 'Sleeved strioped T-Shirt',
            rating: 5,
            currentPrice: '$130',
            previousPrice: null,
            discount: null,
            category: 'new-arrivals',
         },
      ]
      const masonryGridProperties = [
         {
            gridText: 'Casual',
            gridImage: casual,
            routeLink: '/casual',
            xs: 12,
            sm: 12,
            lg: 4,
         },
         {
            gridText: 'Formal',
            gridImage: formal,
            routeLink: '/formal',
            xs: 12,
            sm: 12,
            lg: 8,
         },
         {
            gridText: 'Party',
            gridImage: party,
            routeLink: '/party',
            xs: 12,
            sm: 12,
            lg: 8,
         },
         {
            gridText: 'Gym',
            gridImage: gym,
            routeLink: '/gym',
            xs: 12,
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
               <div className="button-view-wrapper">
                  <div className='button-view-all'>
                     <CommonButton
                        variant='outlined'
                        bgColor={''}
                        btnText={'View All'}
                        color={'#000000'}
                        borderColor={'rgba(0,0,0,.1)'}></CommonButton>
                  </div>
               </div>
            </section>

            <Divider variant='fullWidth' className='divider' />

            <section className='home-section top-selling'>
               <div className='section-title'>Top Selling</div>
               <ProductsGrid products={newArrivals} gridProperties={gridProperties}></ProductsGrid>
               <div className="button-view-wrapper">
                  <div className='button-view-all'>
                     <CommonButton
                        variant='outlined'
                        bgColor={''}
                        btnText={'View All'}
                        color={'#000000'}
                        borderColor={'rgba(0,0,0,.1)'}></CommonButton>
                  </div>
               </div>
            </section>
            <section className='home-section browse-dress-style'>
               <div className='section-title'>Browse by dress style</div>
               <MasonryGrid masonryGridProps={masonryGridProps}></MasonryGrid>
            </section>
            <section className='home-section testimonials-carousel'>
               <div className='section-title testimony-wrapper'>Our Happy Customers
                  <div className='carousel-actions'>
                     <WestIcon className='left-arrow' onClick={() => setPrevSlide(!prevSlide)} />
                     <EastIcon className='right-arrow' onClick={() => setNextSlide(!nextSlide)} />
                  </div>
               </div>
               <TestimonialCarousel slidesData={data} prevSlide={prevSlide} nextSlide={nextSlide} />
            </section>
         </Container>
      </>
   )
}

export default Home