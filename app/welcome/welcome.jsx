import React from "react";

export function Welcome() {
  
    const styles = {
      container: {
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      },
      introSection: {
        backgroundColor: '#333',
        color: 'white',
        padding: '50px 20px',
        borderRadius: '10px',
      },
      ctaButton: {
        display: 'inline-block',
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#f0a500',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
      },
      featuredTopics: {
        marginTop: '30px',
      },
      topicsGrid: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
      },
      topicCard: {
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '10px',
        width: '250px',
        textAlign: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
      linkButton: {
        display: 'inline-block',
        marginTop: '10px',
        padding: '8px 15px',
        backgroundColor: '#333',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
      },
      aboutSection: {
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#e0e0e0',
        borderRadius: '10px',
      }
    };
  
    return (
      <div style={styles.container}>
        <header style={styles.introSection}>
          <h1>Welcome to MathLearner</h1>
          <p>Your go-to platform for learning and practicing math.</p>
          <a href="/signup" style={styles.ctaButton}>Get Started</a>
        </header>
  
        <section style={styles.featuredTopics}>
          <h2>Featured Topics</h2>
          <div style={styles.topicsGrid}>
            <div style={styles.topicCard}>
              <h3>Pre-Algebra</h3>
              <p>Basic arithmetic, integers, factors, and more.</p>
              <a href="/prealgebra" style={styles.linkButton}>Explore</a>
            </div>
            <div style={styles.topicCard}>
              <h3>Algebra</h3>
              <p>Equations, inequalities, and functions.</p>
              <a href="/algebra" style={styles.linkButton}>Explore</a>
            </div>
            <div style={styles.topicCard}>
              <h3>Calculus</h3>
              <p>Limits, derivatives, and integrals.</p>
              <a href="/calculus" style={styles.linkButton}>Explore</a>
            </div>
          </div>
        </section>
  
        <section style={styles.aboutSection}>
          <h2>About Us</h2>
          <p>
            MathLearner is dedicated to providing high-quality math education for
            students of all levels. Whether you're just starting or looking to
            master calculus, we have the resources you need.
          </p>
        </section>
      </div>
  
  );
}

