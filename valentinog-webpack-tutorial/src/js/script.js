import '../css/style.scss';
import { getUsers } from '../common/usersAPI';

console.log('Hello webpack!');

const fancyFunc = () => {
  return [1, 2];
};

// eslint-disable-next-line no-unused-vars
const [a, b] = fancyFunc();

getUsers().then((json) => console.log(json));
