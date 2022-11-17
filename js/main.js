const welcomePage = document.querySelector(".welcome"),
    span = document.querySelector(".span"),
    enterWebsite = document.querySelector(".btn-website"),
    enterTypegram = document.querySelector(".btn-typegram"),
    WebsitePage = document.querySelector(".website"),
    AboutPage = document.querySelector(".about"),
    homePage = document.querySelector(".home"),
    homeAbout = homePage.querySelector(".home-about"),
    typegramPage = document.querySelector(".typegram"),
    welcomeIcon = document.querySelector("#welcome-icon"),
    signIn = document.querySelector(".sign-in"),
    navbar = document.querySelector(".navbar-item"),
    navbarItem = document.querySelectorAll(".a");



welcomeIcon.addEventListener("click", () => {
    signIn.style.display = "none"
})

enterWebsite.addEventListener("click", () => {
    welcomePage.style.display = "none"
    WebsitePage.style.display = "flex"
    typegramPage.style.display = "none"
})

enterTypegram.addEventListener("click", () => {
    welcomePage.style.display = "none"
    typegramPage.style.display = "flex"
    WebsitePage.style.display = "none"
})
navbarItem.forEach(item => {
    item = {
        1: item.addEventListener("click", () => {
            homeAbout.style.display = "flex"
        }),
        2: item.addEventListener("click", () => {
            homeAbout.style.display = "none"
            AboutPage.style.display = "flex"
        }),
        3: item.addEventListener("click", () => {
            homeAbout.style.display = "none"
        })

    }
});