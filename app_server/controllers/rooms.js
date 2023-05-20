fs = require('fs');

var roomsList = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Rooms';
    res.render('rooms', { title: pageTitle, roomsList });
};

module.exports = {
    rooms
};