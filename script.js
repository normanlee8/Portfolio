// Theme Toggle
const themeToggleBtn = document.querySelector(".theme-toggle-btn");
const savedTheme = localStorage.getItem("theme");
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Apply correct theme on load
if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    document.documentElement.classList.add("dark-theme");
    updateButtonAria(true);
} 
else {
    document.documentElement.classList.remove("dark-theme");
    updateButtonAria(false);
}

// Toggle button
themeToggleBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("dark-theme");

    const isDarkNow = document.documentElement.classList.contains("dark-theme");
    const currentSystemPrefersDark = window.matchMedia("(prefers-color-scheme: dark").matches;
    
    if (isDarkNow === currentSystemPrefersDark) {
        localStorage.removeItem("theme");
    }
    else {
        localStorage.setItem("theme", isDarkNow ? "dark" : "light");
    }
    
    updateButtonAria(isDarkNow);
});

// Update theme according to system theme
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    const savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        const systemIsDarkNow = e.matches; 

        if (systemIsDarkNow) {
            document.documentElement.classList.add("dark-theme");
            updateButtonAria(true);
        } 
        else {
            document.documentElement.classList.remove("dark-theme");
            updateButtonAria(false);
        }
    }
});

// Helper function for accessbility
function updateButtonAria(isDark) {
    if (isDark) {
        themeToggleBtn.setAttribute("aria-label", "Change to light mode");
        themeToggleBtn.setAttribute("title", "Change to light mode");
    } else {
        themeToggleBtn.setAttribute("aria-label", "Change to dark mode");
        themeToggleBtn.setAttribute("title", "Change to dark mode");
    }
}