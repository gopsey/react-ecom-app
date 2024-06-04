import './Header.scss'
import React, { useEffect, useState } from 'react'
import { Button, AppBar, Container, Toolbar, Box, InputBase, IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
   const [headersList, setHeadersList] = useState([])
   // On Init
   useEffect(() => {
      const headers = ['Shop', 'On Sale', 'New Arrivals', 'Brands']
      setHeadersList(headers)
   }, [])

   return (
      <AppBar position='static' color='inherit'>
         <Container maxWidth='xl'>
            <Toolbar>
               <span className='app-icon'>Shop.co</span>
               <Box flexGrow='1' display={{ xs: 'none', md: 'flex' }} marginLeft='40px'>
                  {
                     headersList.map((header) => {
                        return <Button key={header}
                           sx={{ color: '#000000', textTransform: 'capitalize', }}>{header}</Button>
                     })
                  }
               </Box>
               <div className='search'>
                  <div className='search-icon-wrapper'>
                     <SearchIcon className='search-icon' />
                  </div>
                  <InputBase placeholder='Search for products...' className='search-input' ></InputBase>
               </div>
               <Box className='header-actions'>
                  <IconButton>
                     <ShoppingCartOutlinedIcon />
                  </IconButton>
                  <IconButton>
                     <AccountCircleOutlinedIcon />
                  </IconButton>
               </Box>
            </Toolbar>
         </Container>

      </AppBar>
   )
}

export default Header