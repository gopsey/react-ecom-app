import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import CommonButton from '../../form/CommonButton'
import homebanner from '../../../assets/svg/homebanner.svg'
import homestar from '../../../assets/svg/homestar.svg'
import './HomeBanner.scss'

const HomeBanner = () => {
   const [bannerShopNowProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Shop Now', color: '#FFFFFF'
   })

   return (
      <>
         <div className='banner-wrapper'>
            <Grid container className='banner-container'>
               <Grid item className='banner-content' lg={6}>
                  <span className='banner-title'>Find clothes that matches your style</span>
                  <span className='banner-subtext'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</span>
                  <CommonButton {...bannerShopNowProps} className='banner-shop-now'></CommonButton>
                  <Stack
                     direction='row'
                     divider={<Divider orientation="vertical" flexItem />}
                     spacing={1}
                     className='banner-details'
                  >
                     <div className='banner-detail'>
                        <span className='banner-detail-text'>200+</span>
                        <span className='banner-detail-subtext'>International Brands</span></div>
                     <div className='banner-detail'>
                        <span className='banner-detail-text'>2000+</span>
                        <span className='banner-detail-subtext'>High-Quality Products</span></div>
                     <div className='banner-detail'>
                        <span className='banner-detail-text'>30,000+</span>
                        <span className='banner-detail-subtext'>Happy Customers</span></div>
                  </Stack>
               </Grid>
               <Grid item className='banner-extra-images' lg={6}>
                  <img src={homestar} alt="" className='banner-star-left' />
                  <img src={homestar} alt="" className='banner-star-right' />
               </Grid>
            </Grid>
            <img src={homebanner} alt="" className='banner-image' />
         </div>
      </>
   )
}

export default HomeBanner