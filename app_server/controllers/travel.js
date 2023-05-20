var fs = require('fs');

var trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const travel = (req, res) => {
    pageTitle = process.env.npm_package_name + ' - Travel';
    res.render('travel', { title: pageTitle, trips });
};

module.exports = {
    travel
};