const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080; // default port 8080


app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});