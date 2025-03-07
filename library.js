document.querySelectorAll('.library-title').forEach(function(item) {
  item.addEventListener('mouseover', function() {
    var popup = document.getElementById('library-popup');
    var quote = this.getAttribute('data-quote');
    var image = this.getAttribute('data-image');

    if (quote) {
      popup.innerText = quote;
    } else if (image) {
      popup.innerHTML = '<img src="' + image + '" alt="Popup Image">';
    }

    // Display the popup
    popup.style.display = 'block';
  });

  item.addEventListener('mouseout', function() {
    var popup = document.getElementById('library-popup');
    popup.style.display = 'none';
  });
});
