export function clickEvents(){
  document.getElementById('button-add').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'flex';
  });
  
  document.getElementById('button-close').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
  });
};