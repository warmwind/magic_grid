$(document).ready(function() {
    var t=setInterval("displayTime()",1000);
});

t=10
function displayTime()
{
    if(t >0 )
    {
       document.getElementById("time").innerHTML= t--
       return;
    }
    document.getElementById("time").innerHTML= "Time is up!!"
}


$(document).ready(function() {
    $("td").click(function(){
		alert(this.innerHTML);
})
});
