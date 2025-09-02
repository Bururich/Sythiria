// hero video function//

document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('myVideo');
    const playBtn = document.getElementById('playBtn');

    playBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // предотвращаем всплытие события на видео
        if (video.paused) {
            video.play();
            playBtn.classList.add('hidden'); // скрываем кнопку при старте
        } else {
            video.pause();
            playBtn.classList.remove('hidden'); // возвращаем кнопку при паузе
        }
    });

    video.addEventListener('click', () => {
        if (!video.paused) {
            video.pause();
            playBtn.classList.remove('hidden'); // показываем кнопку при паузе
        } else {
            video.play();
            playBtn.classList.add('hidden'); // скрываем кнопку при воспроизведении
        }
    });

    video.addEventListener('ended', () => {
        playBtn.classList.remove('hidden'); // показываем кнопку при окончании видео
    });

});

//End hero video function//
//Project image change function//

document.addEventListener("DOMContentLoaded", function() {
  const image = document.getElementById("project-image");

  const projects = {
    "project-first": {
      src: "./assets/img/projects-europe.PNG",
      alt: "Проект Сузір'я Європейське"
    },
    "project-second": {
      src: "./assets/img/project-sky.jpg",
      alt: "Проект Сузір'я Скай"
    },
    "project-third": {
      src: "./assets/img/projects-sythiria2020.JPG",
      alt: "Проект Сузір'я 2020",
      class: "full"
    },
    "project-fourth": {
      src: "./assets/img/project-sythiria2019New.jpg",
      alt: "Проект Сузір'я 2019"
    }
  };

  document.querySelectorAll(".project-item a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const projectData = projects[this.id];
      if (projectData) {
        image.src = projectData.src;
        image.alt = projectData.alt;

        // Удаляем класс 'full' перед установкой нового
        image.classList.remove("full");

        // Если в объекте указан класс — добавляем его
        if (projectData.class) {
          image.classList.add(projectData.class);
        }
      }
    });
  });


    document.querySelectorAll(".project-item a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const projectData = projects[this.id];
            if (projectData) {
                image.classList.add("fade-out"); // start fade out

                setTimeout(() => {
                    image.src = projectData.src;
                    image.alt = projectData.alt;
                    image.classList.remove("fade-out"); // fade in
                }, 400); // matches transition time in CSS
            }
        });
    });
});

//End Project image change//
//Project list active class function//

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-list a");

    projectLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Убираем класс у всех
            projectLinks.forEach(l => l.classList.remove("active-project"));
            // Добавляем класс к нажатой
            this.classList.add("active-project");
        });
    });
});



//End Project list active class function//
//Amenities image change function//

document.addEventListener('DOMContentLoaded', function () {
  const image       = document.getElementById('amenities-image');
  const linkWrapper = document.getElementById('amenities-link');

  const projects = {
    'amenities-first': {
      src:  './assets/img/amenties-.PNG',
      alt:  'ремонт під ключ',
      href: 'renovation.html'
    },
    'amenities-second': {
      src:  './assets/img/amenities-1.PNG',
      alt:  'Проект дизайн',
      href: 'design.html'
    }
    // добавь ещё 2 объекта по аналогии
  };

  // делегирование: ловим клики по ссылкам списка
  document.querySelector('.amenities-list').addEventListener('click', function(e) {
    const a = e.target.closest('a');
    if (!a) return;

    e.preventDefault(); // не уходим по href ссылки в списке

    const data = projects[a.id];
    if (!data) return;

    // меняем картинку и ссылку-обёртку
    image.src = data.src;
    image.alt = data.alt;
    linkWrapper.href = data.href;

    // подсветка активной
    document.querySelectorAll('.amenities-list a').forEach(el => el.classList.remove('active'));
    a.classList.add('active');
  });
});
//End Amenities list active class function//

document.addEventListener('DOMContentLoaded', function () {
    const image = document.getElementById('amenities-image');
    const projects = {
        'amenities-first': {
            src:  './assets/img/amenties-.PNG',
            alt:  'ремонт під ключ'
        },
        'amenities-second': {
            src:  './assets/img/amenities-1.PNG',
            alt:  'Проект дизайн'
        }
        // добавь ещё 2 объекта по аналогии
    };

    document.querySelectorAll(".amenities-item a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const projectData = projects[this.id];
            if (projectData) {
                image.classList.add("fade-out"); // start fade out

                setTimeout(() => {
                    image.src = projectData.src;
                    image.alt = projectData.alt;
                    image.classList.remove("fade-out"); // fade in
                }, 400); // matches transition time in CSS
            }
        });
    });
});

// Contact Location Link function//
const iframe = document.getElementById('google-maps');

  // находим все ссылки с классом iframe-link
  const links = document.querySelectorAll('.iframe-link');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // отменяем переход по ссылке
      const newSrc = this.getAttribute('data-src'); // берем значение data-src
      iframe.src = newSrc; // меняем src у iframe
    });
  });

  // Сопоставление ID ссылок с нужными href
  const projectLinks = {
    "project-first": {
      href: "europe.html",
      img: "./assets/img/projects-europe.PNG",
      alt: "Проект Сузір'я Європейське"
    },
    "project-second": {
      href: "sky.html",
      img: "./assets/img/project-sky.jpg",
      alt: "Проект Сузір'я Скай"
    },
    "project-third": {
      href: "2020.html",
      img: "./assets/img/projects-sythiria2020.jpg",
      alt: "Проект Сузір'я 2020"
    },
    "project-fourth": {
      href: "2019.html",
      img: "./assets/img/projects-sythiria2019.jpg",
      alt: "Проект Сузір'я 2019"
    }
  };

  // Назначаем обработчики клика
  Object.keys(projectLinks).forEach(id => {
    document.getElementById(id).addEventListener("click", function () {
      const data = projectLinks[id];
      const link = document.getElementById("projects-link");
      const image = document.getElementById("project-image");

      link.href = data.href;
      image.src = data.img;
      image.alt = data.alt;
    });
  });


  const modal = document.getElementById('modal');
const thankModal = document.getElementById('thankModal');

const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');
const closeThank = document.getElementById('closeThank');

const contactForm = document.getElementById('contactForm');
function closeAllModals() {
  document.querySelectorAll('.modal.active').forEach(modal => {
    modal.classList.remove('active');
  });
}
// Открыть форму
openModal.addEventListener('click', () => {
  closeAllModals();
  modal.style.display = 'flex';
});

// Закрыть форму
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрыть окно благодарности
closeThank.addEventListener('click', () => {
  thankModal.style.display = 'none';
});

// Закрытие по клику вне модалки
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
  if (e.target === thankModal) thankModal.style.display = 'none';
});

// При отправке формы
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  modal.style.display = 'none';
  thankModal.style.display = 'flex';
  contactForm.reset();

  setTimeout(() => {
    thankModal.style.display = 'none';
  }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const mobileNav = document.getElementById("mobileNav");

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const phoneIcon = document.getElementById("phoneIcon");
  const navModal = document.getElementById("navModal");
  const phoneModal = document.getElementById("phoneModal");

  const closeNavModal = document.getElementById("closeNavModal");
  const closePhoneModal = document.getElementById("closePhoneModal");

  // Проверка: активна ли модалка
  const isModalOpen = () => {
    return navModal.classList.contains("active") || phoneModal.classList.contains("active");
  };

  // Открытие модалки с навигацией
  burger.addEventListener("click", () => {
    if (!isModalOpen()) {
      navModal.classList.add("active");
    }
  });

  // Открытие модалки с телефоном
  phoneIcon.addEventListener("click", () => {
    if (!isModalOpen()) {
      phoneModal.classList.add("active");
    }
  });

  // Закрытие по кнопке
  closeNavModal.addEventListener("click", () => {
    navModal.classList.remove("active");
  });

  closePhoneModal.addEventListener("click", () => {
    phoneModal.classList.remove("active");
  });

  // Закрытие по клику на фон
  [navModal, phoneModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });
});



