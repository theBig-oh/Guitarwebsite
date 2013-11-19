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

11/16 -

	Started checking the code in javascript to see if it would read off from the arrays. It works so far. 
	Now I just need to add more scale lengths, and then figure out the jQuery for this damn thing. 

	Also find out what's the best js library for making a drawing for the harmonics itself.
	
11/17 -
	
	Added all the scale lengths, and made a 2D array to combine all of them. I can't get the "If" statement to work
	with this 2d array. It gives me a NaN result, I tried to parseFloat, however it still displays NaN. 

	The other arrays, such as the one with scale1 to scale 12, works with the "If" statement that isn't commented out. 

	Edit: Thanks to Chris (OrigamiRobot), the previous code works! The 2D array was put into a JSON object, I guess now I need to learn exactly what JSON does.

11/18 - 
	
	Decided to make a new html.