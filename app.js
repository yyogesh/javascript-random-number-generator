const number = document.querySelector(".number");
const generateButton = document.querySelector(".generate");

generateButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100);
    number.innerHTML = randomNumber;
})