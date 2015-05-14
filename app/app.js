angular.module('app', ['ui.load', 'ngSanitize'])
	.constant('JQ_CONFIG', {
		'redactor' : [
			"js/redactor.js",
            "css/redactor.css"
		]
	})
	.constant('appStatus', {
		editorUpload : '/upload.php',
		editorFiles : '/files/list.json'
	})
	.directive('uiEditor', ['uiLoad', 'JQ_CONFIG', 'appStatus', function(uiLoad, JQ_CONFIG, appStatus){
        return {
            restrict : 'A',
            require : "^ngModel",
            link : function(scope, elm, attr, ngModel){
                var loader = JQ_CONFIG['redactor'],
                    plugins = {
                        'filemanager' : 'js/filemanager.js',
                        'table' : 'js/table.js',
                        'video' : 'js/video.js',
                        'imagemanager' : 'js/image.js'
                    };

                // 获取当前语言环境
                loader.push('js/zh_cn.js');

                // 根据配置加载插件

                uiLoad.load(loader).then(function(){
                    elm.redactor.apply(elm, [{
                        initCallback     : function () {
                            return this.code.set(ngModel.$viewValue);
                        },
                        changeCallback   : function () {
                            // todo 获取form, 验证 是否 valid
                            return ngModel.$setViewValue(this.code.get());
                        },
                        'lang'           : 'zh_cn'
                    }]);
                });
            }
        }
    }])
	.controller('Home', function($scope){
		$scope.data = 'Angular Redactor';
	});