import React, { useState } from 'react'

export const Sidebar = () => {
    const [sidebar,setsidebar]=useState(false)
  return (

    <div>
        <button className="hamburger" onClick={() => setsidebar(!sidebar)}>&#9776;</button>
        <div className={`sidebar ${sidebar ? 'open' : ''}`}>
            <div className='d-flex flex-column align-items-center justify-content-between h-100'>
        <div className='w-100'>
            <h5 className='py-3 text-center'>RK Flight</h5>
        <nav className='sidebar-links w-100'>
            <ul>
                <li className='active'><a href="#">Home</a></li>
                <li><a href="#">Ticket</a></li>
                <li><a href="#">Schedule</a></li>
                <li><a href="#">History</a></li>
                <li><a href="#">Support</a></li>
            </ul>
        </nav>
        </div>

            <nav className='sidebar-links w-100'>
                <ul>
                    <li><a href="#">Settings</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </div>
    
  )
}
