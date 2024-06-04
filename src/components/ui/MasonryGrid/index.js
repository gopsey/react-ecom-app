import React from 'react'
import Grid from '@mui/material/Grid'
import casual from "../../../assets/svg/casual.svg"
import formal from "../../../assets/svg/formal.svg"
import party from "../../../assets/svg/party.svg"
import gym from "../../../assets/svg/gym.svg"
import "./MasonryGrid.scss"

const MasonryGrid = () => {

   return (
      <>
         <Grid container rowSpacing={2} columnSpacing={2}>
            <Grid item sm={12} lg={4}>
               <div className='grid-wrapper'>
                  <span className='grid-text'>Casual</span>
                  <img src={casual} alt="" loading='lazy' />
               </div>
            </Grid>
            <Grid item sm={12} lg={8}>
               <div className='grid-wrapper'>
                  <span className='grid-text'>Formal</span>
                  <img src={formal} alt="" loading='lazy' />
               </div>
            </Grid>
            <Grid item sm={12} lg={8}>
               <div className='grid-wrapper'>
                  <span className='grid-text'>Party</span>
                  <img src={party} alt="" loading='lazy' />
               </div>
            </Grid>
            <Grid item sm={12} lg={4}>
               <div className='grid-wrapper'>
                  <span className='grid-text'>Gym</span>
                  <img src={gym} alt="" loading='lazy' />
               </div>
            </Grid>
         </Grid>
      </>
   )
}

export default MasonryGrid