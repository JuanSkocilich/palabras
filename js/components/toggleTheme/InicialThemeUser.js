const userTheme = localStorage.getItem("theme")
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")

if (userTheme === "dark" || (!userTheme && darkQuery.matches)) {
    setTheme("dark")
}

darkQuery.addEventListener("change", function (e) {
    if (localStorage.getItem("theme"))
        setTheme(e.matches ? "dark" : "light");
})

function setTheme(newTheme) {
    document.documentElement.setAttribute('data-theme', newTheme);
}