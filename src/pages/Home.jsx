// src/pages/Home.jsx
import React from 'react'
import { motion } from 'framer-motion'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="p-4"
    >
      <Banner />
      <h1 className="text-2xl font-bold mt-8 text-black">Home Page Content</h1>
      <p>This is where your main content goes.</p>
    </motion.div>
  )
}

export default Home