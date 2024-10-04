document.addEventListener('DOMContentLoaded', function() {
    // Show the popup after page loads
    const popup = document.getElementById('popup');
    popup.classList.add('show');

    // Close popup when button is clicked
    const closePopup = document.getElementById('closePopup');
    closePopup.addEventListener('click', function() {
        popup.classList.remove('show');
    });
});

//video terbaru
// API Key dan Channel ID
const apiKey = 'AIzaSyBBOwhNGBDaVzAauk8nlHAlCo8E6XSGT-w'; // API Key Anda
const channelId = 'UCNY_RPHDD8R4pxkK8q9YEnQ'; // Ganti dengan Channel ID YouTube Anda

// URL untuk mengambil video terbaru
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`;

// Mengambil video terbaru dari channel
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Ambil ID video terbaru
        const latestVideoId = data.items[0].id.videoId;

        // Update iframe dengan video terbaru
        const iframe = document.getElementById('youtube-video');
        iframe.src = `https://www.youtube.com/embed/${latestVideoId}`;
    })
    .catch(error => {
        console.error('Error fetching latest video:', error);
    });
