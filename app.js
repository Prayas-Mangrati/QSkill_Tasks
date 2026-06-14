function toggleDropdown() {
  document.getElementById("options-list").classList.toggle("show");
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("nav-links");
  const navEnd = document.getElementById("nav-end");
  navLinks.classList.toggle("active");
  navEnd.classList.toggle("active");
}

// Close mobile menu when a link is clicked
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const navLinksContainer = document.getElementById("nav-links");
      const navEnd = document.getElementById("nav-end");
      navLinksContainer.classList.remove("active");
      navEnd.classList.remove("active");
    });
  });
});

function selectCountry(name, flagUrl) {
  // Update the trigger view with the new selection
  document.getElementById("selected-text").innerText = name;
  document.getElementById("selected-flag").src = flagUrl;

  // Close the dropdown menu
  document.getElementById("options-list").classList.remove("show");
}

// Close the dropdown if the user clicks anywhere outside of it
window.onclick = function (event) {
  if (!event.target.closest(".custom-select-container")) {
    document.getElementById("options-list").classList.remove("show");
  }
};

// Brands marquee: duplicate items for seamless scrolling and set duration
function setupBrandMarquee() {
  const track = document.getElementById("brandTrack");
  if (!track) return;

  // Duplicate children so the animation can scroll seamlessly
  const children = Array.from(track.children);
  children.forEach((child) => {
    const clone = child.cloneNode(true);
    track.appendChild(clone);
  });

  // After images load, compute width and set animation duration
  const imgs = track.querySelectorAll("img");
  let loaded = 0;
  imgs.forEach((img) => {
    if (img.complete) loaded++;
    else
      img.addEventListener("load", () => {
        loaded++;
        if (loaded === imgs.length) setDuration();
      });
  });
  if (loaded === imgs.length) setDuration();

  function setDuration() {
    // total width of the track (after duplication)
    const totalWidth = track.scrollWidth;
    // speed: pixels per second (adjustable)
    const speed = 100; // px/sec
    const duration = totalWidth / speed;
    track.style.animationDuration = duration + "s";
  }
}

document.addEventListener("DOMContentLoaded", setupBrandMarquee);
