//---------------Baseball Field ----------------------------//
  fieldName = document.createElement('h1')
  fieldName.innerText = "Coders Field"
  field = document.createElement('div')
  field.setAttribute('class', 'perspective')
  field.innerHTML = `
    <br>
    <br>
    <hr>
    <div class="perspective">

      <div id="entire-scoreboard">
        <div class="box 1"id="home"> <h1> Home Score: <h2 id="home-score">${store.game_stats.home_score}</h2></h1></div>

        <div class="box 2" id="scoreboard-inningDeets-container">
          <div><h1 id="inning">Inning: ${inningCount()} </h1></div>
          <div id="strikes">Strikes: ${store.live_game.strikes}</div><br>
          <div id="balls">Balls: ${store.live_game.balls}</div><br>
          <div id="fouls">Foul Balls: ${store.live_game.foul_balls}</div><br>
          <div id="outs">Outs: ${store.live_game.outs}</div>
        </div>

        <div class="box 3"id="away"> <h1> Away Score: <h2 id="away-score">${store.game_stats.away_score}</h2></h1></div>
      </div>

  <div id="stripes" class="field">
    <div class="field-inner">
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
</div>
<hr>
<br>
<br>`
// -------------------end-------------------------//
function inningCount() {
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
}
