// src/layouts/MainLayout.jsx
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout