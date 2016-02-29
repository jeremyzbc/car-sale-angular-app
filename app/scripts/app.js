/**
 * Created by ww on 2015/3/24.
 */
angular.module('app', [
    'app.core',
    'app.config',
    'app.run',
    'app.value',
    'app.service',
    'app.filter',
    'app.directive',
    'app.object',
    'app.controller'
]);
angular.module('app.core', [

    'isteven-multi-select',

    'restangular',

    'zeroclipboard',

    //'angular-sanitize',
    'textAngular',

    'ngFileUpload',
    'LocalStorageModule',
    'angular-confirm',
    //ui-grid
    'ui.bootstrap',
    'ui.tree',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.selection',
    'ui.grid.exporter',
    'ui.grid.resizeColumns',
    'ui.grid.moveColumns',
    'ui.router'
]);
angular.module('app.config', ['ui.router']);
angular.module('app.service', []);
angular.module('app.run', []);
angular.module('app.filter', []);
angular.module('app.value', []);
angular.module('app.controller', []);
angular.module('app.directive', []);
angular.module('app.object', []);

