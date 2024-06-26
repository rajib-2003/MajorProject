import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import RegisterModal from "./RegisterModal";
import "./DisplayCard.css";
import "bootstrap/dist/css/bootstrap.min.css";

function DisplayCard(props) {
  const [data, setData] = useState([]);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Number of items to display per page
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/services")
      .then((res) => {
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

  // Logic to get current items based on pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#f8f9fa", padding: "20px" }}>
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((serviceItem, serviceIndex) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={serviceIndex + 1}>
                  <div className="card h-100 custom-card">
                    <img
                      className="card-img-top"
                      src={`http://localhost:5000/${serviceItem?.imageUrl}`}
                      alt={serviceItem?.title}
                      style={{
                        height: "350px",
                        objectFit: "cover",
                        cursor: "pointer",
                        transition: "transform 0.1s",
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = "scale(1.05)";
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = "scale(1)";
                      }}
                    />
                    <div className="card-body text-center text-dark">
                      <h5 className="card-title" style={{ fontFamily: "Arial, sans-serif" }}>
                        {serviceItem?.title}
                      </h5>
                      <p className="card-text" style={{ fontFamily: "Verdana, sans-serif" }}>
                        {serviceItem?.description}
                      </p>
                      <button
                        className="btn btn-primary"
                        style={{ fontFamily: "Arial, sans-serif" }}
                        onClick={openRegisterModal}
                      >
                        Let's Shopping
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center">
              <p>No Data Found</p>
            </div>
          )}
        </div>
      </div>
      <RegisterModal isOpen={showRegisterModal} onClose={closeRegisterModal} />
      {/* Pagination */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
            <li key={index} className="page-item">
              <button onClick={() => paginate(index + 1)} className="page-link">
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default DisplayCard;
