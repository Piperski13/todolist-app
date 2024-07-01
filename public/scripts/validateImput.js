export function displayError() {
  const inputElement = document.getElementById('popupInput');
  const errorMessage = document.getElementById('error-message');
  
  inputElement.classList.add('error');
  errorMessage.textContent = 'Name is required';
  errorMessage.style.display = 'block';
}
export function clearError() {
  const inputElement = document.getElementById('popupInput');
  const errorMessage = document.getElementById('error-message');
  
  inputElement.classList.remove('error');
  errorMessage.style.display = 'none';
  errorMessage.textContent = '';
}