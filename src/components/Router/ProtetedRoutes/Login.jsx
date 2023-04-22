import React, { useState } from "react";
import { useAuth } from "./auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const redirectLocation = location.state?.path || "/";
  const handleLogin = () => {
    auth.login(user);
    navigate(redirectLocation, { replace: true });
    // if we don't use replace , if the user is logged in and press
    // the back button the page again goes to login page
    //replace avoids this action in the route
  };
  return (
    <div>
      <label>
        Username :
        <input
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="username"
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
