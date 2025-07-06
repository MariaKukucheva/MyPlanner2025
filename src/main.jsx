import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigation from './Navigation.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Goals from './Goals/Goals.jsx'
import Events from './Events/Events.jsx'
import Notes from './Notes/Notes.jsx'
import Stats from './Stats.jsx'
import LightTheme from './LightTheme.jsx'
import { ThemeProvider } from '@mui/material/styles';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={LightTheme}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<App></App>}></Route> 
          <Route path='/Goals/goals' element={<Goals></Goals>}></Route> 
          <Route path='/Events/events' element={<Events></Events>}></Route> 
          <Route path='/Notes/notes' element={<Notes></Notes>}></Route> 
          <Route path='/Stats' element={<Stats></Stats>}></Route> 
        </Routes>
      </Router>
    </ThemeProvider>
    </LocalizationProvider>
  </StrictMode>
  ,
)
