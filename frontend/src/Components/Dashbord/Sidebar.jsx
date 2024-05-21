import React, { useState } from 'react';
import { TbListDetails } from 'react-icons/tb';
import { PiUserListFill } from 'react-icons/pi';
import { BiBookAlt, BiHome } from 'react-icons/bi';
import { GrDeliver } from 'react-icons/gr';
import { RiAdminFill } from 'react-icons/ri';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };

  return (
    <div className='menu'>
      <div className='logo'>
        <img
          src='file:///C:/Users/Rajib%20Mahata/Downloads/states-foods--dress-logo-zip-file/pdf/logo-color.pdf'
          alt='Logo'
        />
      </div>

      <div className='menu--list'>
        <Link
          to='/dashbord/cards-manager'
          className={`item ${activeItem === '/dashboard/cards-management' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard/cards-management')}
        >
          <BiBookAlt className='icon' />
          Cards Management
        </Link>
        <Link
          to='/dashbord/users-manager'
          className={`item ${activeItem === '/dashboard/users-manager' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard/users-manager')}
        >
          <PiUserListFill className='icon' />
          Users Management
        </Link>
        <Link
          to='/dashboard/product-details'
          className={`item ${activeItem === '/dashboard/product-details' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard/product-details')}
        >
          <TbListDetails className='icon' />
          Product Details
        </Link>
        <Link
          to='/dashboard/delivery-status'
          className={`item ${activeItem === '/dashboard/delivery-status' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard/delivery-status')}
        >
          <GrDeliver className='icon' />
          Delivery Status
        </Link>
        <Link
          to='/dashboard/admin-details'
          className={`item ${activeItem === '/dashboard/admin-details' ? 'active' : ''}`}
          onClick={() => handleItemClick('/dashboard/admin-details')}
        >
          <RiAdminFill className='icon' />
          Admin Details
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
