(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Brand/Brand.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Brand/Brand.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n}\n\n.table-button {\n    float: right;\n    margin-top: -30px;\n}\n.image-list {\n    width: 10%;\n}\n.custom-icon {\n    width: 7rem;\n    height: 7rem;\n}\n\n.custom-head {\n    width: 91px;\n}\n\n.image-list {\n    width: 10%;\n}\n\n.bg-dark {\n    color: white !important;\n    background-color: #404e67 !important;\n}\n\n.ik-x {\n    color: white !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Views/Brand/AddBrand.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Views/Brand/AddBrand.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/brand/BrandContext */ "./resources/js/containers/contexts/brand/BrandContext.js");



var AddBrand = function AddBrand() {
  var brandContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var onAddSubmit = brandContext.onAddSubmit,
      handleChange = brandContext.handleChange,
      brand_form = brandContext.brand_form,
      simpleValidator = brandContext.simpleValidator,
      error = brandContext.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: onAddSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "add_modal",
    tabIndex: -1,
    role: "dialog",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLongLabel"
  }, "Add Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ik ik-x"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "brand_name",
    placeholder: "Enter Brand Name",
    onChange: handleChange,
    value: brand_form.brand_name
  }), simpleValidator.current.message("brand_name", brand_form.brand_name, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.brand_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Contact Person:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "contact_person",
    placeholder: "Enter Brand Contact Person",
    onChange: handleChange,
    value: brand_form.contact_person
  }), simpleValidator.current.message("contact_person", brand_form.contact_person, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.contact_person))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Contact Number:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    className: "form-control",
    name: "phone_number",
    placeholder: "Enter Brand Phone Number",
    onChange: handleChange,
    value: brand_form.phone_number
  }), simpleValidator.current.message("phone_number", brand_form.phone_number, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.phone_number))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    className: "form-control",
    name: "brand_address",
    placeholder: "Enter Brand Address",
    onChange: handleChange,
    value: brand_form.brand_address
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !brand_form.brand_logo ? "backend_assets/img/menu-icon.png" : brand_form.brand_logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Logo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    className: "form-control",
    name: "brand_logo",
    onChange: handleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "status",
    onChange: handleChange,
    value: brand_form.status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    defaultValue: true,
    hidden: true
  }, "--Select--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "Inactive")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    id: "close",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AddBrand));

/***/ }),

/***/ "./resources/js/components/Views/Brand/Brand.css":
/*!*******************************************************!*\
  !*** ./resources/js/components/Views/Brand/Brand.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Brand.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Brand/Brand.css");

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

/***/ "./resources/js/components/Views/Brand/Brand.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Views/Brand/Brand.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.css */ "./resources/js/components/Views/Brand/Brand.css");
/* harmony import */ var _Brand_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Brand_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddBrand */ "./resources/js/components/Views/Brand/AddBrand.js");
/* harmony import */ var _BrandList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BrandList */ "./resources/js/components/Views/Brand/BrandList.js");
/* harmony import */ var _containers_contexts_brand_BrandState__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../containers/contexts/brand/BrandState */ "./resources/js/containers/contexts/brand/BrandState.js");
/* harmony import */ var _EditBrand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditBrand */ "./resources/js/components/Views/Brand/EditBrand.js");
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









var Brand = function Brand(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_containers_contexts_brand_BrandState__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    breadCrumbs: props.breadCrumbs,
    Module: props.Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_AddBrand__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_EditBrand__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BrandList__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.memo(Brand));

/***/ }),

/***/ "./resources/js/components/Views/Brand/BrandList.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Views/Brand/BrandList.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/brand/BrandContext */ "./resources/js/containers/contexts/brand/BrandContext.js");
/* harmony import */ var _helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/pagination/CustomPagination */ "./resources/js/components/helpers/pagination/CustomPagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-js-pagination */ "./node_modules/react-js-pagination/dist/Pagination.js");
/* harmony import */ var react_js_pagination__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_js_pagination__WEBPACK_IMPORTED_MODULE_3__);





var BrandList = function BrandList() {
  var brandContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var setCurrentRaw = brandContext.setCurrentRaw,
      select_row = brandContext.select_row,
      setSearch = brandContext.setSearch,
      search = brandContext.search,
      BrandList = brandContext.BrandList,
      ChangeStatus = brandContext.ChangeStatus,
      EditHandler = brandContext.EditHandler,
      DeleteHandler = brandContext.DeleteHandler,
      totalItemsCount = brandContext.totalItemsCount,
      activePage = brandContext.activePage,
      current_raw = brandContext.current_raw,
      GetBrandList = brandContext.GetBrandList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Brand List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-info table-button",
    "data-toggle": "modal",
    "data-target": "#add_modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ik ik-clipboard"
  }), "Add new")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dt-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "simpletable_wrapper",
    className: "dataTables_wrapper dt-bootstrap4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dataTables_length",
    id: "simpletable_length"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Show", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "simpletable_length",
    "aria-controls": "simpletable",
    className: "custom-select custom-select-sm form-control form-control-sm",
    onChange: function onChange(e) {
      return setCurrentRaw(e.target.value);
    }
  }, select_row.map(function (rows, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: rows
    }, rows);
  })), "entries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "simpletable_filter",
    className: "dataTables_filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Search:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    className: "form-control form-control-sm",
    placeholder: "Type to filter...",
    "aria-controls": "simpletable",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    value: search
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    id: "simpletable",
    className: "table",
    role: "grid",
    "aria-describedby": "simpletable_info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    role: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Brand Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "custom-head text-center",
    style: {
      width: "15%"
    }
  }, "Brand Logo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Contact Person"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Phone"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Brand Address"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, BrandList.map(function (brand, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, brand.brand_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "image-list rounded-circle",
      src: brand.brand_logo ? brand.brand_logo : "backend_assets/img/menu-icon.png"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, brand.contact_person), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, brand.phone_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, brand.brand_address), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: brand.status == 1 ? "p-status bg-green" : "p-status bg-red"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: brand.status == 1 ? "ik ik-repeat f-16 mr-15 text-green" : "ik ik-repeat f-16 mr-15 text-red",
      onClick: function onClick() {
        return ChangeStatus(brand.brand_id);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-edit f-16 mr-15 text-blue",
      "data-toggle": "modal",
      "data-target": "#edit_modal",
      onClick: function onClick() {
        return EditHandler(brand.brand_id, brand, i);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-trash-2 f-16 text-red",
      onClick: function onClick() {
        return DeleteHandler(brand.brand_id);
      }
    })));
  }), totalItemsCount === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "7",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "No Data Found"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activePage: activePage,
    currentRow: current_raw,
    totalItems: totalItemsCount,
    getFunction: GetBrandList
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BrandList));

/***/ }),

/***/ "./resources/js/components/Views/Brand/EditBrand.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/Views/Brand/EditBrand.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/brand/BrandContext */ "./resources/js/containers/contexts/brand/BrandContext.js");



var EditBrand = function EditBrand() {
  var brandContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_brand_BrandContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var updateHandler = brandContext.updateHandler,
      EditHandleChange = brandContext.EditHandleChange,
      EditForm = brandContext.EditForm,
      simpleValidator = brandContext.simpleValidator,
      error = brandContext.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: updateHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "edit_modal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLongLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-header bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLongLabel"
  }, "Edit Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ik ik-x"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-12 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "brand_name",
    placeholder: "Enter Brand Name",
    onChange: EditHandleChange,
    value: EditForm.brand_name
  }), simpleValidator.current.message("brand_name", EditForm.brand_name, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.brand_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Contact Person:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "contact_person",
    placeholder: "Enter Brand Contact Person",
    onChange: EditHandleChange,
    value: EditForm.contact_person
  }), simpleValidator.current.message("contact_person", EditForm.contact_person, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.contact_person))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Contact Number:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "number",
    className: "form-control",
    name: "phone_number",
    placeholder: "Enter Brand Phone Number",
    onChange: EditHandleChange,
    value: EditForm.phone_number
  }), simpleValidator.current.message("phone_number", EditForm.phone_number, "required"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.phone_number))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Address:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    type: "text",
    className: "form-control",
    name: "brand_address",
    placeholder: "Enter Brand Address",
    onChange: EditHandleChange,
    value: EditForm.brand_address
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !EditForm.brand_logo ? "backend_assets/img/menu-icon.png" : EditForm.brand_logo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Logo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    className: "form-control",
    name: "brand_logo",
    onChange: EditHandleChange
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "status",
    onChange: EditHandleChange,
    value: EditForm.status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    defaultValue: true,
    hidden: true
  }, "--Select--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "Inactive")))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    id: "edit_close",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save changes"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditBrand));

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

/***/ "./resources/js/components/helpers/clearForm/ClearForm.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/helpers/clearForm/ClearForm.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// CLear the object state value.
var ClearForm = function ClearForm(initialValues) {
  Object.keys(initialValues).forEach(function (key) {
    initialValues[key] = "";
  });
  return initialValues;
};

/* harmony default export */ __webpack_exports__["default"] = (ClearForm);

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

/***/ }),

/***/ "./resources/js/containers/contexts/brand/BrandContext.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/contexts/brand/BrandContext.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var BrandContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (BrandContext);

/***/ }),

/***/ "./resources/js/containers/contexts/brand/BrandState.js":
/*!**************************************************************!*\
  !*** ./resources/js/containers/contexts/brand/BrandState.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BrandContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandContext */ "./resources/js/containers/contexts/brand/BrandContext.js");
/* harmony import */ var _components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/helpers/clearForm/ClearForm */ "./resources/js/components/helpers/clearForm/ClearForm.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simple-react-validator */ "./node_modules/simple-react-validator/dist/simple-react-validator.min.js");
/* harmony import */ var simple_react_validator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(simple_react_validator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/customHooks/useForms */ "./resources/js/components/customHooks/useForms.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var BrandState = function BrandState(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      Brand = _useState2[0],
      setBrand = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      BrandList = _useState4[0],
      setBrandList = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var select_row = [15, 20, 30, 40, 50, 100];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(15),
      _useState8 = _slicedToArray(_useState7, 2),
      current_raw = _useState8[0],
      setCurrentRaw = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 2),
      page = _useState10[0],
      setPage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      error = _useState12[0],
      setErrors = _useState12[1];

  var simpleValidator = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(new simple_react_validator__WEBPACK_IMPORTED_MODULE_4___default.a());

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState14 = _slicedToArray(_useState13, 2),
      activePage = _useState14[0],
      setActivePage = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState16 = _slicedToArray(_useState15, 2),
      totalItemsCount = _useState16[0],
      setTotalItemsCount = _useState16[1];

  var _useForms = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_7__["default"])({
    brand_name: "",
    contact_person: "",
    phone_number: "",
    brand_address: "",
    brand_logo: "",
    status: 1
  }),
      _useForms2 = _slicedToArray(_useForms, 3),
      brand_form = _useForms2[0],
      setBrandFrom = _useForms2[1],
      handleChange = _useForms2[2];

  var _useForms3 = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_7__["default"])({
    brand_name: "",
    contact_person: "",
    phone_number: "",
    brand_address: "",
    brand_logo: "",
    status: 1
  }),
      _useForms4 = _slicedToArray(_useForms3, 3),
      EditForm = _useForms4[0],
      setEditForm = _useForms4[1],
      EditHandleChange = _useForms4[2];

  var handlePageChange = function handlePageChange(pageNumber) {
    setPage(pageNumber);
  };
  /**
   * Clear form function.
   * Clear state value.
   */


  var clearFrom = function clearFrom() {
    setErrors([]);
    var form = Object(_components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_3__["default"])(brand_form);
    setBrandFrom(_objectSpread(_objectSpread({}, brand_form), form));
  }; // Brand List Get


  var GetBrandList = function GetBrandList() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var main_url = "brands?q=".concat(search, "&row=").concat(current_raw, "&page=").concat(page);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(main_url).then(function (response) {
      setBrandList(response.data.data.data);
      setActivePage(response.data.data.current_page);
      setTotalItemsCount(response.data.data.total);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    GetBrandList();
    return function () {
      setBrandList([]);
    };
  }, [current_raw, search, page]); // Data Submit

  var onAddSubmit = function onAddSubmit(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/brands", brand_form).then(function (response) {
      $(".close").click();
      GetBrandList();
      clearFrom();
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("Brand Data Inserted Successfully!");
    })["catch"](function (error) {
      if (error.response) {
        setErrors(error.response.data.errors);
      }
    });
  }; // Brand Delete


  var DeleteHandler = function DeleteHandler(id, index) {
    sweetalert__WEBPACK_IMPORTED_MODULE_5___default()({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/brands/" + id).then(function (response) {
          if (response.status === 204) {
            GetBrandList();
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Deleted!", "Brand Has been Deleted", "success");
          } else {
            sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Opps", "Something Went Wrong", "warning");
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_5___default()("Your imaginary file is safe!");
      }
    });
  }; // Brand Status Change


  var ChangeStatus = function ChangeStatus(id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/brands/status/" + id).then(function (response) {
      console.log(response);

      if (response.data.code === 200) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("This brand is active successfully!");
      }

      if (response.data.code === 201) {
        react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].warning("This Brand is inactive successfully!");
      }

      GetBrandList();
    })["catch"](function (error) {
      console.log(error);
    });
  }; // Brand Edit


  var EditHandler = function EditHandler(id, data, index) {
    BrandList.brand_id = id;
    var value = JSON.parse(JSON.stringify(data));
    setEditForm(value);
  }; // Category Data Update


  var updateHandler = function updateHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/brands/" + EditForm.brand_id, EditForm).then(function (response) {
      $(".close").click();
      GetBrandList();
      react_toastify__WEBPACK_IMPORTED_MODULE_6__["toast"].success("Brand Data Update Successfully!");
    })["catch"](function (error) {
      if (error.response) {
        setErrors(error.response.data.errors);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BrandContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      Brand: Brand,
      setBrand: setBrand,
      BrandList: BrandList,
      setBrandList: setBrandList,
      search: search,
      setSearch: setSearch,
      select_row: select_row,
      current_raw: current_raw,
      setCurrentRaw: setCurrentRaw,
      page: page,
      setPage: setPage,
      error: error,
      setErrors: setErrors,
      simpleValidator: simpleValidator,
      activePage: activePage,
      setActivePage: setActivePage,
      totalItemsCount: totalItemsCount,
      setTotalItemsCount: setTotalItemsCount,
      brand_form: brand_form,
      setBrandFrom: setBrandFrom,
      handleChange: handleChange,
      EditForm: EditForm,
      setEditForm: setEditForm,
      EditHandleChange: EditHandleChange,
      handlePageChange: handlePageChange,
      clearFrom: clearFrom,
      GetBrandList: GetBrandList,
      onAddSubmit: onAddSubmit,
      DeleteHandler: DeleteHandler,
      ChangeStatus: ChangeStatus,
      EditHandler: EditHandler,
      updateHandler: updateHandler
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BrandState));

/***/ })

}]);