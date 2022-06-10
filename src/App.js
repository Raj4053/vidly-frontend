import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Navigate, Routes } from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import "react-toastify/dist/ReactToastify.css"
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/movies/:id" element={<MovieForm />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/movie/new" element={<MovieForm />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate replace to="/movies" />} />
        <Route path="*" element={<Navigate replace to="/not-found" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
