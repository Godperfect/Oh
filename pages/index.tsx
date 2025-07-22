
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
