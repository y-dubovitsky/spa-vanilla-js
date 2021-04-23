export default class Contacts {

  constructor() {
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