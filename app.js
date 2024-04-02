const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Route to serve JSON data
app.get('/api/data', async (req, res) => {
  try {
    const jsonData = await fs.readFile('./data/data.json', 'utf8');
    res.json(JSON.parse(jsonData));
  } catch (err) {
    console.error('Error reading JSON file:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
