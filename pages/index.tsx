
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";

// Music Platform Components
const StreamingCard = ({ platform, isConnected }: { platform: string; isConnected: boolean }) => {
  const platformIcons = {
    spotify: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#1DB954"/>
        <path d="M17 10.5c-4.8-2.4-12.8-2.6-17.4-1.4v-0.8c5.2-1.3 13.8-1 19 1.6L17 10.5z M16.8 13.8c-4.2-2.1-10.8-2.3-14.2-1.2v-0.7c3.8-1.1 10.6-0.9 15 1.4L16.8 13.8z M16.6 16.7c-3.4-1.7-8.6-1.9-11.4-1v-0.6c3.2-0.9 8.4-0.7 12 1.2L16.6 16.7z" fill="white"/>
      </svg>
    ),
    apple: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#000000"/>
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="white"/>
      </svg>
    ),
    youtube: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#FF0000"/>
        <path d="M10 15l5.19-3L10 9v6z" fill="white"/>
      </svg>
    ),
    soundcloud: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="12" fill="#FF5500"/>
        <path d="M8.5 12.5h1v4h-1zm2-1h1v5h-1zm2-2h1v7h-1zm2 1h1v6h-1zm2-3h1v9h-1z" fill="white"/>
      </svg>
    )
  };

  return (
    <div className={styles.streamingCard}>
      <div className={styles.platformIcon}>
        {platformIcons[platform as keyof typeof platformIcons]}
      </div>
      <div className={styles.platformInfo}>
        <h3>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h3>
        <span className={`${styles.connectionStatus} ${isConnected ? styles.connected : styles.disconnected}`}>
          {isConnected ? 'Connected' : 'Connect'}
        </span>
      </div>
      <button className={`${styles.connectBtn} ${isConnected ? styles.connected : ''}`}>
        {isConnected ? '✓' : '+'}
      </button>
    </div>
  );
};

const MusicPlayer = ({ track }: { track: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes default

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(prev => prev < duration ? prev + 1 : prev);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={styles.musicPlayer}>
      <div className={styles.trackInfo}>
        <div className={styles.albumArt}>
          <div className={styles.albumPlaceholder}>♪</div>
        </div>
        <div className={styles.trackDetails}>
          <h4>{track.title}</h4>
          <p>{track.artist}</p>
        </div>
      </div>
      
      <div className={styles.playerControls}>
        <button className={styles.controlBtn}>⏮</button>
        <button 
          className={styles.playPauseBtn}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className={styles.controlBtn}>⏭</button>
      </div>

      <div className={styles.progressSection}>
        <span className={styles.timeDisplay}>{formatTime(currentTime)}</span>
        <div className={styles.progressBar}>
          <div 
            className={styles.progress}
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <span className={styles.timeDisplay}>{formatTime(duration)}</span>
      </div>

      <div className={styles.playerActions}>
        <button className={styles.actionBtn} title="Download">⬇</button>
        <button className={styles.actionBtn} title="Add to Playlist">+</button>
        <button className={styles.actionBtn} title="Share">↗</button>
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [activeTab, setActiveTab] = useState('discover');
  const [currentTrack, setCurrentTrack] = useState({
    title: "Midnight Vibes",
    artist: "DJ FrankFreq",
    album: "Electronic Dreams",
    duration: 180
  });

  const platforms = [
    { name: 'spotify', connected: true },
    { name: 'apple', connected: false },
    { name: 'youtube', connected: true },
    { name: 'soundcloud', connected: false }
  ];

  const featuredTracks = [
    { title: "Synthwave Dreams", artist: "NeonBeats", genre: "Electronic", downloads: "2.3K" },
    { title: "Lo-fi Nights", artist: "ChillMaster", genre: "Lo-fi", downloads: "5.7K" },
    { title: "Ambient Flow", artist: "SoundWaves", genre: "Ambient", downloads: "1.9K" },
    { title: "Bass Drop", artist: "ElectroBeat", genre: "EDM", downloads: "8.2K" }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>FrankFreq - Stream, Download & Discover Music</title>
        <meta name="description" content="Ultimate music platform - Stream from multiple sources, download high-quality tracks, chat with global community" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
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
            <span className={styles.logoText}>FrankFreq</span>
          </div>

          <nav className={styles.mainNav}>
            <button 
              className={`${styles.navBtn} ${activeTab === 'discover' ? styles.active : ''}`}
              onClick={() => setActiveTab('discover')}
            >
              🔍 Discover
            </button>
            <button 
              className={`${styles.navBtn} ${activeTab === 'library' ? styles.active : ''}`}
              onClick={() => setActiveTab('library')}
            >
              📚 Library
            </button>
            <button 
              className={`${styles.navBtn} ${activeTab === 'downloads' ? styles.active : ''}`}
              onClick={() => setActiveTab('downloads')}
            >
              ⬇ Downloads
            </button>
            <button 
              className={`${styles.navBtn} ${activeTab === 'social' ? styles.active : ''}`}
              onClick={() => setActiveTab('social')}
            >
              💬 Social
            </button>
          </nav>

          <div className={styles.userActions}>
            <button className={styles.searchBtn}>🔍</button>
            <Link href="/auth/signin" className={styles.loginBtn}>Login</Link>
            <Link href="/auth/signup" className={styles.signupBtn}>Join Free</Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        {/* Platform Integration Section */}
        <section className={styles.platformSection}>
          <div className={styles.sectionHeader}>
            <h2>Connected Platforms</h2>
            <p>Stream music from your favorite platforms</p>
          </div>
          
          <div className={styles.platformGrid}>
            {platforms.map((platform) => (
              <StreamingCard 
                key={platform.name}
                platform={platform.name} 
                isConnected={platform.connected}
              />
            ))}
          </div>
        </section>

        {/* Featured Content */}
        <section className={styles.featuredSection}>
          <div className={styles.contentTabs}>
            {activeTab === 'discover' && (
              <div className={styles.discoverContent}>
                <h2>🎵 Trending Now</h2>
                <div className={styles.trackGrid}>
                  {featuredTracks.map((track, index) => (
                    <div key={index} className={styles.trackCard}>
                      <div className={styles.trackArtwork}>♪</div>
                      <div className={styles.trackInfo}>
                        <h4>{track.title}</h4>
                        <p>{track.artist}</p>
                        <span className={styles.genre}>{track.genre}</span>
                      </div>
                      <div className={styles.trackActions}>
                        <button className={styles.playTrack}>▶</button>
                        <button className={styles.downloadTrack}>⬇</button>
                        <span className={styles.downloadCount}>{track.downloads}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'library' && (
              <div className={styles.libraryContent}>
                <h2>📚 Your Music Library</h2>
                <div className={styles.libraryStats}>
                  <div className={styles.statCard}>
                    <h3>247</h3>
                    <p>Songs</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>23</h3>
                    <p>Playlists</p>
                  </div>
                  <div className={styles.statCard}>
                    <h3>15</h3>
                    <p>Albums</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'downloads' && (
              <div className={styles.downloadsContent}>
                <h2>⬇ Download Manager</h2>
                <div className={styles.downloadQueue}>
                  <div className={styles.downloadItem}>
                    <span>Bass Revolution - ElectroMix</span>
                    <div className={styles.downloadProgress}>
                      <div className={styles.progressBar}>
                        <div className={styles.progress} style={{width: '75%'}}></div>
                      </div>
                      <span>75%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'social' && (
              <div className={styles.socialContent}>
                <h2>💬 Global Music Community</h2>
                <div className={styles.chatPreview}>
                  <div className={styles.activeUsers}>
                    <h3>🌍 Online Now: 12,847</h3>
                  </div>
                  <div className={styles.chatMessages}>
                    <div className={styles.message}>
                      <span className={styles.username}>MusicLover23:</span>
                      <span>Just discovered this amazing track! 🎵</span>
                    </div>
                    <div className={styles.message}>
                      <span className={styles.username}>BeatMaster:</span>
                      <span>Who's ready for tonight's live DJ set?</span>
                    </div>
                  </div>
                  <Link href="/chat" className={styles.joinChatBtn}>Join Global Chat</Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Fixed Music Player */}
      <div className={styles.fixedPlayer}>
        <MusicPlayer track={currentTrack} />
      </div>
    </div>
  );
};

export default Home;
