document.addEventListener('DOMContentLoaded', function(){

// fetch("http://localhost:3000/api/v1/games")
//   .then(res => res.json())
//   .then(json => {
//     new Game(json).render()
//   })

  function newGame(){
    new Game().render()
  }

  newGame()
})
