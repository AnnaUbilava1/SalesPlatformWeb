import React, { useState } from "react";

const UserPass = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authorization logic
    console.log("Authorizing with Username and Password:", formData);
  };

  return (
    <form className="authorization-container" onSubmit={handleSubmit}>
      <h2>Sign in with Username</h2>
      <div className="form-group">
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
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
      <button type="submit">Sign in</button>
    </form>
  );
};

export default UserPass;
