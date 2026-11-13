const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const HTML_FILE = 'Lofi Chill v2 MP3.html';

// Serve static assets (including music/ and the HTML file)
app.use(express.static(ROOT));

// Auto-scan daftar lagu MP3 di folder music/
app.get('/api/music', (req, res) => {
  const musicDir = path.join(ROOT, 'music');
  let files = [];
  try {
    files = fs.readdirSync(musicDir)
      .filter(f => /\.mp3$/i.test(f))
      .sort((a, b) => a.localeCompare(b, 'id'));
  } catch (e) {
    files = [];
  }
  res.json(files);
});

// Home route -> main HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(ROOT, HTML_FILE));
});

app.listen(PORT, () => {
  console.log(`Lofi Chill berjalan di http://localhost:${PORT}`);
  console.log(`Buka http://localhost:${PORT}/ di browser`);
});