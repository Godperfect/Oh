
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/forgot-password.module.css";

const ForgotPassword: NextPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [step, setStep] = useState(1); // 1: email, 2: OTP, 3: new password
  const [isProcessing, setIsProcessing] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // For OTP field, only allow numeric characters
    if (name === 'otp') {
      const numericValue = value.replace(/[^0-9]/g, '');
      setFormData(prev => ({
        ...prev,
        [name]: numericValue
      }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate email sending
    setTimeout(() => {
      setOtpSent(true);
      setStep(2);
      setIsProcessing(false);
    }, 2000);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate OTP verification
    setTimeout(() => {
      setStep(3);
      setIsProcessing(false);
    }, 1500);
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate password reset
    setTimeout(() => {
      console.log("Password reset successful");
      setIsProcessing(false);
      // Redirect to signin
      window.location.href = "/auth/signin";
    }, 2000);
  };

  const resendOTP = async () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 1500);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <div className={styles.iconContainer}>
                <svg className={styles.emailIcon} width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="rgba(120, 119, 198, 0.8)"/>
                </svg>
              </div>
              <h2 className={styles.stepTitle}>Reset Your Password</h2>
              <p className={styles.stepDescription}>Enter your email address and we'll send you a verification code</p>
            </div>

            <form onSubmit={handleEmailSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={!formData.email || isProcessing}
              >
                {isProcessing ? (
                  <span className={styles.processing}>
                    <span className={styles.spinner}></span>
                    Sending Reset Code...
                  </span>
                ) : (
                  'Send Reset Code'
                )}
              </button>
            </form>
          </div>
        );

      case 2:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <div className={styles.iconContainer}>
                <svg className={styles.otpIcon} width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1S7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15S10.9 13 12 13S14 13.9 14 15S13.1 17 12 17ZM15.1 8H8.9V6C8.9 4.29 10.29 2.9 12 2.9S15.1 4.29 15.1 6V8Z" fill="rgba(168, 85, 247, 0.8)"/>
                </svg>
              </div>
              <h2 className={styles.stepTitle}>Verify Your Identity</h2>
              <p className={styles.stepDescription}>Enter the 6-digit code sent to {formData.email}</p>
            </div>

            <form onSubmit={handleOtpSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="otp" className={styles.label}>
                  Verification Code
                </label>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
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
                {isProcessing ? 'Sending...' : 'Resend Code'}
              </button>

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={!formData.otp || formData.otp.length !== 6 || isProcessing}
              >
                {isProcessing ? (
                  <span className={styles.processing}>
                    <span className={styles.spinner}></span>
                    Verifying...
                  </span>
                ) : (
                  'Verify Code'
                )}
              </button>
            </form>
          </div>
        );

      case 3:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <div className={styles.iconContainer}>
                <svg className={styles.passwordIcon} width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M2 17H22V19H2V17ZM3.15 12.95L4 12.1L7.55 15.65C11.57 13.15 16.43 13.15 20.45 15.65L21.8 14.3C17.18 11.2 6.82 11.2 2.2 14.3L3.15 12.95ZM6.3 15.65L7.5 14.45C9.76 12.93 12.24 12.93 14.5 14.45L15.7 15.65C14.83 16.52 13.42 17 12 17S9.17 16.52 8.3 15.65L6.3 15.65Z" fill="rgba(40, 167, 69, 0.8)"/>
                </svg>
              </div>
              <h2 className={styles.stepTitle}>Create New Password</h2>
              <p className={styles.stepDescription}>Enter a strong new password for your account</p>
            </div>

            <form onSubmit={handlePasswordSubmit} className={styles.form}>
              <div className={styles.inputGroup}>
                <label htmlFor="newPassword" className={styles.label}>
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Enter new password"
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="confirmPassword" className={styles.label}>
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={styles.input}
                  placeholder="Confirm new password"
                  required
                />
              </div>

              {formData.newPassword && formData.confirmPassword && formData.newPassword !== formData.confirmPassword && (
                <div className={styles.errorMessage}>
                  Passwords do not match
                </div>
              )}

              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={
                  !formData.newPassword || 
                  !formData.confirmPassword || 
                  formData.newPassword !== formData.confirmPassword ||
                  isProcessing
                }
              >
                {isProcessing ? (
                  <span className={styles.processing}>
                    <span className={styles.spinner}></span>
                    Updating Password...
                  </span>
                ) : (
                  'Reset Password'
                )}
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
        <title>Forgot Password - FrankFreq</title>
        <meta name="description" content="Reset your FrankFreq password" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authForm}>
          <div className={styles.progressBar}>
            <div className={styles.progressTrack}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
            <div className={styles.stepIndicators}>
              {[1, 2, 3].map((stepNumber) => (
                <div 
                  key={stepNumber}
                  className={`${styles.stepIndicator} ${
                    step >= stepNumber ? styles.active : ''
                  }`}
                >
                  {stepNumber}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.animatedContent}>
            {renderStep()}
          </div>

          <p className={styles.switchAuth}>
            Remember your password?{" "}
            <Link href="/auth/signin" className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
