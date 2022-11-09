let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")

// function btnClicked() {
// 	console.log("button clicked")
// }

inputBtn.addEventListener('click', function () {
	myLead.push(inputEl.value)
	console.log(myLead)
})
for (let i = 0; i < myLead.length; i++){
	console.log(myLead[i])
}