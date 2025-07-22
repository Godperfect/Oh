
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../../styles/auth/signup.module.css";

const SignUp: NextPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });

  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
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
              <p className={styles.stepDescription}>Let's start with your basic details</p>
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={styles.input}
                placeholder="Enter your full name"
                required
              />
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
                placeholder="Enter your email"
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
              <h2 className={styles.stepTitle}>Final Step</h2>
              <p className={styles.stepDescription}>Complete your account creation</p>
            </div>
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
              <p><strong>Name:</strong> {formData.name}</p>
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
        <title>Create Account - Your App</title>
        <meta name="description" content="Create your account with AI-powered onboarding" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.authForm}>
          <div className={styles.aiHeader}>
            <div className={styles.aiIndicator}>
              <div className={styles.aiPulse}></div>
              <span>AI-Powered</span>
            </div>
            <h1 className={styles.title}>Create Account</h1>
            <p className={styles.subtitle}>Join the future of digital experiences</p>
          </div>

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

          <form onSubmit={handleSubmit} className={styles.form}>
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
              
              {step < 3 ? (
                <button 
                  type="button" 
                  onClick={handleNext}
                  className={styles.nextBtn}
                  disabled={
                    (step === 1 && (!formData.name || !formData.email)) ||
                    (step === 2 && (!formData.password || !formData.confirmPassword))
                  }
                >
                  Next
                </button>
              ) : (
                <button 
                  type="submit" 
                  className={styles.submitBtn}
                  disabled={!formData.agreeToTerms || isProcessing}
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
