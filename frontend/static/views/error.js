export default class Error {

  constructor() {
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