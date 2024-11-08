import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = (props) => {
   const { variant, bgColor, btnText, color, borderColor, onButtonClick, startIcon, endIcon } = { ...props };
   const triggerOnButtonClick = () => {
      onButtonClick()
   }
   return (
      <Button
         variant={variant}
         style={{
            background: bgColor,
            borderRadius: 62,
            color,
            borderColor,
            textTransform: 'none',
            width: '100%',
            height: '44px',
            alignContent: 'center',
         }}
         onClick={triggerOnButtonClick}
         startIcon={startIcon}
         endIcon={endIcon}
      >{btnText}</Button>
   )
}

export default CommonButton