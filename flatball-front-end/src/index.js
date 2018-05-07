document.addEventListener('DOMContentLoaded', function(){

// fetch("http://localhost:3000/api/v1/games")
//   .then(res => res.json())
//   .then(json => {
//     new Game(json).render()
//   })

  function newGame(){
    new Game().render()
  }

  const startGame = document.querySelector('#start-game')
  startGame.addEventListener('click', newGame)

  function newGame(e){
    new Game().render()


    inningCount()
  }



  function inningCount(){
    let outCount = store.game_stats[0].out_count
    // let outCount = 9
    let inning = ""

    switch (outCount) {
      case 0:
      case 1:
      case 2:
          inning = "Top of the First";
          break;
      case 3:
      case 4:
      case 5:
          inning = "Bottom of the First";
          break;
      case 6:
      case 7:
      case 8:
          inning = "Top of the Second";
          break;
      case 9:
      case 10:
      case 11:
          inning = "Bottom of the Second";
          break;
      case 12:
      case 13:
      case 14:
          inning = "Top of the Third";
          break;
      case 15:
      case 16:
      case 17:
          inning = "Bottom of the Third";
          break;
  }

    console.log(outCount);
    console.log(inning);
    console.log(store.live_game.bases);
  }







})
