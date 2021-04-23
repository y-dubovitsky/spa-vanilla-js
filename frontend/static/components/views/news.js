import NewsService from '../../service/NewsService.js';

export default class News {

  constructor() {
    this.newsService = new NewsService();
  }

  getArticles(articles) {
    const result = articles.map(article => {

      const {title, urlToImage, author, content, publishedAt, url} = article;

      return `<div class="news">
                <h2>${title}</h2>
                <img src="${urlToImage}"/>
                ${content}
                ${author}
                ${publishedAt}
                <br>
                <a href="${url}">Read more...</a>
              </div>`
    }).join('');

    return result;
  }

  getTemplate() {
    return `
            <div class="news-container">
              ${this.news}
            </div>
            `
  }

  async render() {
    const articles = await this.newsService.getNews();
    this.news = this.getArticles(articles);

    const wrapper = document.createElement('div');
    wrapper.innerHTML = this.getTemplate();
    this.element = wrapper;
  }
}