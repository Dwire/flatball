document.addEventListener('DOMContentLoaded', function(){

  GameAdapter.getGame()
  // Play Ball button click functionality [renders a new game JS object and clears the page] //
  newGameButton.addEventListener('click', playBallHandler)
  function playBallHandler () {
    new Game().render()
    appBody.innerHTML = ""
    // alert('GAME ON')
    appBody.append(fieldName, field)
  }



  //batter's controller events
  bPower.addEventListener('click', powerHandler)
  bHit.addEventListener('click', contactHandler)

  appBody.addEventListener('keydown', contactPressHandler)
  appBody.addEventListener('keydown', powerPressHandler)

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
    if (event.which === 80) {
      event.preventDefault()
      bPower.click()
    }
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
      alert(`You can't hit until the Pitcher selects their pitch`)
    }else{
      currentPlay.push({bat: "power"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }


  function contactPressHandler(){
    if (event.which === 75) {
      bHit.click
      if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
        alert(`You can't hit until the Pitcher selects their pitch`)
      }else{
        currentPlay.push({bat: "contact"})
      }if (currentPlay.length === 2){
        executePlay()
        currentPlay = []
      }
    }
  }
  function powerPressHandler() {
    if (event.which === 76) {
      bPower.click
      if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
        alert(`You can't hit until the Pitcher selects their pitch`)
      }else{
        currentPlay.push({bat: "power"})
      }if (currentPlay.length === 2){
        executePlay()
        currentPlay = []
      }
    }
  }



    let currentPlay = []

  //pitcher's controller events
  pSpecial.addEventListener('click', spHandler)
  pFastball.addEventListener('click', fbHandler)

  appBody.addEventListener('keydown', spPressHandler)
  appBody.addEventListener('keydown', fbPressHandler)

  function fbPressHandler(){
    if (event.which === 65) {
      pFastball.click
      if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
        alert('You already have your pitch selected, waiting for the Batter to swing')
      }else{
        currentPlay.push({pitch: "fastball"})
      }if (currentPlay.length === 2){
        executePlay()
        currentPlay = []
      }
    }
  }

  function spPressHandler(){
    if (event.which === 83){
      pSpecial.click
      if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
        alert('You already have your pitch selected, waiting for the Batter to swing')
      }else{
        currentPlay.push({pitch: "sp"})
      }if (currentPlay.length === 2){
        executePlay()
        currentPlay = []
      }
    }
  }

  //Handler for the Pitcher's FastBall Pitch
  function fbHandler() {
    if (event.which === 82) {
      event.preventDefault()
      pFastball.click()
    }
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
    if (event.which === 87) {
      event.preventDefault()
      pSpecial.click()
    }
    if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
      alert('You already have your pitch selected, waiting for the Batter to swing')
    }else{
      currentPlay.push({pitch: "sp"})
    }if (currentPlay.length === 2){
      executePlay()
      currentPlay = []
    }
  }




//------------------------- Above should be seperated ----------------------------------


  const emptyBases = [0,0,0,0]

  function showBases() {
    const first = document.querySelector('.first')
    const second = document.querySelector('.second')
    const third = document.querySelector('.third')

    const bases = store.live_game.bases

    bases.forEach((base, index) => {
      if (base && index === 0) {
        first.id = "first-b"
      }if (!base && index === 0){
        first.id = "off"
      }if (base && index === 1) {
        second.id = "second-b"
      }if (!base && index === 0){
        second.id = "off"
      }if (base && index === 2) {
        third.id = "third-b"
      }if (!base && index === 0){
        third.id = "off"
      }
    })
  }

  var walk = function(){
   var baseStatus = store.live_game.bases

      for (var i = 0; i < baseStatus.length; i++){
        if (baseStatus[i] === 1){
          continue
        }else{
          baseStatus[i] = 1
          break
        }
      }
      cleanScore()
  }

  var baseRunning = function(outerNum){
   var baseStatus = store.live_game.bases
   var score = 0
   var outNum = outerNum - 1

    return function looper(innerNum){
      var inNum = innerNum
      for (var i = baseStatus.length -1; i >= 0; i--){
        if (baseStatus[i] === 1){
          score += 1
          baseStatus[i] = baseStatus[i - 1]
          baseStatus[i - 1] = 0
        }else if(i === 0) {
          break
        }else{
          baseStatus[i] = baseStatus[i - 1]
          baseStatus[i - 1] = 0
        }
      }

      outNum
      inNum -= 1
      if (inNum > 0){
        looper(inNum)
      }else{
        store.live_game.bases = baseStatus
        teamScore(score)
        cleanScore(outNum)
      }
    }

  }

  function cleanScore(num) {
    store.live_game.bases.splice(num, 1, 1)
    var lastInd = store.live_game.bases[3]

    if (lastInd === 1) {
      teamScore(lastInd)
      store.live_game.bases.splice(3, 1, 0)
    }
    showBases()
  }
  //helper function used to add score and update our scoreboard live to the correct team//
  function teamScore(num){
    if(store.live_game.home){
      store.game_stats.home_score += num
      playCall("Run Scored!")
      document.querySelector('#home-score').innerText = store.game_stats.home_score
    }else{
      store.game_stats.away_score += num
      playCall("Run Scored!")
      document.querySelector('#away-score').innerText = store.game_stats.away_score
    }
  }


  function playCall(call) {
    let outfieldText = document.querySelector('#outfield-text')
    outfieldText.innerText = `${call}`
    setTimeout(function(){ outfieldText.innerText = ""}, 2000)
  }


  function executePlay (){
    randPlay = Math.floor(Math.random()*24) + 1
    // randPlay = 8
    // b = ball s = strike f = foul ball o = out //
    const s = document.getElementById('strikes')
    const b = document.getElementById('balls')
    const o = document.getElementById('outs')
    const gamelogScroll = document.getElementById('gamelog-scroll')

    switch (randPlay) {
      case 1:
      case 2:
      case 3:
      case 4:
        store.live_game.strikes += 1
        if (store.live_game.strikes === 3) {
          playCall('Strike Out!')
          store.live_game.outs += 1
          store.game_stats.out_count += 1
          out(s,b,o)
        }else{
          playCall('Strike')
          s.innerText =`Strikes: ${store.live_game.strikes}`
        }
      break;
      case 5:
      case 6:
      case 7:
        store.live_game.balls += 1
        if (store.live_game.balls === 4){
          playCall('Ball Four!')
          walk()
          out(s,b,o)
        }else {
          playCall('Ball')
          displayStats(s,b,o)
        }
      break;
      case 8:
      case 9:
      case 10:
        store.live_game.foul_balls += 1
          playCall("Foul Ball")
        if (store.live_game.strikes < 2){
          store.live_game.strikes += 1
          displayStats(s,b,o)
        }else{
          displayStats(s,b,o)
        }
      break;
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        store.live_game.outs += 1
        store.game_stats.out_count +=1
        playCall("Out")
        out(s,b,o)
      break;
      case 16:
      case 17:
      case 18:
        baseRunning(1)(1)
        playCall("Hit a Single")
        playByplay("Single one-hopper, to short right field!")
        out(s,b,o)
      break;
      case 19:
      case 20:
        baseRunning(2)(2)
        playCall("Hit a Double")
        playByplay("Double, into the gap of Right-Center Field!!")
        out(s,b,o)
      break;
      case 21:
      case 22:
        baseRunning(3)(3)
        playCall("Hit a Triple")
        playByplay("Triple, down the line into the left corner!")
        out(s,b,o)
      break;
      case 23:
      case 24:
        baseRunning(4)(4)
        playCall("HOMERUN!!!")
        playByplay("Homerun, touch them all!!")
        out(s,b,o)
      break;
    }
  }
  function playByplay(hit) {
    let gamelogScroll = document.getElementById('gamelog-scroll')
    pByp = document.createElement('i')
    pByp.innerHTML = `It's a clutch ${hit}; - New Batter Up<br><br><hr>`
    gamelogScroll.append(pByp)
  }


//foul ball
  // pByp = document.createElement('i')
  // pByp.innerHTML = "Tipped off behind to the backstop, Foul Ball!<br><br>"
  // gamelogScroll.append(pByp)

//out
  // pByp = document.createElement('i')
  // pByp.innerHTML = "A dribbling groundball to SS, runner out at first - 1 out recorded; New Batter up<hr><br>"
  // gamelogScroll.append(pByp)




//------------balls/strikes/change of inning/controls------//
  function out(s,b,o) {
    // let gamelogScroll = document.getElementById('gamelog-scroll')
    if (store.live_game.outs === 3) {

      const test = document.getElementById("inning").innerText = `${inningCount()}`

      store.live_game.bases = emptyBases

      if (store.live_game.home){
        store.live_game.home = false
      }else{
        store.live_game.home = true
      }


      store.live_game.strikes = 0
      store.live_game.foul_balls = 0
      store.live_game.balls = 0
      store.live_game.outs = 0

      displayStats(s,b,o)
    }else{
      store.live_game.strikes = 0
      store.live_game.foul_balls = 0
      store.live_game.balls = 0

      displayStats(s,b,o)
    }

    gameOver()
  }

  function displayStats(s,b,o){
    s.innerText = `Strikes: ${store.live_game.strikes}`
    b.innerText = `Balls: ${store.live_game.balls}`
    o.innerText =`Outs: ${store.live_game.outs}`
  }
  // end --- display and reseting balls/strikes/change of inning/controls---//
  function gameOver() {
    // const gameObj = store.game_stats
    let obj = {
      home_score: store.game_stats.away_score,
      away_score: store.game_stats.home_score,
      out_count: store.game_stats.out_count
    }

    const outs = store.game_stats.out_count
    const screen = document.querySelector('body')

    if (outs >= 3) {
      GameAdapter.postGame(obj)
      console.log(obj);
      // screen.innerHTML = ""
      //
      // screen.innerHTML = `
      //   <h1 id="winner-name">WINNER!!</h1>
      //   <canvas id="canvas"></canvas>
      //   <script type="text/javascript" src="src/winner.js"></script>
      //  `
      // screen.append(winner)
      // screen.append(can)

    }
  }

})

// <div id="Winner">
//   <h1 id=winner-name>Happy Birthday!</h1>
//   <canvas id="canvas"></canvas>
// </div>
