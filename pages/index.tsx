
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

// Premium Music Sticker Component
const MusicSticker = ({ type, className }: { type: string; className: string }) => {
  const stickers = {
    vinyl: (
      <svg className={className} width="64" height="64" viewBox="0 0 24 24" fill="none">
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
    ),
    note1: (
      <svg className={className} width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="url(#note1Gradient)"/>
        <defs>
          <linearGradient id="note1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7877c6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    ),
    waveform: (
      <svg className={className} width="56" height="56" viewBox="0 0 32 32" fill="none">
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
    ),
    headphones: (
      <svg className={className} width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M12 1C7.03 1 3 5.03 3 10V15C3 16.1 3.9 17 5 17H6C7.1 17 8 16.1 8 15V11C8 9.9 7.1 9 6 9H5V10C5 6.13 8.13 3 12 3S19 6.13 19 10V9H18C16.9 9 16 9.9 16 11V15C16 16.1 16.9 17 18 17H19C20.1 17 21 16.1 21 15V10C21 5.03 16.97 1 12 1Z" fill="url(#headphoneGradient)"/>
        <defs>
          <linearGradient id="headphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>
      </svg>
    )
  };

  return stickers[type as keyof typeof stickers] || null;
};

const Home: NextPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const featuredTracks = ["Synthwave Dreams", "Lo-fi Nights", "Ambient Flow", "Electronic Pulse"];

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    const trackInterval = setInterval(() => {
      setCurrentTrack((prev) => (prev + 1) % featuredTracks.length);
    }, 3000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(trackInterval);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>FrankFreq - Premium Music Experience</title>
        <meta name="description" content="Create, discover, and share music like never before with AI-powered tools" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Mobile-First Navigation */}
      <nav className={styles.navigation}>
        <div className={styles.navBrand}>
          <div className={styles.brandIcon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#logoGradient)"/>
              <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <span className={styles.brandText}>FrankFreq</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={styles.mobileMenuToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Desktop Menu */}
        <div className={styles.navMenu}>
          <Link href="/auth/signin" className={styles.navItem}>Discover</Link>
          <Link href="/auth/signup" className={styles.navItem}>Create</Link>
          <Link href="/auth/signin" className={styles.navItem}>Community</Link>
        </div>

        <div className={styles.navActions}>
          <Link href="/auth/signin" className={styles.navSignIn}>Sign In</Link>
          <Link href="/auth/signup" className={styles.navSignUp}>Get Started</Link>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <Link href="/auth/signin" className={styles.mobileNavItem} onClick={() => setMobileMenuOpen(false)}>Discover</Link>
          <Link href="/auth/signup" className={styles.mobileNavItem} onClick={() => setMobileMenuOpen(false)}>Create</Link>
          <Link href="/auth/signin" className={styles.mobileNavItem} onClick={() => setMobileMenuOpen(false)}>Community</Link>
          <Link href="/auth/signin" className={styles.mobileNavItem} onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
          <Link href="/auth/signup" className={styles.mobileNavAction} onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
        </div>
      </nav>

      {/* Hero Section - Mobile Optimized */}
      <section className={styles.hero} style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
        <div className={styles.heroBackground}>
          <div className={styles.gradientOrb} style={{ transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.01}px)` }}></div>
          <div className={styles.gradientOrb2} style={{ transform: `translate(${scrollY * -0.01}px, ${scrollY * 0.02}px)` }}></div>
        </div>

        {/* Responsive Music Elements */}
        <div className={styles.musicElements}>
          <div className={styles.floatingElement} style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
            <MusicSticker type="vinyl" className={styles.vinylSticker} />
          </div>
          <div className={styles.floatingElement2} style={{ transform: `translateY(${scrollY * -0.08}px)` }}>
            <MusicSticker type="note1" className={styles.noteSticker} />
          </div>
          <div className={styles.floatingElement3} style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
            <MusicSticker type="waveform" className={styles.waveSticker} />
          </div>
          <div className={styles.floatingElement4} style={{ transform: `translateY(${scrollY * -0.04}px)` }}>
            <MusicSticker type="headphones" className={styles.headphoneSticker} />
          </div>
        </div>

        <div className={styles.heroContent}>
          {/* Live Music Badge - Responsive */}
          <div className={styles.liveBadge}>
            <div className={styles.pulseDot}></div>
            <span className={styles.badgeText}>{featuredTracks[currentTrack]}</span>
          </div>

          {/* Main Title - Responsive Typography */}
          <h1 className={styles.heroTitle}>
            Your Gateway to
            <br />
            <span className={styles.gradientText}>Music Discovery</span>
            <br />
            <span className={styles.titleAccent}>& Community</span>
          </h1>

          {/* Subtitle - Mobile Optimized */}
          <p className={styles.heroSubtitle}>
            Discover new music, listen to the latest podcasts, and connect with 
            a global community of music lovers and enthusiasts.
          </p>

          {/* Action Buttons - Stack on Mobile */}
          <div className={styles.heroActions}>
            <Link href="/auth/signup" className={styles.primaryBtn}>
              <span>Sign Up</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M13 7L18 12L13 17M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>

            <Link href="/auth/signin" className={styles.playBtn}>
              <div className={styles.playIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
                </svg>
              </div>
              <span>Sign In</span>
            </Link>
          </div>

          {/* Audio Visualizer - Responsive */}
          {mounted && (
            <div className={styles.audioVisualizer}>
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className={styles.visualizerBar}
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    height: isPlaying ? `${Math.random() * 40 + 10}px` : '8px'
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section - Mobile Grid */}
      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>✨ Premium Features</div>
          <h2 className={styles.sectionTitle}>Everything You Need to Create</h2>
          <p className={styles.sectionSubtitle}>
            Professional-grade tools designed for modern music creators
          </p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>🎧</div>
            <h3>Music Discovery</h3>
            <p>Discover and listen to millions of tracks from artists worldwide. Stream your favorite music and find new sounds.</p>
            <Link href="/auth/signup" className={styles.cardLink}>
              Listen Now →
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>🎙️</div>
            <h3>Podcast Hub</h3>
            <p>Listen to the latest news podcasts, music discussions, and exclusive interviews with artists.</p>
            <Link href="/auth/signin" className={styles.cardLink}>
              Listen →
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardIcon}>💬</div>
            <h3>Music Community</h3>
            <p>Connect with fellow music lovers, share playlists, and discuss your favorite tracks in our messaging platform.</p>
            <Link href="/auth/signin" className={styles.cardLink}>
              Join →
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive Grid */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2.5M+</div>
            <div className={styles.statLabel}>Active Creators</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>50M+</div>
            <div className={styles.statLabel}>Tracks Created</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>195</div>
            <div className={styles.statLabel}>Countries</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>99.9%</div>
            <div className={styles.statLabel}>Uptime</div>
          </div>
        </div>
      </section>

      {/* Footer - Mobile Friendly */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.brandIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#footerLogoGradient)"/>
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7877c6" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className={styles.brandText}>FrankFreq</span>
          </div>
          <p className={styles.footerText}>
            © 2024 FrankFreq. All rights reserved. Making music creation accessible to everyone.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
