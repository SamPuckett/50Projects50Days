const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokeBtn");

jokeButton.addEventListener("click", generateJoke);

generateJoke();

// Async Await Syntax

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const reponse = await fetch("https://icanhazdadjoke.com", config);

  const data = await reponse.json();

  jokeElement.innerHTML = data.joke;
}

// .then() Syntax

// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com", config)
//     .then((response) => response.json())
//     .then((data) => {
//       jokeElement.innerHTML = data.joke;
//     });
// }
