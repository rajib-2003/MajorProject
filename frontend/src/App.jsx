import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";
import AdminDashbaord from "./Components/Dashbord/AdminDashbaord";
import ProductManagment from "./Components/Dashbord/Products/UserManager";
import AddCards from "./Components/AddCards";
import Navigation from "./Components/FoodandDress/Navigation";
import DeleteService from "./Components/Delete";
import EditServiceComponent from "./Components/EditServiceComponent";
import LoginForm from "./Components/AdminLogin/LoginForm";
import RegisterForm from "./Components/AdminLogin/RegisterForm";
import DisplayCard from "./Components/DisplayCard";
import DeliveryForm from "./Components/DeliveryForm";
import CartSummaryPage from "./Components/FoodandDress/CartSummaryPage";
import ConfirmationPage from "./Components/ConfirmationPage";
import Success from "./Components/Success";
import Cancel from "./Components/Cancel";
import Content from "./Components/Dashbord/Content";
import CardManager from "./Components/Dashbord/Products/CardManagment/CardManager";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  const userType = window.localStorage.getItem("userType");
  const [foodCartItems, setFoodCartItems] = useState([]);
  const [dressCartItems, setDressCartItems] = useState([]);

  const addToFoodCart = (food) => {
    setFoodCartItems((prevItems) => [...prevItems, food]);
  };

  const removeFromFoodCart = (food) => {
    setFoodCartItems((prevItems) => prevItems.filter((item) => item._id !== food._id));
  };

  const addToDressCart = (dress) => {
    setDressCartItems((prevItems) => [...prevItems, dress]);
  };

  const removeFromDressCart = (dress) => {
    setDressCartItems((prevItems) => prevItems.filter((item) => item._id !== dress._id));
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            exact
            path="/dashboard"
            element={
              isLoggedIn === "true" && userType === "Admin" ? (
                <AdminDashbaord />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/add-card"
            element={
              isLoggedIn === "true" && userType === "Admin" ? (
                <AddCards />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            exact
            path="/update-card/:id"
            element={
              isLoggedIn === "true" && userType === "Admin" ? (
                <EditServiceComponent />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/delete-card" element={<DeleteService />} />
          <Route
            path="/dashbord/users-manager"
            element={
              isLoggedIn === "true" && userType === "Admin" ? (
                <ProductManagment />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
           <Route
            path="/dashbord/cards-manager"
            element={
              isLoggedIn === "true" && userType === "Admin" ? (
                <CardManager />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/sign-in" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/state" element={<DisplayCard />} />
          <Route
            path="/food-dress"
            element={
              <Navigation
                foodCartItems={foodCartItems}
                dressCartItems={dressCartItems}
                addToFoodCart={addToFoodCart}
                removeFromFoodCart={removeFromFoodCart}
                addToDressCart={addToDressCart}
                removeFromDressCart={removeFromDressCart}
              />
            }
          />
          <Route
            path="/cart-summary"
            element={
              <CartSummaryPage
                foodCartItems={foodCartItems}
                dressCartItems={dressCartItems}
                removeFromFoodCart={removeFromFoodCart}
                removeFromDressCart={removeFromDressCart}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route path="/deliveryform" element={<DeliveryForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
