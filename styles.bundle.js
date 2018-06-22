webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "*,\r\n::after,\r\n::before {\r\n    margin: 0;\r\n    padding: 0;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Flama-Book\";\r\n    src: url(\"/C:/Program Files/Git/standards/assets/fonts/Flama-Book.otf\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Oraqle-Script\";\r\n    src: url(\"/C:/Program Files/Git/standards/assets/fonts/Oraqle-Script.otf\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"built_titling_bd\";\r\n    src: url(\"/C:/Program Files/Git/standards/assets/fonts/built_titling_bd.otf\");\r\n}\r\n\r\n@font-face {\r\n    font-family: \"lato\";\r\n    src: url(\"/C:/Program Files/Git/standards/assets/fonts/Lato.ttf\");\r\n}\r\n\r\nhtml {\r\n    --color_white: #FFFFFF;\r\n    --color_black: #000000;\r\n    --color_red: #f85a40;\r\n    --color_green: #30c39e;\r\n    --color_blue:#1b88c5;\r\n    --color_gray_1:#F3F4F7;\r\n    --color_gray_2:#CACCD1;\r\n    --color_gray_3:#52565e;\r\n    --built: \"built_titling_bd\";\r\n    --oraqle: \"Oraqle-Script\";\r\n    --Flama: \"Flama-Book\";\r\n    --mainwidthmenu: 270px;\r\n\r\n    /*colores para la tabla*/\r\n    --table_red:#e51b3d;\r\n    --table_blue:#1b88c5;\r\n    --table_yellow:#ecb216;\r\n    --table_green:#99bf2b;\r\n}\r\n\r\nbody {\r\n    background:var(--color_gray_1);\r\n    \r\n}\r\n\r\n/*estilos de la estructura base de la app*/\r\n\r\n.app__main {\r\n    width: 100%;\r\n    min-height: 100vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.app__navbar {\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    left: -100%;\r\n    bottom: 0;\r\n    z-index: 100;\r\n    background: rgba(255,255,255,.6);\r\n    overflow-y: auto;\r\n    -webkit-transition: all 0.4s linear;\r\n    transition: all 0.4s linear;\r\n}\r\n\r\n.menu__show {\r\n    left: 0;\r\n}\r\n\r\n.app__containt {\r\n    width: 100%;\r\n}\r\n\r\n.secction__component {\r\n    width: 90%;\r\n    margin: 1em auto;\r\n    margin-top: 80px;\r\n}\r\n\r\n/*************************************/\r\n\r\n/*estilos para el login*/\r\n\r\n.login__seccion {\r\n    min-width: 100%;\r\n    min-height: 100vh;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n    -ms-flex-pack: center;\r\n    justify-content: center;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    background-image: url(\"/C:/Program Files/Git/standards/assets/img/fondo.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.login {\r\n    max-width: 420px;\r\n    width: 90%;\r\n    background: var(--color_white);\r\n    padding-bottom: 2em;\r\n    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.16);\r\n            box-shadow: 0 2px 4px rgba(0,0,0,.16);\r\n    border-radius: 5px;\r\n}\r\n\r\n.login__content {\r\n    width: 100%;\r\n    padding: 1em;\r\n}\r\n\r\n.login__img {\r\n    margin: 1.5em auto;\r\n}\r\n\r\n.login__btn {\r\n    background: var(--color_blue);\r\n    color: var(--color_white);\r\n     font-family: var(--Flama);\r\n}\r\n\r\n.login__link {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: center;\r\n    color: var(--color_black);\r\n    font-family: var(--Flama);\r\n}\r\n\r\ninput[type=\"email\"],\r\ninput[type=\"password\"]{\r\n    font-family: var(--Flama);\r\n}\r\n\r\n/*************************************/\r\n\r\n/*estilos para el encabezado de la pagina*/\r\n\r\n.nabvar {\r\n    width: 100%;\r\n    height: 50px;\r\n    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-line-pack: center;\r\n    align-content: center;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    background: var(--color_white);\r\n    position: fixed;\r\n    top: 0;\r\n    z-index: 3;\r\n}\r\n\r\n.nabvar__button {\r\n    font-size: 1.1em;\r\n    margin-bottom: 0;\r\n    padding: 0 1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.nabvar__title{\r\n   width: 90px;\r\n   height: 50px;\r\n   padding: .3em;\r\n   display: -webkit-box;\r\n   display: -ms-flexbox;\r\n   display: flex;\r\n   -webkit-box-pack: justify;\r\n       -ms-flex-pack: justify;\r\n           justify-content: space-between;\r\n   -webkit-box-align: center;\r\n       -ms-flex-align: center;\r\n           align-items: center;\r\n   margin-left: 1em;\r\n}\r\n\r\na.nabvar__icon{\r\n    width: 35px;\r\n    height: 35px;\r\n    background: var(--color_blue);\r\n    border-radius: 50%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n.nabvar__icon > i.fa{\r\n  color: var(--color_white);\r\n    font-size: 1.3em;\r\n    margin: auto;\r\n\r\n}\r\n\r\n/*************************************/\r\n\r\n/*estilos para la barra de navegacion*/\r\n\r\n.menu {\r\n    width: var(--mainwidthmenu);\r\n    background: var(--color_white);\r\n    position: absolute;\r\n    min-height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    font-family: var(--Flama);\r\n    -webkit-box-shadow: 2px 0 10px rgba(0,0,0,.2);\r\n    box-shadow: 2px 0 10px rgba(0,0,0,.2);\r\n}\r\n\r\n.menu__header {\r\n    width: 100%;\r\n    min-height: 200px;\r\n    padding: 1em;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    -webkit-box-pack: end;\r\n    -ms-flex-pack: end;\r\n    justify-content: flex-end;\r\n}\r\n\r\n.menu__img {\r\n    width: 100px;\r\n    height: 100px;\r\n    margin-bottom: 0.5em;\r\n    border-radius: 50%;\r\n    overflow: hidden;\r\n}\r\n\r\n.menu_img > img{\r\n    border-radius: 50%;\r\n}\r\n\r\n.menu__name {\r\n    font-weight: bold;\r\n}\r\n\r\n.menu__email,\r\n.menu__name {\r\n    font-size: 1em;\r\n    color: var(--color_black);\r\n    margin-bottom: 0;\r\n    font-family: lato;\r\n}\r\n\r\n.menu__content {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n}\r\n\r\n.card-header {\r\n    padding: 0;\r\n}\r\n\r\n.collapsed{\r\n    text-decoration: none !important;\r\n    color: var(--color_black) !important;\r\n}\r\n\r\n.btn-link:hover{\r\n    text-decoration: none !important;\r\n    color: var(--color_black) !important;\r\n}\r\n\r\n.btn-link {\r\n    text-decoration: none !important;\r\n    color: var(--color_black) !important;\r\n}\r\n\r\n.contacts {\r\n    padding: 0.5em 0 0;\r\n    margin: 0 1em 0.5em;\r\n    color: var(--color_black);\r\n    text-transform: uppercase;\r\n    font-size: 1em;\r\n    font-family: lato;\r\n    font-weight: bold;\r\n}\r\n\r\n.cont{\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    border-bottom: solid 1px #c2c2c2;\r\n}\r\n\r\n.info__cont{\r\n    font-family: lato;\r\n    width: 90%;\r\n    padding: 0 0 0 15px;\r\n}\r\n\r\n.contacts ~ ul {\r\n    list-style: none;\r\n}\r\n\r\n.contacts__item > a {\r\n    margin: 0 1em;\r\n    font-size: 0.8em;\r\n    color: rgba(255, 255, 255, .5);\r\n    padding: 0.2em 0;\r\n}\r\n\r\n.contacts__item > a  > i.fa,\r\n.menu__item > i.fa {\r\n    margin-right: 1em;\r\n    color: var(--color_black);\r\n}\r\n\r\n.contacts__item:last-of-type {\r\n    border-bottom: 1px solid rgba(255,255,255,.1);\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.menu__item {\r\n    display: block;\r\n    font-size: 0.7em;\r\n    margin: 0;\r\n    padding: 0.5em 1em;\r\n    color: var(--color_black) !important;\r\n    -webkit-transition: all 0.5s linear;\r\n    transition: all 0.5s linear;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.active,\r\n.menu__item:hover {\r\n    background: -webkit-gradient(linear,right bottom, left top,from(var(--color_blue)),to(var(--color_blue)));\r\n    background: linear-gradient(to top left,var(--color_blue),var(--color_blue));\r\n    text-decoration: none;\r\n    color: var(--color_white) !important;\r\n}\r\n\r\n.menu__footer {\r\n    text-align: center;\r\n    padding: 0.5em 0;\r\n    font-size: 0.9em;\r\n    color: var(--color_white);\r\n}\r\n\r\n/*ESTILOS PARA LA VISTA DETAILS STANDARS*/\r\n\r\n.title {\r\n    font-size: 1.8em;\r\n    text-align: center;\r\n    margin-bottom: 0.5em;\r\n    font-family: lato;\r\n    color:var(--color_blue);\r\n}\r\n\r\n.paragraph{\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n}\r\n\r\nh5 span th{\r\n    font-family: lato;\r\n}\r\n\r\n.detal-standars {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n}\r\n\r\n.standars {\r\n    -ms-flex-preferred-size: 100%;\r\n    flex-basis: 100%;\r\n    margin-bottom: 1.5em;\r\n    border-radius: 0.5em;\r\n    border: 1.5px solid #F3F4F7;\r\n    background: var(--color_gray_1);\r\n}\r\n\r\n.standars_content{\r\n    width: 45%;\r\n    margin: 1em auto;\r\n}\r\n\r\n.standars_title{\r\n    font-size: 1em;\r\n    text-align: center;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    border-bottom: 2px solid var(--color_blue);\r\n    margin-left: 1em;\r\n    margin-right: 1em;\r\n    margin-bottom: 2em;\r\n}\r\n\r\n.background-red{\r\nbackground: var(--color_red);\r\n}\r\n\r\n.background-green{\r\n  background: var(--color_green);\r\n}\r\n\r\n/*modulo de los input radio*/\r\n\r\ninput[type=\"radio\"].radio {\r\n    display: block;\r\n    position: relative;\r\n    width: 20px;\r\n    height: 20px;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: transparent;\r\n    outline: none;\r\n    border-radius: 50px;\r\n    -webkit-transition: all 0.5s ease-in;\r\n    transition: all 0.5s ease-in;\r\n    border: 3px solid #c6c6c6;\r\n}\r\n\r\ninput:checked[type=\"radio\"] {\r\n    border: 3px solid var(--color_blue);\r\n}\r\n\r\ninput:checked[type=\"radio\"].false {\r\n    border: 3px solid #c6c6c6;\r\n\r\n}\r\n\r\ninput[type=\"radio\"]:before {\r\n    content: '';\r\n    position: absolute;\r\n    width: 9px;\r\n    height: 9px;\r\n    top: 50%;\r\n    left: 50%;\r\n    border-radius: 50px;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    -webkit-transition: 0.5s ease-in-out;\r\n    -webkit-transition: all 0.5s ease-in-out;\r\n    transition: all 0.5s ease-in-out;\r\n}\r\n\r\ninput:checked[type=\"radio\"]:before {\r\n    background: var(--color_blue);\r\n    opacity: 1;\r\n}\r\n\r\ninput:checked[type=\"radio\"].false:before {\r\n    background: #c6c6c6;\r\n    opacity: 1;\r\n}\r\n\r\n/*************************************/\r\n\r\n/*modficacion de las tablas*/\r\n\r\ntable.table td,\r\ntable.table th {\r\n    padding: 0.5em;\r\n    font-family: lato;\r\n}\r\n\r\n.detall-secction {\r\n    background: var(--color_white);\r\n    border-radius: 5px;\r\n    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\r\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\r\n}\r\n\r\n/*filtros para las imagenes dependiendo del estado*/\r\n\r\ndiv.standars > div{\r\n    border-radius:5px; \r\n}\r\n\r\n.loaders{\r\n        width: 100%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: justify;\r\n            -ms-flex-pack: justify;\r\n                justify-content: space-between;\r\n        -webkit-box-align: center;\r\n            -ms-flex-align: center;\r\n                align-items: center;\r\n        height: 30px;\r\n        overflow: hidden;\r\n        padding-top: 1em;\r\n    }\r\n\r\n.loader {\r\n  margin: 0 0 2em;\r\n  width: 20%;\r\n  text-align: center;\r\n  padding: 1em;\r\n  margin: 0 auto 1em;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n}\r\n\r\n/*\r\n  Set the color of the icon\r\n*/\r\n\r\nsvg path,\r\nsvg rect {\r\n  fill: var(--color_blue);\r\n}\r\n\r\n@media screen and (min-width:420px) {\r\n\r\n    .login {\r\n        margin: auto;\r\n        \r\n    }\r\n}\r\n\r\n@media screen and (min-width:500px) {\r\n    .standars {\r\n        -ms-flex-preferred-size: 48%;\r\n        flex-basis: 48%;\r\n\r\n    }\r\n}\r\n\r\n@media screen and (min-width:992px) {\r\n    .app__navbar {\r\n        width: var(--mainwidthmenu);\r\n        left: 0 !important;\r\n    }\r\n    .app__containt {\r\n        width: calc(100% - var(--mainwidthmenu));\r\n        margin-left: var(--mainwidthmenu);\r\n    }\r\n    #btn_menu {\r\n        display: none;\r\n    }\r\n\r\n    .standars {\r\n        -ms-flex-preferred-size: 30%;\r\n        flex-basis: 30%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css", function() {
			var newContent = require("!!../node_modules/raw-loader/index.js!../node_modules/postcss-loader/lib/index.js??embedded!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map