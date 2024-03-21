document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show thank you card
    document.getElementById('thank-you-card').classList.remove('hidden');
  });
  