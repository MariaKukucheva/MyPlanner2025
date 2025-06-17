import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navigation from './navigation.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Goals from './Goals.jsx'
import Events from './Events.jsx'
import Notes from './Notes.jsx'
import Stats from './Stats.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navigation />

      <Routes>
        <Route path='/' element={<App></App>}></Route> 
        <Route path='/goals' element={<Goals></Goals>}></Route> 
        <Route path='/events' element={<Events></Events>}></Route> 
        <Route path='/notes' element={<Notes></Notes>}></Route> 
        <Route path='/Stats' element={<Stats></Stats>}></Route> 
        
      </Routes>
    </Router>
  </StrictMode>
  ,
)
