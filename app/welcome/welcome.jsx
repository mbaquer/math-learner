import React from "react";

export function Welcome() {
  const styles = {
    // Layout & Background
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f0f9ff, #e6f7f0)',
      fontFamily: 'Inter, system-ui, sans-serif',
    },
    section: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    
    // Header Section
    header: {
      padding: '64px 0',
      textAlign: 'center',
    },
    heroCard: {
      maxWidth: '900px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '16px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    },
    heroContent: {
      background: 'linear-gradient(to right, #4ade80, #22d3ee)',
      padding: '48px 24px',
      color: 'white',
    },
    heroTitle: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '16px',
    },
    heroText: {
      fontSize: '1.25rem',
      opacity: '0.9',
      marginBottom: '24px',
    },
    ctaButton: {
      backgroundColor: 'white',
      color: '#0d9488',
      fontWeight: '500',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
    },
    
    // Topics Section
    topicsSection: {
      padding: '48px 20px',
    },
    sectionTitle: {
      fontSize: '2rem',
      fontWeight: '700',
      color: '#1f2937',
      textAlign: 'center',
      marginBottom: '40px',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '32px',
    },
    topicCard: {
      backgroundColor: 'white',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    topicCardGreen: {
      borderTop: '4px solid #4ade80',
    },
    topicCardBlue: {
      borderTop: '4px solid #22d3ee',
    },
    topicCardTeal: {
      borderTop: '4px solid #2dd4bf',
    },
    topicContent: {
      padding: '24px',
    },
    topicTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '8px',
    },
    topicText: {
      color: '#4b5563',
      marginBottom: '16px',
    },
    topicLink: {
      display: 'inline-block',
      padding: '8px 16px',
      borderRadius: '6px',
      backgroundColor: '#f3f4f6',
      color: '#1f2937',
      textDecoration: 'none',
      fontWeight: '500',
      transition: 'background-color 0.2s ease',
    },
    
    // About Section
    aboutSection: {
      marginTop: '48px',
      marginBottom: '48px',
      padding: '40px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
    },
    aboutTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '16px',
    },
    aboutText: {
      color: '#4b5563',
      lineHeight: '1.6',
    }
  };

  // Custom hover states for the buttons (will need JavaScript to implement fully)
  const handleMouseOver = (e) => {
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
  };
  
  const handleMouseOut = (e) => {
    e.target.style.transform = 'translateY(0)';
    e.target.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  };

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <header style={styles.header}>
        <div style={styles.heroCard}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Welcome to MathLearner</h1>
            <p style={styles.heroText}>Your go-to platform for learning and practicing math</p>
            <button 
              style={styles.ctaButton}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* Featured Topics */}
      <section style={{...styles.section, ...styles.topicsSection}}>
        <h2 style={styles.sectionTitle}>Featured Topics</h2>
        <div style={styles.topicsGrid}>
          {/* Pre-Algebra Card */}
          <div style={{...styles.topicCard, ...styles.topicCardGreen}}>
            <div style={styles.topicContent}>
              <h3 style={styles.topicTitle}>Pre-Algebra</h3>
              <p style={styles.topicText}>Basic arithmetic, integers, factors, and more.</p>
              <a href="/prealgebra" style={styles.topicLink}>Explore</a>
            </div>
          </div>
          
          {/* Algebra Card */}
          <div style={{...styles.topicCard, ...styles.topicCardBlue}}>
            <div style={styles.topicContent}>
              <h3 style={styles.topicTitle}>Algebra</h3>
              <p style={styles.topicText}>Equations, inequalities, and functions.</p>
              <a href="/algebra" style={styles.topicLink}>Explore</a>
            </div>
          </div>
          
          {/* Calculus Card */}
          <div style={{...styles.topicCard, ...styles.topicCardTeal}}>
            <div style={styles.topicContent}>
              <h3 style={styles.topicTitle}>Calculus</h3>
              <p style={styles.topicText}>Limits, derivatives, and integrals.</p>
              <a href="/calculus" style={styles.topicLink}>Explore</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{...styles.section, ...styles.aboutSection}}>
        <h2 style={styles.aboutTitle}>About Us</h2>
        <p style={styles.aboutText}>
          MathLearner is dedicated to providing high-quality math education for
          students of all levels. Whether you're just starting or looking to
          master calculus, we have the resources you need.
        </p>
      </section>
    </div>
  );
}

export default Welcome;