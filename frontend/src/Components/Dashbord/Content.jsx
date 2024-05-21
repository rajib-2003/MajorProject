import React from "react";
import ContentHeader from "./ContentHeader";
import "./Content.css";
import Card from "./Card";
import UserList from "./UserList";
import Sidebar from "./Sidebar";
const Content = () => {
  return (
    <div className="dashboard">
      
      <div className="main-reg">
        
        <div className="reg">
          <ContentHeader />
        </div>
        <div className="user-table">
          <Card />
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Content;
