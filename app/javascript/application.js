// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.querySelector(".firstHiddenPreview").style.display = "none";
document.querySelector(".secondHiddenPreview").style.display = "none";
document.querySelector(".thirdHidenPreview").style.display = "none";

document.querySelector(".firstClassBlock").addEventListener("click", () => {
    showPreview(".firstHiddenPreview");
});

document.querySelector(".secondClassBlock").addEventListener("click", () => {
    showPreview(".secondHiddenPreview");
});

document.querySelector(".thirdClassBlock").addEventListener("click", () => {
    showPreview(".thirdHidenPreview");
});

function showPreview(subclass) {
    const hiddenText = document.querySelector(subclass);
    if (hiddenText.style.display === "none") {
      hiddenText.style.display = "block";
    } else {
      hiddenText.style.display = "none";
    }
  }
  