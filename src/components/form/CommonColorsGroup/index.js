import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import './CommonColorsGroup.scss'

const CommonColorsGroup = (props) => {
   const { buttonsList, selectedItem } = { ...props }
   const [updatedButtonsList, setUpdatedButtonsList] = useState(getUniqueListBy(buttonsList, 'code'))

   const availableColorClickHandler = (key) => {
      key.isSelected = true;
      selectedItem(key) // Passing back selected color to parent
      const newUpdatedButtonsList = buttonsList.map((buttonItem) => ({ ...buttonItem, isSelected: buttonItem.code === key.code }))
      setUpdatedButtonsList(getUniqueListBy(newUpdatedButtonsList, 'code'))
   }

   useEffect(() => {
      setUpdatedButtonsList(getUniqueListBy(buttonsList, 'code'))
   }, [props.buttonsList])

   function getUniqueListBy(arr, key) {
      return [...new Map(arr?.map(item => [item[key], item])).values()]
   }

   return (
      <>
         <div className='colors-wrapper'>
            {(updatedButtonsList && updatedButtonsList.map((buttonItem) => {
               return (
                  <div
                     className='color-button-item'
                     key={buttonItem.code}
                     style={{ backgroundColor: `${buttonItem.code}` }}
                     onClick={() => availableColorClickHandler(buttonItem)}
                  >
                     {buttonItem.isSelected && <CheckIcon sx={{ color: buttonItem.code === '#FFFFFF' ? '#000000' : '#FFFFFF', fontSize: '18px' }} />}
                  </div>
               )
            }))}
         </div>
      </>
   )
}

export default CommonColorsGroup