
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const featuredTracks = [
    "Electronic Vibes",
    "Jazz Fusion",
    "Ambient Dreams",
    "Lo-fi Beats"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % featuredTracks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>FrankFreq - Premium Music Experience</title>
        <meta name="description" content="Discover, create, and share music like never before" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Navigation */}
        <nav className={styles.navigation}>
          <div className={styles.logo}>
            <svg className={styles.logoIcon} width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#logoGradient)"/>
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span className={styles.logoText}>FrankFreq</span>
          </div>
          <div className={styles.navLinks}>
            <Link href="/discover" className={styles.navLink}>Discover</Link>
            <Link href="/create" className={styles.navLink}>Create</Link>
            <Link href="/community" className={styles.navLink}>Community</Link>
          </div>
          <div className={styles.navActions}>
            <Link href="/auth/signin" className={styles.navSignIn}>Sign In</Link>
            <Link href="/auth/signup" className={styles.navSignUp}>Get Started</Link>
          </div>
        </nav>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.musicStickers}>
            {/* Enhanced Floating Music Elements */}
            <svg className={styles.musicNote1} width="40" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="url(#note1Gradient)"/>
              <defs>
                <linearGradient id="note1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            <svg className={styles.musicNote2} width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M9 5V15.55C8.41 15.21 7.73 15 7 15C4.79 15 3 16.79 3 19S4.79 23 7 23 11 21.21 11 19V9H15V5H9Z" fill="url(#note2Gradient)"/>
              <defs>
                <linearGradient id="note2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Premium Vinyl with Glow */}
            <div className={styles.vinylContainer}>
              <svg className={styles.vinylRecord} width="64" height="64" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="11" fill="url(#vinylGradient)" stroke="url(#vinylStroke)" strokeWidth="0.5"/>
                <circle cx="12" cy="12" r="8" fill="rgba(0,0,0,0.3)" opacity="0.8"/>
                <circle cx="12" cy="12" r="5" fill="rgba(0,0,0,0.5)" opacity="0.6"/>
                <circle cx="12" cy="12" r="2" fill="url(#centerGradient)"/>
                <defs>
                  <linearGradient id="vinylGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(120, 119, 198, 0.4)" />
                    <stop offset="50%" stopColor="rgba(168, 85, 247, 0.3)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0.2)" />
                  </linearGradient>
                  <linearGradient id="vinylStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7877c6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#7877c6" />
                  </radialGradient>
                </defs>
              </svg>
            </div>

            {/* Premium Headphones */}
            <svg className={styles.headphones} width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 1C7.03 1 3 5.03 3 10V15C3 16.1 3.9 17 5 17H6C7.1 17 8 16.1 8 15V11C8 9.9 7.1 9 6 9H5V10C5 6.13 8.13 3 12 3S19 6.13 19 10V9H18C16.9 9 16 9.9 16 11V15C16 16.1 16.9 17 18 17H19C20.1 17 21 16.1 21 15V10C21 5.03 16.97 1 12 1Z" fill="url(#headphoneGradient)"/>
              <defs>
                <linearGradient id="headphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Advanced Waveform */}
            <svg className={styles.waveform} width="56" height="56" viewBox="0 0 32 32" fill="none">
              <rect x="2" y="12" width="2" height="8" fill="url(#waveGradient)" rx="1"/>
              <rect x="6" y="10" width="2" height="12" fill="url(#waveGradient)" rx="1"/>
              <rect x="10" y="6" width="2" height="20" fill="url(#waveGradient)" rx="1"/>
              <rect x="14" y="8" width="2" height="16" fill="url(#waveGradient)" rx="1"/>
              <rect x="18" y="4" width="2" height="24" fill="url(#waveGradient)" rx="1"/>
              <rect x="22" y="9" width="2" height="14" fill="url(#waveGradient)" rx="1"/>
              <rect x="26" y="11" width="2" height="10" fill="url(#waveGradient)" rx="1"/>
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="30%" stopColor="#a855f7" />
                  <stop offset="70%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>

            {/* Premium Speaker */}
            <svg className={styles.speaker} width="44" height="44" viewBox="0 0 24 24" fill="none">
              <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="url(#speakerGradient)"/>
              <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.03C15.5 15.29 16.5 13.77 16.5 12Z" fill="url(#speakerGradient)" opacity="0.8"/>
              <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="url(#speakerGradient)" opacity="0.6"/>
              <defs>
                <linearGradient id="speakerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="50%" stopColor="#7877c6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Premium Microphone */}
            <svg className={styles.microphone} width="38" height="38" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="2" width="6" height="12" rx="3" fill="url(#micGradient)"/>
              <path d="M19 10V12C19 16.42 15.28 20 10.5 20H13.5C18.72 20 23 15.72 23 10.5V10H19Z" fill="url(#micGradient)" opacity="0.7"/>
              <path d="M12 20V24M8 24H16" stroke="url(#micGradient)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="micGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <div className={styles.badgeIcon}>
                <div className={styles.pulseRing}></div>
                <span>🎵</span>
              </div>
              <span>Now Playing: {featuredTracks[currentTrack]}</span>
            </div>
            
            <h1 className={styles.title}>
              The Future of
              <span className={styles.brand}> Music </span>
              is Here
            </h1>
            
            <p className={styles.subtitle}>
              Experience music like never before with AI-powered discovery, 
              immersive soundscapes, and a community of passionate creators.
            </p>
            
            <div className={styles.heroButtons}>
              <Link href="/auth/signup" className={styles.primaryButton}>
                <span className={styles.buttonText}>Start Your Journey</span>
                <svg className={styles.buttonIcon} width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={styles.playButton}
              >
                <div className={styles.playButtonIcon}>
                  {isPlaying ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                      <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                    </svg>
                  ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                    </svg>
                  )}
                </div>
                <span>{isPlaying ? 'Pause' : 'Play'} Demo</span>
              </button>
            </div>

            {/* Music Visualizer */}
            <div className={styles.visualizer}>
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={styles.visualizerBar}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: `${1.5 + Math.random() * 1}s`
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionBadge}>
              <span>✨ Premium Features</span>
            </div>
            <h2 className={styles.sectionTitle}>Everything You Need to Create</h2>
            <p className={styles.sectionSubtitle}>
              Professional-grade tools and resources designed for modern music creators
            </p>
          </div>
          
          <div className={styles.grid}>
            <div className={`${styles.card} ${styles.cardPrimary}`}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🎨</div>
                <div className={styles.cardBadge}>AI Powered</div>
              </div>
              <h3>AI Music Generation</h3>
              <p>Create unique compositions with our advanced AI engine. Generate melodies, harmonies, and complete tracks.</p>
              <div className={styles.cardFeatures}>
                <span>• Real-time generation</span>
                <span>• Custom styles</span>
                <span>• Professional quality</span>
              </div>
              <Link href="/create" className={styles.cardButton}>
                <span>Try Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🌊</div>
                <div className={styles.cardBadge}>Premium</div>
              </div>
              <h3>Immersive Studio</h3>
              <p>Professional recording studio with spatial audio, effects, and real-time collaboration tools.</p>
              <div className={styles.cardFeatures}>
                <span>• 3D Audio mixing</span>
                <span>• Live collaboration</span>
                <span>• Cloud storage</span>
              </div>
              <Link href="/studio" className={styles.cardButton}>
                <span>Explore</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>

            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon}>🚀</div>
                <div className={styles.cardBadge}>New</div>
              </div>
              <h3>Global Distribution</h3>
              <p>Share your music across all major platforms with one click. Analytics and royalty tracking included.</p>
              <div className={styles.cardFeatures}>
                <span>• Multi-platform release</span>
                <span>• Real-time analytics</span>
                <span>• Revenue tracking</span>
              </div>
              <Link href="/distribute" className={styles.cardButton}>
                <span>Launch</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section with Enhanced Design */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statNumber}>2.5M+</div>
              <div className={styles.statLabel}>Active Creators</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🎵</div>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Tracks Created</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🌍</div>
              <div className={styles.statNumber}>195</div>
              <div className={styles.statLabel}>Countries</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>⚡</div>
              <div className={styles.statNumber}>99.9%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
