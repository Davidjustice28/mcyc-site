import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the React app
app.use(express.static(path.resolve('./build')));

// Catch-all handler to serve React's index.html for unmatched routes
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
