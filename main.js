const INPUT = document.querySelector('.input');
const SUBMIT = document.querySelector('.submit');
const OUTPUT = document.querySelector('.output');
SUBMIT.addEventListener('submit', isResponse);
function isResponse() {
    const firstName = INPUT.value;
    const serverUrl = "https://api.genderize.io";
    const url = `${serverUrl}?name="${firstName}`;
        getAnswer
        .then(() => {
            let json = response.text()
            console.log(json);
        })
};
