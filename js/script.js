//1.
const containerGame = document.querySelector('.container');

addBoxes();

//2.
function addBoxes (){
  for(let i = 1; i <= 100; i++){
    let box = document.createElement('div');
    box.classList.add('square');
    containerGame.append(box);
    //4.
    box.addEventListener('click', function() {
      this.classList.toggle('clicked');

    //3.
      box.innerHTML = [i];    
  })
  }
}
console.log(containerGame);
//3.



