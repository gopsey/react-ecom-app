import React from 'react'
import { Link } from 'react-router-dom'
import Grid from '@mui/material/Grid'
import "./MasonryGrid.scss"

const MasonryGrid = ({ masonryGridProps }) => {

   return (
      <>
         <Grid container rowSpacing={2} columnSpacing={2}>
            {
               masonryGridProps?.map((gridProp) => {
                  return (
                     <Grid item xs={gridProp.xs} sm={gridProp.sm} lg={gridProp.lg} key={gridProp.gridText}>
                        <Link to={gridProp.routeLink} className='grid-link'>
                           <div className='grid-wrapper' style={{ backgroundImage: `url(${gridProp.gridImage})` }}>
                              <span className='grid-text'>{gridProp.gridText}</span>
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