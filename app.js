function toggleDropdown() {
  document.getElementById("options-list").classList.toggle("show");
}

function selectCountry(name, flagUrl) {
  // Update the trigger view with the new selection
  document.getElementById("selected-text").innerText = name;
  document.getElementById("selected-flag").src = flagUrl;
  
  // Close the dropdown menu
  document.getElementById("options-list").classList.remove("show");
}

// Close the dropdown if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (!event.target.closest('.custom-select-container')) {
    document.getElementById("options-list").classList.remove("show");
  }
}