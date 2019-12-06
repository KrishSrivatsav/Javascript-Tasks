
function spam(){   
 var uname = document.getElementById("nam").value
 var uage = document.getElementById("age").value
  var ucountry = document.getElementById("con").value
  var ustate = document.getElementById("st").value
  var ucity = document.getElementById("city").value
//   var ugender=document.queryselector('input[name="Gender"]:checked').value
//   var umarital= document.queryselector('input[name="Marital Status"]:checked').value
    
var k=[];
k.push({
    Name:uname,
    Age:uage,
    Country:ucountry,
    State:ustate,
    City:ucity,
})


k.forEach(function(element){ 
document.getElementById("tbody").innerHTML+="<tr><td>"+element.Name+"</td>"+"<td>"+element.Age+"</td>"+"<td>"+element.Country+"</td>"+"<td>"+element.State+"</td>"+"<td>"+element.city+"</td></tr>"
}
)
}