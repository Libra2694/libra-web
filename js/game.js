// Array of game data
const games = [
    { title: "HarvestMoon Hero of Leaf Valley Patch Indo", image: "https://i.ibb.co.com/1sx4npP/image.png", download: "../game/hmholv.html" },
    { title: "Rune Factory 3 Patch Indo", video: "https://www.youtube.com/embed/_NlNzVKUZ24", download: "https://sfl.gl/RF3PatchIndo" },
    { title: "New Teksture HM HOLV V1", video: "https://www.youtube.com/embed/AVCxy_YcBwU", download: "https://www.youtube.com/embed/AVCxy_YcBwU" },
    { title: "Game Title 4", video: "https://www.youtube.com/embed/example4", download: "download_link_game4.zip" },
    { title: "Game Title 5", video: "https://www.youtube.com/embed/example5", download: "download_link_game5.zip" },
    { title: "Game Title 6", video: "https://www.youtube.com/embed/example6", download: "download_link_game6.zip" },
    { title: "Game Title 7", video: "https://www.youtube.com/embed/example7", download: "download_link_game7.zip" },
    // Tambahkan lebih banyak game jika diperlukan
];

const gamesPerPage = 3; // Jumlah game per halaman
let currentPage = 1; // Halaman saat ini
const totalPages = Math.ceil(games.length / gamesPerPage); // Total halaman

// Fungsi untuk menampilkan game berdasarkan halaman saat ini
function displayGames(page) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Bersihkan konten sebelumnya

    // Hitung indeks awal dan akhir untuk halaman saat ini
    const start = (page - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const paginatedGames = games.slice(start, end);

    // Loop melalui game pada halaman saat ini dan tampilkan
    paginatedGames.forEach(game => {
        const gameElement = `
            <div class="game">
                <h2>${game.title}</h2>
                <div class="video">
                    <iframe width="560" height="315" src="${game.video}" title="YouTube video" frameborder="0" allowfullscreen></iframe>
                </div>
                <a href="${game.download}" class="btn-download">Download ${game.title}</a>
            </div>
        `;
        gameContainer.innerHTML += gameElement;
    });
}

// Fungsi untuk memperbarui status tombol pagination
function updatePagination() {
    document.getElementById('prev').disabled = currentPage === 1;
    document.getElementById('next').disabled = currentPage === totalPages;
}

// Event listener untuk tombol Next
document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        displayGames(currentPage);
        updatePagination();
    }
});

// Event listener untuk tombol Previous
document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayGames(currentPage);
        updatePagination();
    }
});

// Load pertama kali saat halaman dimuat
displayGames(currentPage);
updatePagination();

function displayGames(page) {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = ''; // Bersihkan konten sebelumnya

    // Hitung indeks awal dan akhir untuk halaman saat ini
    const start = (page - 1) * gamesPerPage;
    const end = start + gamesPerPage;
    const paginatedGames = games.slice(start, end);

    // Loop melalui game pada halaman saat ini dan tampilkan
    paginatedGames.forEach(game => {
        let gameElement = `
            <div class="game">
                <h2>${game.title}</h2>
                <div class="media">`;

        // Cek apakah game memiliki gambar atau video
        if (game.image) {
            gameElement += `<img width="560" height="315" src="${game.image}" alt="${game.title}">`;
        } else if (game.video) {
            gameElement += `<iframe width="560" height="315" src="${game.video}" title="YouTube video" frameborder="0" allowfullscreen></iframe>`;
        }

        gameElement += `
                </div>
                <a href="${game.download}" class="btn-download">Download ${game.title}</a>
            </div>
        `;
        gameContainer.innerHTML += gameElement;
    });
}
