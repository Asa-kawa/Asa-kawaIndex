const button = document.getElementById("button");
const text = document.getElementById("text");

button.addEventListener("click", () => {
    location.href = ("https://asa-kawa.github.io/Asa-kawaSample/");
});

button.addEventListener("mouseover", () => {
    button.style.color = "#424242";
});

button.addEventListener("mouseout", () => {
    button.style.color = "black";
});

document.getElementById("website-list-button").addEventListener("click", () => {
    location.href = ("https://asa-kawa.github.io/Asa-kawaWebsitelist/");
  });