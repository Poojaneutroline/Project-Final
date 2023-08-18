import React from 'react'
import Header from '../components/Header'
import SidebarOpt from '../components/SidebarOpt'
import OfferPage from '../components/Announcement/OfferPage'
const Announcement = () => {
  return (
    <div>
        <Header/>
        <div className='flex'> 
        <SidebarOpt/>
        <OfferPage/>
        </div>
             

    </div>
  )
}

export default Announcement
