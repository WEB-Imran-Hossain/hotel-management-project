// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../src/layouts/MainLayout'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
