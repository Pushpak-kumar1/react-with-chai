import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Headers />
    <Outlet />  // jha pr ye likh dete waha uske uper niche wale same rehte hai but khud change ho skta hai
    <Footer />
    </>
  )
}
