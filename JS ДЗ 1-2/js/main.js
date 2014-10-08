// Урок 1;
//	confirm("ФИО: Иванов ИИ\nПол: м\nВозраст: 25\ne-mail: ivvan@mail.ru\n\nВсе верно?")

//Урок 2;
/*
var mark=0;
var question = new Array();
  question[0] = "Вопрос 1";
  question[1] = "Вопрос 2";
  question[2] = "Вопрос 3";
  question[3] = "Вопрос 4";

var answer = new Array();

for(var i = 0; i < question.length; i++)
  {
      answer[i] = confirm(question[i]);
  }

for(var i = 0; i < answer.length; i++)
{
  if(i==0 && answer[i]==0 || i==1 && answer[i]==1 || i==2 && answer[i]==0 ||i==3 &&answer[i]==1)
    mark++;
  
}

alert("Ваша оценка"+mark);
*/

var fio;
var Name ="", surname="", otchestvo="";
var simvol = new Array("1","2","3","4","5","6","7","8","9","0","!","@","#","$","%","^","&","*","(",")","-","=","_","+","/","?","|");
var f=0;




    fio = prompt ("Введите ФИО:","")
    var start=0, end=0;
    end = fio.indexOf(" ");
    if(end !=-1)
    {
        surname = fio.slice(start, end);
        start =end+1;
        end =fio.indexOf(" ", start);
        if(end !=-1)
        {
            Name = fio.slice(start, end);
            start = end+1;
            end= fio.length;
            otchestvo = fio.slice(start, end);
             for(var i=0; i<simvol.length; i++)
              {
                f = Name.indexOf(simvol[i]);
                if(f>=0)
                  break;
                else
                  f = surname.indexOf(simvol[i]);
                  if(f>=0)
                    break;
                  else
                    f = otchestvo.indexOf(simvol[i]);
                      if(f>=0)
                        break;
              }
        }
        else

          alert("некоректный ввод");
        
    }
    else
      alert("некоректный ввод");
    
    if(f>=0)
      alert("некоректный ввод");
    else
    {
      alert("name :"+Name);
      alert("surname :"+surname);
      alert("otchestvo :"+otchestvo);
    }
    
  



          