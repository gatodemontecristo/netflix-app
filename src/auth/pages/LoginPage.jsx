import "../styles/style.css";
export const LoginPage = () => {
  return (
    <div className="loginBackground">
      <img className="loginImage" src="../login.jpg" alt="" />
      <div className="loginCard">
        <div className="loginForm">
          <h1>Sign In</h1>
          <input
            type="text"
            className="form-control"
            placeholder="Email o phone number"
          />
          <input type="text" className="form-control" placeholder="Password" />
          <button id="loginSummit" className="btn btn-danger w-100">Sign In</button>
          <div className="loginDontRemember">
            <div style={{
                display:"flex",
                alignItems:"center"
            }}>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Remember me
              </label>
            </div>

            <button type="button" className="btn btn-link btnLinkFormat">
              Need help?
            </button>
          </div>
          <div className="loginSignUp">
            <label>New to Design Flix?</label>
            <button type="button" className="btn btn-link btnLinkFormat">
              Sign up now
            </button>
          </div>
          <label id="loginCaptcha">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </label>
        </div>
      </div>
    </div>
  );
};
