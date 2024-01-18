const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to backend server");
});

app.get("/search", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
      },
    });

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error("Error fetching data from iTunes API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});

app.use(cors());
