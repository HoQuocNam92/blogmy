const overlay = document.querySelector('#overlay');
const bars = document.querySelector('.bar-btn');
const sidebar = document.querySelector('#sidebar');
const closeBars = document.querySelector('.close-btn');
bars.addEventListener('click',()=>{
    overlay.style.display='block';
    sidebar.style.display='block';
})
overlay.addEventListener('click',()=>{
    overlay.style.display='none';
    sidebar.style.display='none';
});
closeBars.addEventListener('click',()=>{
    overlay.style.display='none';
    sidebar.style.display='none';
});