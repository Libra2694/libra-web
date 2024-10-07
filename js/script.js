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
// // API Key dan Channel ID
// const apiKey = 'AIzaSyBBOwhNGBDaVzAauk8nlHAlCo8E6XSGT-w'; // API Key Anda
// const channelId = 'UCNY_RPHDD8R4pxkK8q9YEnQ'; // Ganti dengan Channel ID YouTube Anda

// // URL untuk mengambil video terbaru
// const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`;

// // Mengambil video terbaru dari channel
// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => {
//         // Ambil ID video terbaru
//         const latestVideoId = data.items[0].id.videoId;

//         // Update iframe dengan video terbaru
//         const iframe = document.getElementById('youtube-video');
//         iframe.src = `https://www.youtube.com/embed/${latestVideoId}`;
//     })
//     .catch(error => {
//         console.error('Error fetching latest video:', error);
//     });

// API Key dan Channel ID
const apiKey = 'AIzaSyBBOwhNGBDaVzAauk8nlHAlCo8E6XSGT-w';
const channelId = 'UCNY_RPHDD8R4pxkK8q9YEnQ';
const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=1`;

// Cek di localStorage apakah ada data yang tersimpan
const cachedVideo = localStorage.getItem('latestVideoId');
const cacheTime = localStorage.getItem('cacheTime');
const now = new Date().getTime();
const cacheExpiry = 60 * 60 * 1000; // Cache video selama 1 jam

if (cachedVideo && cacheTime && (now - cacheTime) < cacheExpiry) {
    // Gunakan video dari cache jika masih berlaku
    document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${cachedVideo}`;
} else {
    // Lakukan fetch ke API hanya jika cache sudah kadaluarsa
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const latestVideoId = data.items[0].id.videoId;
                document.getElementById('youtube-video').src = `https://www.youtube.com/embed/${latestVideoId}`;
                
                // Simpan video ID dan waktu ke localStorage
                localStorage.setItem('latestVideoId', latestVideoId);
                localStorage.setItem('cacheTime', now);
            }
        })
        .catch(error => {
            console.error('Error fetching latest video:', error);
        });
}
