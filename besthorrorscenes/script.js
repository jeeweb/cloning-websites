const btns = document.querySelectorAll("button");
let currentBtn;

function clickBtnHandler(e) {
  //   console.log(e.currentTarget);
  let currentBtn = e.currentTarget;
  let currentNum = currentBtn.querySelector("span");
  if (currentBtn.className === "btn-agree") {
    let current = parseInt(currentNum.innerText, 10);
    if (current) {
      currentNum.innerText = current + 1;
    } else {
      currentNum.innerText = 1;
    }
  } else if (currentBtn.className === "btn-disagree") {
    let current = parseInt(currentNum.innerText, 10);
    if (current) {
      currentNum.innerText = current + 1;
    } else {
      currentNum.innerText = 1;
    }
  }
}

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", clickBtnHandler);
}
