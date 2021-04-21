export default class Main {

  constructor() {
    document.setTitle('Welcome to the Hot News Publisher')
  }

  getTemplate() {
    return `
            PS C:\Users\User\IdeaProjects\spa-on-vanilla-js> node server.js
            `
  }

  render() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}