/* GET 'about us' page */
module.exports.about = function(req, res) {
    res.render('generic-text', {
        title: 'About Pizza Locator',
        content: 'Locator was created to help people find places to sit down and get a bit of work done wile they eat.'
    });
};