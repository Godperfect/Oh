
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>FrankFreq - Your Music Platform</title>
        <meta name="description" content="Welcome to FrankFreq - Discover, create, and share your music journey" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.musicStickers}>
            {/* Floating Music Notes */}
            <svg className={styles.musicNote1} width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="url(#musicGradient1)"/>
              <defs>
                <linearGradient id="musicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            <svg className={styles.musicNote2} width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M9 5V15.55C8.41 15.21 7.73 15 7 15C4.79 15 3 16.79 3 19S4.79 23 7 23 11 21.21 11 19V9H15V5H9Z" fill="url(#musicGradient2)"/>
              <defs>
                <linearGradient id="musicGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Vinyl Record */}
            <svg className={styles.vinylRecord} width="48" height="48" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="url(#vinylGradient)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
              <circle cx="12" cy="12" r="6" fill="rgba(0,0,0,0.4)"/>
              <circle cx="12" cy="12" r="2" fill="url(#centerGradient)"/>
              <defs>
                <linearGradient id="vinylGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(120, 119, 198, 0.3)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.2)" />
                </linearGradient>
                <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="100%" stopColor="#ffffff" />
                </linearGradient>
              </defs>
            </svg>

            {/* Headphones */}
            <svg className={styles.headphones} width="36" height="36" viewBox="0 0 24 24" fill="none">
              <path d="M12 1C7.03 1 3 5.03 3 10V15C3 16.1 3.9 17 5 17H6C7.1 17 8 16.1 8 15V11C8 9.9 7.1 9 6 9H5V10C5 6.13 8.13 3 12 3S19 6.13 19 10V9H18C16.9 9 16 9.9 16 11V15C16 16.1 16.9 17 18 17H19C20.1 17 21 16.1 21 15V10C21 5.03 16.97 1 12 1Z" fill="url(#headphoneGradient)"/>
              <defs>
                <linearGradient id="headphoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>

            {/* Waveform */}
            <svg className={styles.waveform} width="40" height="40" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="8" width="2" height="8" fill="url(#waveGradient)" rx="1"/>
              <rect x="6" y="6" width="2" height="12" fill="url(#waveGradient)" rx="1"/>
              <rect x="10" y="4" width="2" height="16" fill="url(#waveGradient)" rx="1"/>
              <rect x="14" y="7" width="2" height="10" fill="url(#waveGradient)" rx="1"/>
              <rect x="18" y="5" width="2" height="14" fill="url(#waveGradient)" rx="1"/>
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#7877c6" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Speaker */}
            <svg className={styles.speaker} width="34" height="34" viewBox="0 0 24 24" fill="none">
              <path d="M3 9V15H7L12 20V4L7 9H3Z" fill="url(#speakerGradient)"/>
              <path d="M16.5 12C16.5 10.23 15.5 8.71 14 7.97V16.03C15.5 15.29 16.5 13.77 16.5 12Z" fill="url(#speakerGradient)" opacity="0.8"/>
              <path d="M14 3.23V5.29C16.89 6.15 19 8.83 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.72 18.01 4.14 14 3.23Z" fill="url(#speakerGradient)" opacity="0.6"/>
              <defs>
                <linearGradient id="speakerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#7877c6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Microphone */}
            <svg className={styles.microphone} width="30" height="30" viewBox="0 0 24 24" fill="none">
              <rect x="9" y="2" width="6" height="12" rx="3" fill="url(#micGradient)"/>
              <path d="M19 10V12C19 16.42 15.28 20 10.5 20H13.5C18.72 20 23 15.72 23 10.5V10H19Z" fill="url(#micGradient)" opacity="0.7"/>
              <path d="M12 20V24M8 24H16" stroke="url(#micGradient)" strokeWidth="2" strokeLinecap="round"/>
              <defs>
                <linearGradient id="micGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🎵</span>
              Now Playing Your Future
            </div>
            <h1 className={styles.title}>
              Welcome to <span className={styles.brand}>FrankFreq</span>
            </h1>
            <p className={styles.subtitle}>
              Your ultimate music platform for discovery, creation, and connection. 
              Join thousands of artists and music lovers in shaping the future of sound.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/auth/signup" className={styles.primaryButton}>
                Get Started
              </Link>
              <Link href="/auth/signin" className={styles.secondaryButton}>
                Sign In
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className={styles.features}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Everything You Need</h2>
            <p className={styles.sectionSubtitle}>
              Powerful tools and resources to enhance your music experience
            </p>
          </div>
          
          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={`${styles.card} ${styles.cardPrimary}`}>
              <div className={styles.cardIcon}>📚</div>
              <h3>Documentation</h3>
              <p>Find in-depth information about Next.js features and API to build amazing music apps.</p>
              <span className={styles.cardArrow}>→</span>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <div className={styles.cardIcon}>🎓</div>
              <h3>Learn</h3>
              <p>Master Next.js with interactive courses and build your music platform skills.</p>
              <span className={styles.cardArrow}>→</span>
            </a>

            <a href="https://github.com/vercel/next.js/tree/canary/examples" className={styles.card}>
              <div className={styles.cardIcon}>⚡</div>
              <h3>Examples</h3>
              <p>Discover and deploy boilerplate example Next.js projects for music applications.</p>
              <span className={styles.cardArrow}>→</span>
            </a>

            <a href="https://docs.replit.com/category/deployments" className={styles.card}>
              <div className={styles.cardIcon}>🚀</div>
              <h3>Deploy</h3>
              <p>Ready to go live? Deploy your music platform on Replit with just one click.</p>
              <span className={styles.cardArrow}>→</span>
            </a>

            <Link href="/auth/signin" className={styles.card}>
              <div className={styles.cardIcon}>🎤</div>
              <h3>Sign In</h3>
              <p>Access your account with our sleek authentication design and start your journey.</p>
              <span className={styles.cardArrow}>→</span>
            </Link>

            <Link href="/auth/signup" className={styles.card}>
              <div className={styles.cardIcon}>✨</div>
              <h3>Sign Up</h3>
              <p>Create a new account to get started with our music platform and join the community.</p>
              <span className={styles.cardArrow}>→</span>
            </Link>
          </div>
        </section>

        {/* Stats Section */}
        <section className={styles.stats}>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Active Users</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Tracks Shared</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>99%</div>
              <div className={styles.statLabel}>Uptime</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>24/7</div>
              <div className={styles.statLabel}>Support</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
