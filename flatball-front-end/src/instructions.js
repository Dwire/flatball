//
// const appBody = document.querySelector('body')
// const mainPageDiv = document.createElement('div')
// mainPageDiv.setAttribute('id', 'main-page-div')
// const welcomeMessage = document.createElement('h1')
// welcomeMessage.setAttribute('id','main-welcome')
// welcomeMessage.innerHTML = "::Welcome to FlatBall:: <br> ::Where Everyone Can PLAY BALL::<hr><hr>"
// mainPageDiv.append(welcomeMessage)
// appBody.append(mainPageDiv)
//
// //Play Ball Button//
// const newGameButtonDiv = document.createElement('div')
// newGameButtonDiv.setAttribute('id', 'play-game-container')
// mainPageDiv.append(newGameButtonDiv)
// const newGameButton = document.createElement('button')
// newGameButton.setAttribute('id', 'new-game-button')
// newGameButton.innerText = 'Play Ball!'
// newGameButtonDiv.append(newGameButton)
// // end //
//
// //Instructions on How to Play
// const instructionsDiv = document.createElement('div')
// instructionsDiv.setAttribute('id','instructions')
// instructionsDiv.innerHTML = `<h2> How To Play: </h3><ul><h4>General Rules</h3><li>This game requires Two(2) players, or one lonely individual</li><li>One game simulation plays til Six(6) innings</li><li>You play to win the game.</li><li>Or tie...because we are all winners here at Flatball right!?  ...we were too lazy to code the logic for extra innings</li><br><br></ul><ul><h4>Batting Rules & Controls </h4><li>The Batter is given two options: [Hit For Contact] or [Power Hit]</li><li>[Hit For Contact]: Practical...Safe.. gives the Batter the best chance to land on theirself on base</li><li>[Power Hit]: We're talking power here so this will most definitely give the Batter the best chance to hit a triple/homerun to deepest part of the parks, but also gives a higher rate to strikeout since we are swinging for the fences here</li></ul><br><br><ul><h4>Pitching Rules & Controls</h4><li>The Pitcher is given two options: [Fastball] or [Special Pitch] </li><li>[Fastball]: Nothing fancy here just a solid fastball that can either wind up giving you a solid and steady result</li><li>[Special Pitch]: The name says it all..you throw this mind-bending pitch and you land the best shot at making your opponent dance at the batter's box. However, it also can cause you to serve thr fattest meatball the Flatiron District has seen in recent years, right over the plate for the batter to clobber over the cheap seats.... You Have Been Warned.</li></ul>`
// mainPageDiv.append(instructionsDiv)
//
// // Play Ball button click functionality [renders a new game JS object and clears the page] //
// newGameButton.addEventListener('click', playBallHandler)
// function playBallHandler () {
//   new Game().render()
//   appBody.innerHTML = ""
//   alert('GAME ON')
//   appBody.append(gamelogDiv, homeScoreDiv,
//     awayScoreDiv, inningDetailsDiv, battersControlsContainer,
//     pitchersControlsContainer)
//
//   //batter's controller events
//   bPower.addEventListener('click', powerHandler)
//   bHit.addEventListener('click', contactHandler)
//   //pitcher's controller events
//   pSpecial.addEventListener('click', spHandler)
//   pFastball.addEventListener('click', fbHandler)
// }
