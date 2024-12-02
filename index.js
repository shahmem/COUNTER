let count = 0;
function counternum() {
   document.getElementById('num').textContent=count; 
} 

function increamentcounter(){
count ++;
counternum();
}
function decreamentcounter(){
count --;
counternum();
}
function resetcounter(){
count = 0;
counternum();
}

