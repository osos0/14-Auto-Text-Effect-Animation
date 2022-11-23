const Family = ["Ossama", "Vina", "Chris", "Eliano"];
const containerEl = document.querySelector(".container");
console.log(containerEl);

let num = 0;
let y = 0;

function updateText() {
  containerEl.innerHTML = `<h1>My name is ${Family[y].slice(0, num++)}</h1>`;
  setTimeout(updateText, 300);
  if (containerEl.innerHTML.slice(15, 15 + Family[y].length) === Family[y]) {
    num = 0;
    y++;
  }
  if (Family[y] === Family[Family.length]) y = 0;
}
updateText();
