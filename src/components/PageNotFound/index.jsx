import React from "react";
import "./PageNotFound.scss";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="notFound">
      <div className="notFound__404">
        <div className="notFound__icon" />
        <h1>404</h1>
        <h2>Oops! Page Not Be Found</h2>
        <p>
          Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable
        </p>
        <Link to="/">Back to homepage</Link>
      </div>
    </div>
  );
}

export default PageNotFound;
