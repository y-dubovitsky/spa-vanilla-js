import Abstract from '../abstract.js';

export default class Contacts extends Abstract{

  constructor() {
    super();
  }

  getTemplate() {
    return `
            Contacts
            `
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}