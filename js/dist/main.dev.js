"use strict";

var welcomePage = document.querySelector(".welcome"),
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
    signUp = document.querySelector(".sign-up"),
    navbar = document.querySelector(".navbar-item"),
    navbarItems = document.querySelectorAll(".a"),
    footer = document.querySelector(".footer"),
    btnInput = document.querySelector(".btn-input"),
    signInput = document.querySelectorAll(".input");
welcomeIcon.addEventListener("click", function () {
  signIn.style.display = "none";
  WebsitePage.style.display = "flex";
});
enterWebsite.addEventListener("click", function () {
  welcomePage.style.display = "none";
  WebsitePage.style.display = "flex";
  typegramPage.style.display = "none";
});
enterTypegram.forEach(function (item) {
  item.addEventListener("click", function () {
    alert("Please be Sure to Register!");
    signIn.style.display = "flex";
    WebsitePage.style.display = "none";
    welcomePage.style.display = "none"; // registartion bn aniqroq iwlaw kk
    // welcomePage.style.display = "none"
    // typegramPage.style.display = "flex"
    // WebsitePage.style.display = "none"
  });
});

for (var i = 0; i < 10; i++) {
  signInput.forEach(function (item) {
    var input = item.value.target;
    btnInput.addEventListener("click", function () {
      if (input == " ") {
        typegramPage.style.display = "none";
        btnInput.style.borderColor = "crimson";
        item.style.borderColor = "red";
        console.log(input);
      } else {
        signIn.style.display = "none";
        typegramPage.style.display = "flex";
        typegramPage.style.flexDirection = "row";
        console.log("Welcome");
      }
    });
  });
}

navbarItems[0].addEventListener("click", function () {
  AboutPage.style.display = "none";
  homeAbout.style.display = "flex";
  lessonPage.style.display = "none";
  navbarItems[0].classList.toggle("span");
  footer.style.top = 1 * 1430 + "px";
});
navbarItems[1].addEventListener("click", function () {
  homeAbout.style.display = "none";
  AboutPage.style.display = "flex";
  lessonPage.style.display = "none";
  footer.style.top = 1 * 750 + "px";
  navbarItems[1].classList.toggle("span");
  navbarItems[0].classList.remove("span");
});
navbarItems[2].addEventListener("click", function () {
  homeAbout.style.display = "none";
  AboutPage.style.display = "none";
  navbarItems[2].classList.toggle("span");
  navbarItems[1].classList.remove("span");
  lessonPage.style.display = "flex";
  footer.style.top = 1 * 550 + "px";
});
signUp.addEventListener("click", function () {
  signIn.style.display = "flex";
  WebsitePage.style.display = "none";
}); // for (let i = 0; i < navbarItem.length; i++) {
//     console.log(typeof(navbarItem));
// }