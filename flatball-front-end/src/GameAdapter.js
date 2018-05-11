class GameAdapter {

  static getGame() {
    return fetch('http://localhost:3000/api/v1/games')
    .then(res => res.json())
    // .then(json => console.log(json))
  }

  static postGame(json){
    return fetch('http://localhost:3000/api/v1/games', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(json)
    })
    .then(res => res.json())
    .then(json => console.log(json))
  }

}
