
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/signin.module.css";

const SignIn: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log("Sign in:", { email, password });
    // Redirect to dashboard after successful sign in
    window.location.href = "/dashboard";
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In - FrankFreq</title>
        <meta name="description" content="Sign in to FrankFreq - Your Music Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authForm}>
          <h1 className={styles.title}>Welcome Back to FrankFreq</h1>
          <p className={styles.subtitle}>Continue your music journey</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" />
                <span className={styles.checkmark}></span>
                Remember me
              </label>
              <Link href="/auth/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Sign In
            </button>
          </form>

          

          <p className={styles.switchAuth}>
            New to FrankFreq?{" "}
            <Link href="/auth/signup" className={styles.link}>
              Join the community
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignIn;
