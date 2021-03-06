var project = {};
project.controllers = {};

project.app = new Swift.App();

project.controllers.homeController = new project.app.Controller('container', 'home-view');
project.controllers.homeController.$context = {
	name: 'billpull'
};

project.controllers.productController = new project.app.Controller('container', 'product-view');

project.routes = {
	home: new Swift.Route('/home', project.controllers.homeController),
	products: new Swift.Route('/products', project.controllers.productController)
};

project.initialize = function () {
	project.app.run(project.routes, project.routes.home);
};

project.initialize();