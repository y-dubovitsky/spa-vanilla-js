import Main from './components/views/main.js';
import News from './components/views/news.js';
import About from './components/views/about.js';
import Contacts from './components/views/contacts.js';
import Error from './components/views/error.js';


export default class EntryPoint {

  constructor() {

  }

  initialize() {
    this.initEventListeners();
    this.router();
  }

  navigate = url => {
    history.pushState(null, null, url);

    this.router();
  }

  router = async () => {

    const routes = [
      { pathname: "/", className: Main }, // Make dynamic import
      { pathname: "/news", className: News },
      { pathname: "/about", className: About },
      { pathname: "/contacts", className: Contacts },
    ];

    const mmm = routes.map(route => {
      return {
        route: route,
        isMatch: location.pathname === route.pathname
      }
    });

    let match = mmm.find(m => m.isMatch);

    if (!match) {
      match = {
        route: {
          className: Error
        },
        isMatch: true
      }
    }

    const instance = new match.route.className();
    await instance.render();

    clearContent();

    document.querySelector('#app').append(instance.element);

    function clearContent() {
      const content = document.querySelector('#app').firstElementChild;
      if (content) {
        content.remove();
      }
    }
  }

  initEventListeners() {

    document.addEventListener('DOMContentLoaded', () => {
      onPopstate();
      onClickLink();
    });

    const onPopstate = () => {
      window.addEventListener('popstate', event => {
        router();
      });
    }

    const onClickLink = () => {
      document.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.closest('a');

        if (target) {
          this.navigate(target.href);
        }
      });
    }
  }

}