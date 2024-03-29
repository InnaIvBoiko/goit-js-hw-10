import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import ErrorIcon from '../img/error.svg';

const dataSelectInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');

startBtn.disabled = true;

flatpickr('input#datetime-picker', { 
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const timeNow = Date.now();
    const userSelectedDate = new Date(selectedDates).getTime();
    const delta = userSelectedDate - timeNow;

    if (delta > 0) {
      startBtn.disabled = false;
    } else {
      startBtn.disabled = true;
      iziToast.show({
        message: 'Please choose a date in the future',
        messageColor: '#fff',
        messageSize: '18',
        backgroundColor: '#ef4040',
        iconUrl: ErrorIcon,
        position: 'topRight',
        close: false,
        timeout: 3000
      });
    };
  },
 });

startBtn.addEventListener('click', () => {
  const taimerId = setInterval((() => {
  const timeNow = Date.now();
  const userSelectedDate = new Date(dataSelectInput.value).getTime();
  const delta = userSelectedDate - timeNow;
    
  if (delta < 0) {
    clearInterval(taimerId);
    dataSelectInput.disabled = false;
  } else {
    convertMs(delta);
    };
  }),
  1000);
  
  startBtn.disabled = true;
  dataSelectInput.disabled = true;
});

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  document.querySelector('span[data-days]').innerHTML = days;
  document.querySelector('span[data-hours]').innerHTML = hours;
  document.querySelector('span[data-minutes]').innerHTML = minutes;
  document.querySelector('span[data-seconds]').innerHTML = seconds;
};

function pad(value) {
  return String(value).padStart(2, "0");
};
