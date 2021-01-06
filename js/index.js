'use strict';

const newsPaper = {
  title: 'NY Times',
  articles: ['String1', 'News1', 'Test1', 'Headiubng1'],

  showArticles() {
    console.log(this);
    this.articles.forEach( (currentArticle, index) => {
      console.log(this); // newsPaper
      console.log(`${this.title} ${index + 1}: ${currentArticle}`);
    });
  },
};

newsPaper.showArticles();
