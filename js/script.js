var a = prompt('podaj zmienną a');
var b = prompt('podaj zmienną b');

var value = a * a + 2 * a * b - b * b;

console.log('a^2 + 2ab - b^2 = ' + value);

/* -- method A -- */
console.log('metoda A');

if (value > 0) {
	console.log('wynik dodatni');
}
else if (value < 0) {
	console.log('wynik ujemny');
}
else {
	console.log('ni dodatni, ni ujemny');
}

/* -- method B with Conditional (ternary) Operator -- */
console.log('metoda B');

value > 0 ? console.log('wynik dodatni') 
: value < 0 ? console.log('wynik ujemny') 
: console.log('ni dodatni, ni ujemny');

/* -- method C with Conditional (ternary) Operator and assigning value -- */
console.log('metoda C');

var logMessage = value > 0 ? (
	alert(value + ' - wynik dodatni'),
	'wynik dodatni' // logMessage
) : value < 0 ? (
	alert(value + ' - wynik ujemny'),
	'wynik ujemny' // logMessage
) : (
	alert(value + ' - wynik ni dodatni, ni ujemny'),
	'ni dodatni, ni ujemny' // logMessage
);

console.log(logMessage);