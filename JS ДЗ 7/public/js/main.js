
//ДЗ 7 упражнение 1
// Напишите регулярное выражение и сценарий, выполняющий проверку корректности 
//ввода фамилии и инициалов пользователя в следующем виде: 
//Иванов И.И. либо Иванов ИИ


var fio = prompt("Введите ФИО", "Ivanov II");
var r = /\b[A-Z][a-z]+\s([A-Z]\.){2}\B/g;
var r1 =/\b[A-Z][a-z]+\s([A-Z]){2}\b/g;
var temp = fio.search(r);
var temp1 = fio.search(r1);
if(fio.search(r)!=-1 || fio.search(r1)!=-1)
  alert("ввод коректный");
else
  alert("ввод НЕ коректный");


//ДЗ 7 упражнение 2
//Напишите регулярное выражение и сценарий, выполняющий проверку корректности ввода 
//адреса электронной почты. Адрес электронной почты должен иметь следующий вид:
//login@host
//login - последовательность из букв, цифр и символов "-", начинающаяся с буквы. 
//Длинна - от 3 до 10 символов. 
//host - строка вида mail.ru или mail.odessa.ua и т.п. В конце host должен содержать 
//от 2 до 3 символов (ru, com, net, ua и пр.)  /[a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;


var temp = 0;
var temp1 = 0;
var email = prompt("Введите email", "Ivanov@ukr.net");
var r = /^[a-z,A-Z][a-z,A-Z,\d,-]{2,10}@([a-z]+\.){2}[a-z]{2,3}$/g;
var r1 = /^[a-z,A-Z][a-z,A-Z,\d,-]{2,10}@[a-z]+\.[a-z]{2,3}$/g;
temp = email.search(r);
temp1 = email.search(r1);
if(email.search(r)!=-1 || email.search(r1)!=-1)
  alert("ввод коректный");
else
  alert("ввод НЕ коректный");