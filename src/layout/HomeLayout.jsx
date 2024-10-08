import Leftbar from '@/components/Admin/Leftbar'
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import React from 'react'
import { Outlet, Route } from 'react-router-dom'

const HomeLayout = () => {

    return (
        <>
            <div className='h-screen w-screen overflow-x-hidden m-0 p-0  flex-col overflow-y-auto'style = {{ backgroundImage:'url(https://www.quintanaevents.com/wp-content/uploads/2024/04/quintana-homepage.jpg)'}}>
                
                
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default HomeLayout