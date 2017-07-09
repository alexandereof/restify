var BaseController = require('../src/BaseController');

var x1 =  new BaseController();
x1.addAction({},function(){});
x1.addActions([
    {spec:{}, fn: function(){}}
]);

var x2 =  new BaseController();
x2.addActions([
    {spec:{}, fn: function(){}}
]);

 