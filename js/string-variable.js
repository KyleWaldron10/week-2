//create variables to hold the name and note text.
var username;
var message;

//assign values to these variables.
username = 'Molly';
message = 'See our upcoming range';

//get the element with an id of name.
var elname = document.getelemenbyid('name');
// replace the content of this element.
elname.textcontent = username;

// get the element with an id of note
var elnote = document.getelementbyid('note')
//replace the content of this elemrnt.
elnote.textcontent = message;