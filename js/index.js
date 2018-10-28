//open modal button
var modalopen = document.getElementById('openModal');
//close modal button
var modalclose = document.getElementById('closemodal');
//modal itself
var modal = document.getElementById('modal');

//open modal

modalopen.addEventListener('click', modalOpen);
//close modal
modalclose.addEventListener('click', modalClose);
//close by clicking outside the modal
window.addEventListener('click', outsideClick);

//function to open modal
function modalOpen(){
  modal.style.display = "block";
}

//function to close modal
function modalClose(){
  modal.style.display = "none";
}

//function for outside the modal close
function outsideClick(e){
  if(e.target == modal){
  modal.style.display = 'none';
}
}