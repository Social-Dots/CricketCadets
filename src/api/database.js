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
      // For now, use localStorage as fallback
      const submission = {
        parentName,
        email,
        childAge: parseInt(childAge),
        source,
        timestamp: new Date().toISOString(),
        status: 'pending'
      };

      // Store in localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
      existingSubmissions.push(submission);
      localStorage.setItem('waitlistSubmissions', JSON.stringify(existingSubmissions));

      console.log('PostgreSQL Database URL:', `postgresql://neondb_owner:****@ep-cold-frog-ae40yk3j-pooler.c-2.us-east-2.aws.neon.tech/neondb`);
      console.log('Waitlist submission saved to localStorage:', submission);
      
      return { success: true, data: submission };
    } catch (error) {
      console.error('Error submitting waitlist:', error);
      return { success: false, error: error.message };
    }
  }

  async getWaitlistSubmissions() {
    try {
      const submissions = JSON.parse(localStorage.getItem('waitlistSubmissions') || '[]');
      return { success: true, data: submissions };
    } catch (error) {
      console.error('Error fetching waitlist submissions:', error);
      return { success: false, error: error.message };
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