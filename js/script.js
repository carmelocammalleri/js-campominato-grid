//1.
const containerGame = document.querySelector('.container');
addBoxes();

//2.
function addBoxes (){
  for(let i = 1; i <= 100; i++){
    let boxes = document.createElement('div');
    boxes.classList.add('square');
    console.log(boxes);
    containerGame.append(boxes);
  }
}
   