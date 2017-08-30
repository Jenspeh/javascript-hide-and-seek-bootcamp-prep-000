function getFirstSelector(selector){
  var x = document.querySelector(selector)
  return x
}

function nestedTarget(){

var x = document.querySelector("#nested .target")
return x
}

function deepestChild(){
  var x = document.querySelector("#grand-node div div div div")
  return x
}

function increaseRankBy(n){
var x = document.getElementById('app').querySelectorAll('ul.ranked-list li')

var i;
for (i = 0; i< x.length; i++) {
  x[i].innerHTML = parseInt(x[i].innerHTML) + parseInt(n)


}


}
