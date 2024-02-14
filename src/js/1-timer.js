import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dataSelect = document.querySelector('input#datetime-picker')
const startBtn = document.querySelector('button[data-start]')


const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('input#datetime-picker', { options });


startBtn.addEventListener('click', () => {
    const timeNow = Date.now();
    const timeSelect = new Date(dataSelect.value);
    const timeSelectCode = timeSelect.getTime();


    // console.log(timeNow)
    // console.log(timeSelect)
    // console.log(timeSelectCode)


   
    if (timeSelectCode > timeNow) {
        console.log('Hello, it"s all ok');
    } else {
        iziToast.show({
            message: 'Please choose a date in the future',
            messageColor: '#fff',
            messageSize: '18px',
            backgroundColor: '#ef4040',
            iconUrl: '../img/error.svg',
            position: 'topRight',
            close: false,
            timeout: 3000
        });
    }
});

