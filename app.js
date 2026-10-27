const express = require("express");
const { Console } = require("winston/lib/winston/transports");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello from render");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING at port ${PORT}`);
});
