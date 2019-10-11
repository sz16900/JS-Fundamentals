const container = document.querySelector('#container');

const paragraph = document.createElement('p');
container.appendChild(paragraph);
paragraph.classList.add('paragraph');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';

const header = document.createElement('h3');
container.appendChild(header);
header.classList.add('header');
header.textContent = "I’m a blue h3!";
header.style.color = 'blue';

const div = document.createElement('div');
container.appendChild(div);
div.style.border = ' thick solid black';
div.style.backgroundColor = 'pink';

const another = document.createElement('h1');
div.appendChild(another);
another.textContent = "Im inside a div";

const p = document.createElement('p');
div.appendChild(p);
p.textContent = 'ME TOO';