store = {
  // live_game: [on_base: [1, 2, null], strikes: 2, outs: 6],
  game_stats: []
  // home_team: [score:],
  // away_team: [score:]
}


class Game {
  constructor({home_score, away_score, out_count}){
    this.home_score = home_score
    this.away_score = away_score
    this.out_count = out_count

    store.game_stats.push(this)
  }

  render(){
    console.log(this);
  }
}
