tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#0d78e8",
        secondary: "#0ac9e9",
        dark: "#0a3c76",
      },
    },
  },
};

const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});

// Navigation handling
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".page-section");

// Click event for nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const pageId = link.getAttribute("data-page");
    showPage(pageId);

    // Close mobile menu if open
    mobileMenu.classList.remove("open");

    // Scroll to top
    window.scrollTo(0, 0);
  });
});

// Set home as default
showPage("home");

// Contact form submission
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form data (in a real app, would send this to a server)
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Show success message (in a real app, handle properly)
    alert(
      `Thank you, ${name}! Your message has been received. We'll contact you at ${email} shortly.`
    );
    contactForm.reset();
  });
}
