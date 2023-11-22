import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setToken(result.token);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("Error during login");
    }
  };

  return (
    <>
      <h2>Login</h2>
      {error && <p>{error}</p>}

      {isLoggedIn ? (
        <p>Welcome! You are logged in.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      )}
    </>
  );
};

export default LoginForm;