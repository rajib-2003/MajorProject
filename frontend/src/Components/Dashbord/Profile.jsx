import React from 'react'
import ProfileHeader from './ProfileHeader'
import './Profile.css'
import userimage from'../../assets/user.png'
const Profile = () => {
  return (

  
      <div className="user--profile">
        <div className="user--details">
          <img src={userimage} alt="" />
          <h3 className='username text-center'> Rajib Mahata</h3>
          <span className="profession">
            Admin
          </span>
          <span className="logintime">
            LoginTime-17/04/24 12:32:23
          </span>
        </div>
        <div className="user-courses">

        </div>
      </div>
  )
}

export default Profile