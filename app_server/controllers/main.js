fs = require('fs');

var blog = JSON.parse(fs.readFileSync('./data/blog.json', 'utf8'));

var review = JSON.parse(fs.readFileSync('./data/review.json', 'utf8'));

var sidebar = JSON.parse(fs.readFileSync('./data/sidebar.json', 'utf8'));

const index = (req, res) => {
    res.render('index', {title: "Travlr Getaways", blog, review, sidebar});
};

module.exports = {
    index
};