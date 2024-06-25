import React, { useEffect, useState } from 'react'
import './ProductInformation.scss'

const ProductInformation = ({ productInformationData }) => {
   const [productInfoData, setProductInfoData] = useState(null);

   useEffect(() => {
      setProductInfoData(productInformationData)
   }, [productInformationData])
   return (
      <>
         <div>
            <div className='product-information-description'>
               <span className='product-info-title'>Product Description</span>
               <span className='product-info-desc'>{productInfoData?.productDescription}</span>
            </div>
         </div>
      </>
   )
}

export default ProductInformation