var treeHeight = prompt('Podaj wysokość choinki');

halfTree(treeHeight);
fullTree(treeHeight);


/* half tree */
function halfTree(treeHeight) {

	var treeBranch = '';
	console.log("half tree")
	
	for (treeLevel = 1 ; treeLevel <= treeHeight ; treeLevel++) {
		for (branchLenght = 1 ; branchLenght <= treeLevel * 2 - 1 ; branchLenght++) {
			treeBranch += '*';
		};
		console.log(treeBranch);
		treeBranch = '';
	};

}

/* full tree */
function fullTree(treeHeight) {

	var treeBranch = '';
	var position = 1;
	var longestBranchLength = treeHeight * 4 - 2;
	var branchLenght = 0;

	console.log("full tree")

	for (treeLevel = 1 ; treeLevel <= treeHeight ; treeLevel++) {
		
		branchLenght = treeLevel * 4 - 2;
		position = 1;
		
		/* empty space to the left */
		while ( position <= (longestBranchLength - branchLenght ) / 2 ) {
			treeBranch += ' ';
			position++
		}

		/* leafs */
		while ( position <= (longestBranchLength - branchLenght ) / 2 + branchLenght - 1) {
			treeBranch += '*';
			position++
		}

		console.log(treeBranch);
		treeBranch = '';

	};

}