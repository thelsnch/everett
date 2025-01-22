let step = 0;

function nextContent() {
  const content = document.getElementById("content");

  const messages = [
    "Твоя усмішка – це справжнє сонце, яке робить цей світ яскравішим!",
    "Ти завжди так гармонійно поєднуєш красу та розум – це неймовірно",
    "Твоя енергія надихає і створює навколо тепло та комфорт.",
    "У тебе просто неймовірний смак і стиль – ти справжня ікона елегантності.",
    "Твоя доброта і чуйність роблять тебе особливою і незабутньою",
    "Твоя природна грація і краса просто захоплюють дух",
    "В тобі є щось таке магнетичне, що я не можу перестати думати про тебе",
    "Як тобі, сподобалось?"
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
  content.innerHTML = "Дякую, мені дуже приємно робити так, щоб ти посміхалась.<br>Дозволь запросити тебе завтра до мене на вечерю, приготую скумбрію, картопельку...";
  buttonContainer.innerHTML = ""; // Убираем кнопки

  startCountdown(); // Запуск таймера
}

function showDisappointmentMessage() {
  const content = document.getElementById("content");
  const buttonContainer = document.querySelector(".next-button-container");

  // Отображаем сообщение о разочаровании
  content.innerHTML = "Шкода, що не сподобалось. Буду працювати, щоб стати краще.<br>Дозволь запросити тебе завтра до мене на вечерю, приготую скумбрію, картопельку...";
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

  let timeLeft = 15; // Время до смены текста (в секундах)

  // Функция для обновления таймера каждую секунду
  const countdown = setInterval(() => {
    if (timeLeft > 0) {
      timerElement.textContent = `Через: ${timeLeft--} секунд, повідомлення буде закрито, та вказано куди надати відповідь`; // Обновляем текст
    } else {
      clearInterval(countdown); // Останавливаем таймер
      content.innerHTML = "Дякую за увагу, в майбутньому хочу реалізувати проєкт, в якому будуть додані всі проєкти клікабельно створені для тебе. Свого роду history for im and you.<br>Відповідь на питання надай в Telegram";
      buttonContainer.innerHTML = ""; // Убираем таймер
      buttonContainer.style.display = "none"; // Скрываем контейнер
    }
  }, 1000); // Интервал в 1 секунду
}
