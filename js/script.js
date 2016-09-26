window.onload = function() {

	// Przycisk rozpoczęcia nowej gry
	var newGameBtn = document.getElementById('js-newGameButton');

	newGameBtn.addEventListener('click', newGame);


	// Przyciski wyboru dla gracza
	var pickRock = document.getElementById('js-playerPick_rock'),
		pickPaper = document.getElementById('js-playerPick_paper'),
		pickScissors = document.getElementById('js-playerPick_scissors');

	pickRock.addEventListener('click', function() { playerPick('rock') });
	pickPaper.addEventListener('click', function() { playerPick('paper') });
	pickScissors.addEventListener('click', function() { playerPick('scissors') });


	// Ustawianie początkowego stanu gry
	var gameState = 'notStarted',  //started // ended
		finalWinner,
		player = {
			name: '',
			score: 0
		},
		computer = {
			score: 0
		};

	// Zmiana widoczności elementów zależnie od stanu gry
	var newGameElem = document.getElementById('js-newGameElement'),
		pickElem = document.getElementById('js-playerPickElement'),
		resultsElem = document.getElementById('js-resultsTableElement'),
		finalResultElem = document.getElementById('js-finalResultElement');

	function setGameElements() {
		switch(gameState) {
			case 'started':
				newGameElem.style.display = 'none';
				pickElem.style.display = 'block';
				resultsElem.style.display = 'block';
				finalResultElem.style.display = 'none';
				break;

			case 'ended':
				finalResultElem.innerHTML = 'Koniec! Wygrał: ' + finalWinner;
				finalResultElem.style.display = 'block';
				newGameBtn.innerText = 'Jeszcze raz';
			
			case 'notStarted':
			default:
				newGameElem.style.display = 'block';
				pickElem.style.display = 'none';
				resultsElem.style.display = 'none';
		}
	};

	setGameElements();

	// Rozpoczynanie nowej gry
	var playerPointsElem = document.getElementById('js-playerPoints'),
		playerNameElem = document.getElementById('js-playerName'),
		computerPointsElem = document.getElementById('js-computerPoints');

	function newGame() {
		player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
		if (player.name) {
			player.score = computer.score = 0;
			gameState = 'started';
			setGameElements();

			playerNameElem.innerHTML = player.name;
			setGamePoints();
		}

    };

    // Losowanie wyboru przez komputer
	function getComputerPick() {
		var possiblePicks = ['rock', 'paper', 'scissors'];
		return possiblePicks[Math.floor(Math.random()*3)];
	};

	// Obsługa wyboru dokonanego przez gracza
	var playerPickElem = document.getElementById('js-playerPick'),
		computerPickElem = document.getElementById('js-computerPick'),
		playerResultElem = document.getElementById('js-playerResult'),
		computerResultElem = document.getElementById('js-computerResult');

	function playerPick(playerPick) {
		var computerPick = getComputerPick();

		console.log(playerPick);
		console.log(computerPick);

		playerPickElem.innerHTML = playerPick;
		computerPickElem.innerHTML = computerPick;

		checkRoundWinner(playerPick, computerPick);
	};

	// Przyznawanie punktów
	function checkRoundWinner(playerPick, computerPick) {
		playerResultElem.innerHTML = computerResultElem.innerHTML = '';
		
		var winnerIs = 'player';
		
		if (playerPick == computerPick) {
			winnerIs = 'none'; // remis
			playerResultElem.innerHTML = "Remis";
			computerResultElem.innerHTML = "Remis";
		} else if (
			(computerPick == 'rock' &&  playerPick == 'scissors') ||
			(computerPick == 'scissors' &&  playerPick == 'paper') ||
			(computerPick == 'paper' &&  playerPick == 'rock') ) {
			winnerIs = 'computer';
		};

		if (winnerIs == 'player') {
			playerResultElem.innerHTML = "Wygrana!";
			player.score++;
		} else if (winnerIs == 'computer') {
			computerResultElem.innerHTML = "Wygrana!";
			computer.score++;
		};

		setGamePoints();
		finalWinner = checkGameWinner();
	};
	
	// Aktualizowanie wyświetlanej liczby punktów
	function setGamePoints() {
		console.log(player.score);
		console.log(computer.score);
		playerPointsElem.innerHTML = player.score;
		computerPointsElem.innerHTML = computer.score;
	};

	// Kończenie rozgrywki
	function checkGameWinner() {
		if (player.score == 10 || computer.score == 10) {
			gameState = 'ended';
			return player.score > computer.score ? (
				console.log('wygrał gracz: ' + player.name);
				player.name;
			) : (
				console.log('wygrał Komputer');
				'Komputer';
			); 
			setGameElements();
		};
	};

}