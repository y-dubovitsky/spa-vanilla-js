const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

// Раздатка статического контента
app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
