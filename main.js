canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
background_image="racing.jpg";
car1_width=120;
car1_height=90;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=90;
car2_image="car2.png";
car2_x=10;
car2_y=100;
function add()
{
    background_img=new Image();
    background_img.onload=uploadBackground;
    background_img.src=background_image;
    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1_image;
    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2_image;
}
function uploadBackground()
{
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_img,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2()
{
    ctx.drawImage(car2_img,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);
    if(keypress=="38")
    {
        car1_up();
        console.log("up");
    }
    if(keypress=="40")
    {
        car1_down();
        console.log("down");
    }
    if(keypress=="37")
    {
        car1_left();
        console.log("left");
    }
    if(keypress=="39")
    {
        car1_right();
        console.log("right");
    }
    if(keypress=="78")
    {
        car2_up();
        console.log("key n");
    }
    if(keypress=="83")
    {
        car2_down();
        console.log("key s");
    }
    if(keypress=="87")
    {
        car2_left();
        console.log("key w");
    }
    if(keypress=="69")
    {
        car2_right();
        console.log("key e");
    }
    if(car1_x > 700) { 
        console.log("car1"); 
    document.getElementById('game_status').innerHTML = "Car 1 Won!!"; 
} 
else if(car2_x > 700) 
{ console.log("car2"); 
    document.getElementById('game_status').innerHTML = "Car 2 Won!!"; 
}
}
function car1_up() { 
    if(car1_y >=0) {
         car1_y = car1_y - 10;
          console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car1_down() { 
    if(car1_y <=500) {
         car1_y = car1_y + 10;
          console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car1_left() { 
    if(car1_x >=0) {
         car1_x = car1_x - 10;
          console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car1_right() { 
    if(car1_x <=700) {
         car1_x = car1_x + 10;
          console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car2_up() { 
    if(car2_y >=0) {
         car2_y = car2_y - 10;
          console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car2_down() { 
    if(car2_y <=500) {
         car2_y = car2_y + 10;
          console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car2_left() { 
    if(car2_x >=0) {
         car2_x = car2_x - 10;
          console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
function car2_right() { 
    if(car2_x <=700) {
         car2_x = car2_x + 10;
          console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y); 
         uploadBackground();
 uploadcar1(); 
 uploadcar2();
 } 
}
