# ITunes-App

Capstone Project : ITunes App

## Project Description

**Muso: Your Ultimate Music Companion**

Muso is a dynamic application that harnesses the power of Express, React, and Node.js, combined with the iTunes search API, to create a seamless and immersive music experience. This app is designed to be your ultimate music companion, offering a feature-rich platform that allows users to discover, explore, and enjoy their favorite tunes effortlessly.

### Key Features:

- **Intuitive Search:** Muso leverages the iTunes search API to provide users with a user-friendly search interface, making it easy to find their preferred artists, albums, or tracks.

- **Playlist Creation:** Muso enables users to curate and organize their playlists with ease. Build personalized collections of your favorite songs for any mood or occasion.

- **Real-time Updates:** Stay up-to-date with the latest releases and trends in the music world. Muso ensures you never miss a beat by delivering real-time updates on new releases and trending tracks.

Muso is not just an app; it's a musical journey that enhances your connection with the world of sound. Dive into the endless possibilities of music discovery and curation with Muso.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [Features](#features)
4. [Configuration](#configuration)
5. [Contributing](#contributing)

## Installation

Follow these steps to set up and run Muso on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. **Navigate to the Frontend Directory:**

   ```bash
   cd itunes-frontend
   ```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

3. **Install Frontend Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Frontend:**

   ```bash
   npm start
   ```

   This will launch the React frontend and open it in your default web browser.

5. **Navigate to the Backend Directory:**

   ```bash
   cd ../itunes-backend
   ```

6. **Install Backend Dependencies:**

   ```bash
   npm install
   ```

7. **Start the Backend:**

   ```bash
   npm start
   ```

   The backend will be running on a specified port, ready to handle API requests from the frontend.

8. **Access Muso:**

   Open your web browser and navigate to `http://localhost:8080` to access the Muso application.

Now, Muso should be up and running on your local machine. If you encounter any issues or have further questions, feel free to consult the project documentation or reach out to the community for assistance.

## Usage

To use the project, follow these steps:

### Searching for Music Artists

To search for music artists using Muso, you can make a GET request to the `/search/artist` endpoint. Here's an example using Express:

```javascript
// Example using Express
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
```

### Key Features

## Searching for Songs

Retrieve a list of songs by making a GET request to the /search/songs endpoint. This endpoint queries the iTunes API for music based on the specified search term

```javascript
// Example using Express
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
```

## Searching for Albums

To find albums, use the /search/album endpoint. This route communicates with the iTunes API to search for albums based on the provided term.

```javascript
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
```
