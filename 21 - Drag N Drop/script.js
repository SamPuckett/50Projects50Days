const fill = document.querySelector(".fill");
const emptyObjects = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const emptyObject of emptyObjects) {
  emptyObject.addEventListener("dragover", dragOver);
  emptyObject.addEventListener("dragenter", dragEnter);
  emptyObject.addEventListener("dragleave", dragLeave);
  emptyObject.addEventListener("drop", dragDrop);
}

function dragStart() {
  console.log("drag start");
  this.className += " hold";
  setTimeout(() => {
    this.className = "invisible";
  }, 0);
}

function dragEnd() {
  console.log("drag end");
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("drag over");
}

function dragLeave() {
  this.className = "empty";
  console.log("drag leave");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
  console.log("drag enter");
}

function dragDrop() {
  console.log("drag drop");
  this.className = "empty";
  this.append(fill);
}
