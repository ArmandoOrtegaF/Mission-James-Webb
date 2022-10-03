var game = document.querySelector(".game");
var basket = document.querySelector(".basket");
var rays = document.querySelector(".rays");
var basketLeft = parseInt(window.getComputedStyle(basket).getPropertyValue("left"));
var basketBottom = parseInt(window.getComputedStyle(basket).getPropertyValue("bottom"));
var score = 0;




function moveBasketLeft(){
    if (basketLeft > 0) {
    basketLeft -= 15;
    basket.style.left = basketLeft + 'px';
    }
}

function moveBasketRight(){
    if(basketLeft < 620) {
    basketLeft += 15;
    basket.style.left = basketLeft + 'px';
    }
}

function control(e){
    if (e.key == "ArrowLeft"){
        moveBasketLeft();
    }
    if (e.key == "ArrowRight"){
        moveBasketRight();
    }
}

function generateRays(){
    var rayBottom = 470;
    var rayLeft = Math.floor(Math.random()*620);
    var ray = document.createElement('div');
    ray.setAttribute("class", "ray bg-img-red");
    rays.appendChild(ray);
    function fallDownRay(){
        if(rayBottom < basketBottom + 50 && rayBottom > basketBottom && rayLeft > basketLeft-30 && rayLeft < basketLeft + 80){
            rays.removeChild(ray);
            clearInterval(fallInterval);
            score ++;
            document.getElementById("score").innerHTML = "\nCaptured light: " + score;
        }
        if(rayBottom < basketBottom){
            rays.removeChild(ray);
            clearInterval(fallInterval);
        }
        if(score == 5){
            document.getElementById("score").innerHTML = "You did it!\nCaptured 5 infra-red light: " + score;
            clearTimeout(rayTimeout);
            
        }
        rayBottom -= 2.5;
        ray.style.bottom = rayBottom + 'px';
        ray.style.left = rayLeft + 'px';
    }
    var fallInterval = setInterval(fallDownRay, 10);
    var rayTimeout = setTimeout(generateRays, 2000);
    
}

generateRays();

document.addEventListener("keydown", control);