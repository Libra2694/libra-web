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
