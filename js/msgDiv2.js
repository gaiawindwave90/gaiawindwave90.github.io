	var msgArr = new Array();
msgArr[0] = "Welcome to my world!";
msgArr[1] = "Down the hatch, sir.";
msgArr[3] = "¡Ay, caramba!";
msgArr[4] = "COWABUNGA!!!!";
msgArr[5] = "CONGA!";
msgArr[6] = "Hi-Diddily-Ho!";
msgArr[7] = "Worst Site Ever!!";
msgArr[8] = "Holy Christmas!";
msgArr[9] = "Holy cats, man! We're starting to wobble!";
msgArr[10] = "Nobody better lay a finger on my Butterfinger!";
msgArr[11] = "Hey! We are not wieners!";
msgArr[12] = "Hans Moleman Productions presents: Man Getting Hit By Football";
msgArr[13] = "DENTAL PLAN! Lisa needs braces!";
msgArr[14] = "EAT MY SHORTS!";
msgArr[15] = "Bart, eat your spinach.<br>No way!";
msgArr[16] = "Seymour! The house is on fire!<br>No mother, it's just the northern lights.";
msgArr[17] = "Aurora borealis? At this time of year, at this time of day, in this part of the country, localized entirely within your kitchen?!";
msgArr[18] = "Holy smokes! You need booze!"

	window.onload = function () {
		document.getElementById("msgDiv").innerHTML = msgArr[Math.floor(Math.random()*msgArr.length)];
	}