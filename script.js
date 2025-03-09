document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal");
  
  // Hide modal when the user clicks anywhere on the document
  document.addEventListener("click", function() {
    if (modal) {
      modal.style.display = "none";
    }
  });
});
