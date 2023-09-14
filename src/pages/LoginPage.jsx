import { useNavigate } from "react-router-dom";
// import { useLocation } from "../hooks/useLocation";

import PropTypes from "prop-types";

const LoginPage = ({ setIsAuth }) => {
  // const location = useLocation();
  const navigate = useNavigate();

  const login = () => {
    navigate("/");
    setIsAuth(true);
    localStorage.setItem("isAuth", true);
  };
  // console.log(location);
  return (
    <div className="text-center">
      <h1>LoginPage</h1>
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </div>
  );
};

LoginPage.propTypes = {
  setIsAuth: PropTypes.func,
};

export default LoginPage;
