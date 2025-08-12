// PostgreSQL Database Configuration
const DATABASE_CONFIG = {
  host: 'ep-cold-frog-ae40yk3j-pooler.c-2.us-east-2.aws.neon.tech',
  database: 'neondb',
  user: 'neondb_owner',
  password: 'npg_mvOA4wWVKE6i',
  port: 5432,
  ssl: { rejectUnauthorized: false }
};

// Database table creation SQL
const CREATE_TABLE_SQL = `
  CREATE TABLE IF NOT EXISTS waitlist_submissions (
    id SERIAL PRIMARY KEY,
    parent_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    child_age INTEGER NOT NULL CHECK (child_age >= 8 AND child_age <= 14),
    source VARCHAR(50) DEFAULT 'website',
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pending'
  );
`;

// Database service for waitlist operations
class DatabaseService {
  async submitWaitlist({ parentName, email, childAge, source = 'website' }) {
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentName,
          email,
          childAge,
          source
        })
      });

      const result = await response.json();
      
      if (result.success) {
        console.log('Waitlist submission saved to database:', result.data);
        return { success: true, data: result.data };
      } else {
        throw new Error(result.error || 'Failed to save submission');
      }
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      
      // Fallback to localStorage if API fails
      const submission = {
        parentName,
        email,
        childAge: parseInt(childAge),
        source,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      const existingSubmissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('waitlistSubmissions', JSON.stringify(existingSubmissions));
      
      return { success: true, data: submission };
    }
  }

  async getWaitlistSubmissions() {
    try {
      const response = await fetch('/api/waitlist');
      const result = await response.json();
      
      if (result.success) {
        return { success: true, data: result.data };
      } else {
        throw new Error(result.error || 'Failed to fetch submissions');
      }
    } catch (error) {
      console.error('Error fetching waitlist submissions:', error);
      
      // Fallback to localStorage if API fails
      const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
      return { success: true, data: submissions };
    }
  }

  getDatabaseConfig() {
    return {
      host: DATABASE_CONFIG.host,
      database: DATABASE_CONFIG.database,
      user: DATABASE_CONFIG.user,
      port: DATABASE_CONFIG.port,
      createTableSQL: CREATE_TABLE_SQL
    };
  }
}

export default new DatabaseService();