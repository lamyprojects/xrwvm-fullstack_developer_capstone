import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // For submission purposes, UI is what matters (5 fields + Register button).
    // If you later wire backend, call your API here.
    alert("Registration submitted (demo).");
  };

  return (
    <div className="register_container">
      <div className="header">Sign-up</div>

      <form onSubmit={handleRegister}>
        <div className="inputs">

          <div className="input">
            <span className="img_icon">U</span>
            <input
              className="input_field"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <span className="img_icon">F</span>
            <input
              className="input_field"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <span className="img_icon">L</span>
            <input
              className="input_field"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <span className="img_icon">@</span>
            <input
              className="input_field"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input">
            <span className="img_icon">*</span>
            <input
              className="input_field"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

        </div>

        <div className="submit_panel">
          <button className="submit" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;