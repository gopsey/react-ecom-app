import React from 'react'
import { Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Header from '../../components/ui/Header'

const Layout = () => {
   return (
      <>
         <Stack>
            <Header />
            <main>
               <Outlet />
            </main>
            {/* Footer here */}
         </Stack>
      </>
   )
}

export default Layout