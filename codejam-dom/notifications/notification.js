/* eslint-disable no-undef */
const notificationModal = document.getElementById('notification-modal');
const closeButton = document.getElementById('close');
const disableCheckbox = document.getElementById('disable');
const dots = document.getElementsByClassName('dot');
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');
const tipOfTheDay = document.getElementById('tip');
const dotList = document.getElementById('dots');

const tips = ['Lorem ipsum sem aptent eros aenean quisque class, ultricies lobortis tristique euismod adipiscing libero quisque, est congue rhoncus tempus cursus luctus.',
  'Aliquam habitant ac massa ornare hendrerit mollis aliquet tristique dui, fringilla elit ipsum ornare augue diam praesent mi purus, lectus aliquam vestibulum mollis congue dolor aliquet libero.',
  'Nibh sed conubia curae arcu faucibus nullam feugiat quisque, et dictum donec risus mauris sodales vestibulum quisque, aptent orci est ullamcorper dapibus tortor massa.',
  'Tempus velit risus euismod condimentum pretium cras proin dui iaculis, mollis taciti vitae proin luctus porttitor lorem lacus, blandit ante aptent odio eros vitae a risus.',
  'Erat integer lobortis ad fusce eu felis eget, blandit maecenas orci etiam platea a, turpis viverra donec ut ante nullam.',
  'Cursus leo ornare morbi venenatis nec sit himenaeos sociosqu imperdiet tempor ligula ac eu, nullam augue arcu odio dapibus quis interdum lacus non elit pulvinar.'];

function clearActiveFromDots() {
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
}

function showTip(index = 0) {
  tipOfTheDay.innerHTML = tips[index];
  clearActiveFromDots();
  dots[index].classList.add('active');
}

window.onload = () => {
  if (localStorage.getItem('showNotification') !== 'false') {
    setTimeout(() => {
      notificationModal.style.display = 'block';
      showTip();
    }, 5000);
  }
};

function onCloseNotifaication() {
  notificationModal.style.display = 'none';
}

function onCheckboxChange() {
  if (disableCheckbox.checked) {
    localStorage.setItem('showNotification', 'false');
  } else {
    localStorage.setItem('showNotification', 'true');
  }
}

function switchToNextTip(addToPosition) {
  const dotElements = Array.prototype.slice.call(dots);
  const prevIndex = dotElements.findIndex(x => x.className.includes('active'));
  let index = prevIndex + addToPosition;
  if (index >= tips.length) {
    index = 0;
  }
  if (index < 0) {
    index = tips.length - 1;
  }
  showTip(index);
}
function onDotClick(event) {
  const currentNode = event.target;
  const childs = Array.from(currentNode.parentNode.childNodes).filter(n => n.tagName === 'LI');
  for (i = 0; i < childs.length; i += 1) {
    if (currentNode === childs[i]) break;
  }
  showTip(i);
}

closeButton.addEventListener('click', onCloseNotifaication);
disableCheckbox.addEventListener('change', onCheckboxChange);
nextArrow.addEventListener('click', () => { switchToNextTip(1); });
prevArrow.addEventListener('click', () => { switchToNextTip(-1); });
dotList.addEventListener('click', onDotClick);
