/* eslint-disable no-undef */
const notificationModal = document.getElementById('notification-modal');
const closeButton = document.getElementById('close');

window.onload = () => {
  setTimeout(() => {
    notificationModal.style.display = 'block';
  }, 5000);
};

function closeNotifaication() {
  notificationModal.style.display = 'none';
}

closeButton.addEventListener('click', closeNotifaication);
