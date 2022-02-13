let team ={
    _players: [
      {
        firstName: "Emmanuel",
        lastName: "Afeku",
        age: 22
      },
      {
        firstName: "Samuel",
        lastName: "Ayew",
        age: 22
      },
      {
        firstName: "Ebenezer",
        lastName: "Dede",
        age: 22
      }
    ],
    _games: [
      {
        opponent: 'South Africa',
        teamPoints: 12,
        opponentPoints: 8
      },
      {
        opponent: 'Mali',
        teamPoints: 15,
        opponentPoints: 21
      },
      {
        opponent: 'Lithuana',
        teamPoints: 16,
        opponentPoints: 7
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer(firstName, lastName, age){
      let player = {
        firstName,
        lastName,
        age
      }
      this._players.push(player)
    }, 
    addGame(opponent, teamPoints, opponentPoints){
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    }
  }
  
  team.addGame('Somalia', 32, 23)
  console.log(team.games);

  team.addPlayer('Ayew', "Jordan", 23)
  console.log(team.players);