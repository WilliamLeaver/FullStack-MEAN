const travel = (req, res) => {
    pageTitle = process.env.npm_package_name + ' - Travel';
    res.render('travel', {title: pageTitle});
};

module.exports = {
    travel
};