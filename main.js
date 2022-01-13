var last_position_of_x,last_position_of_y;
var mouseevent="empty";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="black";
var width_of_line=1;
var radius=40;

canvas.addEventListener("mouseup",my_mouse_up);
function my_mouse_up(e){
    mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouse_leave);
function my_mouse_leave(e){
    mouseevent="mouseLeave";
}

canvas.addEventListener("mousedown",my_mouse_down);
function my_mouse_down(e){
    mouseevent="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("line_width").value;
    radius=document.getElementById("radius_of_circle").value;
}

canvas.addEventListener("mousemove",my_mouse_move);
function my_mouse_move(e){
    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;
    
    if(mouseevent=="mouseDown"){
        console.log("Current position of x and y cordinates =");
        console.log("x="+current_position_of_x+"y="+current_position_of_y);
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI)
        ctx.stroke();
    }
    last_position_of_x=current_position_of_x;
    last_position_of_y=current_position_of_y;
}