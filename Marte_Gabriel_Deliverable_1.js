//Training Day
//Author: Gabriel Marte
//Date: 09/01/2012
//SDI Online Deliverable 1
//A look into a normal training day.


/* 
	training schedule is dependant on 
	whether I do a conditioning class
	and a sparring class on the same day
*/

var 
	skipBjj = "skip second BJJ class."
	takeBjj = 'let\'s do round 2 of BJJ.'
	totalClasses = "I have taken a total of "
	condAndSpar = true
	
//number of possible classes per day
	bjjCond = 1
	bjjDrill = 1
	mtBag = 1
	mtSpar = 1
;
	
numCondAndSpar = bjjCond + mtSpar
numAnyOther = 3

console.log("A typical training day:")

if ("Conditioning and Sparring.")
	if (condAndSpar === true) {
		console.log( "Train BJJ conditioning, " + 		"teach 		Muay Thai Sparring and " + skipBjj )
		console.log( totalClasses + numCondAndSpar + 		
		" classes." );
	} else {
		console.log("Train BJJ drills, " + 
		"teach Muay Thai sparring class and " +
		 takeBjj )
		 console.log( totalClasses + numAnyOther + 		
		 " classes." );
		
};



	