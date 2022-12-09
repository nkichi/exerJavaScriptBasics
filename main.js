console.log(window);
// Single element
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('h1'));




// Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementByClassName('item'));
// console.log(document.getElementByTagName('li'));

// const items = document.querySelectorAll('.item');

// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();

// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h4>Hello</h1>'

// const btn = document.querySelector('btn');
// btn.getElementsByClassName.background = 'red';

// btn.addEventListener('mouseout', (e) => {e.preventDefault();
// document.querySelector('#my-form').style.background = '#ccc';
// document.querySelector('body').classList.add('bg-dark');
// document.querySelector('.items')
// .lastElementChild.inerHTML = <h1>Hello</h1>;
// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    //console.log(nameInput.value);

    if(nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        //alert('Please Enter Fields');
        msg.innerHTML = 'Please Enter All Fields';
        setTimeout(() => msg.remove(), 3000);

    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode('$
        {nameInput.value} : ${email.input.value}'));
       // console.log('success');
    userList.appendChild(li);
    //Clear Fields
    nameInput.value = '';
    nameInput.value = '';
    }


}
