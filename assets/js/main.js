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
