(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Product/product.css":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Product/product.css ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n}\n\n.table-button {\n    float: right;\n    margin-top: -30px;\n}\n\n.p-status {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n}\n", ""]);

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

/***/ "./resources/js/components/Views/Product/ProductList.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Views/Product/ProductList.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.css */ "./resources/js/components/Views/Product/product.css");
/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var _helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/pagination/CustomPagination */ "./resources/js/components/helpers/pagination/CustomPagination.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_8__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var ProductList = function ProductList(_ref) {
  var breadCrumbs = _ref.breadCrumbs,
      Module = _ref.Module;
  var select_row = [10, 20, 30, 40, 50];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(10),
      _useState4 = _slicedToArray(_useState3, 2),
      currentRow = _useState4[0],
      setCurrentRow = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      products = _useState8[0],
      setProducts = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      totalItemsCount = _useState10[0],
      setTotalItemsCount = _useState10[1]; // Get all product data.


  var getProducts = function getProducts() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    axios__WEBPACK_IMPORTED_MODULE_4___default.a.get("/products", {
      params: {
        q: search,
        row: currentRow,
        page: page
      }
    }).then(function (response) {
      setProducts(response.data.data.data);
      setActivePage(response.data.data.current_page);
      setTotalItemsCount(response.data.data.total);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getProducts();
    return function () {
      setProducts([]);
    };
  }, [search, currentRow]); // Product delete function.

  var deleteHandler = function deleteHandler(id, index) {
    sweetalert__WEBPACK_IMPORTED_MODULE_8___default()({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary data!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        axios__WEBPACK_IMPORTED_MODULE_4___default.a["delete"]("/products/" + id).then(function (response) {
          if (response.status === 204) {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Deleted!", "Product Has been Deleted", "success");

            var list = _toConsumableArray(products);

            list.splice(index, 1);
            setProducts(list);
          } else {
            sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Oops", "Something Went Wrong", "warning");
          }
        })["catch"](function (error) {
          react_toastify__WEBPACK_IMPORTED_MODULE_7__["toast"].error("Something went wrong!");
        });
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_8___default()("Your imaginary file is safe!");
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    breadCrumbs: breadCrumbs,
    Module: Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", null, "Product List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    className: "btn btn-info table-button",
    "data-toggle": "modal",
    "data-target": "#add_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: {
      pathname: "/product/add_product",
      state: "Product"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "ik ik-clipboard"
  }), "Add new"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dt-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "simpletable_wrapper",
    className: "dataTables_wrapper dt-bootstrap4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "dataTables_length",
    id: "simpletable_length"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Show", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select", {
    name: "simpletable_length",
    "aria-controls": "simpletable",
    className: "custom-select custom-select-sm form-control form-control-sm",
    onChange: function onChange(e) {
      return setCurrentRow(e.target.value);
    }
  }, select_row.map(function (rows, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option", {
      key: i,
      value: rows
    }, rows);
  })), "entries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "simpletable_filter",
    className: "dataTables_filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", null, "Search:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "search",
    className: "form-control form-control-sm",
    placeholder: "Type to filter...",
    "aria-controls": "simpletable",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    value: search
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", {
    id: "simpletable",
    className: "table",
    role: "grid",
    "aria-describedby": "simpletable_info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    role: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Product Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Product SKU"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Sub Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Unit Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Product Alert Quantity"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Purchase Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Sale Price"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    className: "text-center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", null, products.map(function (product, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.product_name ? product.product_name : "Null"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.product_sku), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.categories.category_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.sub_categories.sub_category_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.brands.brand_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.units.unit_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.product_alert_qty), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.purchase_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, product.sell_price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: product.status == 1 ? "p-status bg-green" : "p-status bg-red"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: product.status == 1 ? "ik ik-repeat f-16 mr-15 text-green" : "ik ik-repeat f-16 mr-15 text-red",
      onClick: function onClick() {
        return changeStatus(product.product_id);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "ik ik-edit f-16 mr-15 text-blue",
      "data-toggle": "modal",
      "data-target": "#edit_modal",
      onClick: function onClick() {
        return editHandler(product.product_id, product, i);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
      className: "ik ik-trash-2 f-16 text-red",
      onClick: function onClick() {
        return deleteHandler(product.product_id, i);
      }
    })));
  }), totalItemsCount === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    colSpan: "11",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "No Data Found"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-12 col-md-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "col-sm-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    activePage: activePage,
    currentRow: currentRow,
    totalItems: totalItemsCount,
    getFunction: getProducts
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./resources/js/components/Views/Product/product.css":
/*!***********************************************************!*\
  !*** ./resources/js/components/Views/Product/product.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./product.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Product/product.css");

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

/***/ "./resources/js/components/helpers/pagination/CustomPagination.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/helpers/pagination/CustomPagination.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




var CustomPagination = function CustomPagination(props) {
  var activePage = props.activePage,
      currentRow = props.currentRow,
      totalItems = props.totalItems,
      getFunction = props.getFunction;
  return totalItems > currentRow && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_js_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    innerClass: "btn-group",
    linkClass: "btn btn-outline-secondary",
    activePage: activePage,
    totalItemsCount: totalItems,
    pageRangeDisplayed: 3,
    onChange: getFunction,
    hideFirstLastPages: true,
    hideDisabled: true
  });
};

CustomPagination.prototype = {
  activePage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.integer,
  currentRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.integer,
  totalItems: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.integer,
  getFunction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (CustomPagination);

/***/ })

}]);