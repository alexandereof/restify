
module.exports = {
        name: 'person',
        preAutorize: 'role-name',
        actions: [
                require('./actions/updateProfile')
        ]
}