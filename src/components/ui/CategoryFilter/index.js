import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Divider from "@mui/material/Divider";
import Slider from '@mui/material/Slider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CommonColorsGroup from '../../form/CommonColorsGroup';
import CommonChipGroup from '../../form/CommonChipGroup';
import CommonButton from '../../form/CommonButton';
import './CategoryFilter.scss'

function valuetext(value) {
   return `${value}$`;
}

const CategoryFilter = ({ filterParameters }) => {
   const [priceRangeValue, setPriceRangeValue] = useState([0, 300]);
   const [colorsListData, setColorsListData] = useState([])
   const [selectedColorItem, setSelectedColorItem] = useState('')
   const [sizesListData, setSizesListData] = useState([])
   const [selectedSizeItem, setSelectedSizeItem] = useState('')
   const [applyFilterButtonProps] = useState({
      variant: 'contained', bgColor: '#000000', btnText: 'Apply Filter', color: '#FFFFFF'
   })

   const handleChange = (event, newValue) => {
      setPriceRangeValue(newValue);
   };

   useEffect(() => {
      setColorsListData(filterParameters?.colorsFilter)
      setSizesListData(filterParameters?.sizesFilter)
   }, [filterParameters])

   return (
      <>
         <div className='filter-wrapper'>
            <div className='filter-category'>
               <div className='filter-category-title'>
                  <span className='category-title'>Filters</span>
                  <TuneIcon className='filter-icon' />
               </div>
               <Divider />
               <div className='filter-items'>
                  {
                     filterParameters?.generalFilters?.map((filterItem) => {
                        return (
                           <div className='filter-item' key={filterItem.id}>
                              <span>{filterItem.description}</span>
                              <ChevronRightIcon />
                           </div>
                        )
                     })
                  }
               </div>
            </div>
            <Divider />
            <div className='filter-category'>
               <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0' }} >
                     <span className='category-title'>Price</span>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div>
                        <Slider
                           getAriaLabel={() => 'Price range'}
                           value={priceRangeValue}
                           onChange={handleChange}
                           valueLabelDisplay="on"
                           getAriaValueText={valuetext}
                           sx={{ color: '#000000' }}
                        />
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <Divider />
            <div className='filter-category'>
               <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0' }} >
                     <span className='category-title'>Colors</span>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className='colors-filter'>
                        <div className='available-colors'>
                           <CommonColorsGroup buttonsList={colorsListData} selectedItem={setSelectedColorItem} />
                        </div>
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <Divider />
            <div className='filter-category'>
               <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0' }} >
                     <span className='category-title'>Size</span>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className='filter-items accordion-content'>
                        <CommonChipGroup chipsList={sizesListData} selectedItem={setSelectedSizeItem} />
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <Divider />
            <div className='filter-category'>
               <Accordion defaultExpanded sx={{ border: 'none', boxShadow: 'none' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: '0' }} >
                     <span className='category-title'>Dress Style</span>
                  </AccordionSummary>
                  <AccordionDetails>
                     <div className='filter-items accordion-content'>
                        {
                           filterParameters?.dressStyleFilter?.map((filterItem) => {
                              return (
                                 <div className='filter-item' key={filterItem.id}>
                                    <span>{filterItem.description}</span>
                                    <ChevronRightIcon />
                                 </div>
                              )
                           })
                        }
                     </div>
                  </AccordionDetails>
               </Accordion>
            </div>
            <div className='filter-category'>
               <div className='apply-filter-button-wrapper'>
                  <CommonButton {...applyFilterButtonProps} />
               </div>
            </div>
         </div>
      </>
   )
}

export default CategoryFilter