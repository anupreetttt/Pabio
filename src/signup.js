import React, { useState } from "react";
import "./signupPage.css"; 

function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <div className="signup-page" style={{ backgroundColor: "#FFE6C7" }}>
      <h1>Sign up for Pabio</h1>
      <form onSubmit={handleSubmit}>
        <div>

          <input
            placeholder="First name"
            type="text"
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Last name"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <input
          placeholder="Pasword"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <p>Already have an account? <span className="login-link">Login here</span></p>
    </div>
  );
}

export default SignupPage;
