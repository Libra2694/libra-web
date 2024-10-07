function SendMail() {
    // Ambil elemen rating yang dipilih
    var rating = document.querySelector('input[name="rating"]:checked');
    
    // Validasi apakah rating sudah dipilih
    if (!rating) {
        alert("Please select a rating!");
        return;
    }

    // Ambil data dari form
    var params = {
        rating_form: rating.value,  // Nilai rating yang dipilih
        feedback: document.getElementById("feedback").value,  // Feedback pengguna
        reply_to: document.getElementById("reply_to").value   // Email pengguna
    };

    // Kirim email menggunakan emailjs
    emailjs.send("service_poq85v", "template_ir2fike", params)
        .then(function (res) {
            alert("Success! Email sent with status: " + res.status);  // Berhasil
        }, function (error) {
            alert("Failed to send email: " + error);  // Gagal
        });
}
