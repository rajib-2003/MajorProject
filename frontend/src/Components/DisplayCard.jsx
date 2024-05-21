import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";

import "./DisplayCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayCard(props) {
  const [data, setData] = useState([]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <>
      <div className="d-flex flex-wrap justify-content-center border border-4 border-success">
        {data.length > 0 ? (
          data.map((serviceItem, serviceIndex) => {
            return (
              <div
                style={{
                  padding: "10px",
                  margin: "20px",
                  width: "400px",
                  border: "2px solid black"
                }}
                key={serviceIndex + 1}
                className="cards "
              >
                <img
                  className="card-img-top "
                  src={`http://localhost:5000/${serviceItem?.imageUrl}`}
                  alt={serviceItem?.title}
                  style={{
                    height: "320px",
                    objectFit: "cover",
                    cursor: "pointer",
                    transition: "transform 0.1s",
                    borderRadius:"4px"
                    
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "scale(1.05)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "scale(1)";
                  }}
                />
                <hr  />
                <div className="card-body text-center text-dark">
                  <h5
                    className="card-title bg-info mt-3 text-center"
                    style={{ fontFamily: "Arial, sans-serif", marginBottom: "10px" }}
                  >
                    {serviceItem?.title}
                  </h5>
                  <p className="card-text" style={{ fontFamily: "Verdana, sans-serif" }}>
                    {serviceItem?.description}
                  </p>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    style={{ fontFamily: "Arial, sans-serif", marginTop: "10px" }}
                    onClick={openRegisterModal}
                  >
                    Let's Shopping
                  </button>
                
                </div>
                
              </div>
              
            );
          })
        ) : (
          <div>No Data Found</div>
        )}
      </div>
      <RegisterModal isOpen={showRegisterModal} onClose={closeRegisterModal} />
    </>
  );
}

export default DisplayCard;
