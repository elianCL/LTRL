var t = document.getElementsByTagName("p")[0].innerHTML
var i = t.indexOf("é")+ 2
var n = t.slice(0, i) + "literalmente " + t.slice(i)
document.getElementsByTagName("p")[0].innerHTML = n

