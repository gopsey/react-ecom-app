import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = (props) => {
   const { variant, bgColor, btnText, color, borderColor, onButtonClick } = { ...props };
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
         }}
         onClick={onButtonClick}
      >{btnText}</Button>
   )
}

export default CommonButton