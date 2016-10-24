function fixTime (time) {
	return (time<10?'0':'') + time;
}

function addZero (string) {
	if (string.length === 1) {
		return ('0' + string);
	} else {
		return string;
	}
}

function whatTime () {	
	var d = new Date(),
		h = d.getHours(),
		m = d.getMinutes(),
		s = d.getSeconds();

		if (h > 12) {
			h -= 12;
		}

	var time = fixTime(h) + ':' + fixTime(m) + ':' + fixTime(s),
		h = h.toString(16).toUpperCase(), 
		m = m.toString(16).toUpperCase(),
		s = s.toString(16).toUpperCase(),
		newColor = addZero(h) + addZero(m) + addZero(s),
		color = '#' + newColor;
 	$('#clock').text(time);
 	$('html').css('background-color', color);
}

setInterval(whatTime, 200);