const express = require('express');
const calculator = require('./calculator');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'healthy',
    message: 'CI Fundamentals Demo API',
    version: '1.0.0'
  });
});

// Calculator endpoints
app.post('/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: calculator.add(a, b) });
});

app.post('/multiply', (req, res) => {
  const { a, b } = req.body;
  if (typeof a !== 'number' || typeof b !== 'number') {
    return res.status(400).json({ error: 'Both a and b must be numbers' });
  }
  res.json({ result: calculator.multiply(a, b) });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;