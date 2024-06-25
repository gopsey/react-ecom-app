import React, { useEffect, useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductReviews from '../ProductReviews';
import ProductInformation from '../ProductInformation';
import ProductFaqs from '../ProductFaqs';

const TabNavigation = ({ productDataInput }) => {
   const [value, setValue] = useState('1');
   const [productInformationData, setProductInformationData] = useState(null);

   useEffect(() => {
      setProductInformationData(productDataInput)
   }, [productDataInput])

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };
   return (
      <>
         <TabContext value={value}>
            <TabList
               variant='fullWidth'
               value={value}
               onChange={handleChange}
               centered
               textColor='inherit'
               TabIndicatorProps={{ style: { backgroundColor: '#000000' } }}
               sx={{ borderBottom: '1px solid rgb(240, 240, 240)' }}
            >
               <Tab value='1' label="Product Details" sx={{ textTransform: 'capitalize' }} />
               <Tab value='2' label="Ratings & Reviews" sx={{ textTransform: 'capitalize' }} />
               <Tab value='3' label="FAQs" sx={{ textTransform: 'capitalize' }} />
            </TabList>
            <TabPanel value='1'>
               <ProductInformation productInformationData={productInformationData?.productInformationData} />
            </TabPanel>
            <TabPanel value='2'>
               <ProductReviews />
            </TabPanel>
            <TabPanel value='3'>
               <ProductFaqs productInformationData={productInformationData?.productInformationData} />
            </TabPanel>
         </TabContext>
      </>
   )
}

export default TabNavigation