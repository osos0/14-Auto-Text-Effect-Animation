const jobs = ["YOUTUBER", "SUBSYSTEM", "FRON-END", "FREELANCER"];
const containerEl = document.querySelector(".container");
console.log(containerEl);

// containerEl.innerHTML = `I AM A ${}`;

let num = 0;
updateText();

function updateText() {
  containerEl.innerHTML = `<h1>I AM A ${jobs[num].slice(0)}</h1>`;
}
