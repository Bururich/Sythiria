function openApartmentModal(button) {
  const modal = document.getElementById("apartmentModalWindow");

  // Получаем данные из data-атрибутов
  const number = button.dataset.number;
  const status = button.dataset.status;
  const area = button.dataset.area;
  const floor = button.dataset.floor;
  const complex = button.dataset.complex;
  const plan = button.dataset.plan;
  const interior = button.dataset.interior;
  const statusClass = button.dataset.statusClass; 

  // Элемент статуса
  const statusEl = document.querySelector("#modalStatus");
  statusEl.textContent = status;

  // Сбрасываем только динамические классы, оставляя базовый
  statusEl.className = "status"; 
  if (statusClass) {
    statusEl.classList.add(statusClass);
  }

  // Подставляем остальное
  document.querySelector("#modalTitle").textContent = `КВАРТИРА СТУДІЯ ${number}`;
  document.querySelector("#modalArea").textContent = area;
  document.querySelector("#modalFloor").textContent = floor;
  document.querySelector("#modalComplex").textContent = complex;
  document.querySelector("#modalPlan").src = plan;
  document.querySelector("#modalInterior").src = interior;

  modal.style.display = "flex";
}

function closeApartmentModal() {
  document.getElementById("apartmentModalWindow").style.display = "none";
}


const modalPlan = document.getElementById("modalPlan");       // большая картинка
const modalInterior = document.getElementById("modalInterior"); // маленькая картинка

// Вешаем обработчик на маленькую
modalInterior.addEventListener("click", () => {
  // Меняем местами src
  const tempSrc = modalPlan.src;
  modalPlan.src = modalInterior.src;
  modalInterior.src = tempSrc;
});

document.querySelectorAll(".apartment-card").forEach(card => {
  card.addEventListener("click", function () {
    // Ищем внутри карточки ссылку с data-атрибутами
    const btn = this.querySelector(".apartment-details-btn");
    if (btn) {
      openApartmentModal(btn); // передаём в твою функцию
    }

    // Убираем выделение у всех карточек
    document.querySelectorAll(".apartment-card").forEach(c => c.classList.remove("active-card"));

    // Добавляем выделение текущей
    this.classList.add("active-card");
  });
});