
/*
 * GET home page.
 */
exports.index = function(req, res) {
  return res.render('index', {
    title: 'MnkInvoice',
    pageTitle: 'Home'
  });
};
