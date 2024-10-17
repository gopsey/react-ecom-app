import './Header.scss'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
   const [headersList, setHeadersList] = useState([])
   const [anchorElement, setAnchorElement] = useState(null)
   const openProfileMenu = Boolean(anchorElement)
   const navigate = useNavigate()
   const navigateToCart = () => navigate('/cart')

   // On Init
   useEffect(() => {
      const headers = ['Shop', 'On Sale', 'New Arrivals', 'Brands']
      setHeadersList(headers)
   }, [])

   const profileClickHandler = (event) => {
      setAnchorElement(event.currentTarget)
   }

   const profileCloseHandler = () => {
      setAnchorElement(null)
   }

   const profileItemClickHandler = () => {

      profileCloseHandler()
   }

   return (
      <AppBar position='static' color='inherit' elevation={0}>
         <Container maxWidth='xl'>
            <Toolbar className='top-toolbar' disableGutters>
               <IconButton className='toolbar-icon'>
                  <MenuIcon sx={{ color: '#000000' }} />
               </IconButton>
               <Link to='/' className='app-icon'>Shop.co</Link>
               <Box className='header-links'>
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
                  <IconButton className='responsive-search-icon'>
                     <SearchIcon sx={{ color: '#000000' }} />
                  </IconButton>
                  <IconButton onClick={navigateToCart}>
                     <ShoppingCartOutlinedIcon sx={{ color: '#000000' }} />
                  </IconButton>
                  <IconButton onClick={profileClickHandler}>
                     <AccountCircleOutlinedIcon sx={{ color: '#000000' }} />
                  </IconButton>
                  <Menu
                     anchorEl={anchorElement}
                     open={openProfileMenu}
                     onClose={profileCloseHandler}
                  >
                     <MenuItem onClick={profileItemClickHandler}>
                        <Link to='/login' className='grid-link'>Sign in</Link>
                     </MenuItem>
                     <MenuItem onClick={profileItemClickHandler}>Logout</MenuItem>
                  </Menu>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   )
}

export default Header