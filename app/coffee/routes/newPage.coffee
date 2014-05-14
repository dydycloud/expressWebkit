###
# GET newPage page.
###
exports.index = (req, res)->
  res.render 'newPage', { 
    title: 'MnkExpress - newPage' 
    pageTitle: 'newPage' 
  }
