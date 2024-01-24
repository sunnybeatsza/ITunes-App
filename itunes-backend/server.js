const express = require("express");
const app = express();
const cors = require("cors");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/jwtSecure");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to backend server");
});

app.post("/login", (req, res) => {
  const usr = req.body.userName;
  const pwd = req.body.passWord;
  console.log("Request Body:", req.body);
  if (usr && pwd) {
    payload = {
      name: usr,
    };
    const token = jwt.sign(JSON.stringify(payload), "jwt-secret", {
      algorithm: "HS256",
    });
    res.send({ token: token });
  } else {
    res.status(403).send({ err: "Incorrect login!" });
  }
});

app.get("/search", verifyToken, async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get(
      "https://itunes.apple.com/search?country=us",
      {
        params: {
          term: searchTerm,
        },
      }
    );

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error("Error fetching data from iTunes API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/artist", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get(
      "https://itunes.apple.com/search?country=us",
      {
        params: {
          term: searchTerm,
          entity: "musicArtist",
        },
      }
    );

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/songs", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get(
      "https://itunes.apple.com/search?country=us",
      {
        params: {
          term: searchTerm,
          media: "music",
        },
      }
    );

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/album", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        entity: "album",
      },
    });

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/podcasts", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        entity: "podcast",
        limit: 10,
      },
    });

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/musicVideos", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        entity: "musicVideo",
        limit: 10,
      },
    });

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/search/movie", async (req, res) => {
  const searchTerm = req.query.term;

  try {
    const response = await axios.get("https://itunes.apple.com/search", {
      params: {
        term: searchTerm,
        entity: "movie",
        limit: 10,
      },
    });

    const results = response.data.results;
    res.json(results);
  } catch (error) {
    console.error(
      "Error fetching data for music artists from iTunes API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
