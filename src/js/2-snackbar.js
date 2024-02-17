import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const createBtn = document.querySelector('button');
const inputDelay = document.querySelector('input[name = delay]');

createBtn.disabled = true;

inputDelay.addEventListener('input', () => {
    createBtn.disabled = false;
});

createBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const delay = inputDelay.value;

    const promise = new Promise((res, rej) => {
        const checkRadio = document.querySelector('input[name = state]:checked').value;
        
        setTimeout(() => {
            if (checkRadio === 'fulfilled') {
                res();
            } else if (checkRadio === 'rejected') {
                rej();
            };
        }, `${delay}`);

        document.querySelector('.form').reset();
    });

    promise
        .then((res) => {
            iziToast.show({
                message: `✅  Fulfilled promise in ${delay} ms`,
                messageColor: '#fff',
                messageSize: '18',
                backgroundColor: '#59A10D',
                position: 'topRight',
                close: false,
                timeout: 3000
            });
        })
        .catch((err) => {
            iziToast.show({
                message: `❌  Rejected promise in ${delay} ms`,
                messageColor: '#fff',
                messageSize: '18',
                backgroundColor: '#EF4040',
                position: 'topRight',
                close: false,
                timeout: 3000
            });
        })
});