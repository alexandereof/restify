var t = require('./rest-services/person');

var fs = require('fs');
var path = require('path');
var dir_rest_services = path.join(__dirname, 'rest-services');

var restify = require('restify');
var server = restify.createServer();
console.log(dir_rest_services);
var controllers =[];
require("fs").readdirSync(dir_rest_services).forEach(function(file) {
  console.log(file);
  controllers.push(require('./rest-services/' + file));
});

console.log(controllers)

controllers.forEach( (definition)=>{
    var root = '/'+ definition.name;
    definition.actions.forEach((action)=>{
        
        switch (action.type) {
            case 'GET':
                server.get({
                    path:  root + action.path,
                }, action.action);
                break;
            case 'PUT':
                server.put();
                break;
            case 'POST':
                server.post();
                break;
            case 'DELETE':
                server.del();
                break;
            case 'OPTIONS':
                server.opts();
                break;
            default:
                break;
        }
    });
});
server.listen(8888, function() {
  console.log('%s listening at %s', server.name, server.url);
});