
function scaleLen(){
	var scale = parseFloat(prompt("Enter Scale Length"))
	var fret = []
	var i = 0
	while (i < 26){
		fret[i] = parseFloat(prompt("Enter the Fret value")).toFixed(6)
		i = i + 1
		}


	for (var x=0;x<=26;x++) {
		var fretnum = fret[x]
		var ans = fretnum / scale
		console.log(ans + ' is for fret number' + x )
	}


}


console.log(scaleLen());