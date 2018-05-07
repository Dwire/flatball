document.addEventListener('DOMContentLoaded', function(){
  // calling on new game function that sets up an object for a new game to be
  //played when page loads

  // Main Page HTML Containers/Set-up Constants //
  const appBody = document.querySelector('body')
  const mainPageDiv = document.createElement('div')
  mainPageDiv.setAttribute('id', 'main-page-div')
  const welcomeMessage = document.createElement('h1')
  welcomeMessage.setAttribute('id','main-welcome')
  welcomeMessage.innerHTML = "Welcome to FlatBall: <br> Where Anybody Can PLAY BALL!"
  mainPageDiv.append(welcomeMessage)
  appBody.append(mainPageDiv)
  const batterControls = document.getElementById('')
  const pitcherControls = document.getElementById('')

  //Play Ball Button
  const newGameButtonDiv = document.createElement('div')
  newGameButtonDiv.setAttribute('id', 'play-game-container')
  mainPageDiv.append(newGameButtonDiv)
  const newGameButton = document.createElement('button')
  newGameButton.setAttribute('id', 'new-game-button')
  newGameButton.innerText = 'Play Ball!'
  newGameButtonDiv.append(newGameButton)
  // end //


  //Batter Controls//
  const battersControlsContainer = document.createElement('div')
  battersControlsContainer.setAttribute('id', 'batter-controls')
  const bPower = document.createElement('button')
  bPower.setAttribute('id', 'power-hit')
  bPower.innerText = 'Power Hit'
  const bHit = document.createElement('button')
  bHit.setAttribute('id', 'contact-hit')
  bHit.innerText = 'Hit for Contact'
  battersControlsContainer.append(bHit, bPower)
  //end//

  //Pitching Controls//
  const pitchersControlsContainer = document.createElement('div')
  pitchersControlsContainer.setAttribute('id', 'pitcher-controls')
  const pFastball = document.createElement('button')
  pFastball.setAttribute('id', 'fastball')
  pFastball.innerText = 'Fastball'
  const pSpecial = document.createElement('button')
  pSpecial.setAttribute('id', 'special-pitch')
  pSpecial.innerText = 'Special Pitch'
  pitchersControlsContainer.append(pFastball, pSpecial)
  //end//


  //Instructions on How to Play
  const instructionsDiv = document.createElement('div')
  instructionsDiv.setAttribute('id','instructions')
  instructionsDiv.innerHTML = "<h2> How To Play: </h2><ul><h4>Batting</h4><li>Step 1</li></ul><br><br><ul><h4>Pitching</h4><li>Step 1</li></ul>"
  mainPageDiv.append(instructionsDiv)
  // End main page containers/setup //


  // New game button click functionality //
  newGameButton.addEventListener('click', playBallHandler)
  function playBallHandler () {
    new Game().render()
    appBody.innerHTML = ""
    appBody.append(battersControlsContainer, pitchersControlsContainer)

    //can remove ---- for viewing/testing in console
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
