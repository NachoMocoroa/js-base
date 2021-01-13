const app = (function () {
    const self = this,
        module = {
            utilsScript: 'js/utils.js',

            _errorData(err) {
                console.log('module._errorData - err: ', err);
            },

            _loadScript(url, callback) {
                const s = document.createElement('script');
                s.setAttribute('src', url);
                s.setAttribute('type', 'text/javascript');
                s.setAttribute('async', false);
                s.onerror = module._errorData;
                s.onload = callback;
                document.body.appendChild(s);
            },

            _utilsLoaded(event) {
                console.log('Utils loaded - event: ', event);
                utils.init();
            },

            _initializeScripts() {
                module._loadScript(module.utilsScript, module._utilsLoaded);
            },

            _init() {
                module._initializeScripts();
                console.log('DOMContentLoaded');
            }
        };
    return {
        initAll: module._init
    };
})();

document.addEventListener('DOMContentLoaded', app.initAll);