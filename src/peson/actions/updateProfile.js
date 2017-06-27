function setField(req, res, next) {
    res.send();
    next();   
};


module.exports = {
        type: 'POST',
        produce:'application/json',
        consume:'application/json',
        actionsRoute: {
            '/:field': {
                validate: {},
                responseBody: 'SchemeName',
                action : setField
            },

            '/all' : {
                validate:{},
                action: function(req, res, next){
                    res.send();
                }
            }
        }
        
};