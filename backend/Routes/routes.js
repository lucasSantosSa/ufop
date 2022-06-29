const { Router } = require('express');
const routes = Router();


const homepageController = require('./Controllers/homepage')

routes.get('/homepage', homepageController.index);

module.exports = routes;