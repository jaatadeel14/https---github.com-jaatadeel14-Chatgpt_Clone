import './App.css';
import {Routes,Route} from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';

import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import {themeSettings} from './theme'

import NavBar from "./components/Navbar"
import Homepage from "./pages/Homepage"
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  const theme = useMemo(()=>createTheme(themeSettings(),[]));
  return (
    <>
        <ThemeProvider theme={theme}>
         <CssBaseline/> 

        <NavBar/>
        <Toaster/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/register' element={<Register/>} />  
          <Route path='/login' element={<Login/>} />  
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
