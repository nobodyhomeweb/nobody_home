// Get all element items
const elements = document.querySelectorAll('.element');
const imageDisplay = document.querySelector('.image-display');
const imageElement = document.querySelector('#image');

// Add hover event listeners to each element
elements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    // Get the image URL from the data-image attribute
    const imageUrl = element.getAttribute('data-image');
    
    // Update the image source
    imageElement.src = imageUrl;

    // Show the image display container
    imageDisplay.style.display = 'block';
  });

  element.addEventListener('mouseleave', () => {
    // Hide the image display container when mouse leaves
    imageDisplay.style.display = 'none';
  });
});
