fs = require('fs');

var latest = JSON.parse(fs.readFileSync('./data/latest.json', 'utf8'));
var article = JSON.parse(fs.readFileSync('./data/article.json', 'utf8'));
var tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

const news = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - News';
    res.render('news', { title: pageTitle, latest, article, tips});
};

module.exports = {
    news
};