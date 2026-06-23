async function downloadSong() {
  const spotifyUrl = document.getElementById("spotifyUrl").value.trim();

  const resultDiv = document.getElementById("result");

  const loader = document.getElementById("loader");

  if (!spotifyUrl) {
    resultDiv.innerHTML = `
            <p style="color:#ff6b6b;text-align:center;">
                Please enter a Spotify URL.
            </p>
        `;

    return;
  }

  if (!spotifyUrl.includes("open.spotify.com/track/")) {
    resultDiv.innerHTML = `
            <p style="color:#ff6b6b;text-align:center;">
                Please enter a valid Spotify Track URL.
            </p>
        `;

    return;
  }

  loader.classList.remove("hidden");
  resultDiv.innerHTML = "";

  try {

    const songId = extractTrackId(spotifyUrl);
    const response = await fetch(
      `https://spotify-downloader9.p.rapidapi.com/downloadSong?songId=${songId}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "1d9cbf05b4mshc2e67073b951e09p1fbaa1jsn59d20c77de0f",

          "X-RapidAPI-Host": "spotify-downloader9.p.rapidapi.com",
        },
      },
    );
    console.log(response.status);


    const result = await response.json();

    loader.classList.add("hidden");

    if (!result.success) {
      resultDiv.innerHTML = `
                <p style="color:#ff6b6b;text-align:center;">
                    Song not found.
                </p>
            `;

      return;
    }

    const song = result.data;

    resultDiv.innerHTML = `
            <div class="song-card">

                <img
                    src="${song.cover}"
                    alt="${song.title}"
                >

                <h3>${song.title}</h3>

                <p>
                    <strong>Artist:</strong>
                    ${song.artist}
                </p>

                <p>
                    <strong>Album:</strong>
                    ${song.album}
                </p>

                <p>
                    <strong>Release Date:</strong>
                    ${song.releaseDate}
                </p>

                <a
                    href="${song.downloadLink}"
                   download
                >
                    <i class="fa-solid fa-download"></i>
                    Download MP3
                </a>

            </div>
        `;
  } catch (error) {
    loader.classList.add("hidden");

    console.error(error);

    resultDiv.innerHTML = `
            <p style="color:#ff6b6b;text-align:center;">
                Error connecting to API.
            </p>
        `;
  }
}

function extractTrackId(url) {
  const match = url.match(/track\/([a-zA-Z0-9]+)/);
  return match ? match[1] : null;
}
