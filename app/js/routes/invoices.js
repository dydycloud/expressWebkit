
/*
 * GET invoices page.
 */
exports.index = function(req, res) {
  return res.render('invoices', {
    title: 'MnkInvoice - Invoices',
    pageTitle: 'Invoices'
  });
};
