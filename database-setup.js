// PostgreSQL Database Setup Script
// This script demonstrates how to set up the database table for waitlist submissions

const DATABASE_URL = 'postgresql://neondb_owner:npg_mvOA4wWVKE6i@ep-cold-frog-ae40yk3j-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require';

// SQL to create the waitlist_submissions table
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

// SQL to insert a test submission
const INSERT_TEST_SQL = `
  INSERT INTO waitlist_submissions (parent_name, email, child_age, source)
  VALUES ('Test Parent', 'test@example.com', 10, 'test')
  RETURNING *;
`;

// SQL to select all submissions
const SELECT_ALL_SQL = `
  SELECT * FROM waitlist_submissions ORDER BY timestamp DESC;
`;

console.log('Database Configuration:');
console.log('URL:', DATABASE_URL);
console.log('Table Creation SQL:', CREATE_TABLE_SQL);

// Instructions for manual setup
console.log('\n=== Database Setup Instructions ===');
console.log('1. Install PostgreSQL client: npm install pg');
console.log('2. Run the following SQL in your Neon database console:');
console.log(CREATE_TABLE_SQL);
console.log('3. Test the connection with:');
console.log(INSERT_TEST_SQL);
console.log('4. View all submissions with:');
console.log(SELECT_ALL_SQL);

// Export for use in other files
export {
  DATABASE_URL,
  CREATE_TABLE_SQL,
  INSERT_TEST_SQL,
  SELECT_ALL_SQL
};