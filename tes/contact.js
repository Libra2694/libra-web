document.getElementById('rating-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Dapatkan nilai dari form
    var rating = document.querySelector('input[name="rating"]:checked')?.value || ''; 
    var feedback = document.getElementById('feedback').value;
    var email = document.getElementById('email').value;

    if (!rating || !feedback || !email) {
        alert("Please fill out all fields!");
        return;
    }

    // Buat data form dalam JSON
    var formData = {
        rating: rating,
        feedback: feedback,
        email: email
    };

    // Ganti dengan URL Web App yang benar
    var scriptURL = 'https://script.google.com/macros/s/AKfycbwBO9kGQ8dP6xVDqVifei3HkiLXigVELs6WwpdbRvR7YUKw87eE3ynulhT4uIrWLANt/exec';

    fetch(scriptURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Feedback sent successfully!');
        } else {
            alert('Error sending feedback.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error sending your feedback. Please try again.');
    });
});
