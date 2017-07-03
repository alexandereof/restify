console.log(BaseController)
function setField(req, res, next) {
    console.log('params >>>> ',req.params);
    res.send(200, req.params);
    next();   
};


module.exports = {
        //=========spec==============
    spec : {
        version : '1.0.0',
        type: 'GET',
        produce:'application/json',
        consume:'application/json',
        path: '/:field',
        sumary:'get person\'s attributes',
        alias: 'getPersonAttribute', 
    },
    action: {
        validate: undefined,        
        responseBody: 'SchemeName',
        handler : setField
    }      
};