const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.innerHTML = `<img src="https://images.unsplash.com/photo-1544511916-0148ccdeb877?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80" alt="upslash"/>`;
  title.innerHTML = `Lorem ipsum dolor sit amet.`;
  excerpt.innerHTML = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, natus?`;
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="avatar"/>`;
  name.innerHTML = `John Doe`;
  date.innerHTML = `Mar 14, 2021`;

  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-texts"));
}
