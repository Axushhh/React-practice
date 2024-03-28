// this is our root file
// the work we have done here can also be done in app.jsx

import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet/> 
    <Footer/>
    </>
    // the outlet will use this return as base outlet 
    // means header and footer will be same and changes will come in outlet part
  )
}

export default Layout