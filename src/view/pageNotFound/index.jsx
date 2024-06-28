import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  //For navigate
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <span>The resource requested could not be found on this server!</span>
      <button onClick={() => navigate(-1)}>Go Back To Previous Page</button>
    </div>
  );
};

export default PageNotFound;
