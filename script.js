console.log(localStorage);
console.log(localStorage.length);
	var score, clicks_all,
	max_all,image_all,
	reward_max_all,
	copy_reward_max_all,
	reward_max_auto,
	copy_reward_max_auto,
	max_auto,
	reward_max_power,
	copy_reward_max_power,
	max_power,
	buy_auto_all,
	kloun,plus,
	powerprice,
	autoprice;
	
if(localStorage.length == false) {
	setDefault();

} else {

	score = Number.parseFloat(localStorage.score);
	clicks_all = Number.parseFloat(localStorage.clicks_all);
	max_all = Number.parseFloat(localStorage.max_all);
	image_all = Number.parseFloat(localStorage.image_all);
	reward_max_all = Number.parseFloat(localStorage.reward_max_all);
	copy_reward_max_all = Number.parseFloat(localStorage.copy_reward_max_all);
	reward_max_auto = Number.parseFloat(localStorage.reward_max_auto);
	copy_reward_max_auto = Number.parseFloat(localStorage.copy_reward_max_auto);
	max_auto = Number.parseFloat(localStorage.max_auto);
	reward_max_power = Number.parseFloat(localStorage.reward_max_power);
	copy_reward_max_power = Number.parseFloat(localStorage.copy_reward_max_power);
	max_power = Number.parseFloat(localStorage.max_power);
	buy_auto_all = Number.parseFloat(localStorage.buy_auto_all);
	kloun = Number.parseFloat(localStorage.kloun);
	plus = Number.parseFloat(localStorage.plus);
	powerprice = Number.parseFloat(localStorage.powerprice);
	autoprice = Number.parseFloat(localStorage.autoprice);

}

document.getElementById("clicks_all").innerHTML = clicks_all;
document.getElementById("max_all").innerHTML = max_all;
document.getElementById("max_al").innerHTML = max_all;
document.getElementById("collect").innerHTML = ' $' + `${reward_max_all}`;
document.getElementById("collect").innerHTML = 'collect: $' + `${reward_max_all}`;
document.getElementById("collect_auto").innerHTML = 'collect: $' + `${reward_max_auto}`;
document.getElementById("collect_power").innerHTML = 'collect: $' + `${reward_max_power}`;
document.getElementById("max_auto").innerHTML = max_auto;
document.getElementById("max_power").innerHTML = max_power;
document.getElementById("copy_reward_max_power").innerHTML = copy_reward_max_power;

document.getElementById("auto").innerHTML = 'AutoClicker - $' + `${autoprice.toFixed(1)}`;
document.getElementById("power").innerHTML = 'Click power - $' + `${powerprice.toFixed(1)}`;
document.getElementById("auto_all").innerHTML = buy_auto_all;
document.getElementById("reward_max_power").innerHTML = ' $' + `${reward_max_power}`;
document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
document.getElementById("reward_max_auto").innerHTML = ' $' + `${reward_max_auto}`;
document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;

function myFunction() {

	score += plus;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	clicks_all += 1;
	document.getElementById("clicks_all").innerHTML = clicks_all;
	image_all = max_all - 1;
	// if (clicks_all == image_all){

	// 	document.getElementById("collect").style.visibility = "visible";
	// } else{
	// 	undefined;
	// }
	setLocalStorage();
	if (clicks_all == max_all){
		document.getElementById("collect").innerHTML = 'collect: $' + `${reward_max_all}`;
		document.getElementById("collect").style.visibility = "visible";
		max_all += 150;
		document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
		document.getElementById("collect").innerHTML = 'collect: $' + `${reward_max_all}`;
	} else {
		undefined;
	}

	document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
	document.getElementById("max_all").innerHTML = max_all;
	document.getElementById("max_al").innerHTML = max_all;
	let element = document.getElementById("moon");
	element.style.width = "580px";
	element.style.height = "580px";
	element.style.top = "calc(50% - 290px)";
	element.style.left = "calc(50% - 290px)";
	setTimeout(reset, 30);

	document.getElementById("reward_max_auto").innerHTML = ' $' + `${reward_max_auto}`;
}

function close_collect(){
	score += reward_max_all;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	document.getElementById("collect").style.visibility = "hidden";
	document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
	copy_reward_max_all++;
	if (copy_reward_max_all == 3){
		reward_max_all += 50;
		copy_reward_max_all = 0;
		document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
	} else{
		undefined;
	}
	document.getElementById("reward_max_all").innerHTML = '$' + `${reward_max_all}`;
	setLocalStorage();
}

function collect_auto(){
	score += reward_max_auto;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	document.getElementById("collect_auto").style.visibility = "hidden";
	document.getElementById("reward_max_auto").innerHTML = ' $' + `${reward_max_auto}`;
	copy_reward_max_auto++;
	document.getElementById("copy_reward_max_power").innerHTML = copy_reward_max_power;
	if (copy_reward_max_auto == 2){
		reward_max_auto += 75;
		copy_reward_max_auto = 0;
		document.getElementById("copy_reward_max_power").innerHTML = copy_reward_max_power;
		document.getElementById("collect_auto").innerHTML = ' $' + `${reward_max_auto}`;
	} else{
		undefined;
	}
	document.getElementById("reward_max_auto").innerHTML = '$' + `${reward_max_auto}`;
	setLocalStorage();
}

function collect_power(){
	score += reward_max_power;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	document.getElementById("collect_power").style.visibility = "hidden";
	document.getElementById("reward_max_power").innerHTML = ' $' + `${reward_max_power}`;
	reward_max_power += 25;

	document.getElementById("collect_power").innerHTML = ' $' + `${reward_max_power}`;
	document.getElementById("reward_max_power").innerHTML = '$' + `${reward_max_power}`;
	setLocalStorage();
}

function reset(){
	let element = document.getElementById("moon");
        element.style.width = "600px";
        element.style.height = "600px";
         element.style.top = "calc(50% - 300px)";
        element.style.left = "calc(50% - 300px)";
		setLocalStorage();
}

function power(){
	if (score >= powerprice){
		score -= powerprice;
		plus += 0.2;
		powerprice += 10;
		document.getElementById("power").innerHTML = 'Click power - $' + `${powerprice.toFixed(1)}`;

		document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
		copy_reward_max_power++;
		document.getElementById("copy_reward_max_power").innerHTML = copy_reward_max_power;
		if (copy_reward_max_power == max_power){
	  	document.getElementById("collect_power").innerHTML = 'collect: $' + `${reward_max_power}`;
	  	document.getElementById("collect_power").style.visibility = "visible";
	  	max_power += 3;
	  	document.getElementById("max_power").innerHTML = max_power;
	  	document.getElementById("reward_max_power").innerHTML = ' $' + `${reward_max_power}`;
	  	document.getElementById("collect_power").innerHTML = 'collect: $' + `${reward_max_power}`;
	  } else{
	  	undefined;
	  }

	} else{
		alert("You need more money!");
	}
}

function auto(){
	if (score >= autoprice){
		document.getElementById("reward_max_auto").innerHTML = '$' + `${reward_max_auto}`;
		score -= autoprice;
		buy_auto_all++;

		if (buy_auto_all == max_auto){
			document.getElementById("collect_auto").innerHTML = ' $' + `${reward_max_auto}`;
	  	document.getElementById("collect_auto").style.visibility = "visible";
	  	max_auto += 5;
	  	document.getElementById("max_auto").innerHTML = max_auto;
	  	document.getElementById("collect_auto").innerHTML = 'collect: $' + `${reward_max_auto}`;
	  } else{
	  	undefined;
	  }
	  document.getElementById("reward_max_auto").innerHTML = ' $' + `${reward_max_auto}`;
  	document.getElementById("auto_all").innerHTML = buy_auto_all;
		document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
		kloun += 0.5;
		if (autoprice == 25){
			plusik();
			document.getElementById("auto").innerHTML = 'AutoClicker - $' + `${autoprice.toFixed(1)}`;
			document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
		} else {
			null;
		}

		autoprice += 25;
		document.getElementById("auto").innerHTML = 'AutoClicker - $' + `${autoprice.toFixed(1)}`;
	}  else{
		alert("You need more money!");
	}
	setLocalStorage();
}

function plusik(){
	score += kloun;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	setTimeout(plusik, 1000);
	setLocalStorage();
}
if (autoprice > 25){
	plusik();
	document.getElementById("auto").innerHTML = 'AutoClicker - $' + `${autoprice.toFixed(1)}`;
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
}

function setLocalStorage(){

    localStorage.setItem("score", score);
	localStorage.setItem("clicks_all", clicks_all);
	localStorage.setItem("max_all", max_all);
	localStorage.setItem("reward_max_all", reward_max_all);
	localStorage.setItem("copy_reward_max_all", copy_reward_max_all);
	localStorage.setItem("reward_max_auto", reward_max_auto);
	localStorage.setItem("copy_reward_max_auto", copy_reward_max_auto);
	localStorage.setItem("max_auto", max_auto);
	localStorage.setItem("buy_auto_all", buy_auto_all);
	localStorage.setItem("reward_max_power", reward_max_power);
	localStorage.setItem("copy_reward_max_power", copy_reward_max_power);
	localStorage.setItem("max_power", max_power);
	localStorage.setItem("kloun", kloun);
	localStorage.setItem("plus", plus);
	localStorage.setItem("powerprice", powerprice);
	localStorage.setItem("autoprice", autoprice);

}

function setDefault(){
	score = 0;
    clicks_all = 0;
	max_all = 100;
	image_all= max_all - 1;
	reward_max_all = 50;
	copy_reward_max_all = 0;
	reward_max_auto = 75;
	copy_reward_max_auto = 0;
	max_auto = 5;

	reward_max_power = 25;
	copy_reward_max_power = 0;
	max_power = 3;
	buy_auto_all = 0;
	kloun = 0.5;
	plus = 1.0;
	powerprice = 50;
	autoprice = 25;
}





















function reload() {
	document.getElementById("score").innerHTML = '$' + `${score.toFixed(1)}`;
	document.getElementById("clicks_all").innerHTML = clicks_all;
	image_all = max_all - 1;
	// if (clicks_all == image_all){

	// 	document.getElementById("collect").style.visibility = "visible";
	// } else{
	// 	undefined;
	// }
	setLocalStorage();
	if (clicks_all == max_all){
		document.getElementById("collect").innerHTML = 'collect: $' + `${reward_max_all}`;
		document.getElementById("collect").style.visibility = "visible";
		max_all += 150;
		document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
		document.getElementById("collect").innerHTML = 'collect: $' + `${reward_max_all}`;
	} else {
		undefined;
	}

	document.getElementById("reward_max_all").innerHTML = ' $' + `${reward_max_all}`;
	document.getElementById("max_all").innerHTML = max_all;
	document.getElementById("max_al").innerHTML = max_all;
	let element = document.getElementById("moon");

	document.getElementById("reward_max_auto").innerHTML = ' $' + `${reward_max_auto}`;
}
