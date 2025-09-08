document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const form = document.querySelector("form");
  const sections = document.querySelectorAll("section");

  // Smooth Scrolling
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });

  // Form Validation
  form.addEventListener("submit", e => {
    e.preventDefault();
    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    if (name && email && message) {
      alert(`✅ Thank you, ${name}! Your message has been sent.`);
      form.reset();
    } else {
      alert("⚠️ Please fill in all fields.");
    }
  });

  // Active Section Highlight
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });

  // Theme Toggle (Light / Dark)
  const themeBtn = document.createElement("button");
  themeBtn.innerText = "🌙";
  themeBtn.classList.add("theme-toggle");
  document.body.appendChild(themeBtn);

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });
});
