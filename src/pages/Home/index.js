import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import ProductItem from '../../components/ui/ProductItem';
import CommonButton from '../../components/form/CommonButton';
import tee1 from "../../assets/svg/tee1.svg";
import jeans1 from "../../assets/svg/jeans1.svg";
import shirt1 from "../../assets/svg/shirt1.svg";
import tee2 from "../../assets/svg/tee2.svg";
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

            <section className='home-section'>
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
         </Container>
      </>
   )
}

export default Home