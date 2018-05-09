// Play Ball button click functionality [renders a new game JS object and clears the page] //
newGameButton.addEventListener('click', playBallHandler)
function playBallHandler () {
  new Game().render()
  appBody.innerHTML = ""
  alert('GAME ON')
  appBody.append(fieldName, field, gamelogDiv, homeScoreDiv,
    awayScoreDiv, inningDetailsDiv, battersControlsContainer,
    pitchersControlsContainer)
}
//End main page containers/setup//


//Now on a blank slate due to event of the Play Ball button - we recreate our page//
//Main Game Simulator Page (Game Board) - Containers/Set-up Constants//
const gamelogDiv = document.createElement('div')
gamelogDiv.setAttribute('id', 'gamelog')
gamelogDiv.innerHTML = `<h1>Game Log</h1><div id="gamelog-scroll" style="height:100px;width:600px;overflow:auto;border:8px solid black;padding:2%;background-color:lightblue;color:black;scrollbar-base-color:gold;font-family:sans-serif;padding:10px;"></div><br><br>`
const homeScoreDiv = document.createElement('div')
homeScoreDiv.setAttribute('id', 'home-score-div')
homeScoreDiv.innerHTML = `<h1>Home Score</h1>
<p id="home-score">${store.game_stats.home_score}</p>`
const awayScoreDiv = document.createElement('div')
awayScoreDiv.setAttribute('id', 'away-score-div')
awayScoreDiv.innerHTML = `<h1>Away Score: </h1>
<p id=away-score>${store.game_stats.away_score}</p>`
const inningDetailsDiv = document.createElement('div')
inningDetailsDiv.setAttribute('id', 'inningDetailsDiv')
// let current_inning = inningCount()
inningDetailsDiv.innerHTML = `<div><h1 id="inning">Inning: ${inningCount()} </h1></div>
<div id="strikes">Strikes: ${store.live_game.strikes}</div><br>
<div id="balls">Balls: ${store.live_game.balls}</div><br>
<div id="fouls">Foul Balls: ${store.live_game.foul_balls}</div><br>
<div id="outs">Outs: ${store.live_game.outs}</div>`
//end//



//Game Simulation Controllers[Buttons]//
//Batter Controls//
const battersControlsContainer = document.createElement('div')
battersControlsContainer.setAttribute('id', 'batter-controls')
battersControlsContainer.innerHTML = `<h2>Batter's Controller</h2>`
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
pitchersControlsContainer.innerHTML = `<h2>Pitcher's Controller</h2>`
const pFastball = document.createElement('button')
pFastball.setAttribute('id', 'fastball')
pFastball.innerText = 'Fastball'
const pSpecial = document.createElement('button')
pSpecial.setAttribute('id', 'special-pitch')
pSpecial.innerText = 'Special Pitch'
pitchersControlsContainer.append(pFastball,"||",pSpecial)
//end//

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
function contactHandler() {
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
function powerHandler() {
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
function fbHandler() {
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
function spHandler() {
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
