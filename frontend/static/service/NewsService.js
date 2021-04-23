import NEWS_API_KEY from '../key.js';

export default class NewsService {
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
}