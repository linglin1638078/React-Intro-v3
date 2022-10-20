import React from "react";
import ColorSelector from "./ColorSelector";
import UserGallery from "./UserGallery";
import { Route, Routes } from "react-router-dom";
import PropTypes from "prop-types";
import Register from "./Register";

const RouterComponent = ({ users }) => {
  return (
    <Routes>
      <Route exact path="/" element={<p>Home Page</p>} />
      <Route
        exact
        path="/user-gallery"
        element={<UserGallery users={users} />}
      />
          <Route exact path="/colors" element={<ColorSelector />} />
          <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

RouterComponent.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object),
};

export default RouterComponent;
