
var BaseControler = require('com.base.rest-entities').BaseControler;
var updateProfile = require('./actions/updateProfile');
module.exports = {
        path : '/person',
        name: 'person',
        preAutorize: 'role-name',
        actions: [
                updateProfile
        ]
}