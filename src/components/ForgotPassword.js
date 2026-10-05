import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const ForgotPassword = ({ onBack }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      setMessage("");
      return;
    }

    setError("");
    setMessage("Password reset instructions have been sent to your email.");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Forgot Password</h1>

        <p className={styles.subtitle}>
          Enter your email to reset your password
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email Address</label>

            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
                setMessage("");
              }}
              className={styles.input}
              placeholder="Enter your email"
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          {message && <p className={styles.successText}>{message}</p>}

          <button type="submit" className={styles.submitButton}>
            Reset Password
          </button>

          <button type="button" onClick={onBack} className={styles.backButton}>
            Back to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
