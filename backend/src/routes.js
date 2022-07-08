const { Router } = require('express');
const routes = Router();


const homepageController = require('./Controllers/home')

routes.get('/', homepageController.index);

module.exports = routes;