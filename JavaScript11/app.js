// const newWord = document.getElementById("seven").innerHTML = "Hello"


	// let another = document.getElementsByClassName("list"); 
	// for(let i = 0; i < another.length; i++){
	//     another[i].style.color = "blue";
	// }

let btn = document.getElementById("btn");
const header = document.querySelector(".naziv_klase") 
const listItems = document.getElementsByClassName("list");
const listItems = document.getElementsByTagName("li");

const click = () => {
    for(let i = 0; i < listItems.length; i++){
        listItems[i].style.color = "red";
    }
}

btn.addEventListener("click", click)

const header = document.querySelector(".naziv_klase") 


  



