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

//ДЗ лекция 4 часть 2.
//Используя изученные методы анимации объектов и обработки событий, напишите сценарий, вращающий 
//элемент вокруг текущего положения курсора мыши. Само собой разумеется, что при изменении 
//положения курсора, центр вращения так же должен смещаться следом за ним. 

	var R = 80,           // радиус окружности 
    a = 0,                // угол (в радианах) 
    da = 3*Math.PI/180,   // приращение угла 
    delay = 30;           // задержка (в мсек.) 
    x = 100;			  //координаты курсора
    y = 100;					
    
    var t = setInterval ("moveElem()", delay); // периодический вызов функции движения 

    // функция движения элемента 
    function moveElem() {
    	// изменение координат элемента 
        document.getElementById("elemToMove").style.left = x + R*Math.cos(a);
        document.getElementById("elemToMove").style.top  = y + R*Math.sin(a);    
        //изменение угла
        a+=da;
    }
        
     //получение координат курсора  
  	document.onmousemove = function(e) {
   		x = e.clientX;
    	y = e.clientY;
   	}

		
	

		
		