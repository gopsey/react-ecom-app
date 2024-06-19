import React, { useEffect, useState } from 'react'
import CheckIcon from '@mui/icons-material/Check'
import './CommonColorsGroup.scss'

const CommonColorsGroup = (props) => {
   const { buttonsList, selectedItem } = { ...props }
   const [updatedButtonsList, setUpdatedButtonsList] = useState(buttonsList)

   const availableColorClickHandler = (key) => {
      // selectedItem(key) // Passing back selected color to parent
      const newUpdatedButtonsList = buttonsList.map((buttonItem) => ({ ...buttonItem, isSelected: buttonItem.id === key.id }))
      setUpdatedButtonsList(newUpdatedButtonsList)
   }

   useEffect(() => {
      setUpdatedButtonsList(buttonsList)
   }, [props.buttonsList])

   return (
      <>
         <div className='colors-wrapper'>
            {(updatedButtonsList && updatedButtonsList.map((buttonItem) => {
               return (
                  <div
                     className='color-button-item'
                     key={buttonItem.id}
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