import React from 'react'
import Sidebar from '../../Sidebar'
import ContentHeader from '../../ContentHeader'
import Card from '../../Card'
import UserList from '../../UserList'

const CardContent = () => {
  return (
    <div className="dashboard">
      
      <div className="main-reg">
        <div className="reg">
          <ContentHeader />
        </div>
        <div className="user-table">
          <UserList />
        </div>
      </div>
    </div>
  )
}

export default CardContent
