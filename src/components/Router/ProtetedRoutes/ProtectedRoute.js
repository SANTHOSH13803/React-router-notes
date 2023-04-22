import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation } from "react-router-dom";

// Navigate is substitue of Redirect
// useNavigate is substitue of match.replace()
const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  const location = useLocation();
  //   use locaiton gives a pathname

  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
    // state components help to navigate to previous route the user recently accessed
    // state is used in login page to navigate to recently accessed page
  }
  return children;
};

export default ProtectedRoute;
