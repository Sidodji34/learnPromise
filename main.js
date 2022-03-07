const INPUT = document.querySelector('.input');
const SUBMIT = document.querySelector('.submit');
const OUTPUT = document.querySelector('.output');
const serverUrl = "https://api.genderize.io";
SUBMIT.addEventListener('click', isResponse);
function isResponse() {
    event.preventDefault();
    firstName = INPUT.value;
    const url = `${serverUrl}?name=${firstName}`;
    const request = fetch(url);
     let answer = request.then((response) => response.json());
     answer.then((result) => OUTPUT.textContent = `${firstName} - ${result.gender}`);
     INPUT.value = '';
};