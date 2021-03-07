module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("uU/V");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KV1Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return twoDecimals; });
/**
 * Display the number to have 2 digits
 * @param {*} number 
 */
const twoDecimals = number => parseFloat(number).toFixed(2);

/***/ }),

/***/ "RkzC":
/***/ (function(module, exports) {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ "T00j":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VjkH");
/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("os/r");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])();
let magic;
const AuthProvider = props => {
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  /**
   * Log the user in
   * @param {string} email 
   */

  const loginUser = async email => {
    try {
      await magic.auth.loginWithMagicLink({
        email
      });
      setUser({
        email
      });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Log the user out
   */


  const logoutUser = async () => {
    try {
      await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * If user is logged in, get data and display it
   */


  const checkUserLoggedIn = async () => {
    try {
      const isLoggedIn = await magic.user.isLoggedIn();

      if (isLoggedIn) {
        const {
          email
        } = await magic.user.getMetadata();
        setUser({
          email
        }); //Add this just for test

        const token = await getToken();
        console.log("checkUserLoggedIn token", token);
      }
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Retrieve Magic Issued Bearer Token
   * This allows User to make authenticated requests
   */


  const getToken = async () => {
    try {
      const token = await magic.user.getIdToken();
      return token;
    } catch (err) {
      console.log(err);
    }
  };
  /**
   * Reload user login on app refresh
   */


  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_2__["Magic"](_utils_urls__WEBPACK_IMPORTED_MODULE_3__[/* MAGIC_PUBLIC_KEY */ "b"]);
    checkUserLoggedIn();
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(AuthContext.Provider, {
    value: {
      user,
      logoutUser,
      loginUser,
      getToken
    },
    children: props.children
  });
};
/* harmony default export */ __webpack_exports__["b"] = (AuthContext);

/***/ }),

/***/ "VjkH":
/***/ (function(module, exports) {

module.exports = require("magic-sdk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "os/r":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MAGIC_PUBLIC_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return STRIPE_PK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return fromImageToUrl; });
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1338";
const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_42B2064C668798B5';
const STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_42B2064C668798B5';
/**
 * Given a image object return the proper path to display it
 * Provides a default as well
 * @param {any} image 
 */

const fromImageToUrl = image => {
  if (!image) {
    return "/vercel.svg"; //Or default image here
  }

  if (image.url.indexOf("/") === 0) {
    //It's a relative url, add API URL
    return `${API_URL}${image.url}`;
  }

  return image.url;
};

/***/ }),

/***/ "taos":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"buy": "BuyButton_buy__2kfVO"
};


/***/ }),

/***/ "uU/V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });
__webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return /* binding */ getStaticPaths; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__("RkzC");

// EXTERNAL MODULE: ./utils/urls.js
var urls = __webpack_require__("os/r");

// EXTERNAL MODULE: ./styles/BuyButton.module.css
var BuyButton_module = __webpack_require__("taos");
var BuyButton_module_default = /*#__PURE__*/__webpack_require__.n(BuyButton_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./context/AuthContext.js
var AuthContext = __webpack_require__("T00j");

// CONCATENATED MODULE: ./components/BuyButton.js









const stripePromise = Object(stripe_js_["loadStripe"])(urls["c" /* STRIPE_PK */]);
function BuyButton({
  product
}) {
  const {
    user,
    getToken
  } = Object(external_react_["useContext"])(AuthContext["b" /* default */]);
  const router = Object(router_["useRouter"])();

  const handleBuy = async e => {
    const stripe = await stripePromise;
    const token = await getToken();
    console.log("handleBuy token", token);
    e.preventDefault();
    const res = await fetch(`${urls["a" /* API_URL */]}/orders/`, {
      method: 'POST',
      body: JSON.stringify({
        product
      }),
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const session = await res.json();
    console.log("session", session);
    const result = await stripe.redirectToCheckout({
      sessionId: session.id
    });
  };

  const redirectToLogin = async () => {
    router.push('/login');
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [user && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: BuyButton_module_default.a.buy,
      onClick: handleBuy,
      children: "BUY"
    }), !user && /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
      className: BuyButton_module_default.a.buy,
      onClick: redirectToLogin,
      children: "Login to Buy"
    })]
  });
}
// EXTERNAL MODULE: ./utils/format.js
var format = __webpack_require__("KV1Y");

// CONCATENATED MODULE: ./pages/products/[slug].js







const Product = ({
  product
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [product.meta_title && /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: product.meta_title
      }), product.meta_description && /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: product.meta_description
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: product.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      src: Object(urls["d" /* fromImageToUrl */])(product.image)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
      children: product.name
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(BuyButton, {
      product: product
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
      children: ["$", Object(format["a" /* twoDecimals */])(product.price)]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
      children: product.content
    })]
  });
};

async function getStaticProps({
  params: {
    slug
  }
}) {
  const product_res = await fetch(`${urls["a" /* API_URL */]}/products/?slug=${slug}`);
  const found = await product_res.json();
  return {
    props: {
      product: found[0]
    }
  };
}
async function getStaticPaths() {
  // Get external data from the file system, API, DB, etc.
  const products_res = await fetch(`${urls["a" /* API_URL */]}/products`);
  const products = await products_res.json();
  return {
    paths: products.map(el => ({
      params: {
        slug: String(el.slug)
      }
    })),
    fallback: false
  };
}
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });