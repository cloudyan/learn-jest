import { doSomething } from './dependency';

export default (x) => {
  doSomething(x * 2);
}
