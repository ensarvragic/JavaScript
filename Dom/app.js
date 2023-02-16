// DOM u JavaScriptu oznacava Document Object Model, sto je standardna reprezentacija HTML ili XML documenta.

// getElementById -> uzima element iz HTML po ID
const paragraf = document.getElementById("test").innerHTML = "Hellooo"

// getElementByClassName -> uzima element iz HTML-A po Class
const header = document.getElementsByClassName("demo").style.color = "green"

// getElementByClassName -> uzima element iz HTML-A po tagu
const test = document.getElementsByTagName("h1")

// src -> samo promeni vrednost, slika se ubacuje u HTML
const slika = document.getElementById("myImage").src = "download.jpg"