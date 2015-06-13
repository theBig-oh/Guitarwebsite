/**
 * Created by This nigga on 1/31/14.
 */
var notes = ["A","A#",["B","C"],"C#","D","D#",["E","F"],"G","G#"];

var key = prompt("");


/* What I want to do, is have an array of notes.

In this array of notes, I shall have the notes with no sharps, in their own bracket. So i would have a 2D
array.

Now if I want to be in a certain key, the "key" value will equal the amount of steps I need to be in the
right key.

I can do this two ways,  either turn the "key" value into an integer and work it out using an if
statement..

I can also use a conditional which checks if the value of the key is the same value as the one in the
array.

such as if I do

if (key === notes[key]) {
 rotate the array until it's 0 index

then start off with that... however, it might seem sloppy since I would still have to rotate the array
til I get the note that I need as the at the 0 index.

I might be able to remedy this using a switch case... but that's a lot of repeating code...

 */

if (key === notes[key]) {
    for (var i=0;i=notes.length;i++){
        if (key===notes[i]){
            notes.shift(i+1).push(i-notes.length);
            var noNotes = [];
            noNotes = notes.slice(i-notes.length);

        }
        console.log(notes);
        console.log(noNotes);
    }
}

