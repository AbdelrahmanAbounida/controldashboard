import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { openDrawer } from '../../features/DrawerOpen/DrawerOpenSlice';
import { showLogo } from '../../features/LogoAppear/LogoAppearSlice';

import {Stack,Button, Paper,Box, Typography} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useSelector, useDispatch } from 'react-redux'
import { AppBar } from '../../const/const';


const Nav = () => {
    const open = useSelector((state) => state.DrawerOpen.value)
    const logo = useSelector((state) => state.LogoAppear.value)

    const dispatch = useDispatch()
    const navigate = useNavigate()


  return (
    <AppBar position="fixed" open={open} >
        <Toolbar component={Paper} sx={{justifyContent:"space-between",backgroundColor:"secondary.dark"}}>
          <Stack direction="row">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={()=>{dispatch(openDrawer())}}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon sx={{fontSize:35,color:"#fff"}}/>
          </IconButton>
          <NavLink to={""}  style={{textDecoration:"none"}}><Typography variant="h3" sx={{color:"primary.dark",ml:1,mt:1,fontWeight:"bold", display:logo?'inherit':'none','&: hover':{color:"lightseagreen"}}}>PHR</Typography> </NavLink>
          
          </Stack>

          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" gap={2}>
                <Button onClick={()=>{navigate('login');dispatch(showLogo())}}  sx={{backgroundColor:"lightseagreen",borderRadius:1,color:"#fff"}} variant="contained">Login</Button>
                <Button onClick={()=>{navigate('register');dispatch(showLogo())}}  sx={{backgroundColor:"lightseagreen",borderRadius:1,color:"#fff"}} variant="contained">Register</Button>
            </Stack>
          </Box>

        </Toolbar>
      </AppBar>
  )
}

export default Nav