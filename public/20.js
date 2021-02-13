(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Product/AddProduct.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Product/AddProduct.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pull-right {\n    float: right;\n}\n\n.table-button {\n    float: right;\n    margin-top: -30px;\n}\n\n.ck-editor__editable_inline {\n    height: 130px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/Views/Layouts/PageHeader/PageHeader.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function PageHeader(_ref) {
  var breadCrumbs = _ref.breadCrumbs,
      Module = _ref.Module;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "page-header-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-inline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, breadCrumbs)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "breadcrumb-container",
    "aria-label": "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ik ik-home"
  }))), Module && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "breadcrumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, Module)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: breadCrumbs && "breadcrumb-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, breadCrumbs))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PageHeader));

/***/ }),

/***/ "./resources/js/components/Views/Product/AddProduct.module.css":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Views/Product/AddProduct.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./AddProduct.module.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Product/AddProduct.module.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/Views/Product/EditProduct.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Views/Product/EditProduct.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddProduct_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddProduct.module.css */ "./resources/js/components/Views/Product/AddProduct.module.css");
/* harmony import */ var _AddProduct_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AddProduct_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pathofdev_react_tag_input_build_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pathofdev/react-tag-input/build/index.css */ "./node_modules/@pathofdev/react-tag-input/build/index.css");
/* harmony import */ var _pathofdev_react_tag_input_build_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pathofdev_react_tag_input_build_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var _customHooks_useForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../customHooks/useForms */ "./resources/js/components/customHooks/useForms.js");
/* harmony import */ var _pathofdev_react_tag_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pathofdev/react-tag-input */ "./node_modules/@pathofdev/react-tag-input/build/module/index.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! simple-react-validator */ "./node_modules/simple-react-validator/dist/simple-react-validator.min.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_slugger_Slugger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../helpers/slugger/Slugger */ "./resources/js/components/helpers/slugger/Slugger.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var EditProduct = function EditProduct(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      category = _useState2[0],
      setCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      subCategory = _useState4[0],
      setSubCategory = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      brand = _useState6[0],
      setBrand = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      unit = _useState8[0],
      setUnit = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState10 = _slicedToArray(_useState9, 2),
      slugWarning = _useState10[0],
      setSlugWarning = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setError = _useState12[1];

  var simpleValidator = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(new simple_react_validator__WEBPACK_IMPORTED_MODULE_8___default.a());

  var _useForms = Object(_customHooks_useForms__WEBPACK_IMPORTED_MODULE_6__["default"])({
    product_name: "",
    product_slug: "",
    product_sku: "",
    category_id: "",
    subcategory_id: "",
    brand_id: "",
    purchase_price: "",
    sell_price: "",
    unit_id: "",
    product_alert_qty: "",
    product_tags: [],
    status: "",
    description: ""
  }),
      _useForms2 = _slicedToArray(_useForms, 3),
      editProduct = _useForms2[0],
      setEditProduct = _useForms2[1],
      handleChange = _useForms2[2];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getProduct();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getCategory();
    getBrand();
    getUnit();
  }, []);

  var getProduct = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/products/".concat(props.productId, "/edit")).then(function (response) {
                var editData = response.data.data;
                var productTags = [];
                setEditProduct(_objectSpread(_objectSpread({}, editProduct), editData));

                for (var index = 0; index < editData.tags.length; index++) {
                  productTags.push(editData.tags[index].tags);
                }

                setEditProduct(_objectSpread(_objectSpread({}, editData), {}, _defineProperty({}, "product_tags", productTags)));
              })["catch"](function (error) {
                console.log(error);
              });

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getProduct() {
      return _ref.apply(this, arguments);
    };
  }();

  var getCategory = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/all_categories").then(function (response) {
                setCategory(response.data.data);
              })["catch"](function (error) {
                console.log(error);
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function getCategory() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getSubCategory = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var category_id;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              category_id = event.target.value;
              _context3.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/subcategory_get/".concat(category_id)).then(function (response) {
                setSubCategory(response.data.data);
              })["catch"](function (error) {
                console.log(error);
              });

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getSubCategory(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var getBrand = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/all_brand_get").then(function (response) {
                setBrand(response.data.data);
              })["catch"](function (error) {
                console.log(error);
              });

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function getBrand() {
      return _ref4.apply(this, arguments);
    };
  }();

  var getUnit = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/all_unit_get").then(function (response) {
                setUnit(response.data.data);
              })["catch"](function (error) {
                console.log(error);
              });

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function getUnit() {
      return _ref5.apply(this, arguments);
    };
  }();

  var setTags = function setTags(newTags) {
    setEditProduct(_objectSpread(_objectSpread({}, editProduct), {}, _defineProperty({}, "product_tags", newTags)));
  };

  var setDescription = function setDescription(description) {
    setEditProduct(_objectSpread(_objectSpread({}, editProduct), {}, _defineProperty({}, "description", description)));
  };

  var slugger = function slugger(event) {
    var name = event.target.value;

    if (name == "") {
      setSlugWarning("Name field is empty");
      return;
    }

    setSlugWarning("");
    var slug = Object(_helpers_slugger_Slugger__WEBPACK_IMPORTED_MODULE_9__["default"])(name); // Check slug availability from database

    axios__WEBPACK_IMPORTED_MODULE_13___default.a.get("/product_slug_check/".concat(slug)).then(function (response) {
      if (response.status == 204) {
        setEditProduct(_objectSpread(_objectSpread({}, editProduct), {}, _defineProperty({}, "product_slug", slug)));
      } else {
        setSlugWarning("This slug is recorded already");
      }
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var updateHandler = function updateHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_13___default.a.put("/products/".concat(editProduct.product_id), editProduct).then(function (response) {
      // if (response.data.code === 201) {
      react_toastify__WEBPACK_IMPORTED_MODULE_12__["toast"].success("Product Data Updated Successfully!"); // }
    })["catch"](function (error) {
      if (error.response) {
        setError(error.response.data.errors);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    breadCrumbs: props.breadCrumbs,
    Module: props.Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h3", null, "Edit Product"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-info table-button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    to: {
      pathname: "/product/product-list",
      state: "Product"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("i", {
    className: "ik ik-clipboard"
  }), "Product List")), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("form", {
    onSubmit: updateHandler,
    id: "product-from"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "product_name",
    value: editProduct.product_name,
    className: "form-control",
    placeholder: "Enter Product Name",
    onChange: handleChange,
    onBlur: slugger
  }), simpleValidator.current.message("product_name", editProduct.product_name, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.product_name)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Slug:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "product_slug",
    className: "form-control",
    placeholder: "Product Slug",
    value: editProduct.product_slug,
    readOnly: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, slugWarning)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Sku:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "text",
    name: "product_sku",
    value: editProduct.product_sku,
    className: "form-control",
    placeholder: "Enter Product Sku",
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), simpleValidator.current.message("product_sku", editProduct.product_sku, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.product_sku))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Category:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    className: "form-control",
    name: "category_id",
    value: editProduct.category_id,
    onChange: function onChange(e) {
      return handleChange(e), getSubCategory(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    defaultValue: true,
    hidden: true
  }, "--Select Category--"), category.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: category.category_id,
      value: category.category_id
    }, category.category_name);
  })), simpleValidator.current.message("category_id", editProduct.category_id, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.category_id)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Sub Category:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    className: "form-control",
    name: "subcategory_id",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: editProduct.subcategory_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    defaultValue: true,
    hidden: true
  }, "--Select Sub Category--"), subCategory.map(function (sub, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: i,
      value: sub.sub_category_id
    }, sub.sub_category_name);
  })), simpleValidator.current.message("subcategory_id", editProduct.subcategory_id, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.subcategory_id)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Brand:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    className: "form-control",
    name: "brand_id",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: editProduct.brand_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    defaultValue: true,
    hidden: true
  }, "--Select Brand--"), brand.map(function (brand, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: i,
      value: brand.brand_id
    }, brand.brand_name);
  })), simpleValidator.current.message("brand_id", editProduct.brand_id, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.brand_id))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Purchase Price:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    name: "purchase_price",
    className: "form-control",
    placeholder: "Enter Product Purchase Price",
    value: editProduct.purchase_price,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }), simpleValidator.current.message("purchase_price", editProduct.purchase_price, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.purchase_price)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Sell Price:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    name: "sell_price",
    className: "form-control",
    value: editProduct.sell_price,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    placeholder: "Enter Product Sell Price"
  }), simpleValidator.current.message("sell_price", editProduct.sell_price, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.sell_price)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Unit:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    className: "form-control",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    name: "unit_id",
    value: editProduct.unit_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    defaultValue: true,
    hidden: true
  }, "--Select Unit--"), unit.map(function (unit, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
      key: i,
      value: unit.unit_id
    }, unit.unit_name);
  })), simpleValidator.current.message("unit_id", editProduct.unit_id, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.unit_id))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Alert Quantity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    type: "number",
    name: "product_alert_qty",
    className: "form-control",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: editProduct.product_alert_qty,
    placeholder: "Enter Product Alert Quantity"
  }), simpleValidator.current.message("product_alert_qty", editProduct.product_alert_qty, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.product_alert_qty)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Tag:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_pathofdev_react_tag_input__WEBPACK_IMPORTED_MODULE_7__["default"], {
    tags: editProduct.product_tags,
    onChange: function onChange(newTags) {
      return setTags(newTags);
    },
    placeholder: "Product Tags"
  }), simpleValidator.current.message("tags", editProduct.product_tags, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.tags)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("select", {
    name: "status",
    onChange: function onChange(e) {
      return handleChange(e);
    },
    className: "form-control",
    value: editProduct.status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    defaultValue: true,
    hidden: true
  }, "--Select Status--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "1"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("option", {
    value: "0"
  }, "Inactive")), simpleValidator.current.message("status", editProduct.status, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.status))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Product Description:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_10__["CKEditor"], {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_11___default.a,
    name: "description",
    onChange: function onChange(event, editor) {
      var data = editor.getData();
      setDescription(data);
    },
    data: editProduct.description
  }), simpleValidator.current.message("description", editProduct.description, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "text-danger"
  }, error.description)))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "card-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-default"
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
    className: "btn btn-success"
  }, "Save")))));
};

/* harmony default export */ __webpack_exports__["default"] = (EditProduct);

/***/ }),

/***/ "./resources/js/components/customHooks/useForms.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/customHooks/useForms.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useForms = function useForms(initialValues) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];
  /**
   * Form state set function.
   *
   * @param   {object} e Event.
   * @returns {void}.
   */


  var SetInputValues = function SetInputValues(e) {
    if (e.target.files) {
      var files = e.target.files[0];
      var name = e.target.name;
      var reader = new FileReader();

      reader.onload = function (e) {
        setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, name, e.target.result)));
      };

      reader.readAsDataURL(files);
    } else {
      setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, e.target.name, e.target.value)));
    }
  };

  return [values, setValues, SetInputValues];
};

/* harmony default export */ __webpack_exports__["default"] = (useForms);

/***/ }),

/***/ "./resources/js/components/helpers/slugger/Slugger.js":
/*!************************************************************!*\
  !*** ./resources/js/components/helpers/slugger/Slugger.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Slugger = function Slugger(name) {
  var slug = ""; // Change to lower case

  var nameLower = name.toLowerCase(); // Letter "e"

  slug = nameLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, "e"); // Letter "a"

  slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, "a"); // Letter "o"

  slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, "o"); // Letter "u"

  slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, "u"); // Letter "d"

  slug = slug.replace(/đ/gi, "d"); // Trim the last whitespace

  slug = slug.replace(/\s*$/g, ""); // Change whitespace to "-"

  slug = slug.replace(/\s+/g, "-");
  slug = slug.replace("'", "");
  return slug;
};

/* harmony default export */ __webpack_exports__["default"] = (Slugger);

/***/ })

}]);