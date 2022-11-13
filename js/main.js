const welcomePage = document.querySelector(".welcome"),
    enterWebsite = document.querySelector(".btn-website"),
    enterTypegram = document.querySelector(".btn-typegram"),
    WebsitePage = document.querySelector(".website"),
    typegramPage = document.querySelector(".typegram");


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