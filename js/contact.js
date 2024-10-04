// Tunggu sampai halaman ter-load sepenuhnya
window.onload = function() {
    document.getElementById('rating-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah submit form standar

        // Mengambil nilai dari form
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const feedback = document.getElementById('feedback').value;

        // Mengirimkan email menggunakan EmailJS
        emailjs.send("service_poq885v", "template_ir2fike", {
            rating: rating, // Mengisi placeholder {{rating}} di template
            feedback: feedback, // Mengisi placeholder {{feedback}} di template
            reply_to: "librastudio2694@gmail.com" // Alamat email tujuan
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Email berhasil dikirim!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Pengiriman email gagal. Silakan coba lagi.');
        });
    });
};
