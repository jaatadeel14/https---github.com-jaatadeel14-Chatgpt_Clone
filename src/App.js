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
import Summary from './pages/Summary';
import Paragraph from './pages/Paragraph'
import ChatBot from './pages/ChatBot';
import JsConverter from './pages/JsConvertor';
import ScifiImage from './pages/ScifiImage';

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
          <Route path="/summary" element={<Summary />} />
          <Route path="/paragraph" element={<Paragraph />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/js-convertor" element={<JsConverter />} />
          <Route path="/scifi-image" element={<ScifiImage />} />
        </Routes>
        </ThemeProvider>
    </>
  );
}

export default App;
