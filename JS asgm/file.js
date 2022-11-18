document.write("Hello World");  

//JavaScript Comment

//JavaScript Single line Comment
<script>  
// It is single line comment  
document.write("hello javascript");  
</script>  

//JavaScript Multi line Comment
<script>  
/* It is multi line comment.  
It will not be displayed */  
document.write("example of javascript multiline comment");  
</script>  


//JavaScript If else Statement 
var a=20;  
if(a%2==0){  
document.write("a is even number");  
}  
else{  
document.write("a is odd number");  
}  

//Javascript Switch statement 
var grade='B';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
document.write(result);  

//JavaScript for loop
for (i=1; i<=5; i++)  
{  
document.write(i + "<br/>")  
}  

//JavaScript while loop
var i=11;  
while (i<=15)  
{  
document.write(i + "<br/>");  
i++;  
}  

//JavaScript do while loop
var i=21;  
do{  
document.write(i + "<br/>");  
i++;  
}while (i<=25);  


//JavaScript function
<script>  
function msg(){  
alert("hello! this is message");  
}  
</script>  
<input type="button" onclick="msg()" value="call function"/>  

//JavaScript Object
emp={id:102,name:"Shyam Kumar",salary:40000}  
document.write(emp.id+" "+emp.name+" "+emp.salary);  


//JavaScript array literal
var emp=["Sonoo","Vimal","Ratan"];  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br/>");  
}  

//JavaScript Array directly (new keyword)
var i;  
var emp = new Array();  
emp[0] = "Arun";  
emp[1] = "Varun";  
emp[2] = "John";  
  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br>");  
}  


//JavaScript array constructor (new keyword)
var emp=new Array("Jai","Vijay","Smith");  
for (i=0;i<emp.length;i++){  
document.write(emp[i] + "<br>");  
}  

//JavaScript String

//By string literal
var str="This is string literal";  
document.write(str);  

//By string object (using new keyword)
var stringname=new String("hello javascript string");  
document.write(stringname);  