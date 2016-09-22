do{

	var a = prompt('Podaj długość podstawy trójkąta a=');
	var h = prompt('Podaj wysokość trójkąta h=')

	var triangleArea = getTriangleArea(a, h);
	if (triangleArea != 'nieprawidłowe dane'){
		console.log('Pole trójkąta o podstawie a=' + a + ' i wysokości h=' + h + ' równa się: ' + triangleArea);
		alert(triangleArea);
	}
	else {
		console.log(triangleArea);
		alert(triangleArea);
	}

} while (confirm('Jeszcze jedno obliczenie?'));

function getTriangleArea(a, h){
	if (a > 0 && h > 0){
		return a * h / 2;
	}
	else {
		return 'nieprawidłowe dane';
	}
}