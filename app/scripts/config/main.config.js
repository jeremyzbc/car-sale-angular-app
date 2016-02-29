angular.module('app.config')
.config([
        'localStorageServiceProvider',
        'RestangularProvider',
        'uiZeroclipConfigProvider',
        '$provide',
        mainConfig
]);
function mainConfig(localStorageServiceProvider,RestangularProvider,uiZeroclipConfigProvider,$provide) {

    localStorageServiceProvider
        .setPrefix('com.buyw.mcwadmin')
        .setStorageType('localStorage')
        .setNotify(true, true);
        //removed BaseUrl
    RestangularProvider.setBaseUrl('');
    RestangularProvider.setDefaultHeaders({
        //removed id and key
        "X-LC-Id":"",
        "X-LC-Key":""
    });

    uiZeroclipConfigProvider.setZcConf({
        swfPath: 'scripts/ZeroClipboard.swf'
    });

    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) {
        taOptions.toolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
            ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
            ['html', 'insertImage','insertLink', 'insertVideo']
        ];
        return taOptions;
    }]);
};
