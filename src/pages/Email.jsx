import React, { useState } from "react";

const Email = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authorization logic
    console.log("Authorizing with Email:", formData);
  };

  return (
    <div className="authorization-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign In with Email</h2>
        <div className="form-group">
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Email;
