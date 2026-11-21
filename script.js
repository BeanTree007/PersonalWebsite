const themeToggle = document.querySelector(".theme-toggle");
const themeLabel = document.querySelector(".theme-label");

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  themeLabel.textContent = nextTheme === "dark" ? "Light theme" : "Dark theme";
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} theme`);
});

document.querySelector("#year").textContent = new Date().getFullYear();
