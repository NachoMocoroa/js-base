const utils = (function () {

    const module = {};

	module._init = function () {
		console.log('utils init');
	};

	return {
		init: module._init,
	};

})();
