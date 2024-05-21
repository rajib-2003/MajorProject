import React from "react";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";

import RegTableData from "./RegisterTableData";
import UserTable from "./LogTableData";
import ContentHeader1 from "./ContentHeader1";

const ProductManager = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-reg">
      <div className="reg">
        <ContentHeader1/>
      <RegTableData />
      </div>
      <div className="user-table">
        
      <UserTable/>
      </div>
      </div>
    </div>
  );
};

export default ProductManager;
