import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import BreadCrumbs from '../components/BreadCrumbs'

function MainLayout() {
  return (
    <>
       <div className='h-screen'>
       <div><Navbar/></div>
       <div><BreadCrumbs/></div>
        <main className='container flex flex-grow-1 bg-blend-lighten'>
            <Outlet/>
        </main>
        <div className='bg-green-950 shadow-emerald-700 text-slate-100'><Footer/></div>
       </div>
    </>
  )
}

export default MainLayout
