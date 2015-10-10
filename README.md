Guitarwebsite
=============

!!!!!!!!!!!UPDATE!!!!!!!!!!


			This repo is archived.


			Go to https://github.com/OhMedrano/guitarweb instead. 




























working on guitar site
 

11/3 - 

	Decided to start adding guitar images on to the site.

	Scale 11 guitar image wouldn't open in photoshop, so had to use some css properties to adjust it.

	Have all the images hidden, and planning to add some jQuery scripts to have them pop up when clicking a scale length.
 
11/5 - 
	
	Made a Fret ratio calculator. Forgot about that earlier, needed the ratio to get the correct distances of the frets from the nut which the value is then subrtracted from the base length.

		
	W = scale length
	X = fret ratio
	Y = scale length * fret ratio (W*X) {distance of fret from nut}
	Z = Distance - scale length (W - Y) gives me the new starting point for w for 		the harmonics 

	UPDATE:: 1/16/2014

	I forgot to include the math for the placement of the harmonic. 
	Luckily, it isn't complicated... unless I decide to do more harmonic points... on which I have to.

		firstNode = Z (The new starting point) / 2
		secondNode = Z/3
		third...

	Now, since I now know where the node is, in the math sense... I have to find it in the guitar itself. 

		harm = z - (Any one of the nodes.)

	That simple. Harm takes the value of the nodes and subtracts it from Z. The difference is now the location of the "Last" node in that 



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

12/25 - 
	
	Added a guitar selection menu in newguitar.html. Working on the interaction with the span id #gselect.