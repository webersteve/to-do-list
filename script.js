var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

// ******JUST SHOWING HOW TO ADD ATTRIBUTES TO EXSITING ELEMENTS******

// addClass();

// function addClass(){
// 	var li = document.querySelectorAll("li");
// 	for (var i = 0;i <= 5;i++) {
// 		li[i].classList.add("funky");
// 	}	
// }

// ******JUST SHOWING HOW TO ADD ATTRIBUTES TO EXSITING ELEMENTS******

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newLi = document.createElement("li");
	var newButton = document.createElement("button");
	var newSpan = document.createElement("span");
	newSpan.appendChild(document.createTextNode(input.value));
	newButton.appendChild(document.createTextNode("Delete"));
	ul.appendChild(newLi);
	newLi.appendChild(newSpan);
	newLi.appendChild(newButton);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0){
		createListElement();
	}
}

function addListAfterKeydown(event) {
	if (inputLength() > 0 && event.which === 13){
		createListElement();
	}
}

function deleteCrossOff(element) {
	if (document.activeElement.nodeName === "BUTTON") {
		document.activeElement.parentNode.remove();
	} else if (element.target.tagName === "SPAN") {
		element.target.classList.toggle("done");
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterKeydown);

ul.addEventListener("click", deleteCrossOff);
