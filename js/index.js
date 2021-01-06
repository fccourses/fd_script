'use strict';

function logItem(value) {
  console.log(`${this.title}: ${value}`);
}

const newsPaper = {
  title: 'NY Times',
  articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

  showArticles() {
    this.articles.map(logItem.bind(this));
  },
};

newsPaper.showArticles();
