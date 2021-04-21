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

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}