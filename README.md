Guitarwebsite
=============

working on guitar site


11/3 - 

	Decided to start adding guitar images on to the site.

	Scale 11 guitar image wouldn't open in photoshop, so had to use some css properties to adjust it.

	Have all the images hidden, and planning to add some jQuery scripts to have them pop up when clicking a scale length.
 
11/5 - 
	
	Made a Fret ratio calculator. Forgot about that earlier, needed the ratio to get the correct distances of the frets from the nut which the value is then subrtracted from the base length.

	w = scale length
	x = fret ratio
	y = scale length * fret ratio (w*x) {distance of fret from nut}
	z = Distance - scale length (w - y) gives me the new starting point for w for 		the harmonics 