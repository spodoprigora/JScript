

var fio = prompt("Введите ФИО", "Ivanov II");
var r = /\b[A-Z][a-z]+\s([A-Z]\.){2}\B/g;
var r1 =/\b[A-Z][a-z]+\s([A-Z]){2}\b/g;
var temp = fio.search(r);
var temp1 = fio.search(r1);
if(fio.search(r)!=-1 || fio.search(r1)!=-1)
  alert("ввод коректный");
else
  alert("ввод НЕ коректный");

//login@host
//var r = /\b[a-z,A-Z][a-z,A-Z,\d,-]{2,10}@([a-z]+\.){2}[a-z]{2,3}/;
//var r1 = /\b[a-z,A-Z][a-z,A-Z,\d,-]{2,10}@[a-z]+\.[a-z]{2,3}/;