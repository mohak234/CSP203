// script.js
let currentMovie = '';

function showReviewForm(movieName) {
  // Display the review form and fill in the movie name
  document.getElementById('movie-name').value = movieName;
  currentMovie = movieName;
  document.getElementById('review-form-section').style.display = 'block';
}

function submitReview(event) {
  event.preventDefault();
  
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('review-text').value;

  if (rating && reviewText) {
    // Create a new review element
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    
    const reviewContent = `
      <p><strong>Rating:</strong> ${rating} / 5</p>
      <p><strong>Review:</strong> ${reviewText}</p>
    `;
    reviewDiv.innerHTML = reviewContent;

    // Add the new review to the respective movie's review section
    const reviewSection = document.getElementById(`reviews-${currentMovie}`);
    reviewSection.appendChild(reviewDiv);

    // Clear the form
    document.getElementById('review-form').reset();
    document.getElementById('review-form-section').style.display = 'none';
  }
}