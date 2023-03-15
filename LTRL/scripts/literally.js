var t = document.getElementsByTagName("p")[0].innerHTML
var i = t.indexOf("is")+ 3
var n = t.slice(0, i) + "literally " + t.slice(i)
document.getElementsByTagName("p")[0].innerHTML = n

