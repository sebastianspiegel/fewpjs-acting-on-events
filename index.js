// Your code here
let dodger = document.getElementById("dodger"); 


// Move left 
function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 5}px`;
    }
} 

// Move right
function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left < 360) {
      dodger.style.left = `${left + 5}px`;
    }
} 

//Move up
function moveDodgerUp() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom < 380) {
      dodger.style.bottom = `${bottom + 5}px`;
    }
} 

//Move down
function moveDodgerDown() {
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
  
    if (bottom > 0) {
      dodger.style.bottom = `${bottom - 5}px`;
    }
} 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight"){
        moveDodgerRight();
    }
    if (e.key === "ArrowUp"){
        moveDodgerUp();
    }
    if (e.key === "ArrowDown"){
        moveDodgerDown();
    }
});