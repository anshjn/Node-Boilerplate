const tryModel = require('../models/try-model');

 exports.tryController = function(req, res) {
    var trymodel = new tryModel();
    trymodel.data = req.body.data;
    trymodel.save((err, trydata) => {
        if(!err) res.status(200).json({status: 'success', data: trydata});
        else res.send(err);
    });
};

