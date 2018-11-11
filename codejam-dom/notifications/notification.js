/* eslint-disable no-undef */
const notificationModal = document.getElementById('notification-modal');
const closeButton = document.getElementById('close');
const disableCheckbox = document.getElementById('disable');

window.onload = () => {
  if (localStorage.getItem('showNotification') !== 'false') {
    setTimeout(() => {
      notificationModal.style.display = 'block';
    }, 5000);
  }
};

function closeNotifaication() {
  notificationModal.style.display = 'none';
}

function onCheckboxChange() {
  if (disableCheckbox.checked) {
    localStorage.setItem('showNotification', 'false');
  } else {
    localStorage.setItem('showNotification', 'true');
  }
}

closeButton.addEventListener('click', closeNotifaication);
disableCheckbox.addEventListener('change', onCheckboxChange);
