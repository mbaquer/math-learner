import React from "react";

export function meta() {
  return [
    { title: "Algebra - Math Learner" },
  ];
}

export default function Algebra() {
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
      borderTop: '4px solid #22d3ee', // Blue accent
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
      borderLeft: '4px solid #22d3ee',
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
      backgroundColor: '#22d3ee',
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
    progressSection: {
      marginTop: '32px',
    },
    progressBar: {
      height: '12px',
      backgroundColor: '#f3f4f6',
      borderRadius: '6px',
      marginTop: '8px',
      marginBottom: '24px',
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      width: '45%', // Example progress
      backgroundColor: '#22d3ee',
      borderRadius: '6px',
    },
    exampleSection: {
      backgroundColor: '#f8f9fa',
      padding: '24px',
      borderRadius: '12px',
      marginTop: '24px',
    },
    equation: {
      fontFamily: 'monospace',
      fontSize: '1.25rem',
      textAlign: 'center',
      margin: '16px 0',
    }
  };

  // Sample topic data for Algebra
  const topics = [
    {
      title: "Linear Equations",
      description: "Solve for unknowns in equations of the form ax + b = c and graph linear equations."
    },
    {
      title: "Inequalities",
      description: "Work with greater than and less than relationships and solve linear inequalities."
    },
    {
      title: "Quadratic Equations",
      description: "Solve and graph quadratic equations using factoring, completing the square, and the quadratic formula."
    },
    {
      title: "Systems of Equations",
      description: "Solve problems involving multiple equations and variables using substitution and elimination."
    },
    {
      title: "Polynomials",
      description: "Learn to add, subtract, multiply, and factor polynomial expressions."
    },
    {
      title: "Functions",
      description: "Understand the concept of functions, domain, range, and function notation."
    }
  ];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>Algebra</h1>
          <p style={styles.subtitle}>
            Master the fundamentals of algebra, including equations, inequalities, and functions.
            Learn to solve for unknowns and represent relationships mathematically.
          </p>
        </header>

        {/* Main Content */}
        <main>
          {/* Topics Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Core Concepts</h2>
            <p>
              Our Algebra course builds on pre-algebra foundations to develop your mathematical
              reasoning and problem-solving skills. Explore these essential topics:
            </p>
            
            <div style={styles.topicsGrid}>
              {topics.map((topic, index) => (
                <div key={index} style={styles.topicCard}>
                  <h3 style={styles.topicTitle}>{topic.title}</h3>
                  <p style={styles.topicDescription}>{topic.description}</p>
                  <a href={`/algebra/${topic.title.toLowerCase().replace(/\s+/g, '-')}`} style={styles.button}>
                    Explore
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Example Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Sample Problem</h2>
            <p>
              Here's an example of the type of problems you'll learn to solve in our Algebra course:
            </p>

            <div style={styles.exampleSection}>
              <h3 style={styles.topicTitle}>Solving a Linear Equation</h3>
              <p style={styles.equation}>3x + 7 = 22</p>
              <p>To solve this equation for x:</p>
              <ol>
                <li>Subtract 7 from both sides: 3x = 15</li>
                <li>Divide both sides by 3: x = 5</li>
              </ol>
              <p>Therefore, x = 5 is the solution.</p>
            </div>
          </section>

          {/* Progress Section */}
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Your Learning Path</h2>
            <p>
              Our curriculum is designed to build your skills progressively. Track your progress
              and see how each concept connects to the next.
            </p>

            <div style={styles.progressSection}>
              <h3 style={styles.topicTitle}>Your Algebra Progress</h3>
              <div style={styles.progressBar}>
                <div style={styles.progressFill}></div>
              </div>
              <p>
                Continue your learning journey through our structured curriculum. 
                Master each concept before moving on to more advanced topics.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}