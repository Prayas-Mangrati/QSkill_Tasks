# Spotify Song Downloader

A modern Spotify-inspired web application built using **HTML, CSS, and JavaScript** that allows users to paste a Spotify track URL, fetch song details, and obtain a downloadable MP3 link using a RapidAPI music service.

## Features

* Paste Spotify Track URLs
* Fetch Song Details Dynamically
* Display Album Artwork
* Show Song Title, Artist, and Album Information
* Generate Download Link for the Selected Track
* Responsive Spotify-Inspired User Interface
* Loading Animation During API Requests
* Error Handling for Invalid URLs and API Failures
* Built Using Vanilla JavaScript and RapidAPI

## Demo Workflow

1. Copy a Spotify track URL.
2. Paste the URL into the application.
3. Click **Get Download Link**.
4. View the song information and album cover.
5. Access the generated download link.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* RapidAPI
* Spotify Track URLs

## Project Structure

```text
Spotify-Downloader/
│
├── index.html
├── style.css
├── script.js
└── screenshots/
```

## API Integration

This project uses a RapidAPI music service to:

* Retrieve song metadata
* Fetch album artwork
* Generate downloadable song links

Example response:

```json
{
  "success": true,
  "data": {
    "artist": "Artist Name",
    "title": "Song Title",
    "album": "Album Name",
    "cover": "Album Cover URL",
    "downloadLink": "Generated Download URL"
  }
}
```

## User Interface Highlights

* Spotify-inspired dark theme
* Responsive layout
* Glassmorphism card design
* Smooth hover animations
* Dynamic song result cards

## How to Run

1. Clone the repository.

```bash
git clone <repository-url>
```

2. Open the project folder.

3. Add your RapidAPI key inside `script.js`.

4. Open `index.html` in your browser.

5. Paste a Spotify track URL and start using the application.

## Future Enhancements

* Playlist Download Support
* Album Download Support
* Download History
* User Authentication
* Search Songs Without URL
* Backend Integration for Secure API Key Storage

## Disclaimer

This project was developed for educational and learning purposes. It uses third-party APIs to retrieve song information and download links. Users should ensure they comply with applicable copyright laws and service terms when accessing music content.

## Author

**Prayas Mangrati**

B.Tech Computer Science & Engineering

Sikkim Manipal Institute of Technology (SMIT)
