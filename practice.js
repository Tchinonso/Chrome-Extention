let box = document.getElementById("box")

box.addEventListener('click', function () {
	console.log("i want to open the box")
})
let container = document.getElementById("container")
container.innerHTML += "<button onclick='buy()'>Buy</button>"

function buy() {
	container.innerHTML += "<p>thank you for buying</p>"
}

//template strings/literals
const recipient = "James"
//create a new v sender and set it to my name
const sender = `Tchinonso don`
//use your sender v instead of peers
//const email = "hey " + recipient + "! how is it going? cheers peers"
//break the email strings into multiple lines
const email = `hey ${recipient}! how is it going? cheers ${sender} //peers`
console.log(email)

//myLead is a string now
let myLead = `["www.lead1.com"]`
console.log(myLead)
//turned the string back to an array
myLead = JSON.parse(myLead)
console.log(myLead)
//turn the array into a string again
myLead = JSON.stringify(myLead)
console.log(myLead)
//check the type of data myLead
console.log(typeof myLead)

// localStorage.clear()
// localStorage.setItem()
// localStorage.getItem()

const hello = document.getElementById("hello")

function user(greeting, name) {
	hello.textContent = `${greeting}, ${name}🙌`
}
user('hello','chief')