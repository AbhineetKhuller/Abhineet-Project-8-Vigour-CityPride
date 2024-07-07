const container1 = document.querySelector('.container1');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('.textarea');
const btn2 = document.querySelector('.btn2');
emoji.addEventListener('click', (event) => {
    if(event.target.className.includes('emoji')) return;
    textarea.classList.add('textarea--active');
	btn2.classList.add('btn2---active');
	
});

container1.addEventListener('mouseleave', () => {
    textarea.classList.remove('textarea--active');
	btn2.classList.remove('btn2---active');
});