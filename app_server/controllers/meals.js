fs = require('fs');

var mealsList = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Meals';
    res.render('meals', { title: pageTitle, mealsList });
};

module.exports = {
    meals
};