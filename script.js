alert("Welcome To WebPage For University")


var username=prompt ("Enter Your ID student :")

console.log(username);

while (username > 100){
  alert ( "username is wrong ")
  username=prompt ("re-type your username correct")
}
 alert ("Welcome our students")




document.write ("<p style=color:red > Contact Us </p>")
 



 var x = prompt("how many times do you want to see logo unvirsity ?")

var starsFun = function () {
  var output='';
  var i = 0;
  while (i < x) {
    
   output = output +  "<img src='https://image.shutterstock.com/image-vector/king-writer-logo-template-illustration-260nw-1938777223.jpg' />"

   console.log(i,output)

    i++;
  }

  return output;

}
