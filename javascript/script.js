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




/*
const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a');
const headingEl = document.querySelector('.heading');
const heading2El = document.querySelector('.heading2');
const omEl = document.querySelector('.om');
const homeEl = document.querySelector('.home');

link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language');

        headingEl.textContent = data[attr].heading;
        heading2El.textContent = data[attr].heading2;
        omEl.textContent = data[attr].om;
    });
});


var data ={
    "english":
    {
        "heading": "Hello, I am Sofia Hervéus",
        "heading2": "Future FrontEnd Developer", 
        "om": 
            "I live just outside of Gothenburg, Sweden, and I study to become a Front-End Developer at Jensen YH. I'm a very creative person and want to learn everything from the simpelest HTML to awesome UI effects, to then be able to creat exactly what your company is looking for.",
        "home": "Home"
    },

    "svenska":
    {
        "heading": "Hej, jag är Sofia Hervéus", 
        "heading2": "Framtida FrontEnd Developer", 
        "om":
            "Jag bor strax utanför Göteborg och studerar till Front-End Developer, vid Jensen Yrkeshögskola. Jag är väldigt kreativ av mig och ska lära mig allt från enkel html till fräcka UI effekter, för att sedan kunna skapa precis det ditt företag är ute efter!"
    }
}

*/