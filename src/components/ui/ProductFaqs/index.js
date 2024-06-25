import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './ProductFaqs.scss'

const ProductFaqs = ({ productInformationData }) => {
   const [productInfoData, setProductInfoData] = useState(null);
   useEffect(() => {
      setProductInfoData(productInformationData)
   }, [productInformationData])
   return (
      <>
         <div>
            <div className='product-information-faqs'>
               {
                  productInfoData && productInfoData.productFaqs.map((ele) => (
                     <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0' }} >
                           <span>{ele.question}</span>
                        </AccordionSummary>
                        <AccordionDetails>
                           <span>{ele.answer}</span>
                        </AccordionDetails>
                     </Accordion>
                  ))
               }

            </div>
         </div>
      </>
   )
}

export default ProductFaqs