//---------------Baseball Field ----------------------------//
  const fieldName = document.createElement('h1')
    fieldName.setAttribute('id', 'field-name')
    fieldName.innerText = "Coders Field - Flatiron District, NYC"
  const field = document.createElement('div')
    field.setAttribute('class', 'perspective')
    field.innerHTML = `
      <br>
      <br>
      <hr>
      <!-- <div class="perspective"> -->

        <div id="entire-scoreboard">
          <div class="box 1"id="home">
            <h3 id="home-sb">Home Score</h3>
            <h4 id="home-score">${store.game_stats.home_score}</h4>
          </div>

          <div class="box 2" id="scoreboard-inningDeets-container">
            <h4 id="inning">${inningCount()} </h4>
          <div id="sbo"><p id="strikes">Strikes: ${store.live_game.strikes}</p><br>
            <p id="balls">Balls: ${store.live_game.balls}</p><br>
            <p id="outs">Outs: ${store.live_game.outs}</p></div>
          </div>

          <div class="box 3"id="away">
            <h3 id="away-sb">Away Score</h3>
            <h4 id="away-score">${store.game_stats.away_score}</h4>
          </div>
        </div>

    <div id="stripes" class="field">
      <div id="field-inner">
        <h1 id="outfield-text"><h1>
      </div>
      <div class="right-field-line">
      </div>
      <div class="left-field-line">
      </div>
      <div class="infield">
        <div class="infield-inner">
          <span class="home">
            <span class="plate">
            </span>
          </span>
          <span class="first">
          </span>
          <span class="second">
          </span>
          <span class="third">
          </span>
          <div class="pitchers-mound">
          </div>
        </div>
      </div>
    </div>
<!--  </div> -->
  <br>
  <br>
  <br>
  <br>
  <br>`

//---------------------- Stats Top of Field ------------------------------------

const dropContainer = document.createElement('div')
dropContainer.setAttribute('id', 'drop-container')
const dropDown = document.createElement('div')
dropDown.setAttribute("class","dropdown")
dropDown.innerHTML = `<br><span id="dropTitle">Play-By-Play</span>
  <div class="dropdown-content">
    <div id=gamelog-container><p id="gamelog-scroll"></p></div>`
dropContainer.append(dropDown)
fieldName.append(dropContainer)




//---------------------- Controls Bottom of Field ------------------------------
//Batter Controls//
const battersControlsContainer = document.createElement('div')
  battersControlsContainer.setAttribute('class', 'controller')
  battersControlsContainer.innerHTML = `<h4>Batter's Controller</h4>`
const bPower = document.createElement('button')
  bPower.setAttribute('id', 'power-hit')
  bPower.innerText = 'Power Hit (L)'
const bHit = document.createElement('button')
  bHit.setAttribute('id', 'contact-hit')
  bHit.innerText = 'Hit for Contact (K)'

  battersControlsContainer.append(bPower, bHit)

//Pitching Controls//
const pitchersControlsContainer = document.createElement('div')
  pitchersControlsContainer.setAttribute('class', 'controller')
  pitchersControlsContainer.innerHTML = `<h4>Pitcher's Controller</h4>`
const pFastball = document.createElement('button')
  pFastball.setAttribute('id', 'fastball')
  pFastball.innerText = 'Fastball (A)'
const pSpecial = document.createElement('button')
  pSpecial.setAttribute('id', 'special-pitch')
  pSpecial.innerText = 'Special Pitch (S)'

  pitchersControlsContainer.append(pFastball, pSpecial)

//Both contolls in div apended to field
const bothControllers = document.createElement('div')
  bothControllers.setAttribute('id', 'both-controllers')
  bothControllers.append(pitchersControlsContainer)
  bothControllers.append(battersControlsContainer)

  field.append(bothControllers)





function inningCount() {
  let outCount = store.game_stats.out_count
  // let outCount = 9
  let inning = ""

  switch (outCount) {
    case 0:
    case 1:
    case 2:
        inning = "Top 1st";
        break;
    case 3:
    case 4:
    case 5:
        inning = "Bottom 1st";
        break;
    case 6:
    case 7:
    case 8:
        inning = "Top 2nd";
        break;
    case 9:
    case 10:
    case 11:
        inning = "Bottom 2nd";
        break;
    case 12:
    case 13:
    case 14:
        inning = "Top 3rd";
        break;
    case 15:
    case 16:
    case 17:
        inning = "Bottom 3rd";
        break;
}
  return inning
}
