console.log(BaseController)
function setField(req, res, next) {
    console.log('params >>>> ',req.params);
    res.send(200, req.params);
    next();   
};


module.exports = {
        //=========spec==============
    spec : {
        
        consume:'application/json',
        version : '1.0.0',
        role:'role-name',
        type: 'GET',
        path: '/:field',
        produce:'application/json',
        
        sumary:'get person\'s attributes',
        alias: 'getPersonAttribute' 
    },
    action: {
        validate: undefined,        
        responseBody: 'SchemeName',
        handler : setField
    }      
};