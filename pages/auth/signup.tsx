
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/signup.module.css";

const SignUp: NextPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = async () => {
    if (step === 3 && !otpSent) {
      // Send OTP when moving to step 3
      setIsProcessing(true);
      // Simulate OTP sending
      setTimeout(() => {
        setOtpSent(true);
        setIsProcessing(false);
      }, 1500);
      return;
    }
    
    if (step < 4) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const sendOTP = async () => {
    setIsProcessing(true);
    // Simulate OTP sending
    setTimeout(() => {
      setOtpSent(true);
      setIsProcessing(false);
    }, 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate AI processing
    setTimeout(() => {
      console.log("Account created:", formData);
      setIsProcessing(false);
    }, 2000);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Personal Information</h2>
              <p className={styles.stepDescription}>Let's start with your name details</p>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="middleName" className={styles.label}>
                Middle Name (Optional)
              </label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your middle name"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your last name"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Security Setup</h2>
              <p className={styles.stepDescription}>Create a secure password for your account</p>
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
                placeholder="Create a strong password"
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
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Email Verification</h2>
              <p className={styles.stepDescription}>Enter your email address for verification</p>
            </div>
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
            {otpSent && (
              <div className={styles.otpSentMessage}>
                <p>✓ OTP sent to your email address</p>
              </div>
            )}
          </div>
        );
      
      case 4:
        return (
          <div className={styles.stepContent}>
            <div className={styles.stepHeader}>
              <h2 className={styles.stepTitle}>Verify OTP</h2>
              <p className={styles.stepDescription}>Enter the verification code sent to {formData.email}</p>
            </div>
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
              onClick={sendOTP}
              className={styles.resendBtn}
              disabled={isProcessing}
            >
              {isProcessing ? 'Sending...' : 'Resend OTP'}
            </button>
            <div className={styles.options}>
              <label className={styles.checkbox}>
                <input 
                  type="checkbox" 
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  required 
                />
                <span className={styles.checkmark}></span>
                I agree to the{" "}
                <Link href="/terms" className={styles.link}>
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className={styles.link}>
                  Privacy Policy
                </Link>
              </label>
            </div>
            <div className={styles.summaryCard}>
              <h3>Account Summary</h3>
              <p><strong>Name:</strong> {formData.firstName} {formData.middleName} {formData.lastName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Join FrankFreq - Music Platform</title>
        <meta name="description" content="Join FrankFreq - Listen, Download, Discover Music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authForm}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIndicator}>
              <div className={styles.aiPulse}></div>
              <span>Music-Powered Platform</span>
            </div>
            <h1 className={styles.title}>Join FrankFreq</h1>
            <p className={styles.subtitle}>Your gateway to music discovery, downloads & global music community</p>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.progressTrack}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
            <div className={styles.stepIndicators}>
              {[1, 2, 3, 4].map((stepNumber) => (
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

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.musicStickers}>
              <svg className={styles.musicNote1} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="rgba(120, 119, 198, 0.6)"/>
              </svg>
              
              <svg className={styles.musicNote2} width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="rgba(168, 85, 247, 0.5)"/>
              </svg>
              
              <svg className={styles.vinylRecord} width="32" height="32" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.1)"/>
                <circle cx="12" cy="12" r="6" fill="rgba(120, 119, 198, 0.3)"/>
                <circle cx="12" cy="12" r="2" fill="rgba(255, 255, 255, 0.8)"/>
              </svg>
              
              <svg className={styles.headphones} width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 1C7.03 1 3 5.03 3 10V15C3 16.1 3.9 17 5 17H6C7.1 17 8 16.1 8 15V11C8 9.9 7.1 9 6 9H5V10C5 6.13 8.13 3 12 3S19 6.13 19 10V9H18C16.9 9 16 9.9 16 11V15C16 16.1 16.9 17 18 17H19C20.1 17 21 16.1 21 15V10C21 5.03 16.97 1 12 1Z" fill="rgba(168, 85, 247, 0.4)"/>
              </svg>
              
              <svg className={styles.waveform} width="26" height="26" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="8" width="2" height="8" fill="rgba(120, 119, 198, 0.7)"/>
                <rect x="6" y="6" width="2" height="12" fill="rgba(168, 85, 247, 0.6)"/>
                <rect x="10" y="4" width="2" height="16" fill="rgba(255, 255, 255, 0.5)"/>
                <rect x="14" y="7" width="2" height="10" fill="rgba(120, 119, 198, 0.7)"/>
                <rect x="18" y="5" width="2" height="14" fill="rgba(168, 85, 247, 0.6)"/>
              </svg>
              
              <svg className={styles.speaker} width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23ZM16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.03C15.5 15.29 16.5 13.77 16.5 12ZM3 9V15H7L12 20V4L7 9H3Z" fill="rgba(255, 255, 255, 0.6)"/>
              </svg>
            </div>
            {renderStep()}

            <div className={styles.navigationButtons}>
              {step > 1 && (
                <button 
                  type="button" 
                  onClick={handlePrevious}
                  className={styles.prevBtn}
                >
                  Previous
                </button>
              )}
              
              {step < 4 ? (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className={styles.nextBtn}
                  disabled={
                    (step === 1 && (!formData.firstName || !formData.lastName)) ||
                    (step === 2 && (!formData.password || !formData.confirmPassword || formData.password !== formData.confirmPassword)) ||
                    (step === 3 && (!formData.email || isProcessing)) ||
                    isProcessing
                  }
                >
                  {step === 3 && !otpSent ? (
                    isProcessing ? (
                      <span className={styles.processing}>
                        <span className={styles.spinner}></span>
                        Sending OTP...
                      </span>
                    ) : (
                      'Send OTP'
                    )
                  ) : (
                    'Next'
                  )}
                </button>
              ) : (
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={!formData.agreeToTerms || !formData.otp || formData.otp.length !== 6 || isProcessing}
                >
                  {isProcessing ? (
                    <span className={styles.processing}>
                      <span className={styles.spinner}></span>
                      Creating Account...
                    </span>
                  ) : (
                    'Create Account'
                  )}
                </button>
              )}
            </div>
          </form>

          

          <p className={styles.switchAuth}>
            Already part of FrankFreq?{" "}
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
