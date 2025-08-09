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
            src: "/assets/img/projects-sythiria2020.jpg",
            alt: "Проект Сузір'я 2020"
        },
        "project-fourth": {
            src: "/assets/img/projects-sythiria2019.jpg",
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

document.addEventListener("DOMContentLoaded", function() {
    const image = document.getElementById("amenities-image");

    const projects = {
        "amenities-first": {
            src: "/assets/img/amenties-.PNG",
            alt: "ремонт під ключ"
        },
        "amenities-second": {
            src: "/assets/img/amenities-1.PNG",
            alt: "Проект дизайн"
        }
    };

    document.querySelectorAll(".amenities-item a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const projectData = projects[this.id];
            if (projectData) {
                image.src = projectData.src;
                image.alt = projectData.alt;
            }
        });
    });
});

//End Amenities image change//
//Amenities list active class function//

document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".amenities-list a");

    projectLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Убираем класс у всех
            projectLinks.forEach(l => l.classList.remove("active-project"));
            // Добавляем класс к нажатой
            this.classList.add("active-project");
        });
    });
});

//End Amenities list active class function//