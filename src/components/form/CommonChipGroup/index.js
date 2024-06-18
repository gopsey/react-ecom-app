import React, { useEffect, useState } from 'react'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './CommonChipGroup.scss'

const CommonChipGroup = (props) => {
   const { chipsList, selectedItem } = { ...props }
   const [updatedChipsList, setUpdatedChipsList] = useState(chipsList)

   useEffect(() => {
   }, [])

   const chipClickHandler = (key) => {
      const chipsListToUpdate = updatedChipsList.map((chipItem) => ({ ...chipItem, isSelected: chipItem.id === key }))
      setUpdatedChipsList(chipsListToUpdate)
      selectedItem(key) // Passing back selected color to parent
   }

   return (
      <>
         <div className='chips-wrapper'>
            <Stack direction="row" flexWrap="true" spacing={1}>
               {(updatedChipsList && updatedChipsList.map((chipItem) => {
                  return (
                     <div key={chipItem.id} >
                        <Chip
                           label={chipItem.description}
                           style={{
                              backgroundColor: chipItem.isSelected ? '#000000' : 'rgb(240, 240, 240)',
                              color: chipItem.isSelected ? '#FFFFFF' : '',
                              borderColor: 'transparent',
                              padding: '0 10px',
                           }}
                           onClick={() => chipClickHandler(chipItem.id)}
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