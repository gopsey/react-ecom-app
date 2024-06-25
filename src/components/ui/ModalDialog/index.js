import React from 'react'
import Dialog from '@mui/material/Dialog';
import './ModalDialog.scss'

const ModalDialog = ({ children, currentState, handleClose }) => {
   return (
      <>
         <Dialog
            open={currentState}
            onClose={handleClose}
            fullScreen
            PaperProps={{
               style: {
                  marginTop: '100px',
                  borderRadius: '20px'
               }
            }}
            aria-labelledby="responsive-dialog-title"
         >
            <div className='dialog-child-wrapper'>
               {children}
            </div>
         </Dialog>
      </>
   )
}

export default ModalDialog