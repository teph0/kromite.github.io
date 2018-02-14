$(function () {
	$("#cpanel").dblclick(function() {
		var pwd = prompt("Password: ");
		if (pwd == null || pwd == "") {
			alert("Error - Nothing was entered.");
		} else if (pwd == "alpine") {
			window.location.href=""; //Add control panel here
		} else {
			alert("Error - Wrong password.");
		}
	});
});

var currentInnerHtml;
var element = new Image();
var elementWithHiddenContent = document.querySelector("#hide");
var innerHtml = elementWithHiddenContent.innerHTML;

element.__defineGetter__("id", function() {
	currentInnerHtml = "";
});

setInterval(function() {
	currentInnerHtml = innerHtml;
	console.log(element);
	console.clear();
	elementWithHiddenContent.innerHTML = currentInnerHtml;
}, 1000);

function save() {
	var cpuKey = document.getElementById('cpu').value;
	localStorage.setItem("text", cpuKey);
}

function retrieve(){
	var text = localStorage.getItem("text");
	document.getElementById('textDiv').innerHTML = text;
}

var github = window.top.href="";
var youtube = window.top.href="";
var ttg = window.top.href="";
