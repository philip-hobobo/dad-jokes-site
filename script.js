const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)


generateJoke()

// using async await
async function generateJoke() {
    const config = {
      headers: {
        'Accept': 'application/json'
        // we do this so we can get json back from fetch request
      }
  }
// fetch is asnychronous so anything that returns a promise (a value) has to have await
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}

// Using.then
// function generateJoke() {
//     const config = {
//       headers: {
//         'Accept': 'application/json'
//         // we do this so we can get json back from fetch request
//       }
//   }
//
//     fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
//       jokeEl.innerHTML = data.joke
//     })
// }
