/* This is javaScript page*/


/*function printTime(){
	var d=new Date();
	document.getElementById("date").innerHTML=d;						//can print date to your page.
}
setInterval(printTime,1000);*/


//hover change color--------------------------------------------------

var x=document.getElementById("intro");
x.onmouseover=function(){
	x.style.color="white";
}
x.onmouseout=function(){
	x.style.color="#a5df00";
}

//setting visibilty of header name---------------------------------------

x.style.visibility="hidden";
function display(){
		x.style.visibility="visible";
}
var t=setTimeout(display,3500);


//resume alert---------------------------------------------------------------

document.getElementById("resume_img").onclick=function(){
	alert("Resume Will be uploaded soon!");
}


