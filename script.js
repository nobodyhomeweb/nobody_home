document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("modal");
  console.log("Modal element:", modal);
  
  document.addEventListener("click", function() {
    console.log("Document clicked!");
    if (modal) {
      modal.style.display = "none";
    }
  }, { capture: true });
});
