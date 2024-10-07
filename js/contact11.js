document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get selected rating
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const feedback = document.getElementById('feedback').value;

    if (!rating || !feedback) {
        alert('Please complete the form.');
        return;
    }

    // Email configuration
    const email = 'librastudio2694@gmail.com';
    const subject = 'New Rating and Feedback';
    const body = `Rating: ${rating} stars\an\nFeedback: ${feedback}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    alert('Thank you for your feedback!');
});

// new
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

//new
// function sendMail(){
//     let parms = {
//         rating : document.getElementById("raating").value,
//         email : document.getElementById("email").value,
//         feedback : document.getElementById("feedback").value,
//     }

//     emailjs.send("service_poq885v","template_ir2fike",parms).then(alert("Email Sent!!"))
// }
