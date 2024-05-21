import React from "react";

import { IoAdd } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./Card.css";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
const Card = () => {
  return (
    <div className="card--container bg-success ">
      <div className="card add-bg bg-info font-weight-bold">
        <div className="card--cover color-bg">
          <IoAdd />
        </div>
        <div className="card-title bg-primary ">
          <Link to='/add-card' className="btn  text-white">ADD</Link>
        </div>
      </div>
      <div className="card  add-bg bg-info ">
        <div className="card--cover color-bg">
        < FaEdit />
        </div>
        <div className="card-title bg-warning">
          <Link to={'/update-card/:_id'} className="btn">UPDATE</Link>
        </div>
      </div>
      <div className="card  add-bg bg-info">
        <div className="card--cover color-bg">
        <RiDeleteBin6Line />
        </div>
        <div className="card-title bg-danger ">
          <button className="btn  text-white">DELETE</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
