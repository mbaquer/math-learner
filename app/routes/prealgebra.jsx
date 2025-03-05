import React from "react";

export function meta() {
  return [
    { title: "Pre-Algebra - Math Learner" },
  ];
}

export default function PreAlgebra() {
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
      borderTop: '4px solid #4ade80', // Green accent
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
      borderLeft: '4px solid #4ade80',
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
      backgroundColor: '#4ade80',
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
    resourcesSection: {
      marginTop: '32px',
    },
    resourcesList: {
      listStyleType: 'none',
      padding: '0',
      margin: '0',
    },
    resourceItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '12px 0',
      borderBottom: '1px solid #e5e7eb',
    },
    resourceIcon: {
      width: '24px',
      height: '24px',
      marginRight: '12px',
      color: '#4ade80',
    },
    resourceText: {
      color: '#4b5563',
    },
    resourceLink: {
      color: '#4ade80',
      textDecoration: 'none',
    }
  };

  // Sample topic data for Pre-Algebra
  const topics = [
    {
      title: "Whole Numbers",
      description: "Learn about basic operations with whole numbers, place value, and number lines."
    },
    {
      title: "Fractions",
      description: "Understand fractions, equivalent fractions, and operations with fractions."
    },
    {
      title: "Decimals",
      description: "Convert between fractions and decimals, and perform operations with decimal numbers."
    },
    {
      title: "Integers",
      description: "Work with positive and negative numbers, absolute value, and the number line."
    },
    {
      title: "Factors & Multiples",
      description: "Find GCF, LCM, prime factors, and understand divisibility rules."
    },
    {
      title: "Introduction to Variables",
      description: "Learn the basics of variables and simple equations to prepare for algebra."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Pre-Algebra</h1>
          <p style={styles.subtitle}>
            Build a strong foundation with essential concepts that prepare you for algebra.
            Learn about basic arithmetic, integers, factors, and more.
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* Topics Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Key Topics</h2>
            <p>
              Our Pre-Algebra course covers all the fundamental concepts you need to succeed in
              more advanced math courses. Explore these essential topics at your own pace.
            </p>
            
            <div style={styles.topicsGrid}>
              {topics.map((topic, index) => (
                <div key={index} style={styles.topicCard}>
                  <h3 style={styles.topicTitle}>{topic.title}</h3>
                  <p style={styles.topicDescription}>{topic.description}</p>
                  <a href={`/prealgebra/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} style={styles.button}>
                    Start Learning
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Learning Resources</h2>
            <p>
              We provide multiple ways to master Pre-Algebra concepts. Explore our
              comprehensive set of learning resources.
            </p>

            <div style={styles.resourcesSection}>
              <ul style={styles.resourcesList}>
                <li style={styles.resourceItem}>
                  <span style={styles.resourceText}>Interactive lessons with step-by-step explanations</span>
                </li>
                <li style={styles.resourceItem}>
                  <span style={styles.resourceText}>Practice problems with instant feedback</span>
                </li>
                <li style={styles.resourceItem}>
                  <span style={styles.resourceText}>Video tutorials for visual learners</span>
                </li>
                <li style={styles.resourceItem}>
                  <span style={styles.resourceText}>Downloadable worksheets and study guides</span>
                </li>
                <li style={styles.resourceItem}>
                  <span style={styles.resourceText}>Quizzes to test your understanding</span>
                </li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}