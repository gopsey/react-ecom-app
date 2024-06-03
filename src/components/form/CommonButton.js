import React from 'react'
import Button from '@mui/material/Button';

const CommonButton = ({ variant, bgColor, btnText, color, borderColor }) => {
   return (
      <Button
         variant={variant}
         style={{
            background: bgColor,
            borderRadius: 62,
            color,
            borderColor,
            textTransform: 'none',
            minWidth: '210px'
         }}
      >{btnText}</Button>
   )
}

export default CommonButton