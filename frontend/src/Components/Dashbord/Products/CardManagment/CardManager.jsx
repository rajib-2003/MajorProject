import React from 'react'
import CardContent from './CardContent'
import Sidebar from '../../Sidebar'
import Profile from '../../Profile'

const CardManager = () => {

    return (
        <div className='dashboard'>
            <Sidebar/>
            <div className="dashboard--content">
                <CardContent/>
                <Profile/>
            </div>
        </div>
      )
  
}

export default CardManager