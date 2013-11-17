
function scaleLen(){
	var scale = parseFloat(prompt("Enter Scale Length"))
	var fret = []
	var i = 0
	var t = 0
	var fretn = parseInt(prompt("How many frets"))
	while (i < fretn){
		fret[i] = parseFloat(prompt("Enter the Fret value")).toFixed(6)
		i = i + 1
		}


	for (var x=0;x<=fretn;x++) {
		t = t+1
		var fretnum = fret[x]
		var ans = fretnum / scale
		console.log(ans.toFixed(6) + ' is for fret number' + t )
	}


}


console.log(scaleLen());