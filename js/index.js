'use strict';

const newsPaper = {
  title: 'NY Times',
  articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

  showArticles() {
    const that = this; 
    // сохраняем сслыку на этот контекст

    this.articles.map(function (value) {
      console.log(`${that.title}: ${value}`);
    });
  },
};

newsPaper.showArticles();
