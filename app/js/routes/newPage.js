
/*
 * GET newPage page.
 */
exports.index = function(req, res) {
  return res.render('newPage', {
    title: 'MnkExpress - newPage',
    pageTitle: 'newPage'
  });
};
