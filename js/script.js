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
      let click = this.classList.toggle('clicked');
      
    //3.
    if(click){
      box.innerHTML = [i];    
    } else{
      box.innerHTML= ' ';
    }
  })
  }
}
console.log(containerGame);
//3.



