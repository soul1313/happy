// Анимация снежинок
function createSnowflakes() {
    const snowContainer = document.createElement('div');
    snowContainer.classList.add('snow');
    document.body.appendChild(snowContainer);

    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('span');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄️';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        snowContainer.appendChild(snowflake);
    }
}

createSnowflakes();

// Логика игры "Угадай число"
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const userInput = document.getElementById('userInput');
const submitGuessButton = document.getElementById('submitGuess');
const messageElement = document.getElementById('message');
const attemptsElement = document.getElementById('attempts');
const restartButton = document.getElementById('restartGame');
const giftIcon = document.getElementById('giftIcon');
const giftMessage = document.getElementById('giftMessage');

// Функция обновления сообщения
function updateMessage(message, color) {
    messageElement.textContent = message;
    messageElement.style.color = color;
}

// Функция для сброса игры
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = attempts;
    userInput.value = '';  // Очистить поле ввода
}

// Обработчик нажатия на кнопку
submitGuessButton.addEventListener('click', function() {
    const userGuess = parseInt(userInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        updateMessage("Пожалуйста, введите число от 1 до 100.", 'yellow');
        userInput.value = '';  // Очищаем поле ввода
        return;
    }

    if (userGuess > randomNumber) {
        updateMessage("Загаданное число меньше!", 'red');
    } else if (userGuess < randomNumber) {
        updateMessage("Загаданное число больше!", 'blue');
    } else {
        updateMessage(`Поздравляю! Ты угадал число ${randomNumber} за ${attempts} попытки!`, 'green');
        restartButton.style.display = 'inline-block'; // Показать кнопку перезапуска
    }

    attemptsElement.textContent = attempts;
});

// Обработчик перезапуска игры
restartButton.addEventListener('click', function() {
    resetGame();
    restartButton.style.display = 'none';  // Скрыть кнопку перезапуска
});

// Обработчик для иконки подарка
giftIcon.addEventListener('click', function() {
    giftMessage.style.display = 'block'; // Показываем текст
    setTimeout(() => {
        giftMessage.style.display = 'none'; // Скрываем текст через 5 секунд
    }, 5000);
});
