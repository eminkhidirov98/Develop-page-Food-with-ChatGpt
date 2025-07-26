window.addEventListener('DOMContentLoaded', function () {
  // Tabs

  const tabs = document.querySelectorAll('.tabheader__item');
  const tabsContent = document.querySelectorAll('.tabcontent');
  const tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent() {
    tabsContent.forEach((content) => {
      content.classList.add('hide');
      content.classList.remove('show', 'fade');
    });

    tabs.forEach((tab) => {
      tab.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i) {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');
    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent(0);

  tabsParent.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('tabheader__item')) {
      tabs.forEach((tab, i) => {
        if (event.target === tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  // Timer

  const deadline = '2025-12-31';

  function endtime(deadline) {
    const t = Date.parse(deadline);
    const now = Date.parse(new Date());
    const diff = t - now;
    return diff;
  }

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((t / (1000 * 60)) % 60);
    let seconds = Math.floor((t / 1000) % 60);
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  const daysE1 = document.getElementById('days');
  const hoursE1 = document.getElementById('hours');
  const minutesE1 = document.getElementById('minutes');
  const secondsE1 = document.getElementById('seconds');

  function updateClock() {
    function addZero(num) {
      return num < 10 ? '0' + num : num;
    }
    const t = getTimeRemaining(deadline);

    daysE1.textContent = addZero(t.days);
    hoursE1.textContent = addZero(t.hours);
    minutesE1.textContent = addZero(t.minutes);
    secondsE1.textContent = addZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
  const timeInterval = setInterval(updateClock, 1000);
  updateClock();
});
