import React from 'react'
import { Outlet } from 'react-router-dom'
import Stack from '@mui/material/Stack';
import Header from '../../components/ui/Header'
import Footer from '../../components/ui/Footer'

const Layout = () => {
   return (
      <>
         <Stack>
            <Header />
            <main>
               <Outlet />
            </main>
            <Footer />
         </Stack>
      </>
   )
}

export default Layout