const overlay = document.querySelector('#overlay');
const bars = document.querySelector('.bar-btn');
const sidebar = document.querySelector('#sidebar');
const closeBars = document.querySelector('.close-btn');

function toggleSidebar () {
    [overlay ,  sidebar , closeBars].forEach((e)=>{
        e.classList.toggle('active');
    })
}


[bars, overlay , closeBars].forEach((e)=>e.addEventListener('click', toggleSidebar));