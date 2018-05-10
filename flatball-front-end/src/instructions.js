// ~Main Page (Welcome Screen) HTML Containers/Set-up Constants~//
const appBody = document.querySelector('body')
appBody.setAttribute('id', "body-div")
const mainPageDiv = document.createElement('div')
  mainPageDiv.setAttribute('id', 'main-page-div')
const welcomeMessage = document.createElement('h1')
welcomeMessage.setAttribute('id','main-welcome')
welcomeMessage.innerHTML = `<img id="img1" src="https://cdn0.iconfinder.com/data/icons/flatty-balls/633/03_FlatBallIcons_Baseball-512.png" alt="Baseball" height='75' width="75">  Welcome to FlatBall  <img id="img2" src="https://cdn0.iconfinder.com/data/icons/flatty-balls/633/03_FlatBallIcons_Baseball-512.png" alt="Baseball" height="75" width="75"><br> - Where Everyone Can PLAY BALL -`
mainPageDiv.append(welcomeMessage)
appBody.append(mainPageDiv)

//Play Ball Button//
const newGameButtonDiv = document.createElement('div')
  newGameButtonDiv.setAttribute('id', 'play-game-container')
  mainPageDiv.append(newGameButtonDiv)
const newGameButton = document.createElement('button')
newGameButton.setAttribute('id', 'new-game-button')
newGameButton.setAttribute('class', 'button')
newGameButton.innerText = 'Play Ball!'
newGameButtonDiv.append(newGameButton)
// end //



//Instructions on How to Play
const instructionsDiv = document.createElement('div')
instructionsDiv.setAttribute('id','instructions')
instructionsDiv.innerHTML = `<h1 id="how-to" class="dropTitles"> How To Play <h1>`
//Hoverable DropDown//

dropDownContainer = document.createElement('div')
dropDownContainer.setAttribute('id','dd-container')
dropDown1 = document.createElement('div')
dropDown1.setAttribute("class","dropdown")
dropDown1.innerHTML = `<br><span class="dropTitles"><h3>General Rules</h3></span>
  <div class="dropdown-content">
    <p>- This game requires Two(2) players, or one lonely individual</p><p>- One game simulation plays til Three(3) innings</p><p>- You play to win the game.</p><p>- Or tie...because we are all winners here at Flatball right!?  ...we were too lazy to code the logic for extra innings</p>
  </div>
</div>`

dropDown2 = document.createElement('div')
dropDown2.setAttribute("class","dropdown")
dropDown2.innerHTML = `<br><span class="dropTitles"><h3>Batting Rules & Controls</h3></span>
  <div class="dropdown-content">
    <p>- The Batter is given two options: [Hit For Contact] or [Power Hit]</p><p>- [Hit For Contact]: Practical...Safe.. gives the Batter the best chance to land on theirself on base</p><p>- [Power Hit]: We're talking power here so this will most definitely give the Batter the best chance to hit a triple/homerun to deepest part of the parks, but also gives a higher rate to strikeout since we are swinging for the fences here</p>
  </div>
</div>`

dropDown3 = document.createElement('div')
dropDown3.setAttribute("class","dropdown")
dropDown3.innerHTML = `<br><span class="dropTitles"><h3>Pitching Rules & Controls</h3></span>
  <div class="dropdown-content">
    <p>- The Pitcher is given two options: [Fastball] or [Special Pitch]</p><p>- [Fastball]: Nothing fancy here just a solid fastball that can either wind up giving you a solid and steady result</p><p>- [Special Pitch]: The name says it all..you throw this mind-bending pitch and you land the best shot at making your opponent dance at the batter's box. However, it also can cause you to serve thr fattest meatball the Flatiron District has seen in recent years, right over the plate for the batter to clobber over the cheap seats.... You Have Been Warned.</p>
  </div>
</div>`
dropDownContainer.append(dropDown1," || ", dropDown2," || ", dropDown3)
mainPageDiv.append(dropDownContainer)
mainPageDiv.append(instructionsDiv, dropDownContainer)
//--------end instructionsDiv Hover --------------//
