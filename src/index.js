import _ from 'lodash';

const component = () => {
  const el = document.createElement('div');
  const array = ['Hello', 'webpack'];
  el.innerHTML = _.join(array, ' ');

  return el;
}

console.log("test")

document.body.appendChild(component());