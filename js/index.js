'use strict';

const newsPaper = {
  title: 'NY Times',
  articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

  showArticles() {
    this.articles.forEach(function (currentArticle, index) {
      console.log(this) // undefined
      console.log(`${this.title} ${index + 1}: ${currentArticle}`);
    });
  },
};

newsPaper.showArticles();
