

var currentImage = 0, count = 0;
var smollImg = new Array("public/images/pictures/8700.jpg", "public/images/pictures/8705.jpg", "public/images/pictures/9179.jpg", "public/images/pictures/9180.jpg", "public/images/pictures/9084.jpg", "public/images/pictures/9649.jpg");
        var img = new Array ();    

        // предзагрузка изображений галереи 
        for (var i=0; i < smollImg.length; i++) {
            img[i] = new Image (100, 75);
            img[i].src = smollImg[i];           
            img[i].onload = countImages();
        }

        // подсчет количества загруженных изображений 
        function countImages () {
            count++;
        }
        
        function nextImage(elem) {
            if (count != smollImg.length) {
                alert ("Дождитесь пожалуйста загрузки всех изображений!");
                return;
            }       
           var temp = elem.src;
           var first = temp.slice(0, temp.lastIndexOf("/")+1);
           var second = temp.slice(temp.lastIndexOf("/")+1);
           var IMG = document.getElementById("mainImg");
           IMG.src=first+"IMG_"+second;
            return false;
            }
