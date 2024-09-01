// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import MainLayout from '../src/layouts/MainLayout'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Container from './components/users/Container'

function App() {
  return (
    <Routes>
    {/* MainLayout is applied to all nested routes */}
    <Route path="/" element={<MainLayout />}>
      {/* Home page can be accessed from the root path as well as /home */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="container" element={<Container />} /> {/* Route for the Container component */}
    </Route>
  </Routes>
  )
}

export default App
