import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
// import Details from './pages/Details'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        {/* <Route exact path="/:id" element={<Details />} /> */}
      </Routes>
    </Router>
  )
}

export default App
