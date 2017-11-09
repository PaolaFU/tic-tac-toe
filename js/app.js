window.onload = function(){
    var board = document.querySelector ('.board-js');
    board.addEventListener('click', addX);

    document.getElementById('reset').addEventListener('click', reset);

    board.addEventListener('dblclick', function(event) {
        event.target.style.backgroundColor = 'blue';
      });
     
};

var centinel = true;
function addX(event) {
 if (event.target.matches('td') && event.target.textContent === '') {
   if (centinel) {
     event.target.textContent = 'x';
   } else {
     event.target.textContent = '0';
   }
   centinel = !centinel;
 }
}


function reset() {
    window.location.reload();
  }