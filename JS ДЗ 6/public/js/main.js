//ДЗ лекция 6
//В качестве домашнего задания вам предстоит создать (спокойно!) фотогалерею. На главной 
//странице должен содержаться список изображений. При щелчке левой кнопки мыши на миниатюре 
//в списке, увеличенное изображение загружается в новом окне, которое не содержит никаких 
//элементов управления, кроме стандартных (заголовок и рамки). Размеры окна подберите 
//экспериментально, при условии, что все изображения должны иметь одинаковый размер, 
//например - 400х300 px.
//При наведении на изображение в списке курсора мыши, в строке состояния должна отображаться 
//информация об увеличенном изображении - имя файла, его размеры и объем в килобайтах 
//(приближенно), например: picture001.jpg (400x300, 0.230К). 

	var win;     

 	function createWindow(elem)
 	{
 		if(win)
 		{
 			alert("window open");
 			return false;
 		}
 		win=window.open('', '', 'width=500, height=375, toolbar = no, menubar = no, status = no, location = 0, left = 300, top = 300');
		var temp = elem.src;
		var url = temp.slice(temp.lastIndexOf(".")-1);
		win.document.write('<img src="public/images/pictures/'+url+'" alt="ктевское море">');
		win.focus();
		
 		return false;
	}

function setStatus(elem){
 var imgName = elem.src.slice(elem.src.lastIndexOf("/")+1);  
 var width = elem.width;
 var height = elem.height;
 var size = "3.2 Mб";
 var str = imgName + " (" + width + "x" + height +", " +size +")";
 status =str;
  return true;
 }

function resetStatus(){
  status='';
  return true;
}




   