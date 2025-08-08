import express from 'express';
import cors from 'cors';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const port = process.env.PORT || 3001;

// PostgreSQL connection
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_mvOA4wWVKE6i@ep-cold-frog-ae40yk3j-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(cors());
app.use(express.json());

// Create waitlist table
app.post('/api/create-table', async (req, res) => {
  try {
    const createTableSQL = `
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

    await pool.query(createTableSQL);
    res.json({ success: true, message: 'Waitlist table created successfully' });
  } catch (error) {
    console.error('Error creating table:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Submit waitlist
app.post('/api/waitlist', async (req, res) => {
  try {
    const { parentName, email, childAge, source = 'website' } = req.body;

    const insertSQL = `
      INSERT INTO waitlist_submissions (parent_name, email, child_age, source)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const result = await pool.query(insertSQL, [parentName, email, parseInt(childAge), source]);
    
    res.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Error submitting waitlist:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all waitlist submissions
app.get('/api/waitlist', async (req, res) => {
  try {
    const selectSQL = 'SELECT * FROM waitlist_submissions ORDER BY timestamp DESC;';
    const result = await pool.query(selectSQL);
    
    res.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error fetching waitlist:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;