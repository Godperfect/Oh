
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/signin.module.css";

const SignIn: NextPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    otp: "",
    rememberMe: false
  });
  
  const [step, setStep] = useState(1); // 1: credentials, 2: OTP verification
  const [isProcessing, setIsProcessing] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate credential validation and OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setStep(2);
      setIsProcessing(false);
    }, 1500);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate OTP verification
    setTimeout(() => {
      console.log("Sign in successful:", formData);
      setIsProcessing(false);
      // Redirect to dashboard after successful sign in
      window.location.href = "/dashboard";
    }, 1500);
  };

  const resendOTP = async () => {
    setIsProcessing(true);
    // Simulate OTP resending
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <form onSubmit={handleCredentialsSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>

            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input 
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                />
                <span className={styles.checkmark}></span>
                Remember me
              </label>
              <Link href="/auth/forgot-password" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>

            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={!formData.email || !formData.password || isProcessing}
            >
              {isProcessing ? (
                <span className={styles.processing}>
                  <span className={styles.spinner}></span>
                  Verifying...
                </span>
              ) : (
                'Continue'
              )}
            </button>
          </form>
        );

      case 2:
        return (
          <div className={styles.otpSection}>
            <div className={styles.otpHeader}>
              <h2 className={styles.otpTitle}>Verify Your Identity</h2>
              <p className={styles.otpDescription}>
                We've sent a verification code to {formData.email}
              </p>
            </div>

            <form onSubmit={handleOtpSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="otp" className={styles.label}>
                  Verification Code
                </label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter 6-digit code"
                  maxLength={6}
                  required
                />
              </div>

              <button 
                type="button" 
                onClick={resendOTP}
                className={styles.resendBtn}
                disabled={isProcessing}
              >
                {isProcessing ? 'Sending...' : 'Resend OTP'}
              </button>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={!formData.otp || formData.otp.length !== 6 || isProcessing}
              >
                {isProcessing ? (
                  <span className={styles.processing}>
                    <span className={styles.spinner}></span>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>

              <button 
                type="button" 
                onClick={() => setStep(1)}
                className={styles.backBtn}
              >
                Back to Login
              </button>
            </form>
          </div>
        );

      default:
        return null;
    }
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
          <div className={styles.header}>
            <h1 className={styles.title}>
              {step === 1 ? 'Welcome Back to FrankFreq' : 'Almost There!'}
            </h1>
            <p className={styles.subtitle}>
              {step === 1 ? 'Continue your music journey' : 'Just one more step to access your account'}
            </p>
          </div>

          {renderStep()}

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
