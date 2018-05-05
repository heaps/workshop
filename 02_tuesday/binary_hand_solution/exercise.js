function convert(){
	number = Number(document.getElementById('number').value);
	binary();
}

function turnOn(number){
	if (number<16) number = '0' + number;
	var image = number + '_on.png';
	var id    = 'position_' + number;
	document.getElementById(id).src = image;
}

function turnOff(number){
	if (number<16) number = '0' + number;
	var image = number + '_off.png';
	var id    = 'position_' + number;
	document.getElementById(id).src = image;
}

window.onload = function(){

	var palm = document.createElement("img");
	palm.src = "palm.png";
	palm.id = "palm";
	palm.style.left = "100px";
	palm.style.top = "270px";

	var img01 = document.createElement("img");
	img01.src = "01_on.png";
	img01.id = "position_01";
	img01.style.left = "440px";
	img01.style.top = "285px";

	var img02 = document.createElement("img");
	img02.src = "02_on.png";
	img02.id = "position_02";
	img02.style.left = "350px";
	img02.style.top = "50px";

	var img04 = document.createElement("img");
	img04.src = "04_on.png";
	img04.id = "position_04";
	img04.style.left = "250px";
	img04.style.top = "5px";

	var img08 = document.createElement("img");
	img08.src = "08_on.png";
	img08.id = "position_08";
	img08.style.left = "111px";
	img08.style.top = "40px";

	var img16 = document.createElement("img");
	img16.src = "16_on.png";
	img16.id = "position_16";
	img16.style.left = "5px";
	img16.style.top = "120px";	

	var button = document.createElement("BUTTON"); 
	button.style.left = "50px";
	button.style.top = "650px";
	button.onclick = convert;
	button.innerHTML = 'submit';

	var input = document.createElement("input");
	input.id = 'number';
	input.setAttribute('type', 'text');
	input.style.left = '200px';
	input.style.top = '650px';

	var style = document.createElement("STYLE");
	var hand = document.createTextNode("img,button,input {position:absolute; font-size:2em}");
	style.appendChild(hand);
	document.head.appendChild(style);

	// Then append the whole thing onto the body
	document.getElementsByTagName('body')[0].appendChild(palm);	
	document.getElementsByTagName('body')[0].appendChild(img01);
	document.getElementsByTagName('body')[0].appendChild(img02);
	document.getElementsByTagName('body')[0].appendChild(img04);
	document.getElementsByTagName('body')[0].appendChild(img08);
	document.getElementsByTagName('body')[0].appendChild(img16);
	document.getElementsByTagName('body')[0].appendChild(input);
	document.getElementsByTagName('body')[0].appendChild(button);


	// <img id="palm" src='palm.png' style="left:100px; top:270px;" >
	// <img id="position_01" src='01_on.png' style="left:440px; top:285px;">
	// <img id="position_02" src='02_on.png' style="left:350px; top:50px;">
	// <img id="position_04" src='04_on.png' style="left:250px; top:5px;">
	// <img id="position_08" src='08_on.png' style="left:111px; top:40px;">
	// <img id="position_16" src='16_on.png' style="left:5px; top:120px;" >
	// <button style="left:50px;top:650px;" onclick="convert()">convert</button>
	// <input type="text" id="number" style="left:200px; top:650px; ">

};