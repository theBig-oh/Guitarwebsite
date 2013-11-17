//I have to make an array to house each ratio.
//and from that, I have to make it take the ratio, times it by the initial scale length
// then take that value and subtract it from the scale length to get the right distance from
// the nut to the actual fret.

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

//23.5
var scale5 = [0,0.056127,0.109106,0.159106,0.206297,0.250851,0.292893,0.332595,
			  0.370042,0.406404,0.438765,0.470255,0.5,0.528042,0.554553,0.579531,0.603148,
			  0.625404,0.646425,0.666297,0.685021,0.702680,0.719404,0.735148,0.75];
//24
var scale6 = [];

//The Var length is the length of each scale length itself, it shall be referenced
//when someone picks a scale length from scaleans. 
var length = [20.7,22.5];

var fretnum = parseInt(prompt("What fret do you want to use?"));

var scaleans = parseInt(prompt('0 for 20.7 or 2 for 22.5'));

if (scaleans == 0) {
	var scale = scale1
	var ratioans = length[scaleans]*scale[fretnum]
	var newlength = length[scaleans]-ratioans
	console.log(newlength)
}
else
{
	console.log("try again")
};




