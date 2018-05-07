document.addEventListener('DOMContentLoaded', function(){
  // calling on new game function that sets up an object for a new game to be
  //played when page loads

  // ~Main Page HTML Containers/Set-up Constants~//
  const appBody = document.querySelector('body')
  const mainPageDiv = document.createElement('div')
  mainPageDiv.setAttribute('id', 'main-page-div')
  const welcomeMessage = document.createElement('h1')
  welcomeMessage.setAttribute('id','main-welcome')
  welcomeMessage.innerHTML = "Welcome to FlatBall: <br> Where Anybody Can PLAY BALL!"
  mainPageDiv.append(welcomeMessage)
  appBody.append(mainPageDiv)


  //Main Game Simulator Page(Game Board) - Containers/Set-up Constants//
  const gamelogDiv = document.createElement('div')
  gamelogDiv.setAttribute('id', 'gamelog')
  gamelogDiv.innerHTML = `<h1>Game Log</h1>`
  const homeScoreDiv = document.createElement('div')
  homeScoreDiv.setAttribute('id', 'home-score-div')
  homeScoreDiv.innerHTML = `<h1>Home Score</h1><br>
  ${store.game_stats.home_score}`
  const awayScoreDiv = document.createElement('div')
  awayScoreDiv.setAttribute('id', 'away-score-div')
  awayScoreDiv.innerHTML = `<h1>Away Score: </h1><br>
  ${store.game_stats.away_score}`
  const inningDetailsDiv = document.createElement('div')
  inningDetailsDiv.setAttribute('id', 'inningDetailsDiv')
  inningDetailsDiv.innerHTML = `<ul><h1>Inning: </h1></ul>
  <li>Strikes: ${store.live_game.strikes}</li>
  <li>Balls: ${store.live_game.balls}</li>
  <li>Foul Balls: ${store.live_game.foul_balls}</li>
  <li>Outs: ${store.live_game.outs}</li>`
  //end//



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
    appBody.append(gamelogDiv, homeScoreDiv,
      awayScoreDiv, inningDetailsDiv, battersControlsContainer,
      pitchersControlsContainer)
      //batter's controller events
      bPower.addEventListener('click', powerHandler)
      bHit.addEventListener('click', contactHandler)
      //pitcher's controller events
      pSpecial.addEventListener('click', spHandler)
      pFastball.addEventListener('click', fbHandler)

    //can remove ---- for viewing/testing in console
    inningCount()
  }
  //Array for the current play in action//
  let currentPlay = []
  // will generate a random play
  function executePlay (){
    randPlay = Math.floor(Math.random()*4) + 1
    switch (randPlay) {
      case 1:
      store.live_game.strikes += 1
      break;
      case 2:
      store.live_game.balls += 1
      break;
      case 3:
      store.live_game.foul_balls += 1
      store.live_game.strikes += 1
      break;
      case 4:
      store.live_game.outs += 1
      break;
    }
    console.log(store.live_game)
  }
  //Handler for the Batter's Contact Hit
  function contactHandler (){
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
      console.log(`must have a pitch`)
    }else{
      currentPlay.push({bat: "contact"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }
  //Handler for the Batter's Power Hit
  function powerHandler (){
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
      console.log(`must have a pitch`)
    }else{
      currentPlay.push({bat: "power"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }
  //Handler for the Pitcher's FastBall Pitch
  function fbHandler (){
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
      console.log(`can't add a pitch`)
    }else{
      currentPlay.push({pitch: "fastball"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }
  //Handler for the Pitcher's Special Pitch
  function spHandler(){
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
      console.log(`can't add a pitch`)
    }else{
      currentPlay.push({pitch: "sp"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }


  function inningCount(){
    let outCount = store.game_stats.out_count
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