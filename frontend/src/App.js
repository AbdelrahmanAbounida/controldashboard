
import './App.css';
import {MainHeader,Main} from './components';
import React from 'react';
import {Container} from '@mui/material'
import {Route, Routes }from 'react-router-dom'
import {Home, ManualControl, ControlPanel, LiveView, ConfigData, Settings, API, Register, Login,ResetPassword,ForgetPassword} from './components';
import { useSelector } from 'react-redux'
import Nav from './utils/Navbars/Nav';

function App() {

  const open = useSelector((state) => state.DrawerOpen.value)

  return (
    
      <div className="App">
        
        <Main open={open} >
          <Container  sx={{mt:9,ml:open? "13%" : "0"}}>
            <Nav />
          <Routes>
              <Route path="" element={<MainHeader />} >
                <Route path="" element={<Home />} />
                <Route path="manual_panel" element={<ManualControl />} />
                <Route path="control_panel" element={<ControlPanel />} />
                <Route path="/live" element={<LiveView />} />
                <Route path="/config_dataset" element={<ConfigData />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/api"  element={<API />} />
              </Route>
              <Route path="/register"  element={<Register />} />
              <Route path="/login"  element={<Login />} />
              <Route path="/forget_password"  element={<ForgetPassword />} />
              <Route path="/reset_password"  element={<ResetPassword />} />

          </Routes>
          </Container>
        </Main>
      </div>
  );
}

export default App;
