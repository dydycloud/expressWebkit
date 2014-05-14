###
# GET invoices page.
###
exports.index = (req, res)->
  res.render 'invoices', { 
    title: 'MnkInvoice - Invoices' 
    pageTitle: 'Invoices' 
  }