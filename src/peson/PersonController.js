define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    return {
        name: 'person',
        preAutorize: 'role-name',
    }
});