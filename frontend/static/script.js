import Main from './views/impl/main.js';
import News from './views/impl/news.js';
import About from './views/impl/about.js';
import Contacts from './views/impl/contacts.js';
import Error from './views/impl/error.js';

const navigate = url => {
  history.pushState(null, null, url);
  router();
}

const router = async () => {

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

  if(!match) {
    match = {
      route : {
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
    if(content) {
      content.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('popstate', event => {
    router();
  })

  document.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target.closest('a');

    if(target) {
      navigate(target.href);
    }
  });

  router();
});