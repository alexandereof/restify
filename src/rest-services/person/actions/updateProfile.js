function setField(req, res, next) {
    console.log('params >>>> ',req.params);
    res.send(200, req.params);
    next();   
};


module.exports = {
        type: 'GET',
        produce:'application/json',
        consume:'application/json',
        path: '/:field',
        validate: {},
        responseBody: 'SchemeName',
        action : setField
};