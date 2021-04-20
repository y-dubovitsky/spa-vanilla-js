import Abstract from '../abstract.js';

export default class News extends Abstract{

  constructor() {
    super();
  }

  getTemplate() {
    return `
            News
            `
  }
}