const { Router } = require('express');
const routes = require('../../../../Practice/backend/src/routes');


const homepageController = require('./Controllers/homepage')

routes.get('/homepage', homepageController.index);

module.exports = routes;