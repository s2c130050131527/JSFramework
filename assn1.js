function mousepos()
{

    var mousebox=document.getElementById("mouse1");
    mousebox.innerHTML="";
    var e=window.event;
    x=e.clientX;
    y=e.clientY;
    str="x :"+x+"<br>"+"y :"+y;
    var mousepar=document.createElement("p");
    mousepar.innerHTML=str;
    mousebox.appendChild(mousepar);
}