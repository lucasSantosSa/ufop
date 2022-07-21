const { Router } = require('express');
const routes = Router();


const sidebarController = require('./Controllers/sidebarController')

routes.get( '/home',         sidebarController.home          );
routes.get( '/dashboard',    sidebarController.dashboard     );
routes.get( '/moreprojects', sidebarController.moreProjects  );
routes.get( '/contact',      sidebarController.contact       );
routes.get( '/aboutus',      sidebarController.aboutUs       );

module.exports = routes;