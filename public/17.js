(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/SubCategory/SubCategory.css":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/SubCategory/SubCategory.css ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ik {\n    cursor: pointer;\n}\n\nul {\n    list-style-type: none;\n}\n\n.table-button {\n    float: right;\n    margin-top: -30px;\n}\n.image-list {\n    width: 10%;\n}\n.custom-icon {\n    width: 7rem;\n    height: 7rem;\n}\n\n.custom-head {\n    width: 91px;\n}\n\n.image-list {\n    width: 10%;\n}\n\n.bg-dark {\n    color: white !important;\n    background-color: #404e67 !important;\n}\n\n.ik-x {\n    color: white !important;\n}\n", ""]);

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

/***/ "./resources/js/components/Views/SubCategory/AddSubCategory.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Views/SubCategory/AddSubCategory.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/subcategory/SubCategoryContext */ "./resources/js/containers/contexts/subcategory/SubCategoryContext.js");



var AddSubCategory = function AddSubCategory() {
  var subCategoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var submitHandler = subCategoryContext.submitHandler,
      subCategoryForm = subCategoryContext.subCategoryForm,
      handleChange = subCategoryContext.handleChange,
      errors = subCategoryContext.errors,
      menuChangeFunctions = subCategoryContext.menuChangeFunctions,
      menu = subCategoryContext.menu,
      category = subCategoryContext.category,
      clearFrom = subCategoryContext.clearFrom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submitHandler
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
  }, "Add Sub Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !subCategoryForm.sub_category_icon ? "backend_assets/img/menu-icon.png" : subCategoryForm.sub_category_icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Sub Category Icon:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "sub_category_icon",
    className: "form-control",
    value: "",
    placeholder: "Enter SubCategory Icon",
    onChange: handleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.sub_category_icon))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Menu:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "menu_id",
    value: subCategoryForm.menu_id,
    className: "form-control",
    onChange: function onChange(e) {
      return menuChangeFunctions(e);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: true,
    defaultValue: true,
    hidden: true
  }, "--Select One--"), menu.map(function (menu, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: menu.menu_id
    }, menu.menu_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.menu_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    name: "category_id",
    className: "form-control",
    value: subCategoryForm.category_id,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: true,
    defaultValue: true,
    hidden: true
  }, "--Select One--"), category.map(function (category, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: category.category_id
    }, category.category_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Sub Category Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "sub_category_name",
    placeholder: "Enter Sub Category Name",
    onChange: handleChange,
    value: subCategoryForm.sub_category_name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.sub_category_name))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    onClick: clearFrom
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AddSubCategory));

/***/ }),

/***/ "./resources/js/components/Views/SubCategory/EditCategory.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Views/SubCategory/EditCategory.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/subcategory/SubCategoryContext */ "./resources/js/containers/contexts/subcategory/SubCategoryContext.js");



var EditCategory = function EditCategory() {
  var subCategoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var updateHandler = subCategoryContext.updateHandler,
      editForm = subCategoryContext.editForm,
      editHandleChange = subCategoryContext.editHandleChange,
      errors = subCategoryContext.errors,
      menu = subCategoryContext.menu,
      category = subCategoryContext.category,
      clearFrom = subCategoryContext.clearFrom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: updateHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "edit_modal",
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
  }, "Edit Sub Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "X"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !editForm.sub_category_icon ? "backend_assets/img/menu-icon.png" : editForm.sub_category_icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Sub Category Icon:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    className: "form-control",
    name: "sub_category_icon",
    placeholder: "Enter SubCategory Icon",
    onChange: editHandleChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.sub_category_icon))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Menu:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "menu_id",
    onChange: editHandleChange,
    value: editForm.menu_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: true,
    defaultValue: true,
    hidden: true
  }, "--Select One--"), menu.map(function (menu, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: menu.menu_id
    }, menu.menu_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.menu_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "category_id",
    onChange: editHandleChange,
    value: editForm.category_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: true,
    defaultValue: true,
    hidden: true
  }, "--Select One--"), category.map(function (category, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: category.category_id
    }, category.category_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Sub Category Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "sub_category_name",
    placeholder: "Enter Sub Category Name",
    onChange: editHandleChange,
    value: editForm.sub_category_name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.sub_category_name))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    onClick: clearFrom
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save changes"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditCategory));

/***/ }),

/***/ "./resources/js/components/Views/SubCategory/SubCategory.css":
/*!*******************************************************************!*\
  !*** ./resources/js/components/Views/SubCategory/SubCategory.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./SubCategory.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/SubCategory/SubCategory.css");

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

/***/ "./resources/js/components/Views/SubCategory/SubCategory.js":
/*!******************************************************************!*\
  !*** ./resources/js/components/Views/SubCategory/SubCategory.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubCategory_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubCategory.css */ "./resources/js/components/Views/SubCategory/SubCategory.css");
/* harmony import */ var _SubCategory_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_SubCategory_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddSubCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddSubCategory */ "./resources/js/components/Views/SubCategory/AddSubCategory.js");
/* harmony import */ var _EditCategory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditCategory */ "./resources/js/components/Views/SubCategory/EditCategory.js");
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SubCategoryList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubCategoryList */ "./resources/js/components/Views/SubCategory/SubCategoryList.js");
/* harmony import */ var _containers_contexts_subcategory_SubCategoryState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../containers/contexts/subcategory/SubCategoryState */ "./resources/js/containers/contexts/subcategory/SubCategoryState.js");









var SubCategory = function SubCategory(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_contexts_subcategory_SubCategoryState__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    breadCrumbs: props.breadCrumbs,
    Module: props.Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AddSubCategory__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_EditCategory__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_SubCategoryList__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(SubCategory));

/***/ }),

/***/ "./resources/js/components/Views/SubCategory/SubCategoryList.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Views/SubCategory/SubCategoryList.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/pagination/CustomPagination */ "./resources/js/components/helpers/pagination/CustomPagination.js");
/* harmony import */ var _containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/contexts/subcategory/SubCategoryContext */ "./resources/js/containers/contexts/subcategory/SubCategoryContext.js");




var SubCategoryList = function SubCategoryList() {
  var subCategoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_subcategory_SubCategoryContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var clearFrom = subCategoryContext.clearFrom,
      setCurrentRow = subCategoryContext.setCurrentRow,
      selectRow = subCategoryContext.selectRow,
      setSearch = subCategoryContext.setSearch,
      search = subCategoryContext.search,
      subCategoryList = subCategoryContext.subCategoryList,
      changeStatus = subCategoryContext.changeStatus,
      editHandler = subCategoryContext.editHandler,
      deleteHandler = subCategoryContext.deleteHandler,
      activePage = subCategoryContext.activePage,
      currentRow = subCategoryContext.currentRow,
      totalItemsCount = subCategoryContext.totalItemsCount,
      getSubCategoryList = subCategoryContext.getSubCategoryList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Sub Category List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-info table-button",
    "data-toggle": "modal",
    "data-target": "#add_modal",
    onClick: clearFrom
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
      return setCurrentRow(e.target.value);
    }
  }, selectRow.map(function (rows, i) {
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
    role: "grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    role: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "custom-head text-center",
    style: {
      width: "15%"
    }
  }, "Sub Category Icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Sub Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Sub Category Slug"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Menu Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, subCategoryList.map(function (subCategory, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "image-list rounded-circle",
      src: subCategory.sub_category_icon
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, subCategory.sub_category_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, subCategory.sub_category_slug), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, subCategory.menus ? subCategory.menus.menu_name : "Null"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, subCategory.categories.category_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: subCategory.status == 1 ? "p-status bg-green" : "p-status bg-red"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: subCategory.status == 1 ? "ik ik-repeat f-16 mr-15 text-green" : "ik ik-repeat f-16 mr-15 text-red",
      onClick: function onClick() {
        return changeStatus(subCategory.sub_category_id);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-edit f-16 mr-15 text-blue",
      "data-toggle": "modal",
      "data-target": "#edit_modal",
      onClick: function onClick() {
        return editHandler(subCategory.sub_category_id, subCategory);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-trash-2 f-16 text-red",
      onClick: function onClick() {
        return deleteHandler(subCategory.sub_category_id, i);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_1__["default"], {
    activePage: activePage,
    currentRow: currentRow,
    totalItems: totalItemsCount,
    getFunction: getSubCategoryList
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SubCategoryList));

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

/***/ "./resources/js/containers/contexts/subcategory/SubCategoryContext.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/contexts/subcategory/SubCategoryContext.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SubCategoryContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (SubCategoryContext);

/***/ }),

/***/ "./resources/js/containers/contexts/subcategory/SubCategoryState.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/contexts/subcategory/SubCategoryState.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/helpers/clearForm/ClearForm */ "./resources/js/components/helpers/clearForm/ClearForm.js");
/* harmony import */ var _SubCategoryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubCategoryContext */ "./resources/js/containers/contexts/subcategory/SubCategoryContext.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/customHooks/useForms */ "./resources/js/components/customHooks/useForms.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var SubCategoryState = function SubCategoryState(props) {
  var selectRow = [15, 20, 30, 40, 50];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      subCategoryList = _useState2[0],
      setSubCategoryList = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(15),
      _useState6 = _slicedToArray(_useState5, 2),
      currentRow = _useState6[0],
      setCurrentRow = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState8 = _slicedToArray(_useState7, 2),
      activePage = _useState8[0],
      setActivePage = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      totalItemsCount = _useState10[0],
      setTotalItemsCount = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      errors = _useState12[0],
      setErrors = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      menu = _useState14[0],
      setMenu = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      category = _useState16[0],
      setCategory = _useState16[1];

  var _useForms = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__["default"])({
    menu_id: "",
    category_id: "",
    sub_category_name: "",
    sub_category_icon: ""
  }),
      _useForms2 = _slicedToArray(_useForms, 3),
      subCategoryForm = _useForms2[0],
      setSubCategoryForm = _useForms2[1],
      handleChange = _useForms2[2];

  var _useForms3 = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__["default"])({
    menu_id: "",
    category_id: "",
    sub_category_name: "",
    sub_category_icon: ""
  }),
      _useForms4 = _slicedToArray(_useForms3, 3),
      editForm = _useForms4[0],
      setEditForm = _useForms4[1],
      editHandleChange = _useForms4[2];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getMenu();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getSubCategoryList();
    return function () {
      setSubCategoryList([]);
    };
  }, [search, currentRow]);

  var menuChangeFunctions = function menuChangeFunctions(e) {
    handleChange(e);
    getCategory(e.target.value);
  }; // Sub Category List


  var getSubCategoryList = function getSubCategoryList() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var main_url = "sub_category?q=".concat(search, "&row=").concat(currentRow, "&page=").concat(page);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(main_url).then(function (response) {
      setSubCategoryList(response.data.data.data);
      setActivePage(response.data.data.current_page);
      setTotalItemsCount(response.data.data.total);
    })["catch"](function (error) {
      return console.log(error);
    });
  }; // Menu Data Get


  var getMenu = function getMenu() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/all_menu_get").then(function (response) {
      setMenu(response.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }; // Category Data Get


  var getCategory = function getCategory(menu_id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/category_get/" + menu_id).then(function (response) {
      setCategory(response.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  }; // Clear From


  var clearFrom = function clearFrom() {
    setErrors([]);
    var form = Object(_components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_2__["default"])(subCategoryForm);
    setSubCategoryForm(_objectSpread(_objectSpread({}, subCategoryForm), form));
  }; // Form Submit Handler


  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/sub_category", subCategoryForm).then(function (response) {
      if (response.data.code === 201) {
        $(".close").click();
        getSubCategoryList();
        clearFrom();
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("Sub Category Data Inserted Successfully!");
      }
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    });
  }; // Delete Handler


  var deleteHandler = function deleteHandler(id, index) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/sub_category/" + id).then(function (response) {
          if (response.status === 204) {
            swal("Deleted!", "Sub Category Has been Deleted", "success");

            var list = _toConsumableArray(subCategoryList);

            console.log(list);
            list.splice(index, 1);
            setSubCategoryList(list);
          } else {
            swal("Oops", "Something Went Wrong", "warning");
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }; // Edit Data Get Handler


  var editHandler = function editHandler(id, data) {
    subCategoryList.sub_category_id = id;
    var value = JSON.parse(JSON.stringify(data));
    setEditForm(value);
    getCategory(value.menu_id);
  }; // Edit Data Get Handler
  // Update Form Submit Handler


  var updateHandler = function updateHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/sub_category/" + editForm.sub_category_id, editForm).then(function (response) {
      if (response.data.code === 201) {
        $(".close").click();
        getSubCategoryList();
        clearFrom();
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("Sub Category Data Update Successfully!");
      }
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
    });
  }; // Change Status Handler


  var changeStatus = function changeStatus(id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/sub_category/status/" + id).then(function (response) {
      if (response.data.code === 200) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("This sub category is active successfully!");
      }

      if (response.data.code === 201) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].warning("This sub category is inactive successfully!");
      }

      getSubCategoryList();
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SubCategoryContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
    value: {
      selectRow: selectRow,
      subCategoryList: subCategoryList,
      setSubCategoryList: setSubCategoryList,
      search: search,
      setSearch: setSearch,
      currentRow: currentRow,
      setCurrentRow: setCurrentRow,
      activePage: activePage,
      setActivePage: setActivePage,
      totalItemsCount: totalItemsCount,
      setTotalItemsCount: setTotalItemsCount,
      errors: errors,
      setErrors: setErrors,
      menu: menu,
      setMenu: setMenu,
      category: category,
      setCategory: setCategory,
      subCategoryForm: subCategoryForm,
      setSubCategoryForm: setSubCategoryForm,
      handleChange: handleChange,
      editForm: editForm,
      setEditForm: setEditForm,
      editHandleChange: editHandleChange,
      menuChangeFunctions: menuChangeFunctions,
      getSubCategoryList: getSubCategoryList,
      getMenu: getMenu,
      getCategory: getCategory,
      clearFrom: clearFrom,
      submitHandler: submitHandler,
      deleteHandler: deleteHandler,
      editHandler: editHandler,
      updateHandler: updateHandler,
      changeStatus: changeStatus
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SubCategoryState));

/***/ })

}]);