// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  var cosmoscopeLink = document.getElementById("cosmoscope-link");
  if (cosmoscopeLink) {
    cosmoscopeLink.addEventListener("click", function(e) {
      e.preventDefault(); // Stop the default navigation
      // Optionally, you can add some visual feedback here (like a loading indicator)
      setTimeout(function(){
        window.location.href = cosmoscopeLink.href;
      }, 2000); // Delay in milliseconds (2000ms = 2 seconds)
    });
  }
});
