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
            src: "/assets/img/projects-europe.PNG",
            alt: "Проект Сузір'я Європейське"
        },
        "project-second": {
            src: "/assets/img/project-sky.jpg",
            alt: "Проект Сузір'я Скай"
        },
        "project-third": {
            src: "/assets/img/projects-sythiria2020.JPG",
            alt: "Проект Сузір'я 2020"
        },
        "project-fourth": {
            src: "/assets/img/project-sythiria2019New.jpg",
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
      src:  '/assets/img/amenties-.PNG',
      alt:  'ремонт під ключ',
      href: 'renovation.html'
    },
    'amenities-second': {
      src:  '/assets/img/amenities-1.PNG',
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
            src:  '/assets/img/amenties-.PNG',
            alt:  'ремонт під ключ'
        },
        'amenities-second': {
            src:  '/assets/img/amenities-1.PNG',
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
      img: "/assets/img/projects-europe.PNG",
      alt: "Проект Сузір'я Європейське"
    },
    "project-second": {
      href: "sky.html",
      img: "/assets/img/projects-sky.PNG",
      alt: "Проект Сузір'я Скай"
    },
    "project-third": {
      href: "2020.html",
      img: "/assets/img/projects-2020.PNG",
      alt: "Проект Сузір'я 2020"
    },
    "project-fourth": {
      href: "2019.html",
      img: "/assets/img/projects-2019.PNG",
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