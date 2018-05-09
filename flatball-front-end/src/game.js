store = {
  live_game: {strikes: 0, balls:0, outs: 0, foul_balls: 0, bases: [0, 0, 0, 0], home: false},
  game_stats: {home_score: 0 , away_score: 0, out_count: 0}
}


class Game {
  constructor(home_score = 0, away_score = 0, out_count = 0){
    this.home_score = home_score
    this.away_score = away_score
    this.out_count = out_count
  }

  render(){
    console.log(this);
  }
}
