//1.
const containerGame = document.querySelector('.container');


//2.
  for(let i = 1; i <= 100; i++){
    let boxes = document.createElement('div');
    boxes.classList.add('square');
    console.log(boxes);
    containerGame.append(boxes);
  }
   