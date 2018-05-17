webpackJsonp(["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/***/ (function(module, exports) {

module.exports = "*,\n::after,\n::before {\n    margin: 0;\n    padding: 0;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\nimg {\n    display: block;\n    width: 100%;\n}\n\n@font-face {\n    font-family: \"Flama-Book\";\n    src: url(\"/standards/assets/fonts/Flama-Book.otf\");\n}\n\n@font-face {\n    font-family: \"Oraqle-Script\";\n    src: url(\"/standards/assets/fonts/Oraqle-Script.otf\");\n}\n\n@font-face {\n    font-family: \"built_titling_bd\";\n    src: url(\"/standards/assets/fonts/built_titling_bd.otf\");\n}\n\nhtml {\n    --color_white: #FFFFFF;\n    --color_black: #000000;\n    --color_red: #FF0018;\n    --built: \"built_titling_bd\";\n    --oraqle: \"Oraqle-Script\";\n    --Flama: \"Flama-Book\";\n    --mainwidthmenu: 270px;\n\n    /*colores para la tabla*/\n    --table_red:#e51b3d;\n    --table_blue:#1b88c5;\n    --table_yellow:#ecb216;\n    --table_green:#99bf2b;\n}\n\nbody {\n    background: #e6e5e545;\n}\n\n/*estilos de la estructura base de la app*/\n\n.app__main {\n    width: 100%;\n    min-height: 100vh;\n    overflow: hidden;\n}\n\n.app__navbar {\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: -100%;\n    bottom: 0;\n    z-index: 100;\n    background: rgba(255,255,255,.6);\n    overflow-y: auto;\n    -webkit-transition: all 0.4s linear;\n    transition: all 0.4s linear;\n}\n\n.menu__show {\n    left: 0;\n}\n\n.app__containt {\n    width: 100%;\n}\n\n.secction__component {\n    width: 90%;\n    margin: 1em auto;\n}\n\n/*************************************/\n\n/*estilos para el login*/\n\n.login {\n    max-width: 420px;\n    width: 100%;\n    background: var(--color_white);\n    padding-bottom: 2em;\n    -webkit-box-shadow: 0 2px 4px rgba(0,0,0,.16);\n            box-shadow: 0 2px 4px rgba(0,0,0,.16);\n    height: 100vh;\n}\n\n.login__title {\n    width: 100%;\n    background: var(--color_red);\n    font-size:1.5em;\n    padding: 0.3em 0.7em;\n    color: var(--color_white);\n    font-family: var(--built);\n    text-align: center;\n}\n\n.login__content {\n    width: 100%;\n    padding: 1em;\n}\n\n.login__img {\n    width: 50%;\n    margin: 2em auto 3em;\n}\n\n.login__btn {\n    background: var(--color_red);\n    color: var(--color_white);\n     font-family: var(--Flama);\n}\n\n.login__link {\n    display: block;\n    width: 100%;\n    text-align: center;\n    color: var(--color_black);\n    font-family: var(--Flama);\n}\n\ninput[type=\"email\"],\ninput[type=\"password\"]{\n    font-family: var(--Flama);\n}\n\n/*************************************/\n\n/*estilos para el encabezado de la pagina*/\n\n.nabvar {\n    width: 100%;\n    height: 50px;\n    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    background: var(--color_white);\n}\n\n.nabvar__button {\n    font-size: 1.1em;\n    margin-bottom: 0;\n    padding: 0 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.nabvar__title{\n   width: 50px;\n   height: 50px;\n   padding: .3em;\n}\n\n.nabvar__title > img{\n    display: block;\n    width:100%;\n}\n\n/*************************************/\n\n/*estilos para la barra de navegacion*/\n\n.menu {\n    width: var(--mainwidthmenu);\n    background: black;\n    position: absolute;\n    min-height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    font-family: var(--Flama);\n    -webkit-box-shadow: 2px 0 10px rgba(0,0,0,.2);\n    box-shadow: 2px 0 10px rgba(0,0,0,.2);\n}\n\n.menu__header {\n    background-image: url('bn.d1c100cf2c4cca0a09fc.png');\n    width: 100%;\n    min-height: 200px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position: center;\n    padding: 1em;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end;\n}\n\n.menu__img {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 0.5em;\n    border-radius: 50%;\n    overflow: hidden;\n}\n\n.menu_img > img{\n    border-radius: 50%;\n}\n\n.menu__name {\n    font-weight: bold;\n}\n\n.menu__email,\n.menu__name {\n    font-size: 1em;\n    color: #fff;\n    margin-bottom: 0;\n}\n\n.menu__content {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n}\n\n.contacts {\n    padding: 0.5em 0 0;\n    margin: 0 1em 0.5em;\n    color: var(--color_white);\n    text-transform: uppercase;\n    font-size: 0.7em;\n}\n\n.contacts ~ ul {\n    list-style: none;\n}\n\n.contacts__item > a {\n    margin: 0 1em;\n    font-size: 0.8em;\n    color: rgba(255, 255, 255, .5);\n    padding: 0.2em 0;\n}\n\n.contacts__item > a  > i.fa,\n.menu__item > i.fa {\n    margin-right: 1em;\n    color: var(--color_white);\n}\n\n.contacts__item:last-of-type {\n    border-bottom: 1px solid rgba(255,255,255,.1);\n    padding-bottom: 1em;\n}\n\n.menu__item {\n    display: block;\n    font-size: 0.7em;\n    margin: 0;\n    padding: 0.5em 1em;\n    color: var(--color_white) !important;\n    -webkit-transition: all 0.5s linear;\n    transition: all 0.5s linear;\n    text-transform: uppercase;\n}\n\n.active,\n.menu__item:hover {\n    background: -webkit-gradient(linear,right bottom, left top,from(var(--color_red)),to(var(--color_black)));\n    background: linear-gradient(to top left,var(--color_red),var(--color_black));\n    text-decoration: none;\n    color: var(--color_white);\n}\n\n.menu__footer {\n    text-align: center;\n    padding: 0.5em 0;\n    font-size: 0.9em;\n    color: var(--color_white);\n}\n\n/*ESTILOS PARA LA VISTA DETAILS STANDARS*/\n\n.title {\n    font-size: 3em;\n    text-align: center;\n    margin-bottom: 0.5em;\n    font-family: var(--built);\n}\n\n.detal-standars {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n}\n\n.standars {\n    -ms-flex-preferred-size: 48%;\n    flex-basis: 48%;\n    margin-bottom: 1em;\n    border-radius: 0.5em;\n    -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);\n}\n\n.standars > img {\n    border-radius: 0.5em;\n}\n\n/*modulo de los input radio*/\n\ninput[type=\"radio\"].radio {\n    display: block;\n    position: relative;\n    width: 20px;\n    height: 20px;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    background: transparent;\n    outline: none;\n    border-radius: 50px;\n    -webkit-transition: all 0.5s ease-in;\n    transition: all 0.5s ease-in;\n    border: 3px solid #c6c6c6;\n}\n\ninput:checked[type=\"radio\"] {\n    border: 3px solid #ff0018;\n}\n\ninput:checked[type=\"radio\"].false {\n    border: 3px solid #c6c6c6;\n\n}\n\ninput[type=\"radio\"]:before {\n    content: '';\n    position: absolute;\n    width: 9px;\n    height: 9px;\n    top: 50%;\n    left: 50%;\n    border-radius: 50px;\n    -webkit-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    -webkit-transition: 0.5s ease-in-out;\n    -webkit-transition: all 0.5s ease-in-out;\n    transition: all 0.5s ease-in-out;\n}\n\ninput:checked[type=\"radio\"]:before {\n    background: #ff0018;\n    opacity: 1;\n}\n\ninput:checked[type=\"radio\"].false:before {\n    background: #c6c6c6;\n    opacity: 1;\n}\n\n/*************************************/\n\n/*modficacion de las tablas*/\n\ntable.table td,\ntable.table th {\n    padding: 0.5em;\n    font-family: var(--Flama);\n}\n\n/*pintando los tr de los colores de los estandares*/\n\ntable.table > tbody > tr:nth-of-type(1),\ntable.table > tbody > tr:nth-of-type(2),\ntable.table > tbody > tr:nth-of-type(3){\n    background: var(--table_red);\n}\n\ntable.table > tbody > tr:nth-of-type(4),\ntable.table > tbody > tr:nth-of-type(5),\ntable.table > tbody > tr:nth-of-type(6),\ntable.table > tbody > tr:nth-of-type(7){\n    background: var(--table_green);\n}\n\ntable.table > tbody > tr:nth-of-type(9),\ntable.table > tbody > tr:nth-of-type(10),\ntable.table > tbody > tr:nth-of-type(11){\n    background: var(--table_blue);\n}\n\ntable.table > tbody > tr:nth-of-type(12),\ntable.table > tbody > tr:nth-of-type(8),\ntable.table > tbody > tr:nth-of-type(13),\ntable.table > tbody > tr:nth-of-type(14),\ntable.table > tbody > tr:nth-of-type(15),\ntable.table > tbody > tr:nth-of-type(16){\n    background: var(--table_yellow);\n}\n\n.detall-secction {\n    background: var(--color_white);\n    border-radius: 5px;\n    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\n    box-shadow: 0 2px 6px rgba(0, 0, 0, .06);\n}\n\n/*filtros para las imagenes dependiendo del estado*/\n\ndiv.standars > div{\n    height: 200px;\n    border-radius:5px; \n}\n\ndiv.standars:nth-child(1),\ndiv.standars:nth-of-type(2),\ndiv.standars:nth-of-type(3){\n    background: var(--table_red);\n}\n\ndiv.standars:nth-of-type(4),\ndiv.standars:nth-of-type(5),\ndiv.standars:nth-of-type(6),\ndiv.standars:nth-of-type(7){\n    background: var(--table_green);\n}\n\ndiv.standars:nth-of-type(9),\ndiv.standars:nth-of-type(10),\ndiv.standars:nth-of-type(11){\n    background: var(--table_blue);\n}\n\ndiv.standars:nth-of-type(12),\ndiv.standars:nth-of-type(8),\ndiv.standars:nth-of-type(13),\ndiv.standars:nth-of-type(14),\ndiv.standars:nth-of-type(15),\ndiv.standars:nth-of-type(16){\n    background: var(--table_yellow);\n}\n\ndiv.img-null {\n    background: #cecece;\n    }\n\ndiv.img-false {\n   background: var(--color_black) !important;\n    }\n\n.loaders{\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: justify;\n            -ms-flex-pack: justify;\n                justify-content: space-between;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        height: 30px;\n        overflow: hidden;\n        padding-top: 1em;\n    }\n\n.loader {\n  margin: 0 0 2em;\n  width: 20%;\n  text-align: center;\n  padding: 1em;\n  margin: 0 auto 1em;\n  display: inline-block;\n  vertical-align: top;\n}\n\n/*\n  Set the color of the icon\n*/\n\nsvg path,\nsvg rect {\n  fill: var(--color_red);\n}\n\n@media screen and (min-width:420px) {\n    .login__seccion {\n        min-width: 100%;\n        min-height: 100vh;\n        background: var(--color_white);\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n        -ms-flex-pack: center;\n        justify-content: center;\n        -webkit-box-align: center;\n        -ms-flex-align: center;\n        align-items: center;\n    }\n    .login {\n        margin: auto;\n        height: 520px;\n    }\n}\n\n@media screen and (min-width:600px) {\n    .standars {\n        -ms-flex-preferred-size: 30%;\n        flex-basis: 30%;\n\n    }\n}\n\n@media screen and (min-width:992px) {\n    .app__navbar {\n        width: var(--mainwidthmenu);\n        left: 0 !important;\n    }\n    .app__containt {\n        width: calc(100% - var(--mainwidthmenu));\n        margin-left: var(--mainwidthmenu);\n    }\n    #btn_menu {\n        display: none;\n    }\n\n    .standars {\n        -ms-flex-preferred-size: 21%;\n        flex-basis: 23%;\n    }\n}\n"

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