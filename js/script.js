window.onload = function() {

	var button = document.getElementById('addElem');
	
	button.addEventListener('click', addElementToList);

	function addElementToList() {
		var list = document.getElementById('lista');
		list.innerHTML += '<li>Item ' + list.getElementsByTagName('li').length;
	};

}
