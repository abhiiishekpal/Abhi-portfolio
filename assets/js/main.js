const menuButton = document.querySelector(".menu-button"),
  sidebar = document.querySelector(".sidebar"),
  navLinks = document.querySelectorAll(".side-nav a");
menuButton?.addEventListener("click", () => {
  const open = sidebar.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", open);
  menuButton.innerHTML = `<i class="fa-solid fa-${open ? "xmark" : "bars"}"></i>`;
});
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    sidebar.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }),
);
const sections = document.querySelectorAll("main section[id]"),
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) =>
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`,
          ),
        );
      }),
    { rootMargin: "-35% 0px -55% 0px" },
  );
sections.forEach((section) => observer.observe(section));
const words = ["a Web Developer", "an IT Student", "a Problem Solver"],
  typingText = document.getElementById("typingText");
let wordIndex = 0;
setInterval(() => {
  wordIndex = (wordIndex + 1) % words.length;
  if (typingText) typingText.textContent = words[wordIndex];
}, 2300);
document.querySelector(".contact-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget,
    subject = encodeURIComponent(form.subject.value || "Portfolio enquiry"),
    body = encodeURIComponent(
      `Name: ${form.name.value}\nEmail: ${form.email.value}\n\n${form.message.value}`,
    );
  window.location.href = `mailto:abhialokpal2143@gmail.com?subject=${subject}&body=${body}`;
});
document.getElementById("year").textContent = new Date().getFullYear();
