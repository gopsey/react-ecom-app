import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import "./MasonryGrid.scss"

const MasonryGrid = ({ masonryGridProps }) => {

   return (
      <>
         <Grid container rowSpacing={2} columnSpacing={2}>
            {
               masonryGridProps.map((gridProp) => {
                  return (
                     <Grid item sm={gridProp.sm} lg={gridProp.lg} key={gridProp.gridText}>
                        <Link to={gridProp.routeLink} style={{ color: 'inherit' }}>
                           <div className='grid-wrapper'>
                              <span className='grid-text'>{gridProp.gridText}</span>
                              <img src={gridProp.gridImage} alt="" loading='lazy' />
                           </div>
                        </Link>
                     </Grid>
                  )
               })
            }
         </Grid>
      </>
   )
}

export default MasonryGrid