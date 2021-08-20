const header = document.getElementById("main-header");

function scrollHeaderTop() {
  if(window.scrollY > 350) {
      header.classList.add("fixed-header")
  } else if (window.scrollY === 0) {
    header.classList.remove("fixed-header");
  }
  if (document.scrollY > offsetAbout){
    about.style.opacity = "1";
  }
}



document.addEventListener("scroll", scrollHeaderTop);