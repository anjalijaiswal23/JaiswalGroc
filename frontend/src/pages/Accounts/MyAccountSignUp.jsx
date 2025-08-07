import React, { useState } from "react";
import { signup } from "../../api/auth";
import signupimage from "../../images/signup-g.svg";
import { Link, useNavigate } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

const MyAccountSignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // ✅ prevent page reload

    const { firstName, lastName, email, password } = formData;
    const name = `${firstName} ${lastName}`;
    try {
      await signup(name, email, password);
      alert("Signup successful!");
      navigate("/MyAccountSignIn"); // ✅ redirect after signup
    } catch (error) {
      alert(error?.message || "Signup failed");
    }
  };

  return (
    <div>
      <ScrollToTop />
      <section className="my-lg-14 my-8">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4 order-lg-1 order-2">
              <img src={signupimage} alt="signup" className="img-fluid" />
            </div>

            <div className="col-12 col-md-6 offset-lg-1 col-lg-4 order-lg-2 order-1">
              <div className="mb-lg-9 mb-5">
                <h1 className="mb-1 h2 fw-bold">Get Started Shopping</h1>
                <p>Welcome to FreshCart! Enter your email to get started.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12 d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                    <span className="navbar-text mt-2">
                      Already have an account?{" "}
                      <Link to="/MyAccountSignIn">Sign in</Link>
                    </span>
                  </div>

                  <p>
                    <small>
                      By continuing, you agree to our{" "}
                      <Link to="#!">Terms of Service</Link> &{" "}
                      <Link to="#!">Privacy Policy</Link>.
                    </small>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyAccountSignUp;
