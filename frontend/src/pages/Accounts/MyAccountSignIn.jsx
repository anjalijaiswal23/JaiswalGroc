import React, { useState, useEffect } from "react";
import { login } from '../../api/auth';
import signinimage from '../../images/signin-g.svg';
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MyAccountSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Example: If token is present, redirect user to dashboard or home
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/Grocery-react'); // or your desired route
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(email, password);
      // Store token or user info as needed
      localStorage.setItem('token', res.token); // assuming login() returns { token }
      alert('Login successful!');
      navigate('/Grocery-react'); // Redirect after login
    } catch (err) {
      alert(err.message || "Login failed");
    }
  };

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img src={signinimage} alt="freshcart" className="img-fluid" />
            </div>
            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Sign in to FreshCart</h1>
                <p>Welcome back to FreshCart! Enter your email to get started.</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        Remember me
                      </label>
                    </div>
                    <div>
                      Forgot password?{" "}
                      <Link to="/MyAccountForgetPassword">Reset it</Link>
                    </div>
                  </div>
                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Sign In
                    </button>
                  </div>
                  <div>
                    Don’t have an account? <Link to="/MyAccountSignUp">Sign Up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountSignIn;
