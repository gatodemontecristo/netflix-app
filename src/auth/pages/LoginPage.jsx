import { useContext, useEffect, useState } from "react";
import "../styles/style.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";
export const LoginPage = () => {
  const [userValue, setUserValue] = useState("");
  const [passValue, setPassValue] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("");

  const onUserChange = ({ target }) => {
    setUserValue(target.value);
  };
  const onPassChange = ({ target }) => {
    setPassValue(target.value);
  };

  useEffect(() => {
    let timeoutId;
    if (showAlert) {
      timeoutId = setTimeout(() => {
        setShowAlert(false);
      }, 4000);
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showAlert]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userValue.trim().length <= 0 || passValue.trim().length <= 0) {
      setMessage(" Se requiere ingresar todos los campos.");
      setShowAlert(true);

      return;
    }

    if (userValue !== "gatodemontecristo" || passValue !== "123") {
      setMessage(" El usuario y contraseña que ha ingresado son incorrectos.");
      setShowAlert(true);
      return;
    }

    login("Erick Yoichi", "sandman");
    setUserValue("");
    setPassValue("");
    setShowAlert(false);
    navigate("/movies", {
      replace: true,
    });
  };

  return (
    <div className="loginBackground">
      <img className="loginImage" src="../login.jpg" alt="" />
      <div className="loginCard animate__animated animate__fadeIn ">
        <form className="loginForm" onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Email o phone number"
            onChange={onUserChange}
            value={userValue}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={onPassChange}
            value={passValue}
          />
          <button id="loginSummit" className="btn btn-danger w-100">
            Sign In
          </button>
          <div
            className={`alert alert-dark ${showAlert ? "d-block" : "d-none"}`}
            style={{ padding: "5px", fontSize: "15px" }}
            role="alert"
          >
            <i className="bi bi-exclamation-triangle-fill"></i>
            {message}
          </div>
          <div className="loginDontRemember">
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label">
                Remember me
              </label>
            </div>

            <button type="button" className="btn btn-link btnLinkFormat">
              Need help?
            </button>
          </div>
          <div className="loginSignUp">
            <label>New to Design Flix?</label>
            <button type="submit" className="btn btn-link btnLinkFormat">
              Sign up now
            </button>
          </div>
          <label id="loginCaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </label>
        </form>
      </div>
    </div>
  );
};
