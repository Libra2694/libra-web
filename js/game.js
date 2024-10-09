// Array of game data
const games = [
    { title: "HarvestMoon Hero of Leaf Valley Patch Indo", image: "https://i.ibb.co.com/1sx4npP/image.png", download: "../game//hmholv/" },
    { title: "Rune Factory 3 Patch Indo", video: "https://www.youtube.com/embed/_NlNzVKUZ24", download: "https://sfl.gl/RF3PatchIndo" },
    { title: "Mini Militia Mod Free Fire", image: "https://i.ibb.co.com/HhNwCwg/image.png", download: "../game/mm_mod_ff/" },
    { title: "Thomas and Friend Magic Track", video: "https://www.youtube.com/embed/K25l_00CExw", download: "https://play.google.com/store/apps/details?id=com.budgestudios.googleplay.ThomasAndFriendsMagicalTracks" },
    { title: "HarvestMoon 2 Bahasa Indonesia (emulator JAVA)", video: "https://www.youtube.com/embed/DngReQxqU90", download: "https://sfl.gl/HM2IndoJAVA" },
    { title: "Dynamons MOD", image: "https://i.ibb.co.com/8XYtt8s/image.png", download: "../game/dynamons/" },
    { title: "Labyrinth Legend MOD", image: "https://i.ibb.co.com/9yfLwGh/image.png", download: "../game/labyrinthlegend/" },
    { title: "My Fishing World MOD", video: "https://www.youtube.com/embed/lnpyWJQRb3U", download: "https://sfl.gl/MyFhisingWorld" },
    { title: "Dungeon Village MOD", image: "https://i.ibb.co.com/b2xKwJV/image.png", download: "../game/dungeonvillage/" },
    // { title: "Game Title 7", video: "https://www.youtube.com/embed/example7", download: "#" },
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
