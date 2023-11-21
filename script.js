
// scroll bar script
// window.onscroll = function() {
//   myFunction()
// };

// function myFunction() {
// var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// var scrolled = (winScroll / height) * 100;
// document.getElementById("myBar").style.width = scrolled + "%";
// }



// // smooth up script
// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 150;

//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

// window.addEventListener("scroll", reveal);



// about box script
let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(let i of tablinks){
      i.classList.remove("active-link");
  }
  for(let i of tabcontents){
      i.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}




function downloadAndOpen() {
  const resumeURL =
       "https://drive.google.com/file/d/162UIVQDrHXR1lgjUyw6H-sznlxiwaFw5/view?usp=sharing";

  const downloadURL =
  "https://drive.google.com/uc?export=download&id=162UIVQDrHXR1lgjUyw6H-sznlxiwaFw5";;
  window.open(resumeURL,"_blank");

  const link = document.createElement("a");
  link.href=downloadURL;

  link.download = "Sushant-Narvekar-Resume.pdf";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
