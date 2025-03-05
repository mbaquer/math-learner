import React from "react";

export function meta() {
  return [
    { title: "Calculus - Math Learner" },
  ];
}

export default function Calculus() {
  const styles = {
    // Layout & Background
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #f0f9ff, #e6f7f0)',
      fontFamily: 'Inter, system-ui, sans-serif',
      padding: '40px 20px',
    },
    contentWrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    // Header Styles
    header: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      marginBottom: '40px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
      borderTop: '4px solid #2dd4bf', // Teal accent
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '16px',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#4b5563',
      lineHeight: '1.6',
    },
    // Content Section
    section: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      marginBottom: '40px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.08)',
    },
    sectionTitle: {
      fontSize: '1.75rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '16px',
      borderBottom: '2px solid #f0f9ff',
      paddingBottom: '12px',
    },
    topicsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px',
      marginTop: '24px',
    },
    topicCard: {
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      padding: '24px',
      borderLeft: '4px solid #2dd4bf',
    },
    topicTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px',
    },
    topicDescription: {
      color: '#4b5563',
      marginBottom: '16px',
      lineHeight: '1.5',
    },
    button: {
      backgroundColor: '#2dd4bf',
      color: 'white',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '8px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      textDecoration: 'none',
    },
    calculusInfo: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      marginTop: '24px',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    infoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#e6f7f0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#2dd4bf',
      flexShrink: 0,
    },
    infoContent: {
      flex: 1,
    },
    infoTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      color: '#1f2937',
      marginBottom: '8px',
    },
    twoColumnGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
      gap: '24px',
      marginTop: '24px',
    },
    applicationCard: {
      backgroundColor: '#f8f9fa',
      borderRadius: '12px',
      padding: '24px',
      height: '100%',
    },
    formulaSection: {
      backgroundColor: '#f8f9fa',
      padding: '24px',
      borderRadius: '12px',
      marginTop: '24px',
      textAlign: 'center',
    },
    formula: {
      fontFamily: 'monospace',
      fontSize: '1.5rem',
      margin: '16px 0',
    }
  };

  // Sample topic data for Calculus
  const topics = [
    {
      title: "Limits",
      description: "Understand the concept of limits and continuity as the foundation of calculus."
    },
    {
      title: "Derivatives",
      description: "Learn to find rates of change and slopes of curves using differentiation."
    },
    {
      title: "Applications of Derivatives",
      description: "Apply derivatives to optimization, related rates, and curve sketching."
    },
    {
      title: "Integrals",
      description: "Master techniques of integration and understand the relationship to derivatives."
    },
    {
      title: "Applications of Integrals",
      description: "Calculate areas, volumes, and solve differential equations using integration."
    },
    {
      title: "Sequences and Series",
      description: "Explore infinite sequences, convergence tests, and power series."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Calculus</h1>
          <p style={styles.subtitle}>
            Dive into the mathematics of change and motion. Learn about limits, derivatives, 
            integrals, and their applications in science and engineering.
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* Topics Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Core Concepts</h2>
            <p>
              Our Calculus course covers both differential and integral calculus, providing a
              comprehensive foundation for advanced mathematics and applications in science.
            </p>
            
            <div style={styles.topicsGrid}>
              {topics.map((topic, index) => (
                <div key={index} style={styles.topicCard}>
                  <h3 style={styles.topicTitle}>{topic.title}</h3>
                  <p style={styles.topicDescription}>{topic.description}</p>
                  <a href={`/calculus/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} style={styles.button}>
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Key Concepts Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Calculus Concepts</h2>
            <p>
              Understanding these fundamental ideas will help you master calculus and its applications:
            </p>

            <div style={styles.calculusInfo}>
              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>1</div>
                <div style={styles.infoContent}>
                  <h3 style={styles.infoTitle}>The Derivative</h3>
                  <p>
                    The derivative represents the rate of change of a function at a specific point.
                    It's the slope of the tangent line to the curve at that point and is central to
                    differential calculus.
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>2</div>
                <div style={styles.infoContent}>
                  <h3 style={styles.infoTitle}>The Integral</h3>
                  <p>
                    The integral represents the area under a curve. It's used to calculate accumulated
                    quantities and is the foundation of integral calculus. The Fundamental Theorem of
                    Calculus connects derivatives and integrals.
                  </p>
                </div>
              </div>

              <div style={styles.infoItem}>
                <div style={styles.infoIcon}>3</div>
                <div style={styles.infoContent}>
                  <h3 style={styles.infoTitle}>Limits</h3>
                  <p>
                    Limits describe the behavior of a function as its input approaches a specific value.
                    They allow us to define derivatives and integrals rigorously and are essential for
                    understanding continuity.
                  </p>
                </div>
              </div>
            </div>

            <div style={styles.formulaSection}>
              <h3 style={styles.topicTitle}>The Fundamental Theorem of Calculus</h3>
              <p style={styles.formula}>∫ₐᵇ f(x) dx = F(b) - F(a)</p>
              <p>
                Where F is the antiderivative of f. This powerful theorem connects differentiation and
                integration, showing they are inverse operations.
              </p>
            </div>
          </section>

          {/* Applications Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Real-World Applications</h2>
            <p>
              Calculus is a powerful tool used across various fields to solve real-world problems:
            </p>

            <div style={styles.twoColumnGrid}>
              <div style={styles.applicationCard}>
                <h3 style={styles.topicTitle}>Physics</h3>
                <p>
                  Calculus is essential in physics for describing motion, calculating work, 
                  understanding electric fields, and formulating the laws of thermodynamics.
                  Newton developed calculus specifically to describe the laws of motion and gravity.
                </p>
              </div>

              <div style={styles.applicationCard}>
                <h3 style={styles.topicTitle}>Engineering</h3>
                <p>
                  Engineers use calculus to optimize designs, analyze structural stress, 
                  develop control systems, and solve complex problems in fluid dynamics, 
                  electrical circuits, and mechanical systems.
                </p>
              </div>

              <div style={styles.applicationCard}>
                <h3 style={styles.topicTitle}>Economics</h3>
                <p>
                  Economists apply calculus to maximize profits, minimize costs, analyze 
                  marginal utility, and model economic growth. Derivatives help determine 
                  rates of change in economic variables.
                </p>
              </div>

              <div style={styles.applicationCard}>
                <h3 style={styles.topicTitle}>Computer Graphics</h3>
                <p>
                  Calculus helps render curves and surfaces in computer graphics, simulate natural 
                  phenomena, create realistic animations, and develop algorithms for image processing.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}