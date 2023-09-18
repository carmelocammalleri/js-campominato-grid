//1.
const containerGame = document.querySelector('.container');
addBoxes();

//2.
function addBoxes (){
  for(let i = 1; i <= 100; i++){
    let boxes = document.createElement('div');
    boxes.classList.add('square');
    containerGame.append(boxes);

    //4.
    boxes.addEventListener('click', function() {
      this.classList.toggle('clicked');
    })
  }
  
}
console.log(containerGame);

