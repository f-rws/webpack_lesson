import _ from 'lodash';
import { getNumberToSquared } from "./utilities";
import { ARSENAL_RW } from "./utilities";
import Lion from "./utilities";

console.log(getNumberToSquared(3));
console.log(ARSENAL_RW);
console.log(Lion.say());

const component = () => {
  const el = document.createElement('div');
  const array = ['Hello', 'webpack'];
  el.innerHTML = _.join(array, ' ');

  return el;
}

document.body.appendChild(component());