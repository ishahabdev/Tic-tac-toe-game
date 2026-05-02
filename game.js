let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO === true) {
      box.innerHTML = "O";

      turnO = false;
    } else {
      box.innerHTML = "X";
      turnO = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const resetGame = () => {
  turnO = true;
  enabledboxes();
  msgContainer.classList.add("hide");
};

const disabledboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
let enabledboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulation, Winner is ${winner}`;
  // we can also above statement as
  // msg.innerText = "congrats your winner" + (winner);
  msgContainer.classList.remove("hide");
  disabledboxes();
};

const checkwinner = () => {
  for (let pattern of winpattern) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
      }
    }
  }
};
newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
