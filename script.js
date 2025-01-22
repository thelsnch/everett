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
  }
}

function askAnotherQuestion() {
  const content = document.getElementById("content");
  content.innerHTML = "Дозволь тебе завтра запросити на вечерю до себе, та разом провести час! Буде: Скумбрія, Картопелька, та цікавий фільм :)";

  const buttonContainer = document.querySelector(".next-button-container");
  buttonContainer.innerHTML = ""; // Убираем кнопку "Так"

  setTimeout(() => {
    // Убрать все кнопки и контент через некоторое время
    content.innerHTML = "Дякую за увагу! Відповідь надай в Telegram";
    buttonContainer.style.display = "none";
  }, 15000); // Убираем через 15 секунд
}
