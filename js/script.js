var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var names = femaleNames.concat(maleNames);
console.log('połączona tablica: ' + names);

do {
	var newName = prompt('Podaj nowe imię');

	if (names.indexOf(newName) == -1){
		names.push(newName);
		console.log('tablica z dodanym nowym imieniem: ' + names);
		newName = '';
	}
	else {
		alert('Imię już jest w tablicy');
	}

} while (newName !== '');