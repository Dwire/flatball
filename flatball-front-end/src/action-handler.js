// // Play Ball button click functionality [renders a new game JS object and clears the page] //
// newGameButton.addEventListener('click', playBallHandler)
// function playBallHandler () {
//   new Game().render()
//   appBody.innerHTML = ""
//   alert('GAME ON')
//   appBody.append(fieldName, field, gamelogDiv, homeScoreDiv,
//     awayScoreDiv, inningDetailsDiv, battersControlsContainer,
//     pitchersControlsContainer)
// }
//
// //
// // batter's controller events
// bPower.addEventListener('click', powerHandler)
// bHit.addEventListener('click', contactHandler)
// //pitcher's controller events
// pSpecial.addEventListener('click', spHandler)
// pFastball.addEventListener('click', fbHandler)
// //Array for the current play in action//
// let currentPlay = []
// //THE HANFLERS FOR THE PITCHER & BATTER CONTROLLERS//
// //Handler for the Batter's Contact Hit//
// function contactHandler() {
//   if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
//     alert(`You can't hit until the Pitcher selects their pitch`)
//   }else{
//     currentPlay.push({bat: "contact"})
//   }if (currentPlay.length === 2){
//     executePlay()
//     currentPlay = []
//   }
// }
// // //Handler for the Batter's Power Hit
// function powerHandler() {
//   if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('bat')){
//     alert(`You can't hit until the Pitcher selects their pitch`)
//   }else{
//     currentPlay.push({bat: "power"})
//   }if (currentPlay.length === 2){
//     executePlay()
//     currentPlay = []
//   }
// }
// // //Handler for the Pitcher's FastBall Pitch
// function fbHandler() {
//   if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
//     alert('You already have your pitch selected, waiting for the Batter to swing')
//   }else{
//     currentPlay.push({pitch: "fastball"})
//   }if (currentPlay.length === 2){
//     executePlay()
//     currentPlay = []
//   }
// }
// //Handler for the Pitcher's Special Pitch
// function spHandler() {
//   if (currentPlay.length > 0 &&  Object.keys(currentPlay[0]).includes('pitch')){
//     alert('You already have your pitch selected, waiting for the Batter to swing')
//   }else{
//     currentPlay.push({pitch: "sp"})
//   }if (currentPlay.length === 2){
//     executePlay()
//     currentPlay = []
//   }
// }
// // //end//
