var textin = 'KZKVI QZN WRKKVI HZBH: \'ZFFTSDCJSTZWHZWFS!\' / V. KOFIRYFH GIVNYOVB / MLG S.T. DVOOH ZKKILEVW / HLIIB, WRKKVI, YFG BLFI DVMWB RH RM ZMLGSVI XZHGOV. / GSV RMERHRYOV DRAZIW RH DZGXSRMT. / YILFTSG GL BLF YB SLNVDLIP: GSV XZMWB / SVZEB RH GSV SVZW GSZG DVZIH GSV UVA / eswfup rif dps vlojtsys // dps kwj / tiasedwofe / oe bsfy / ulsbsf // uwj ps / pots poe / hlwse / rifsbsf? // dps kwj / tiajedwofe / oe bsfy / ulsbsf // uwj ps / pots poe / hlwje / rifsbsf? // okhfihsf / ces ir / kwupojsfy / uiclt // lswt / di cddsf / uwdwedfihps';
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// runs on page load using jQuery
$(function(){
	// puts the title and input text on the page using jQuery
	$('body').append('<h1>Atbash</h1>');
	$('h1').after('Text in: <div id="in">' + textin + '</div>');
	// we will put this together letter by letter
	var textout = '';
	// goes through each letter in the input text
	for(var i = 0; i < textin.length; i++){
		// current letter
		var letter = textin[i];
		// the index of the current letter in the alphabet
		var positionInAlphabet = alphabet.indexOf(letter.toLowerCase());
		if(positionInAlphabet > -1){
			// SWITCH A AND Z
			var newPosition = alphabet.length-1 - positionInAlphabet;
			// adds the new letter to the output
			textout += alphabet[newPosition];
		} else {
			// indexOf returns -1 when there is no match
			// i.e. the character is a space, punctuation etc and should not be modified
			textout += letter;
		}
	}
	// inserts the output text onto the page using jQuery
	$('#in').after('Text out: <div id="out">' + textout + '</div>');
});
