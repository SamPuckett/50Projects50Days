// Grabs the dom elements that we're going to need to manipulate.
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Adds the class '.hover-left' to the container whenever the mouse hovers over the left side.
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});

// Removes the class '.hover-left' from the container whenever the mouse leaves the left side.
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});

// Adds the class '.hover-right' to the container whenever the mouse hovers over the right side.
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});

// Removes the class '.hover-right' from the container whenever the mouse leaves the right side.
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
