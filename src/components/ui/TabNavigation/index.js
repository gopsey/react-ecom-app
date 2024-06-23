import React, { useState } from 'react'
import Tab from '@mui/material/Tab';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductReviews from '../ProductReviews';

const TabNavigation = () => {
   const [value, setValue] = useState('1');

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
               <Tab value='1' label="Product Details" />
               <Tab value='2' label="Ratings & Reviews" />
               <Tab value='3' label="FAQs" />
            </TabList>
            <TabPanel value='1'>
               Item One
            </TabPanel>
            <TabPanel value='2'>
               <ProductReviews />
            </TabPanel>
            <TabPanel value='3'>
               Item Three
            </TabPanel>
         </TabContext>
      </>
   )
}

export default TabNavigation