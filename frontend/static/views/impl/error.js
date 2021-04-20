import Abstract from '../abstract.js';

export default class Error extends Abstract{

  constructor() {
    super();
  }

  getTemplate() {
    return `
            404 NOT FOUND
            `
  }
}