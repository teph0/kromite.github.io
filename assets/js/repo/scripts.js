
function save() {
	var cpuKey = document.getElementById('cpu').value;
	localStorage.setItem("text", cpuKey);
}

function retrieve() {
	var text = localStorage.getItem("text");
	document.getElementById('textDiv').innerHTML = text;
}
