
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/dashboard.module.css";

const Dashboard: NextPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - FrankFreq</title>
        <meta name="description" content="Your FrankFreq Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <h1>FrankFreq</h1>
          </div>
          <nav className={styles.nav}>
            <Link href="/profile" className={styles.navItem}>Profile</Link>
            <Link href="/settings" className={styles.navItem}>Settings</Link>
            <Link href="/auth/signin" className={styles.navItem}>Sign Out</Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <button 
              className={`${styles.sidebarItem} ${activeTab === 'overview' ? styles.active : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              📊 Overview
            </button>
            <button 
              className={`${styles.sidebarItem} ${activeTab === 'music' ? styles.active : ''}`}
              onClick={() => setActiveTab('music')}
            >
              🎵 My Music
            </button>
            <button 
              className={`${styles.sidebarItem} ${activeTab === 'playlists' ? styles.active : ''}`}
              onClick={() => setActiveTab('playlists')}
            >
              📝 Playlists
            </button>
            <button 
              className={`${styles.sidebarItem} ${activeTab === 'discover' ? styles.active : ''}`}
              onClick={() => setActiveTab('discover')}
            >
              🔍 Discover
            </button>
            <button 
              className={`${styles.sidebarItem} ${activeTab === 'community' ? styles.active : ''}`}
              onClick={() => setActiveTab('community')}
            >
              👥 Community
            </button>
          </div>
        </div>

        <div className={styles.content}>
          {activeTab === 'overview' && (
            <div className={styles.tabContent}>
              <h2>Welcome to FrankFreq!</h2>
              <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>🎧</div>
                  <h3>0</h3>
                  <p>Songs Played</p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>📝</div>
                  <h3>0</h3>
                  <p>Playlists Created</p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>👥</div>
                  <h3>0</h3>
                  <p>Following</p>
                </div>
                <div className={styles.statCard}>
                  <div className={styles.statIcon}>⭐</div>
                  <h3>0</h3>
                  <p>Favorites</p>
                </div>
              </div>

              <div className={styles.recentActivity}>
                <h3>Recent Activity</h3>
                <div className={styles.activityList}>
                  <div className={styles.activityItem}>
                    <div className={styles.activityIcon}>🎉</div>
                    <div className={styles.activityContent}>
                      <p>Welcome to FrankFreq! Start exploring music.</p>
                      <span className={styles.activityTime}>Just now</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'music' && (
            <div className={styles.tabContent}>
              <h2>My Music</h2>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>🎵</div>
                <h3>No music yet</h3>
                <p>Start exploring and adding music to your library</p>
                <button className={styles.primaryBtn}>Explore Music</button>
              </div>
            </div>
          )}

          {activeTab === 'playlists' && (
            <div className={styles.tabContent}>
              <h2>My Playlists</h2>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>📝</div>
                <h3>No playlists yet</h3>
                <p>Create your first playlist to organize your favorite tracks</p>
                <button className={styles.primaryBtn}>Create Playlist</button>
              </div>
            </div>
          )}

          {activeTab === 'discover' && (
            <div className={styles.tabContent}>
              <h2>Discover Music</h2>
              <div className={styles.discoverGrid}>
                <div className={styles.discoverCard}>
                  <h3>🔥 Trending Now</h3>
                  <p>Check out what's popular</p>
                </div>
                <div className={styles.discoverCard}>
                  <h3>🎯 For You</h3>
                  <p>Personalized recommendations</p>
                </div>
                <div className={styles.discoverCard}>
                  <h3>🆕 New Releases</h3>
                  <p>Latest music drops</p>
                </div>
                <div className={styles.discoverCard}>
                  <h3>🎪 Genres</h3>
                  <p>Explore by category</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'community' && (
            <div className={styles.tabContent}>
              <h2>Community</h2>
              <div className={styles.emptyState}>
                <div className={styles.emptyIcon}>👥</div>
                <h3>Connect with music lovers</h3>
                <p>Join discussions, share playlists, and discover new music through the community</p>
                <button className={styles.primaryBtn}>Explore Community</button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
