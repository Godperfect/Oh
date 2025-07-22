
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/auth.module.css";

const SignUp: NextPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign up:", { name, email, password, confirmPassword });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Sign Up - Your App</title>
        <meta name="description" content="Create your account" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authCard}>
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Sign up to get started</p>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.input}
                placeholder="Enter your full name"
                required
              />
            </div>

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
                placeholder="Create a password"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input type="checkbox" required />
                <span className={styles.checkmark}></span>
                I agree to the{" "}
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Create Account
            </button>
          </form>

          <div className={styles.divider}>
            <span>or</span>
          </div>

          <button className={styles.googleBtn}>
            <span>Continue with Google</span>
          </button>

          <p className={styles.switchAuth}>
            Already have an account?{" "}
            <Link href="/auth/signin" className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
