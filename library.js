document.querySelectorAll('.library-element').forEach(function(item) {
  item.addEventListener('mouseover', function(e) {
    var popup = document.getElementById('library-popup');
    var quote = this.getAttribute('data-quote');
    var image = this.getAttribute('data-image');

    if (quote) {
      popup.innerText = quote;
    } else if (image) {
      popup.innerHTML = '<img src="' + image + '" alt="Popup Image">';
    }

    // Show the popup (it's centered by CSS)
    popup.style.display = 'block';
  });

  item.addEventListener('mouseout', function(e) {
    var popup = document.getElementById('library-popup');
    popup.style.display = 'none';
  });
});
