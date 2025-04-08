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
import { useNewArrivals } from '../../hooks/useProducts';
import { useCategories } from '../../hooks/useCategories';
import './Home.scss';

const Home = () => {
   const [gridProperties] = useState({
      flexWrap: 'nowrap'
   })
   const [prevSlide, setPrevSlide] = useState(false);
   const [nextSlide, setNextSlide] = useState(false);

   const { data: testimonialsData } = useTestimonials()
   const { data: newArrivalsData } = useNewArrivals()
   const { data: categoriesData } = useCategories()
   const masonryGridProperties = categoriesData?.map(category => {
      const longWidth = /Formal|Party/.test(category?.name)
      return (
         {
            gridText: category?.name,
            gridImage: category?.image,
            routeLink: `/categories/productsBy/${category?._id}`,
            xs: 12,
            sm: 12,
            lg: longWidth ? 8 : 4,
         }
      )
   })

   const viewAllClick = () => {
      
   }

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
               <ProductsGrid products={newArrivalsData} gridProperties={gridProperties}></ProductsGrid>
               <div className="button-view-wrapper">
                  <div className='button-view-all'>
                     <CommonButton
                        variant='outlined'
                        bgColor={''}
                        btnText={'View All'}
                        color={'#000000'}
                        borderColor={'rgba(0,0,0,.1)'}
                        onButtonClick={viewAllClick}></CommonButton>
                  </div>
               </div>
            </section>

            <Divider variant='fullWidth' className='divider' />

            <section className='home-section top-selling'>
               <div className='section-title'>Top Selling</div>
               <ProductsGrid products={newArrivalsData} gridProperties={gridProperties}></ProductsGrid>
               <div className="button-view-wrapper">
                  <div className='button-view-all'>
                     <CommonButton
                        variant='outlined'
                        bgColor={''}
                        btnText={'View All'}
                        color={'#000000'}
                        borderColor={'rgba(0,0,0,.1)'}
                        onButtonClick={viewAllClick}></CommonButton>
                  </div>
               </div>
            </section>
            <section className='home-section browse-dress-style'>
               <div className='section-title'>Browse by dress style</div>
               <MasonryGrid masonryGridProps={masonryGridProperties}></MasonryGrid>
            </section>
            <section className='home-section testimonials-carousel'>
               <div className='section-title testimony-wrapper'>Our Happy Customers
                  <div className='carousel-actions'>
                     <WestIcon className='left-arrow' onClick={() => setPrevSlide(!prevSlide)} />
                     <EastIcon className='right-arrow' onClick={() => setNextSlide(!nextSlide)} />
                  </div>
               </div>
               <TestimonialCarousel slidesData={testimonialsData} prevSlide={prevSlide} nextSlide={nextSlide} />
            </section>
         </Container>
      </>
   )
}

export default Home