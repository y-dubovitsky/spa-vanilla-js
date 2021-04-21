import NEWS_API_KEY from '../key.js';

export default class News {

  constructor() {
  }

  async getNews() {
    var url = 'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2021-04-21&' +
      'sortBy=popularity&' +
      `apiKey=${NEWS_API_KEY.key}`;

    const response = await fetch(url);
    const json = await response.json();

    return json.articles;

  }

  getArticles(articles) {
    const result = articles.map(article => {
      return `<li>${article.title}</li>`
    }).join('');

    return result;
  }

  getTemplate() {
    return `
            <ul>
              ${this.news}
            </ul>
            `
  }

  async render() {
    const articles = await this.getNews();
    this.news = this.getArticles(articles);
    
    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();

    this.element = wrapper;
  }
}