import _ from 'lodash';
import "./style.css";
import "./style.scss";
import sample from "./sample.jpg";

const component = () => {
  const el = document.createElement('div');
  const array = ['Hello', 'webpack'];
  el.innerHTML = _.join(array, ' ');

  return el;
}

document.body.appendChild(component());
document.body.classList.add("bg")

const image = new Image();
image.src = sample;
image.width = 200;
image.height = 130;

document.body.appendChild(image);