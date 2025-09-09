document.addEventListener('DOMContentLoaded', () => {
const modal = document.getElementById('modal');
  const thankModal = document.getElementById('thankModal');
  const openModal = document.getElementById('openModal');
  const closeModal = document.getElementById('closeModal');
  const closeThank = document.getElementById('closeThank');
  const contactForm = document.getElementById('contactForm');
  const modalTriggers = document.querySelectorAll(".open-modal-btn");

  modalTriggers.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      const targetModal = document.getElementById(targetId);
      closeAllModals();
      if (targetModal) targetModal.style.display = "flex";
    });
  });

  function closeAllModals() {
    document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active'));
  }

  if (openModal) {
    openModal.addEventListener('click', () => {
      closeAllModals();
      if (modal) modal.style.display = 'flex';
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (modal) modal.style.display = 'none';
    });
  }

  if (closeThank) {
    closeThank.addEventListener('click', () => {
      if (thankModal) thankModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
    if (e.target === thankModal) thankModal.style.display = 'none';
  });

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (modal) modal.style.display = 'none';
      if (thankModal) thankModal.style.display = 'flex';
      contactForm.reset();
      setTimeout(() => {
        if (thankModal) thankModal.style.display = 'none';
      }, 3000);
    });
  }

  // Burger menu
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      mobileNav.classList.toggle("active");
    });
  }

  // Navigation and phone modals
  const phoneIcon = document.getElementById("phoneIcon");
  const navModal = document.getElementById("navModal");
  const phoneModal = document.getElementById("phoneModal");
  const closeNavModal = document.getElementById("closeNavModal");
  const closePhoneModal = document.getElementById("closePhoneModal");

  const isModalOpen = () =>
    (navModal && navModal.classList.contains("active")) ||
    (phoneModal && phoneModal.classList.contains("active"));

  if (burger && navModal) {
    burger.addEventListener("click", () => {
      if (!isModalOpen()) navModal.classList.add("active");
    });
  }

  if (phoneIcon && phoneModal) {
    phoneIcon.addEventListener("click", () => {
      if (!isModalOpen()) phoneModal.classList.add("active");
    });
  }

  if (closeNavModal && navModal) {
    closeNavModal.addEventListener("click", () => {
      navModal.classList.remove("active");
    });
  }

  if (closePhoneModal && phoneModal) {
    closePhoneModal.addEventListener("click", () => {
      phoneModal.classList.remove("active");
    });
  }

  [navModal, phoneModal].forEach(modalEl => {
    if (modalEl) {
      modalEl.addEventListener("click", (e) => {
        if (e.target === modalEl) modalEl.classList.remove("active");
      });
    }
  });

  const navLinks = document.querySelectorAll("#navModal .modal-links a[href^='#']");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (navModal) navModal.classList.remove("active");
      if (burger) burger.classList.remove("active");
    });
  });
});
