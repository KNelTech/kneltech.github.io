// Alert
const alertContainer = document.getElementById('alertContainer');
const alertTitle = document.getElementById('alertTitle');
const alertText = document.getElementById('alertText');
const alertBtn = document.getElementById('alertBtn');

function showAlert(options = {}) {
  const defaultOptions = {
    title: 'Alert',
    message: 'This is an alert',
    buttonText: 'Confirm',
  };

  // Merge default options with the provided options
  const mergedOptions = { ...defaultOptions, ...options };

  // Set the content of the modal elements
  alertTitle.innerText = mergedOptions.title;
  alertText.innerText = mergedOptions.message;
  alertBtn.innerText = mergedOptions.buttonText;
  alertContainer.style.display = 'block';

  const closeAlert = function closeAlert() {
    alertContainer.style.display = 'none';
    alertBtn.removeEventListener('click', closeAlert);
  };

  alertBtn.addEventListener('click', closeAlert);
}