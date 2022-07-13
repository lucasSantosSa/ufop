const { Router } = require('express');
const routes = Router();


const sidebarController = require('./Controllers/sidebarController')

routes.get( '/Home',         sidebarController.home          );
routes.get( '/Dashboard',    sidebarController.dashboard     );
routes.get( '/MoreProjects', sidebarController.moreProjects  );
routes.get( '/Contact',      sidebarController.contact       );
routes.get( '/AboutUs',      sidebarController.aboutUs       );

module.exports = routes;