import personHTML from './person.html';  //personHTML is just a string of html
import './style.css'; //css gets appended to the <head>

let el = document.createElement('div');
el.innerHTML = personHTML;

document.body.appendChild(el);

el.addEventListener('click', e => {
  import('./add.js').then(({default:add})=>{
    console.log(add(2,2));
  });
});
