var app = {
  buttonGameType: null,
  game: null,
  gameTypeElement: null,
  gameType: null,
  choice: null,
  cpuBattle: null,
  computerChoiceElement: null,
  resultElement: null,
  textResultElement: null,
  resetElement: null,
  headerElement: null,
  score1: 0,
  score2: 0,
  score1Element: null,
  score2Element: null,
  textConvert: ['Rock', 'Paper', 'Scissors'],

  init: function() {
    console.log('init');
    app.game = document.getElementById('game');
    app.headerElement = document.getElementById('header');
    app.gameTypeElement = app.game.querySelector('#game-type');
    app.buttonGameType = document.getElementsByClassName('game-type');
    for (let type=0; type<2; type++) {
      app.buttonGameType[type].addEventListener('click', app.handleGameType);
    }
    app.choice = document.getElementsByClassName('choice-button');
    for (let choice=0; choice<app.choice.length; choice++) {
      app.choice[choice].addEventListener('click', app.handlePlayerChoice);
    };
    app.playerChoiceElement = document.getElementById('player-choice');
    app.cpuBattle = document.getElementById('cpu-battle');
    app.cpuBattle.addEventListener('click', app.handleCpuBattle);
    app.computerChoiceElement = document.getElementById('computer-choice');
    app.computer2ChoiceElement = document.getElementById('computer2-choice');
    app.resultElement = document.getElementById('result');
    app.textResultElement = document.getElementById('text-result');
    app.resetElement = document.getElementById('reset');
    app.resetElement.addEventListener('click', app.handleResetClick);
    app.score1Element = document.getElementById('player1-score');
    app.score2Element = document.getElementById('player2-score');
  },

  handlePlayerChoice: function(evt) {
    let playerChoice = evt.currentTarget.id;
    let computerChoice = app.computerChoice();
    for (i=0; i<app.choice.length; i++) {
      app.choice[i].classList.remove('selected');
    };
    evt.currentTarget.classList.add("selected");
    app.computerChoiceElement.textContent = 'Computer chooses "' + app.textConvert[computerChoice] + '"';
    app.getResult(playerChoice, computerChoice);
  },

  computerChoice: function() {
    return Math.floor(Math.random() * Math.floor(3));
  },

  handleCpuBattle: function() {
    let cpu1Choice = app.computerChoice();
    app.computerChoiceElement.textContent = 'Computer 1 chooses "' + app.textConvert[cpu1Choice] + '"';
    let cpu2Choice = app.computerChoice();
    app.computer2ChoiceElement.textContent = 'Computer 2 chooses "' + app.textConvert[cpu2Choice] + '"';
    app.getResult(cpu1Choice, cpu2Choice);
  },

  getResult: function(player1, player2) {
    let result = parseInt(player1 + player2);
    let winOptions = [02, 10, 21];
    if (player1 == player2) {
      app.resultElement.textContent = 'Draw !';
      app.textResultElement.textContent = "";
    }
    else {
      if (winOptions.includes(result)) {
        if (app.gameType == "player") {
          app.resultElement.textContent = 'You win !';
        }
        else {
          app.resultElement.textContent = 'Computer 1 wins';
        };
        app.score1 += 1;
      }
      else {
        if (app.gameType == "player") {
          app.resultElement.textContent = 'You lose';
        }
        else {
          app.resultElement.textContent = 'Computer 2 wins';
        };
        app.score2 += 1;
      };
      app.score1Element.textContent = app.score1;
      app.score2Element.textContent = app.score2;
      if (result == 01 || result == 10) {
        app.textResultElement.textContent = "Paper covers Rock";
      }
      else if (result == 02 || result == 20) {
        app.textResultElement.textContent = "Rock crushes Scissors";
      }
      else {
        app.textResultElement.textContent = "Scissors cuts Paper";
      };
    }
  },

  handleGameType: function(evt) {
    app.hideGameSelector();
    if (evt.currentTarget.id == "pvsc") {
      app.gameType = "player";
      app.playerChoiceElement.style.display = 'flex';
      app.cpuBattle.parentNode.style.display = 'none';
      app.computer2ChoiceElement.style.display = 'none';
    }
    else {
      app.gameType = "computer";
      app.playerChoiceElement.style.display = 'none';
      app.computer2ChoiceElement.style.display = 'block';
    };
    app.gameTypeElement.textContent = app.gameType + " vs computer"
    app.game.style.display = "block"
  },

  hideGameSelector: function() {
    let gameSelectorElement;
    app.gameSelectorElement = document.getElementById('game-selector');
    app.gameSelectorElement.style.display = 'none';
    app.headerElement.querySelector('h1').className = 'mini';
    app.headerElement.querySelector('h4').remove();
  },

  handleResetClick: function() {
    location.reload();
  }
};

document.addEventListener('DOMContentLoaded', app.init);