window.onload = function() {

	// Przycisk rozpoczęcia nowej gry
	var newGameBtn = document.getElementById('js-newGameButton');
	var playerNameModal = document.getElementById('js-playerNameModal');

	newGameBtn.addEventListener('click', showPlayerNameForm);

	// Przyciski wyboru dla gracza
	var pickRock = document.getElementById('js-playerPick_rock');
	var pickPaper = document.getElementById('js-playerPick_paper');
	var pickScissors = document.getElementById('js-playerPick_scissors');

	pickRock.addEventListener('click', function() { playerPick('rock') });
	pickPaper.addEventListener('click', function() { playerPick('paper') });
	pickScissors.addEventListener('click', function() { playerPick('scissors') });


	// Ustawianie początkowego stanu gry
	var gameState = 'notStarted';  //started // ended
	var	finalWinner;
	var player = {
			name: '',
			score: 0
		};
	var computer = {
			score: 0
		};

	setGameElements();


	// Zmiana widoczności elementów zależnie od stanu gry
	
	function setGameElements() {
		var newGameElem = document.getElementById('js-newGameElement');
		var pickElem = document.getElementById('js-playerPickElement');
		var resultsElem = document.getElementById('js-resultsTableElement');
		var finalResultElem = document.getElementById('js-finalResultElement');

		switch(gameState) {
			case 'started':
				newGameElem.style.display = 'none';
				pickElem.style.display = 'block';
				resultsElem.style.display = 'block';
				finalResultElem.style.display = 'none';
				break;

			case 'ended':
				announceGameWinner();
				resultsElem.style.display = 'block';
				newGameBtn.innerText = 'Jeszcze raz';
				newGameElem.style.display = 'block';
				pickElem.style.display = 'none';
				break;
				
			case 'notStarted':
				resultsElem.style.display = 'none';
				finalResultElem.style.display = 'none';
				pickElem.style.display = 'none';
		};

		playerNameModal.style.display = 'none';
	};

	// Wyświetlanie modala z formularzem na imię gracza
	function showPlayerNameForm() {
		playerNameModal.style.display = 'block';
		document.getElementById('fname').focus();

		var playerNameForm = document.getElementById('js-playerNameForm');
		playerNameForm.addEventListener('submit', newGame);

	};

	window.onclick = function(event) {
		var closeNameModalX = document.getElementById('js-closeNameModalX');		
		if (event.target == playerNameModal || event.target == closeNameModalX) {
			playerNameModal.style.display = "none";
		}
	};

	// Rozpoczynanie nowej gry
	var playerPointsElem = document.getElementById('js-playerPoints');
	var playerNameElem = document.getElementById('js-playerName');
	var computerPointsElem = document.getElementById('js-computerPoints');

	function newGame(event) {
		// player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
		event.preventDefault();
		player.name = getPlayerName();
		console.log(player.name);

		if (player.name) {
			player.score = computer.score = 0;
			gameState = 'started';
			setGameElements();

			playerNameElem.innerHTML = player.name;
			setGamePoints();
		};
    };

	// Pobieranie imienia gracza z formularza
	function getPlayerName() {
		var fnameFormField = document.getElementById('fname');
		if (fnameFormField.value) {
			return fnameFormField.value;
		};
	};


    // Losowanie wyboru przez komputer
	function getComputerPick() {
		var possiblePicks = ['rock', 'paper', 'scissors'];
		return possiblePicks[Math.floor(Math.random()*3)];
	};

	// Obsługa wyboru dokonanego przez gracza
	var playerPickElem = document.getElementById('js-playerPick');
	var computerPickElem = document.getElementById('js-computerPick');
	var playerResultElem = document.getElementById('js-playerResult');
	var computerResultElem = document.getElementById('js-computerResult');

	function playerPick(playerPick) {
		var computerPick = getComputerPick();

		console.log(playerPick);
		console.log(computerPick);

		playerPickElem.innerHTML = playerPick;
		computerPickElem.innerHTML = computerPick;

		checkRoundWinner(playerPick, computerPick);
		if (didGameEnd()) { 
			gameState = 'ended';
			finalWinner = getGameWinner();
		};
		setGameElements();
	};

	// Rozstrzyganie rundy
	function checkRoundWinner(playerPick, computerPick) {
		playerResultElem.innerHTML = computerResultElem.innerHTML = '';
				
		if (playerPick == computerPick) {
			setRoundDraw();
		} else if (
			(computerPick == 'rock' &&  playerPick == 'scissors') ||
			(computerPick == 'scissors' &&  playerPick == 'paper') ||
			(computerPick == 'paper' &&  playerPick == 'rock') ) {
			setComputerAsRoundWinner();
		} else {
			setPlayerAsRoundWinner();
		};

		setGamePoints();
	};

	function setPlayerAsRoundWinner() {
		playerResultElem.innerHTML = "Wygrana!";
		player.score++;		
	};

	function setRoundDraw() {
		playerResultElem.innerHTML = "Remis";
		computerResultElem.innerHTML = "Remis";		
	}

	function setComputerAsRoundWinner() {
		computerResultElem.innerHTML = "Wygrana!";
		computer.score++;		
	}

	
	// Aktualizowanie wyświetlanej liczby punktów
	function setGamePoints() {
		console.log(player.score);
		console.log(computer.score);
		playerPointsElem.innerHTML = player.score;
		computerPointsElem.innerHTML = computer.score;
	};

	// Sprwadzanie czy rozgrywka zakończona
	function didGameEnd() {
		return (player.score == 10 || computer.score == 10); 
	}

	// Sprawdzanie kto wygrał rozgrywkę
	function getGameWinner() {
		if (player.score == 10) { 
			console.log('wygrał gracz: ' + player.name);
			return player.name;
		} else if (computer.score == 10) {
			console.log('wygrał Komputer');
			return 'Komputer';
		};
	};

	// Ogłaszanie zwycięzcy
	function announceGameWinner() {
		var finalResultElem = document.getElementById('js-finalResultElement');
		finalResultElem.innerHTML = 'Koniec! Wygrał: ' + finalWinner;
			
		if (finalWinner == 'Komputer') {
			finalResultElem.classList.remove('alert-success');
			finalResultElem.classList.add('alert-danger');
		} else {
			finalResultElem.classList.remove('alert-danger');
			finalResultElem.classList.add('alert-success');
		};
		finalResultElem.style.display = 'block';
	};
}