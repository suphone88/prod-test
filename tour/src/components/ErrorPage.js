import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="textError">
      <h2>404</h2>
      <h3>Page Not Found !!</h3>
      <p>The resource requested could not be found on this server!</p>

      <Link to="/">Go Back Home </Link>
    </div>
  );
};

export default ErrorPage;
