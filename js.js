var left = 0;
var mDown = 0;
var robot = document.getElementsByClassName('robot')[0];
var num = 0;
var elems = [];
var horizon = 0,vertical = 0;
for (var i = 1; i <= 25; i++) {
		elems[elems.length] = document.getElementById(i);
	}
function run(){
	var code = document.getElementById('code').value;
	code = code.toLowerCase();
	code = code.trim();
	code = code.split("\n");
	for (var i = 0; i < code.length; i++) {
		code[i] = code[i].trim();
	}
	if (code[0].trim() == 'нач' && code[code.length-1].trim() == "кон") {
		move:
		for (var i = 0; i < code.length; i++) {
			code[i] = code[i].trim();
			console.log(code[i]);
			if (code[i] == "вверх") {
				mTop();
			}			
			if (code[i] == "вниз") {
				down();
			}
			if (code[i] == "влево") {
				mLeft();
			}
			if (code[i] == "вправо") {
				right();
			}
			if (code[i] == "закрасить") {
				paint();
			}
			if (~code[i].indexOf("нц")) {
				for (var j = i; j < code.length; j++) {
					if (code[j].trim() == "кц") {
						end = 1;
						break;
					}
					else{
						end = 0;
					}
				}
				if (end) {
				var iter = parseInt(code[i].replace(/\D+/g,""));
				for (var z = 0; z < iter; z++) {
						while(code[i] != "кц") {
							i++;
								if (code[i] == "вверх") {
									mTop();
								}			
								if (code[i] == "вниз") {
									down();
								}
								if (code[i] == "влево") {
									mLeft();
								}
								if (code[i] == "вправо") {
									right();
								}
								if (code[i] == "закрасить") {
									paint();
								}
							}
							i = i - iter;
						}
						i = i + iter;
				}
				else{
					alert("Syntax error: нет \"кц\"");
					break move;
				}

			}
		}

	}
	else{
		alert("Syntax error");
	}


}
function paint(){
	position = horizon + vertical;
	elems[position].style.backgroundColor = "green";
}

function right(){
	if (left >= 488) {
		location.reload();
		alert("Робот разбился");
		location.reload();
	}
	else{
	horizon++;
	left += 122;
	}
	robot.style.left = left + "px";
}
function down(){
	if (mDown >= 488) {
		alert("Робот разбился");
		location.reload();
	}
	else{
	vertical = vertical + 5;
	mDown += 122;
	}
	robot.style.top = mDown + "px";
}
function mLeft(){
	if (left <= 0) {
		alert("Робот разбился");
		location.reload();
	}
	else{
	horizon--;
	left -= 122;
	}
	robot.style.left = left + "px";
}
function mTop(){
	if (mDown <= 0) {
		alert("Робот разбился");
		location.reload();
	}
	else{
	vertical = vertical - 5;
	mDown -= 122;
	}
	robot.style.top = mDown + "px";
}