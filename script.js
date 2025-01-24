let step = 0;

function nextContent() {
  const content = document.getElementById("content");

  const messages = [ 
    "САЙТ ЗАЧИНЕНО."
  ];

  step++;

  if (step < messages.length - 1) {
    content.innerHTML = messages[step];
  } else if (step === messages.length - 1) {
    // Показываем вопрос и сразу заменяем кнопку
    content.innerHTML = messages[step];

    const buttonContainer = document.querySelector(".next-button-container");
    buttonContainer.innerHTML = ""; // Очищаем предыдущие кнопки

    // Добавляем кнопку "Так"
    const yesButton = document.createElement("button");
    yesButton.innerHTML = "Так";
    yesButton.className = "yes-button";
    yesButton.onclick = askAnotherQuestion;
    buttonContainer.appendChild(yesButton);

    // Добавляем кнопку "Ні"
    const noButton = document.createElement("button");
    noButton.innerHTML = "Ні";
    noButton.className = "no-button";
    noButton.onclick = showDisappointmentMessage;
    buttonContainer.appendChild(noButton);
  }
}

function askAnotherQuestion() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Обновляем контент с новым вопросом
  content.innerHTML = "САЙТ ЗАЧИНЕНО.";
  buttonContainer.innerHTML = ""; // Убираем кнопки

  startCountdown(); // Запуск таймера
}

function showDisappointmentMessage() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Отображаем сообщение о разочаровании
  content.innerHTML = "САЙТ ЗАЧИНЕНО.";
  buttonContainer.innerHTML = ""; // Убираем кнопки

  startCountdown(); // Запуск таймера
}

function startCountdown() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Создаем элемент для таймера
  const timerElement = document.createElement("div");
  timerElement.className = "timer";
  timerElement.style.fontSize = "12px"; // Стили таймера
  timerElement.style.marginTop = "10px";
  timerElement.style.color = "#ffffff";
  buttonContainer.appendChild(timerElement);

  let timeLeft = 4; // Время до смены текста (в секундах)

  // Функция для обновления таймера каждую секунду
  const countdown = setInterval(() => {
    if (timeLeft > 0) {
      timerElement.textContent = `Через: ${timeLeft--} second, повідомлення буде закрито`; // Обновляем текст
    } else {
      clearInterval(countdown); // Останавливаем таймер
      content.innerHTML = "САЙТ ЗАЧИНЕНО.<br>про новий хостинг Ед повідомить. <br>Деталі в Telegram or Instagram.";
      buttonContainer.innerHTML = ""; // Убираем таймер
      buttonContainer.style.display = "none"; // Скрываем контейнер
    }
  }, 1000); // Интервал в 1 секунду
}
