function lightMode() {
    const element = document.body;
    element.classList.toggle("light-mode");
}



const languageBtn = document.querySelector('img');
const engElements = Array.from(document.querySelectorAll('.eng'));
const sweElements = Array.from(document.querySelectorAll('.swe'));

languageBtn.onclick = (e) => {
    e.target.src = e.target.src === `https://png.vector.me/files/images/1/3/135287/british_flag_clip_art.jpg` ? `https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg` : `https://png.vector.me/files/images/1/3/135287/british_flag_clip_art.jpg`;

    engElements.forEach(el => {
        el.style.display = el.style.display === 'block' ? 'none' : 'block';
    });

    sweElements.forEach(el => {
        el.style.display = el.style.display === 'none' ? 'block' : 'none';
    });
}