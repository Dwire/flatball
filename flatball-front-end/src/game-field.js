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
      <div id="scoreboard-score-container">
        <div id="home"> <h1> Home Score: <h2 id="home-score">${store.game_stats.home_score}</h2></h1></div>
      <div id="away"> <h1> Away Score: <h2 id="away-score">${store.game_stats.away_score}</h2></h1></div>
      </div>
      <div id="scoreboard-inningDeets-container">
        <ul>Inning: Top of The First
          <li>Strikes:</li>
          <li>Balls:</li>
          <li>Foul Balls:</li>
          <li>Outs:</li>
          </ul>
      </div>
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
