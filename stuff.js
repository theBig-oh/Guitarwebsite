//I have to make an array to house each ratio.
//and from that, I have to make it take the ratio, times it by the initial scale length
// then take that value and subtract it from the scale length to get the right distance from
// the nut to the actual fret.
/*
//20.7
var scale1 = [0,0.56135,0.109082,0.159082,0.206280,0.250869,0.292898,
			  0.332560,0.370048,0.405410,0.438792,0.470289,0.5,0.528067,0.554541,
			  0.579565,0.603140,0.625410,0.646425,0.666280,0.685024,0.702705,
			  0.719371,0.735120,0.75];
//22.5
var scale2 = [0,0.056133,0.109111,0.159111,0.206311,0.250844,0.292889,0.332578,
			  0.370044,0.405378,0.438756,0.470267,0.5,0.528044,0.554533,0.579556,
			  0.603156,0.625422,0.646444,0.666311,0.685022,0.702711,0.719378,0.735156,0.75];
//22.72
var scale3 = [0,0.05611,0.10911,0.15911,0.20629,0.25083,0.29291,0.33257,0.37002,0.40541,
			  0.43877,0.47024,0.5,0.52808,0.55453,0.57953,0.60316,0.62544,0.64643,0.66628,
			  0.68503,0.70268,0.71936,0.73512,0.75];
//22.75
var scale4 = [0,0.056131,0.109098,0.159120,0.206285,0.250857,0.292879,0.332571,0.370021,
		  	  0.405406,0.438769,0.470285,0.5,0.528043,0.554549,0.579560,0.603164,0.625406,0.646461,
		  	  0.666285,0.685010,0.702681,0.719384,0.735120,0.75];
//23.25
var scale5 = [0,0.056129,0.109118,0.159097,0.206280,0.250839,0.2922903,0.332559,0.370022,0.405376,0.438753,0.470280,0.5,
			  0.528043,0.554538,0.579570,0.603140,0.625419,0.646452,0.666280,0.685032,0.702710,0.71 9398,0.735140,0.749978];

//23.5
var scale6 = [0,0.056127,0.109106,0.159106,0.206297,0.250851,0.292893,0.332595,
			  0.370042,0.406404,0.438765,0.470255,0.5,0.528042,0.554553,0.579531,0.603148,
			  0.625404,0.646425,0.666297,0.685021,0.702680,0.719404,0.735148,0.75];
//24
var scale7 = [0,0.056125,0.109083,0.159083,0.206291,0.250833,0.292875,0.332583,0.370041,0.405416,0.43875,0.47025,
			  0.5,0.528083,0.554541,0.579541,0.603166,0.625416,0.646458,0.666291,0.685,0.702708,0.719375,0.735125,0.75];

//24.5
var scale8 = [0,0.056122,0.109102,0.159102,0.206285,0.250857,0.292897,0.332489,0.370040,0.405387,0.438775,0.470285,0.5,
			  0.528081,0.554530,0.579551,0.603142,0.625428,0.646448,0.666285,0.685020,0.702693,0.719387,0.735142,0.75];

//24.6
var scale9 = [0,0.056138,0.109105,0.159105,0.206300,0.250853,0.292886,0.332560,0.370040,0.405406,0.438780,0.470284,
			  0.5,0.528048,0.554552,0.579552,0.603130,0.625406,0.646463,0.666300,0.684999,0.702682,
			  0.719390,0.735121,0.749999];

//24.75
var scale10 = [0,0.056121,0.109090,0.159111,0.206303,0.250828,0.292888,0.332565,0.370020,0.405414,0.438787,0.470262,0.5,
			  0.528080,0.554545,0.579555,0.603151,0.625414,0.646464,0.666303,0.685010,0.702707,0.719393,0.735151,0.749979];

//25.125
var scale11 = [0,0.056119,0.109094,0.159084,0.206288,0.250865,0.292895,0.332577,0.370029,0.405412,0.438766,0.470248,0.499980,0.528079,0.554547,0.579542,
		 	   0.603144,0.625432,0.646447,0.666308,0.685014,0.702686,0.719402,0.735124,0.750009]

//25.5
var scale12 = [0,0.056117,0.109098,0.159098,0.206313,0.250862,0.292901,0.332588,0.370039,0.405411,0.438784,0.470274,
			  0.5,0.528078,0.554549,0.579568,0.603137,0.625411,0.646431,0.666274,0.685019,0.702705,
			  0.719372,0.735137,0.75];

//27
var scale13 = [0,0.056111,0.109111,0.159111,0.206296,0.250852,0.292889,0.332593,0.370037,0.405407,0.438778,0.470259,
			   0.5,0.528074,0.554556,0.579556,0.603148,0.625407,0.646444,0.666296,0.685037,0.702704,
			   0.719370,0.735148,0.75];

//The Var length is the length of each scale length itself, it shall be referenced
//when someone picks a scale length from scaleans. 
*/
var length = [20.7,22.5];

var fretnum = parseInt(prompt("What fret do you want to use?"));

var scaleans = parseInt(prompt('0 for 20.7 or 1 for 22.5'));

/*
For some reason, I cannot get this 2D array to work.
I'll work on this later, and see what's wrong with it.
*/

//scale[i[x]] = i is the scale length(scaleans), x is the fret number(fretnum) in the scale length itself. 

var scale = [
				{ scaleLength: 20.7,   values : [0,0.56135,0.109082,0.159082,0.206280,0.250869,0.292898, 0.332560,0.370048,0.405410,0.438792,0.470289,0.5,0.528067,0.554541, 0.579565,0.603140,0.625410,0.646425,0.666280,0.685024,0.702705, 0.719371,0.735120,0.75] },
				{ scaleLength: 22.5,   values : [0,0.056133,0.109111,0.159111,0.206311,0.250844,0.292889,0.332578, 0.370044,0.405378,0.438756,0.470267,0.5,0.528044,0.554533,0.579556, 0.603156,0.625422,0.646444,0.666311,0.685022,0.702711,0.719378,0.735156,0.75] },
				{ scaleLength: 22.72,  values : [0,0.05611,0.10911,0.15911,0.20629,0.25083,0.29291,0.33257,0.37002,0.40541, 0.43877,0.47024,0.5,0.52808,0.55453,0.57953,0.60316,0.62544,0.64643,0.66628, 0.68503,0.70268,0.71936,0.73512,0.75] },
				{ scaleLength: 22.75,  values : [0,0.056131,0.109098,0.159120,0.206285,0.250857,0.292879,0.332571,0.370021, 0.405406,0.438769,0.470285,0.5,0.528043,0.554549,0.579560,0.603164,0.625406,0.646461, 0.666285,0.685010,0.702681,0.719384,0.735120,0.75] },
				{ scaleLength: 23.25,  values : [0,0.056129,0.109118,0.159097,0.206280,0.250839,0.2922903,0.332559,0.370022,0.405376,0.438753,0.470280,0.5,0.528043,0.554538,0.579570,0.603140,0.625419,0.646452,0.666280,0.685032,0.702710,0.719398,0.735140,0.749978] },
				{ scaleLength: 23.5,   values : [0,0.056127,0.109106,0.159106,0.206297,0.250851,0.292893,0.332595, 0.370042,0.406404,0.438765,0.470255,0.5,0.528042,0.554553,0.579531,0.603148, 0.625404,0.646425,0.666297,0.685021,0.702680,0.719404,0.735148,0.75] },
				{ scaleLength: 24,     values : [0,0.056125,0.109083,0.159083,0.206291,0.250833,0.292875,0.332583,0.370041,0.405416,0.43875,0.47025, 0.5,0.528083,0.554541,0.579541,0.603166,0.625416,0.646458,0.666291,0.685,0.702708,0.719375,0.735125,0.75] },
				{ scaleLength: 24.5,   values : [0,0.056122,0.109102,0.159102,0.206285,0.250857,0.292897,0.332489,0.370040,0.405387,0.438775,0.470285,0.5, 0.528081,0.554530,0.579551,0.603142,0.625428,0.646448,0.666285,0.685020,0.702693,0.719387,0.735142,0.75] },
				{ scaleLength: 24.6,   values : [0,0.056138,0.109105,0.159105,0.206300,0.250853,0.292886,0.332560,0.370040,0.405406,0.438780,0.470284, 0.5,0.528048,0.554552,0.579552,0.603130,0.625406,0.646463,0.666300,0.684999,0.702682, 0.719390,0.735121,0.749999] },
				{ scaleLength: 24.75,  values : [0,0.056121,0.109090,0.159111,0.206303,0.250828,0.292888,0.332565,0.370020,0.405414,0.438787,0.470262,0.5, 0.528080,0.554545,0.579555,0.603151,0.625414,0.646464,0.666303,0.685010,0.702707,0.719393,0.735151,0.749979] },
			    { scaleLength: 25.125, values : [0,0.056119,0.109094,0.159084,0.206288,0.250865,0.292895,0.332577,0.370029,0.405412,0.438766,0.470248,0.499980,0.528079,0.554547,0.579542, 0.603144,0.625432,0.646447,0.666308,0.685014,0.702686,0.719402,0.735124,0.750009] },
			    { scaleLength: 25.5,   values : [0,0.056117,0.109098,0.159098,0.206313,0.250862,0.292901,0.332588,0.370039,0.405411,0.438784,0.470274, 0.5,0.528078,0.554549,0.579568,0.603137,0.625411,0.646431,0.666274,0.685019,0.702705, 0.719372,0.735137,0.75] },
			    { scaleLength: 27,     values : [0,0.056111,0.109111,0.159111,0.206296,0.250852,0.292889,0.332593,0.370037,0.405407,0.438778,0.470259, 0.5,0.528074,0.554556,0.579556,0.603148,0.625407,0.646444,0.666296,0.685037,0.702704, 0.719370,0.735148,0.75] }
			];

//I suspect it has something to do with this line of code over here. Each time the code runs, it will run the prompt
//for both the "scaleans" and the "fretnum". However, it gives me a NaN result instead of the intended new scalelength distance


if (scaleans == 0) {
	var ratioans = scale[scaleans].scaleLength * scale[scaleans].values[fretnum];
	var newlength= scale[scaleans].scaleLength - scale[scaleans].values[ratioans];
	console.log(ratioans)
}
else
{
	console.log("try again")
};

/*
if (scaleans == 0) {
	var ratioans = scale1[fretnum]*length[scaleans]
	var newlength = length[scaleans]-ratioans
	console.log(newlength.toFixed(6))
}
*/
