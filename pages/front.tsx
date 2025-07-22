
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/front.module.css";

const FrontPage: NextPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>FrankFreq - Your Music Journey Starts Here</title>
        <meta name="description" content="Join FrankFreq - The ultimate music discovery platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.backgroundElements}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>

      <main className={styles.main}>
        <div className={styles.content} style={{ transform: `translateY(${scrollY * 0.02}px)` }}>
          <div className={styles.musicElements}>
            <svg className={styles.musicNote1} width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="rgba(120, 119, 198, 0.6)"/>
            </svg>
            
            <svg className={styles.vinylRecord} width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="rgba(255, 255, 255, 0.1)"/>
              <circle cx="12" cy="12" r="6" fill="rgba(120, 119, 198, 0.3)"/>
              <circle cx="12" cy="12" r="2" fill="rgba(255, 255, 255, 0.8)"/>
            </svg>

            <svg className={styles.headphones} width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 1C7.03 1 3 5.03 3 10V15C3 16.1 3.9 17 5 17H6C7.1 17 8 16.1 8 15V11C8 9.9 7.1 9 6 9H5V10C5 6.13 8.13 3 12 3S19 6.13 19 10V9H18C16.9 9 16 9.9 16 11V15C16 16.1 16.9 17 18 17H19C20.1 17 21 16.1 21 15V10C21 5.03 16.97 1 12 1Z" fill="rgba(168, 85, 247, 0.4)"/>
            </svg>

            <svg className={styles.waveform} width="56" height="56" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="8" width="2" height="8" fill="rgba(120, 119, 198, 0.7)" rx="1"/>
              <rect x="6" y="6" width="2" height="12" fill="rgba(168, 85, 247, 0.6)" rx="1"/>
              <rect x="10" y="4" width="2" height="16" fill="rgba(255, 255, 255, 0.5)" rx="1"/>
              <rect x="14" y="7" width="2" height="10" fill="rgba(120, 119, 198, 0.7)" rx="1"/>
              <rect x="18" y="5" width="2" height="14" fill="rgba(168, 85, 247, 0.6)" rx="1"/>
            </svg>
          </div>

          <div className={styles.heroSection}>
            <div className={styles.brandContainer}>
              <div className={styles.logo}>
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#logoGradient)"/>
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7877c6" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h1 className={styles.brandName}>FrankFreq</h1>
            </div>

            <div className={styles.tagline}>
              <h2 className={styles.mainTitle}>Your Music Journey</h2>
              <h3 className={styles.subtitle}>Starts Here</h3>
              <p className={styles.description}>
                Discover, create, and connect with music like never before. 
                Join millions of music lovers in the ultimate audio experience.
              </p>
            </div>

            <div className={styles.actionButtons}>
              <Link href="/auth/signup" className={styles.primaryButton}>
                <span>Join FrankFreq</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>

              <Link href="/auth/signin" className={styles.secondaryButton}>
                <span>Sign In</span>
              </Link>
            </div>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎵</div>
                <span>Unlimited Music</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎧</div>
                <span>High Quality Audio</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💬</div>
                <span>Global Community</span>
              </div>
            </div>
          </div>
        </div>

        {mounted && (
          <div className={styles.audioVisualizer}>
            {[...Array(8)].map((_, i) => (
              <div 
                key={i} 
                className={styles.visualizerBar}
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  height: `${Math.sin(Date.now() * 0.003 + i) * 20 + 25}px`
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default FrontPage;
