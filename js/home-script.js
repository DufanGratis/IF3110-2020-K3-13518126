function darkMode() {
	document.documentElement.style.setProperty('--fontcolor1', '#ffffff');
	document.documentElement.style.setProperty('--fontcolor2', '#5a86c9ce');
	document.documentElement.style.setProperty('--bgcolor1', '#000000d0');
	document.documentElement.style.setProperty('--bgcolor2', '#18273ac5');
	document.documentElement.style.setProperty('--color', '#3f3f3fb7');
	document.getElementById("contact1").style.filter="invert(100%)";
	document.getElementById("contact2").style.filter="invert(100%)";
	document.getElementById("contact3").style.filter="invert(100%)";
	document.getElementById("about1").style.filter="invert(100%)";
	document.getElementById("about2").style.filter="invert(100%)";
	document.getElementById("about3").style.filter="invert(100%)";
	localStorage.setItem("mode", 1);
}

function lightMode() {
	document.documentElement.style.setProperty('--fontcolor1', '#000000');
	document.documentElement.style.setProperty('--fontcolor2', '#30a1a1d0');
	document.documentElement.style.setProperty('--bgcolor1', '#ffffff');
	document.documentElement.style.setProperty('--bgcolor2', '#a7f1e5a6');
	document.documentElement.style.setProperty('--color', '#e6e6e6b7');
	document.getElementById("contact1").style.filter="invert(0)";
	document.getElementById("contact2").style.filter="invert(0)";
	document.getElementById("contact3").style.filter="invert(0)";
	document.getElementById("about1").style.filter="invert(0)";
	document.getElementById("about2").style.filter="invert(0)";
	document.getElementById("about3").style.filter="invert(0)";
	localStorage.setItem("mode", 0);
}

if (localStorage.getItem("mode") == 1) {
	darkMode();
}
else {
	lightMode();
}

function changeColor() {
	if (localStorage.getItem("mode") == 0) {
		darkMode();
	}
	else {
		lightMode();
	}
}