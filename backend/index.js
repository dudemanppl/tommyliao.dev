const express = require("express");
const app = express();
const port = 3001;

app.use(express.static("../frontend/out"));

app.listen(port, () => console.log(`Server running on port ${port}`));
