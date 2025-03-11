document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const email = params.get('emailField');

    if (email) {
        const confirmationText = document.querySelector('.success-message p');
        confirmationText.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
    }

    const dismissButton = document.getElementById('message');
    dismissButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});