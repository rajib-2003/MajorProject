import React from 'react'
import Sidebar from './Sidebar'
import Content from './Content'
import Profile from './Profile'
import './Admin.css'

const AdminDashbaord = () => {
  return (
    <div className='dashboard'>
        <Sidebar/>
        <div className="dashboard--content ml-0">
            <Content/>
            <Profile/>
        </div>
    </div>
  )
}

export default AdminDashbaord