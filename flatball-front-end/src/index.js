document.addEventListener('DOMContentLoaded', function(){

  // ~Main Page (Welcome Screen) HTML Containers/Set-up Constants~//
  const appBody = document.querySelector('body')
  const mainPageDiv = document.createElement('div')
  mainPageDiv.setAttribute('id', 'main-page-div')
  const welcomeMessage = document.createElement('h1')
  welcomeMessage.setAttribute('id','main-welcome')
  welcomeMessage.innerHTML = "::Welcome to FlatBall:: <br> ::Where Everyone Can PLAY BALL::<hr><hr>"
  mainPageDiv.append(welcomeMessage)
  appBody.append(mainPageDiv)

  //Play Ball Button//
  const newGameButtonDiv = document.createElement('div')
  newGameButtonDiv.setAttribute('id', 'play-game-container')
  mainPageDiv.append(newGameButtonDiv)
  const newGameButton = document.createElement('button')
  newGameButton.setAttribute('id', 'new-game-button')
  newGameButton.innerText = 'Play Ball!'
  newGameButtonDiv.append(newGameButton)
  // end //

  //Instructions on How to Play
  const instructionsDiv = document.createElement('div')
  instructionsDiv.setAttribute('id','instructions')
  instructionsDiv.innerHTML = `<h2> How To Play: </h3><ul><h4>General Rules</h3><li>This game requires Two(2) players, or one lonely individual</li><li>One game simulation plays til Six(6) innings</li><li>You play to win the game.</li><li>Or tie...because we are all winners here at Flatball right!?  ...we were too lazy to code the logic for extra innings</li><br><br></ul><ul><h4>Batting Rules & Controls </h4><li>The Batter is given two options: [Hit For Contact] or [Power Hit]</li><li>[Hit For Contact]: Practical...Safe.. gives the Batter the best chance to land on theirself on base</li><li>[Power Hit]: We're talking power here so this will most definitely give the Batter the best chance to hit a triple/homerun to deepest part of the parks, but also gives a higher rate to strikeout since we are swinging for the fences here</li></ul><br><br><ul><h4>Pitching Rules & Controls</h4><li>The Pitcher is given two options: [Fastball] or [Special Pitch] </li><li>[Fastball]: Nothing fancy here just a solid fastball that can either wind up giving you a solid and steady result</li><li>[Special Pitch]: The name says it all..you throw this mind-bending pitch and you land the best shot at making your opponent dance at the batter's box. However, it also can cause you to serve thr fattest meatball the Flatiron District has seen in recent years, right over the plate for the batter to clobber over the cheap seats.... You Have Been Warned.</li></ul>`
  mainPageDiv.append(instructionsDiv)

  // Play Ball button click functionality [renders a new game JS object and clears the page] //
  newGameButton.addEventListener('click', playBallHandler)
  function playBallHandler () {
    new Game().render()
    appBody.innerHTML = ""
    alert('GAME ON')
    appBody.append(gamelogDiv, homeScoreDiv,
      awayScoreDiv, inningDetailsDiv, battersControlsContainer,
      pitchersControlsContainer)
  }
  //End main page containers/setup//



  //Now on a blank slate due to event of the Play Ball button - we recreate our page//
  //Main Game Simulator Page (Game Board) - Containers/Set-up Constants//
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
  let current_inning = inningCount()
  inningDetailsDiv.innerHTML = `<ul><h1>Inning: ${current_inning} </h1></ul>
  <li id="strikes">Strikes: ${store.live_game.strikes}</li>
  <li id="balls">Balls: ${store.live_game.balls}</li>
  <li id="fouls">Foul Balls: ${store.live_game.foul_balls}</li>
  <li id="outs">Outs: ${store.live_game.outs}</li>`
  //end//



//Game Simulation Controllers[Buttons]//
  //Batter Controls//
  const battersControlsContainer = document.createElement('div')
  battersControlsContainer.setAttribute('id', 'batter-controls')
  battersControlsContainer.innerHTML = `<h2>Batter's Controller [will say user 1]</h2>`
  const bPower = document.createElement('button')
  bPower.setAttribute('id', 'power-hit')
  bPower.innerText = 'Power Hit'
  const bHit = document.createElement('button')
  bHit.setAttribute('id', 'contact-hit')
  bHit.innerText = 'Hit for Contact'
  battersControlsContainer.append(bHit,"||",bPower)
  //end//

  //Pitching Controls//
  const pitchersControlsContainer = document.createElement('div')
  pitchersControlsContainer.setAttribute('id', 'pitcher-controls')
  pitchersControlsContainer.innerHTML = `<h2>Pitcher's Controller [will say Guest/User2]</h2>`
  const pFastball = document.createElement('button')
  pFastball.setAttribute('id', 'fastball')
  pFastball.innerText = 'Fastball'
  const pSpecial = document.createElement('button')
  pSpecial.setAttribute('id', 'special-pitch')
  pSpecial.innerText = 'Special Pitch'
  pitchersControlsContainer.append(pFastball,"||",pSpecial)
  //end//




  //Our Code-Logic "Baseball Diamond" [false,false,false,false] 0 index being [1st Base]
  let basePositions = store.live_game.bases
  //will flip to true when theres a baserunner on that base//
  //when index 3 becomes true a run is scored//
  //Batter Hit Result Helper Functions - //
  //- to move baserunners and score runs logic //
  //Basically asking "is runner on? [1st base, 2nd base, 3rd base, (home)scored]" //
  //Possible Base positions variables to make code more readable below//
  const emptyBases = [false,false,false,false]
  const runnerOnFirst = [true,false,false,false]
  const runnerOnSecond = [false,true,false,false]
  const runnerOnThird = [false,false,true,false]
  const runnersOnFirstAndSecond = [true,true,false,false]
  const basesLoaded = [true,true,true,false]
  const runnersOnFirstAndThird = [true,false,true,false]
  const runnersOnSecondAndThird = [false,true,true,false]

  // all runners adv 1 spot //
  const single = function singles(basePositions){
    let aSingle = 1
    if (asingle && basePositions === emptyBases){
      basePositions = runnerOnFirst
      return console.log("Its a single! Safe at first!")
    }else if (aSingle && basePositions === runnerOnFirst){
      basePositions = runnersOnFirstAndSecond
      return console.log("Its a single! Runners are safe at first and second!")
    }else if (aSingle && basePositions === runnersOnFirstAndSecond){
      basePositions = basesLoaded
      return console.log("Its a single! The bases are now loaded!")
    }else if (aSingle && basePositions === basesLoaded){
      basePositions = basesLoaded
      //if home team batting logic else will put score for the away team//
      store.game_stats.home_score + 1
      return console.log("Its a single! One run scores!! The bases remain loaded!")
    }else if (aSingle && basePositions === runnersOnFirstAndThird){
      basePositions = runnersOnFirstAndSecond
      store.game_stats.home_score + 1
      return console.log("Its a single! One run scores!! Runners are safe at first and second!")
    }else if (aSingle && basePositions === runnersOnSecondAndThird){
      basePositions = runnersOnFirstAndThird
      store.game_stats.home_score + 1
      return console.log("Its a single! One run scores!! Runners are safe at first and third!")
    }else if (aSingle && basePositions === runnerOnSecond){
      basePositions = runnersOnFirstAndThird
      return console.log("Its a single! Runners are safe at first and third!")
    }else if (aSingle && basePositions === runnersOnThird){
      basePositions = runnerOnFirst
      store.game_stats.home_score + 1
      return console.log("Its a single! One run scores!! Runner is safe at first!")
    }
  }
    // all runners adv 2 spots//
  const double = function doubles(basePositions){
    let aDouble = 2
    if (aDouble && basePositions === emptyBases){
      basePositions = runnerOnSecond
      return console.log("Its a double! Safe at second!")
    }else if (aDouble && basePositions === runnerOnFirst){
      basePositions = runnersOnSecondAndThird
      return console.log("Its a double! Runners are safe at second and third!")
    }else if (aDouble && basePositions === runnersOnFirstAndSecond || basePositions === runnersOnFirstAndThird){
      basePositions = runnersOnSecondAndThird
      store.game_stats.home_score + 1
      return console.log("Its a Double! One run scores!! Runners are safe at second and third!")
    }else if (aDouble && basePositions === basesLoaded){
      basePositions = runnersOnSecondAndThird
      //if home team batting logic else will put score for the away team//
      store.game_stats.home_score + 2
      return console.log("Its a double! Two runs score!! Runners are safe at second and third!")
    }else if (aDouble && basePositions === runnersOnSecondAndThird){
      basePositions = runnersOnFirstAndThird
      store.game_stats.home_score + 1
      return console.log("Its a Double! One run scores!! Runners are safe at first and third!")
    }else if (aDouble && basePositions === runnerOnSecond || basePositions === runnerOnThird){
      basePositions = runnersOnFirstAndThird
      store.game_stats.home_score + 1
      return console.log("Its a Double! One run scores! Runner is safe at Second!")
    }
  }
    // all runners adv 3 spots//
  const triple = function triples(basePositions){
    let aTriple = 3
    if (aTriple && basePositions === emptyBases){
      basePositions = runnerOnThird
      return console.log("Its a Triple! Runner is safe at third!")
    }else if (aTriple && basePositions === runnerOnFirst || basePositions === runnerOnSecond || basePositions === runnerOnThird){
      basePositions = runnerOnThird
      store.game_stats.home_score + 1
      return console.log("Its a Triple! One run scores! Runner is safe at third!")
    }else if (aTriple && basePositions === runnersOnFirstAndSecond || basePositions === runnersOnFirstAndThird || basePositions === runnersOnSecondAndThird){
      basePositions = basesLoaded
      store.game_stats.home_score + 2
      return console.log("Its a Triple ! Two runs score!! Runner is safe at third!")
    }else if (aTriple && basePositions === basesLoaded){
      basePositions = basesLoaded
      //if home team batting logic else will put score for the away team//
      store.game_stats.home_score + 3
      return console.log("Its a base clearing triple! Three runs score!! Runner is safe at third!")
    }
  }

  const homerun = function homeruns(basePositions){}
  // tally truths in array + 1 = runs scored / reset bases
  const so = function strikeout(){}
  // +1 to outs
  const bob = function walk (basePositions){
    let BaseOnBalls = 1
    if (BaseOnBalls && basePositions === emptyBases){
      basePositions = runnerOnFirst
      return console.log("The Pitcher has walked the batter, The Batter has gone to first base!")
    }else if (BaseOnBalls && basePositions === runnerOnFirst || basePositions === runnerOnSecond){
      basePositions = runnersOnFirstAndSecond
      return console.log("The Pitcher has walked the batter, runners are now on first and second base!")
    }else if (BaseOnBalls && basePositions === runnersOnFirstAndSecond || basePositions === runnersOnFirstAndThird || basePositions === runnersOnSecondAndThird){
      basePositions = basesLoaded
      return console.log("The Pitcher has walked the batter, bases are now loaded!")
    }else if (BaseOnBalls && basePositions === basesLoaded){
      basePositions = basesLoaded
      store.game_stats.home_score + 1
      return console.log("The Pitcher has walked the batter, One run scores! The bases remain loaded!")
    }else if (BaseOnBalls && basePositions === runnersOnThird){
      basePositions = runnersOnFirstAndThird
      return console.log("The Pitcher has walked the batter, runners are now on first and third base!")
    }
  }
  //runners only adv 1 if forced aka spot before is true
  // const steal = function steals (basePositions){} -- stretch goal ( [2/5 chance success] )
  // const bunt = function bunts (basePositions){} -- stretch goal (runners auto adv 1 & bunter = out)
  // const hitBatter = function hitBatters (basePositions){} -- stretch goal
  //end//

  //GameLog div will use these functions above ^ to call out and log random plays//
  //and announce the game play by play to the screen as the players hit their controllers//
  // can be p tags or an unordered list <-- head with innings (prefer this)//

  //Can also use above functions to help with clearing on strikeouts and walks outs//
  //still need to throw in logic that clears on outs and strikes and walks//
  //for a new a batter//
  // This function will generate a random play in the game //
  // This function is utilized in controller-button handler functions below it//


  function executePlay (){
    randPlay = Math.floor(Math.random()*4) + 1
    // b = ball s = strike f = foul ball o = out //
    const b = document.getElementById('balls')
    const s = document.getElementById('strikes')
    const f = document.getElementById('fouls')
    const o = document.getElementById('outs')


    switch (randPlay) {
      case 1:
        store.live_game.strikes += 1
        if (store.live_game.strikes === 3) {
          alert('Strike Out')
          store.live_game.outs += 1
          out(s,f,b,o)
        }else{
          s.innerText =`Strikes: ${store.live_game.strikes}`
          // alert(`Strike ${store.live_game.strikes}`)
        }
      break;
      case 2:
        store.live_game.balls += 1
        b.innerText = `Balls: ${store.live_game.balls}`
        // alert(`Ball ${store.live_game.balls}`)
      break;
      case 3:
        store.live_game.foul_balls += 1
        if (store.live_game.strikes < 2){
          store.live_game.strikes += 1
          displayStats(s,f,b,o)
        }else{
          displayStats(s,f,b,o)
        }
      // alert(`Foul Ball! That's Strike ${store.live_game.strikes}`)
      break;
      case 4:
        store.live_game.outs += 1
        store.game_stats.out_count +=1
        out(s,f,b,o)
      break;
    }
    console.log(store.live_game)
  }

  function out(s,f,b,o) {
    if (store.live_game.outs === 3) {

      alert('3 Outs SWITCH')
      // NOTE: Change Inning
      store.live_game.strikes = 0
      store.live_game.foul_balls = 0
      store.live_game.balls = 0
      store.live_game.outs = 0

      displayStats(s,f,b,o)
    }else{
      store.live_game.strikes = 0
      store.live_game.foul_balls = 0
      store.live_game.balls = 0

      displayStats(s,f,b,o)
    }
  }

  function displayStats(s,f,b,o){
    s.innerText = `Strikes: ${store.live_game.strikes}`
    f.innerText = `Foul Balls: ${store.live_game.foul_balls}`
    b.innerText = `Balls: ${store.live_game.balls}`
    o.innerText =`Outs: ${store.live_game.outs}`
  }

  //batter's controller events
  bPower.addEventListener('click', powerHandler)
  bHit.addEventListener('click', contactHandler)
  //pitcher's controller events
  pSpecial.addEventListener('click', spHandler)
  pFastball.addEventListener('click', fbHandler)
  //Array for the current play in action//
  let currentPlay = []
  //THE HANFLERS FOR THE PITCHER & BATTER CONTROLLERS//
  //Handler for the Batter's Contact Hit//
  function contactHandler (){
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
      alert(`You can't hit until the Pitcher selects their pitch`)
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
      alert(`You can't hit until the Pitcher selects their pitch`)
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
      alert('You already have your pitch selected, waiting for the Batter to swing')
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
      alert('You already have your pitch selected, waiting for the Batter to swing')
    }else{
      currentPlay.push({pitch: "sp"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }
  //end//





//this needs to be worked on produces Undefined currently//
//on the right track with it though//
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

    return inning
    // console.log(outCount);
    // console.log(inning);
    // console.log(store.live_game.bases);
  }
//end//






})
