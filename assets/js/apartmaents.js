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

  // Подставляем в модалку
  document.querySelector("#modalTitle").textContent = `КВАРТИРА СТУДІЯ ${number}`;
  document.querySelector("#modalStatus").textContent = status;
  document.querySelector("#modalArea").textContent = area;
  document.querySelector("#modalFloor").textContent = floor;
  document.querySelector("#modalComplex").textContent = complex;
  document.querySelector("#modalPlan").src = plan;
  document.querySelector("#modalInterior").src = interior;

  modal.style.display = "flex";
}

function closeApartmentModal() {
    const modal = document.getElementById("apartmentModalWindow");

    modal.style.display = "none";
}