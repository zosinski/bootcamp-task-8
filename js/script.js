var a = prompt('podaj zmienną a');
var b = prompt('podaj zmienną b');

var value = a * a + 2 * a * b - b * b;

console.log('a^2 + 2ab - b^2 = ' + value);

if(value > 0) {
	console.log('wynik dodatni');
}
else if(value < 0) {
	console.log('wynik ujemny');
}
else {
	console.log('ni dodatni, ni ujemny');
}