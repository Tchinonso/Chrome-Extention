let myLead = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
let ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

// function btnClicked() {
// 	console.log("button clicked")
// }

const leadFromLocalStorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadFromLocalStorage)

if (leadFromLocalStorage) {
	myLead = leadFromLocalStorage
	render(myLead)
}
inputBtn.addEventListener('click', function () {
	myLead.push(inputEl.value)
	localStorage.setItem("myLead", JSON.stringify(myLead))
	inputEl.value = ""
	render(myLead)
})


function render(lead) {
	let listItems = ""; //third method first create an empty strings
  for (let i = 0; i < lead.length; i++) {
    //first method
    //ulEl.textContent += myLead[i] + " "
    //ulEl.innerHTML += "<li>" + myLead[i] + "</li>"

    //second method
    //create an element
    //set text content
    //append to ul
    //  const li = document.createElement('li')
    //  li.textContent = myLead[i]
    //  ulEl.append(li)

    //third method
    //listItems += "<li><a target='_blank' href='" + myLead[i] + "'>" + myLead[i] + "</a></li>"
	  listItems += `
	  					<li>
	  						<a target='_blank' href='${lead[i]}'> 
									${lead[i]}
							</a>
						</li>
					`
  }
  ulEl.innerHTML = listItems;
}
deleteBtn.addEventListener("dblclick", function () {
	localStorage.clear()
	myLead = []
	render(myLead)
})

// const tabs = [
// 	{ url: "https://www.linkedin.com/in/Tchinonso/" },
// 	{url: "https://www.github.com/Tchinonso/"}
// ]

tabBtn.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // console.log(tabs[0].url)
    // console.log(tabs[1].url)
    myLead.push(tabs[0].url);
    //myLead.push(tabs[1].url);
    localStorage.setItem("myLead", JSON.stringify(myLead));
    render(myLead);
  })
	
})