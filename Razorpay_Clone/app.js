function toggleDropdown() {
  document.getElementById("options-list").classList.toggle("show");
}

function toggleMobileMenu() {
  const navLinks = document.getElementById("nav-links");
  const navEnd = document.getElementById("nav-end");
  navLinks.classList.toggle("active");
  navEnd.classList.toggle("active");
}


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
 
  document.getElementById("selected-text").innerText = name;
  document.getElementById("selected-flag").src = flagUrl;

 
  document.getElementById("options-list").classList.remove("show");
}


window.onclick = function (event) {
  if (!event.target.closest(".custom-select-container")) {
    document.getElementById("options-list").classList.remove("show");
  }
};


function setupBrandMarquee() {
  const track = document.getElementById("brandTrack");
  if (!track) return;

  
  const children = Array.from(track.children);
  children.forEach((child) => {
    const clone = child.cloneNode(true);
    track.appendChild(clone);
  });

  
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
    
    const totalWidth = track.scrollWidth;
   
    const speed = 100; 
    const duration = totalWidth / speed;
    track.style.animationDuration = duration + "s";
  }
}

function setupSectionReveal() {
  const sections = document.querySelectorAll(
    ".hero-section, .brands, .finance-section, .products-section, .security-section, .cta-section, .footer-section",
  );

  if (!sections.length) return;

  sections.forEach((section) => section.classList.add("reveal-section"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", setupBrandMarquee);
document.addEventListener("DOMContentLoaded", setupSectionReveal);
