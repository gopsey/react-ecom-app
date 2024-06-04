import React, { useState } from 'react'
import Stack from '@mui/material/Stack'
import versace from "../../../assets/svg/versace.svg"
import zara from "../../../assets/svg/zara.svg"
import gucci from "../../../assets/svg/gucci.svg"
import prada from "../../../assets/svg/prada.svg"
import ck from "../../../assets/svg/ck.svg"

const HomeBrandsStack = () => {
   const [brandLogos] = useState([versace, zara, gucci, prada, ck])
   return (
      <>
         <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='space-evenly'
            className='brand-logos-stack'
         >
            {
               brandLogos.map((brandLogo, i) => {
                  return <img src={brandLogo} alt="" className='brand-img' key={`brand-${i + 1}`} loading='lazy' />
               })
            }
         </Stack>
      </>
   )
}

export default HomeBrandsStack