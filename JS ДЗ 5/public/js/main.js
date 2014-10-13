//ДЗ лекция 5 
//Реализовать сценарий, выполняющий переадресацию пользователя на случайно
// выбранный из массива адрес. Массив должен хранить не менее 10 адресов. 
//Для каждого адреса напишите html страницу с рекламным объявлением. 


var arr =new Array("advertisement1.html", "advertisement2.html", "advertisement3.html",
                     "advertisement4.html", "advertisement5.html", "advertisement6.html", 
                     "advertisement7.html", "advertisement8.html", "advertisement9.html", "advertisement10.html" );
   
function newpage(){
    var i = Math.floor(Math.random()*10);
    location.href =arr[i];	
	}
