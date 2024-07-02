import {displayError,clearError} from './scripts/validateImput.js';

const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

renderPage();

function renderPage() {
  let todoListHTML = '';

  todoList.forEach((element,index) => {
    const html = `
      <div class="card" id="${index}">
        <div class="card-header">
            <h1 class="todo-title">${element}</h1>
            <button class="delete-button js-delete-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 14"
              class="svgIcon bin-top"
            >
              <g clip-path="url(#clip0_35_24)">
                <path
                  fill="black"
                  d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_24">
                  <rect fill="white" height="14" width="69"></rect>
                </clipPath>
              </defs>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 69 57"
              class="svgIcon bin-bottom"
            >
              <g clip-path="url(#clip0_35_22)">
                <path
                  fill="black"
                  d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_35_22">
                  <rect fill="white" height="57" width="69"></rect>
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div class="card-content">
          <p>This is a todo</p>
          <p>Study</p>
          <p>Wash</p>
        </div>
        <div class="card-footer">
          <button class="button-add-card">+</button>
        </div>
    </div>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-render-page').innerHTML = todoListHTML;
  localStorage.setItem('todoList', JSON.stringify(todoList));

  // Event listener for all delete buttons
  document.querySelectorAll('.js-delete-button')
  .forEach((delteButton,index)=>{
    delteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderPage();
    })
  });
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
