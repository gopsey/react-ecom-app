import React, { useState } from 'react'

const CommonSnackbar = (openSnackbar) => {
   const [isOpenSnackbar, setIsOpenSnackbar] = useState(false)
   const openSnackbar = () => {
      setIsOpenSnackbar(true)
   }
   const handleClose = () => {
      setIsOpenSnackbar(false)
   }
   return (
      <Snackbar
         open={isOpenSnackbar}
         autoHideDuration={6000}
         onClose={handleClose}
         message="Note archived"
         // action={action}
      />
   )
}

export default CommonSnackbar