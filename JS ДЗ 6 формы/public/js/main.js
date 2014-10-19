//ДЗ лекция 6
//В качестве домашнего задания вам предлагается "написать свой браузер"! В чем это будет заключаться? На web-странице 
//размещается 2 фрейма. В верхнем фрейме создать форму, обеспечивающую следующие возможности: 
//ввод адреса 
//загрузка страницы в нижний фрейм или новое окно 
//переход назад и вперед по истории страниц нижнего фрейма 
//повторная загрузка страницы в нижнем фрейме 


var site ='http://ukr.net';

function Open(){
	var f =document.getElementById("Check").checked;
	if(f){
		var text =document.getElementById("Input").value;
		window.open(site, '_blank');

	}
	else{
		var text =document.getElementById("Input").value;
		window.parent.frames["CONTENT"].location.href = text;

	}
	

	var text =document.getElementById("Input").value;
	window.parent.frames["CONTENT"].location.href = text;

}

function openBack(){
	history.back();
	return false;
}

function openPrev(){
	history.forward();
	return false;
}


	




   