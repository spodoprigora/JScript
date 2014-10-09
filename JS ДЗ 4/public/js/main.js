//ДЗ лекция 4 часть 1.
//Используя объект Date(), создайте "продвинутые" электронные часы, которые отображали 
//бы не только текущее время, но и дату, день недели и т.п. Оформление продумайте на свой вкус. 



    var days = new Array ("воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота");
    updateClock (); // начальная установка часов при старте    
    var t = setInterval ("updateClock()", 1000); // периодическое обновление 
        
	function format (n){
        return n<10 ? "0"+n : n;
    }
	
	function formatDay (n){
		return days[n];
	}
        
    function updateClock () {
        var d = new Date ();
        var dateStr = format(d.getHours())+":"+format(d.getMinutes())+":"+format(d.getSeconds())+
			" Дата: "+format(d.getDate())+" "+formatDay(d.getDay());
		document.getElementById("clock").innerHTML =dateStr;
	}

	
	
	

		
		