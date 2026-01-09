// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll to contact section
function scrollToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
