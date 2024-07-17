import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './CommonChipGroup.scss'

const CommonChipGroup = (props) => {
   const { chipsList, selectedItem } = { ...props }
   const [updatedChipsList, setUpdatedChipsList] = useState(chipsList)

   useEffect(() => {
      setUpdatedChipsList(chipsList)
   }, [props.chipsList])

   const chipClickHandler = (key) => {
      key.isSelected = true;
      selectedItem(key) // Passing back selected chip to parent
      const chipsListToUpdate = updatedChipsList.map((chipItem) => ({ ...chipItem, isSelected: chipItem.id === key.id }))
      setUpdatedChipsList(chipsListToUpdate)
   }

   return (
      <>
         <div className='chips-wrapper'>
            <Stack direction="row" flexWrap="wrap" justifyContent="flex-start" gap="10px">
               {(updatedChipsList && updatedChipsList.map((chipItem) => {
                  return (
                     <div key={chipItem.id} >
                        <Chip
                           label={chipItem.description}
                           style={{
                              backgroundColor: chipItem.isSelected ? '#000000' : 'rgb(240, 240, 240)',
                              color: chipItem.isSelected ? '#FFFFFF' : 'rgba(0, 0, 0, 0.6)',
                              borderColor: 'transparent',
                              padding: '0 10px',
                           }}
                           onClick={() => chipClickHandler(chipItem)}
                        />
                     </div>
                  )
               }))}
            </Stack>
         </div>
      </>
   )
}

export default CommonChipGroup