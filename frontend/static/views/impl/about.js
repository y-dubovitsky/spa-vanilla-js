import Abstract from '../abstract.js';

export default class About extends Abstract{

  constructor() {
    super();
  }

  getTemplate() {
    return `
            About
            `
  }
}