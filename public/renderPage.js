import {displayError,clearError} from './scripts/validateImput.js';

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderPage();

function renderPage() {
  let todoListHTML = '';

  todoList.forEach(element => {
    const html = `
      <div class="card"><h1>${element}</h1></div>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-render-page').innerHTML = todoListHTML;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

// Event listener for add button
document.getElementById('button-add').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'flex';
});

// Event listener for close button
document.getElementById('button-close').addEventListener('click', () => {
  document.getElementById('overlay').style.display = 'none';
  clearError();
});

// Event listener for addTodoCard button
document.getElementById('addButton').addEventListener('click', () => {
  const inputElement = document.getElementById('popupInput');
  const inputValue = inputElement.value;
  if (inputValue) {
    todoList.push(inputValue);
    console.log(todoList);
    inputElement.value = '';
    document.getElementById('overlay').style.display = 'none';
    clearError();
    renderPage();
  }
  else if (!inputValue){
    displayError();
  }
});
