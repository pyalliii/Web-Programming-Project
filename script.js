const bar = document.getElementById('bar');
const nav = document.getElementById('nav');
const close=document.getElementById('close');

 /*If there is an element with id='bar' on the page, then run the following code*/
if(bar){bar.addEventListener/*(it listens for user actions like clicks, scrolls, typing, etc.*/
    ('click' ,  () => {
        nav.classList.add('active');
        /*add , remove , toggle , contains*/
    })
}

if(close){close.addEventListener('click' , () => {
        nav.classList.remove('active');
    })
}