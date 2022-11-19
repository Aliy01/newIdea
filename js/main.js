const welcomePage = document.querySelector(".welcome"),
    span = document.querySelector(".span"),
    enterWebsite = document.querySelector(".btn-website"),
    enterTypegram = document.querySelectorAll(".btn-typegram"),
    WebsitePage = document.querySelector(".website"),
    AboutPage = document.querySelector(".about"),
    homePage = document.querySelector(".home"),
    homeAbout = homePage.querySelector(".home-about"),
    typegramPage = document.querySelector(".typegram"),
    welcomeIcon = document.querySelector("#welcome-icon"),
    signIn = document.querySelector(".sign-in"),
    navbar = document.querySelector(".navbar-item"),
    navbarItems = document.querySelectorAll(".a"),
    footer = document.querySelector("footer");



welcomeIcon.addEventListener("click", () => {
    signIn.style.display = "none"
})

enterWebsite.addEventListener("click", () => {
    welcomePage.style.display = "none"
    WebsitePage.style.display = "flex"
    typegramPage.style.display = "none"
})

enterTypegram.forEach(item => {
    item.addEventListener("click", () => {
        welcomePage.style.display = "none"
        typegramPage.style.display = "flex"
        WebsitePage.style.display = "none"
    })
})

navbarItems[0].addEventListener("click", () => {
    AboutPage.style.display = "none"
    homeAbout.style.display = "flex"
    lessonPage.style.display = "none"
    navbarItems[0].classList.toggle("span")
});
navbarItems[1].addEventListener("click", () => {
    homeAbout.style.display = "none"
    AboutPage.style.display = "flex"
    lessonPage.style.display = "none"
    if (AboutPage.style.display == "flex") {
        footer.style.marginTop = (-1) * 0 + "px"
    }
    navbarItems[1].classList.toggle("span")
    navbarItems[0].classList.remove("span")
})
navbarItems[2].addEventListener("click", () => {
    homeAbout.style.display = "none"
    AboutPage.style.display = "none"
    navbarItems[2].classList.toggle("span")
    navbarItems[1].classList.remove("span")
    lessonPage.style.display = "flex"
})
navbarItems[3].addEventListener("click", () => {
    homeAbout.style.display = "none"
    AboutPage.style.display = "none"
    navbarItems[3].classList.toggle("span")
})

// for (let i = 0; i < navbarItem.length; i++) {
//     console.log(typeof(navbarItem));
// }