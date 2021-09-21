var down = document.getElementById("displayP");
var childDiv = document.getElementsByClassName("child");
var playing = false;
var intrvl;
let findSpecialChild = () => {
  parent = document.getElementById("parent");
  children = parent.querySelectorAll(".child");
  var i = 0;
  for (var j = 0; j < children.length; j++) {
    if (children[j].className == "child child1") {
      i = j;
      break;
    }
  }
  return i;
};
let Stop = () => {
  playing = !playing;
  window.clearInterval(intrvl);
};
let Play = () => {
  if (!playing) {
    playing = !playing;
    let i = findSpecialChild();
    down.innerHTML = "Starting with box - '" + (1 + i) + "'";
    intrvl = setInterval(function () {
      children[i].classList.remove("child1");
      if (i == 8) {
        i = 0;
      } else {
        i++;
      }
      down.innerHTML = "Currently painting box - '" + (1 + i) + "'";
      children[i].classList.add("child1");
    }, 1000);
  }
};
for (let k = 0; k < childDiv.length; k++) {
  childDiv[k].addEventListener("click", function () {
    if (playing) {
      window.clearInterval(intrvl);
      playing = !playing;
      let i = findSpecialChild();
      children[i].classList.remove("child1");
      children[k].classList.add("child1");
    }
  });
}
