window.addEventListener("load", function(){
    let changepic = document.getElementById("changeImage");
    let changepic2 = document.getElementById("changeImage2");
    let changepic3 = document.getElementById("changeImage3");

    changepic.addEventListener("click", changeImage1);
    changepic2.addEventListener("click", changeImage2);
    changepic3.addEventListener("click", changeImage3);
    changepic.addEventListener('click',userEnterTime);
    changepic2.addEventListener("click",userEnterTime);
    changepic3.addEventListener("click",userEnterTime);
})


let count = 0;
const imageList = [ "triangle.png", "circle.webp", "hexagon.jpg", "instagram.webp", "facebook.png", "twitter.png", "cars1.jpg", "cars2.webp", "cars3.webp"]
const randomImageForRandomizatoion1 = Math.floor(Math.random() * imageList.length);
const randomImageForRandomizatoion2 = Math.floor(Math.random() * imageList.length);
const randomImageForRandomizatoion3 = Math.floor(Math.random() * imageList.length);
let currentIndex = 0;


function changeImage1() {
    const randomImage1 = Math.floor(Math.random() * imageList.length);
    let node = document.getElementById("changeImage");
    node.src = imageList[randomImage1];
    count = count + 1;
    counter();
}

function changeImage2() {
    const randomImage2 = Math.floor(Math.random() * imageList.length);
    let node2 = document.getElementById("changeImage2");
    node2.src = imageList[randomImage2];
    count = count + 1;
    counter();
}

function changeImage3() {
    const randomImage3 = Math.floor(Math.random() * imageList.length);
    let node3 = document.getElementById("changeImage3");
    node3.src = imageList[randomImage3];
    count = count + 1;
    counter();
}

function randomizeButton(){
     changeImage1();
     changeImage2();
     changeImage3();
     userEnterTime();   
     
}


function do_animation( event ) { 
    target = event.srcElement; 
    target.classList.remove('animation'); 
    setTimeout( () => {target.classList.add('animation');}, 0 ); 
} 


let timeInput1;
let timeInput2;
let timeInput3;
let display_Time;
let display_Time2;
let function_Time;
let a;
let b;
function userEnterTime() {
    clearInterval(timeInput1);
    clearInterval(timeInput2);
    clearInterval(timeInput3);

    userInputTime = document.getElementById("timeInput");
    timeOutput = document.getElementById("timeOutput");

    let requiredTime = parseInt(userInputTime.value);

    if( isNaN(requiredTime) ) {
        timeOutput.innerHTML = "Enter a valid number.";
    }
    else{
        if( requiredTime >= 500 && requiredTime <= 10000){
            clearInterval(timeInput1);
            clearInterval(timeInput2);
            clearInterval(timeInput3);
            clearInterval(function_Time);
            timeInput1 = setInterval(changeImage1, requiredTime);
            timeInput2 = setInterval(changeImage2, requiredTime);
            timeInput3 = setInterval(changeImage3, requiredTime);
            display_Time = requiredTime;
            display_Time2 = requiredTime;
            a = (requiredTime * 2)/3;
            b = requiredTime / 3;
            function_Time = setInterval(function timeChange() {
             out_time = document.getElementById("timer");
             out_time.innerHTML = (display_Time / 1000).toFixed(1) + "s";
             display_Time -= 100;
             if (display_Time >= a){
                out_time.style.background = "green";
             }else if(display_Time >= b){
                out_time.style.background = "yellow";
             }
             else{
                out_time.style.background = "red";
             }
             if(display_Time == 0){
                clearInterval(function_Time);
                display_Time = display_Time2;
                function_Time = setInterval(timeChange,100);
             }   
            }, 100);
        }
        else{
            timeOutput.innerHTML = "Enter a number within range.";
        }
    }
}      



function counter(){
    document.getElementById("counter").innerHTML = count;
}


