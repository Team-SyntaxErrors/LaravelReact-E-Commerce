(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Category/Category.css":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Category/Category.css ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n    list-style-type: none;\n}\n\n.table-button {\n    float: right;\n    margin-top: -30px;\n}\n.image-list {\n    width: 10%;\n}\n.custom-icon {\n    width: 7rem;\n    height: 7rem;\n}\n\n.custom-head {\n    width: 91px;\n}\n\n.image-list {\n    width: 10%;\n}\n\n.bg-dark {\n    color: white !important;\n    background-color: #404e67 !important;\n}\n\n.ik-x {\n    color: white !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Views/Category/AddCategory.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/Views/Category/AddCategory.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.css */ "./resources/js/components/Views/Category/Category.css");
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Category_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/contexts/category/CategoryContext */ "./resources/js/containers/contexts/category/CategoryContext.js");




var AddCategory = function AddCategory() {
  var categoryContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var menu = categoryContext.menu,
      categoryForm = categoryContext.categoryForm,
      handleChange = categoryContext.handleChange,
      submitHandler = categoryContext.submitHandler,
      errors = categoryContext.errors,
      clearFrom = categoryContext.clearFrom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal fade",
    id: "add_modal",
    tabIndex: -1,
    role: "dialog",
    "aria-labelledby": "exampleModalLongLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-header bg-dark"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLongLabel"
  }, "Add Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !categoryForm.category_icon ? "backend_assets/img/menu-icon.png" : categoryForm.category_icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-md-9 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category Icon:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "file",
    name: "category_icon",
    className: "form-control",
    onChange: handleChange,
    value: "",
    placeholder: "Enter Menu Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_icon))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Menu:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    name: "menu_id",
    className: "form-control",
    onChange: handleChange,
    value: categoryForm.menu_id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
    value: true,
    defaultValue: true,
    hidden: true
  }, "--Select One--"), menu.map(function (menu, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: i,
      value: menu.menu_id
    }, menu.menu_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-danger"
  }, errors.menu_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "text",
    name: "category_name",
    className: "form-control",
    onChange: handleChange,
    value: categoryForm.category_name,
    placeholder: "Enter Menu Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_name))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal",
    onClick: clearFrom
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save changes"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(AddCategory));

/***/ }),

/***/ "./resources/js/components/Views/Category/Category.css":
/*!*************************************************************!*\
  !*** ./resources/js/components/Views/Category/Category.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Category.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Category/Category.css");

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

/***/ "./resources/js/components/Views/Category/Category.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Views/Category/Category.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddCategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddCategory */ "./resources/js/components/Views/Category/AddCategory.js");
/* harmony import */ var _CategoryList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryList */ "./resources/js/components/Views/Category/CategoryList.js");
/* harmony import */ var _containers_contexts_category_CategoryState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../containers/contexts/category/CategoryState */ "./resources/js/containers/contexts/category/CategoryState.js");
/* harmony import */ var _EditCategory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditCategory */ "./resources/js/components/Views/Category/EditCategory.js");
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);








var Category = function Category(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_containers_contexts_category_CategoryState__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    breadCrumbs: props.breadCrumbs,
    Module: props.Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_AddCategory__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_EditCategory__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CategoryList__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.memo(Category));

/***/ }),

/***/ "./resources/js/components/Views/Category/CategoryList.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Views/Category/CategoryList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Category.css */ "./resources/js/components/Views/Category/Category.css");
/* harmony import */ var _Category_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Category_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/contexts/category/CategoryContext */ "./resources/js/containers/contexts/category/CategoryContext.js");
/* harmony import */ var _helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/pagination/CustomPagination */ "./resources/js/components/helpers/pagination/CustomPagination.js");





var CategoryList = function CategoryList() {
  var categoryContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var activePage = categoryContext.activePage,
      categoryList = categoryContext.categoryList,
      search = categoryContext.search,
      currentRow = categoryContext.currentRow,
      totalItemsCount = categoryContext.totalItemsCount,
      setSearch = categoryContext.setSearch,
      select_row = categoryContext.select_row,
      setCurrentRow = categoryContext.setCurrentRow,
      getCategories = categoryContext.getCategories,
      clearFrom = categoryContext.clearFrom,
      deleteHandler = categoryContext.deleteHandler,
      changeStatus = categoryContext.changeStatus,
      editHandler = categoryContext.editHandler;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Category List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "btn btn-info table-button",
    "data-toggle": "modal",
    "data-target": "#add_modal",
    onClick: clearFrom
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    className: "ik ik-clipboard"
  }), "Add new")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dt-responsive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "simpletable_wrapper",
    className: "dataTables_wrapper dt-bootstrap4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "dataTables_length",
    id: "simpletable_length"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Show", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
    name: "simpletable_length",
    "aria-controls": "simpletable",
    className: "custom-select custom-select-sm form-control form-control-sm",
    onChange: function onChange(e) {
      return setCurrentRow(e.target.value);
    }
  }, select_row.map(function (rows, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
      key: i,
      value: rows
    }, rows);
  })), "entries"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "simpletable_filter",
    className: "dataTables_filter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", null, "Search:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    type: "search",
    className: "form-control form-control-sm",
    placeholder: "Type to filter...",
    "aria-controls": "simpletable",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    value: search
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("table", {
    id: "simpletable",
    className: "table",
    role: "grid",
    "aria-describedby": "simpletable_info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
    role: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "custom-head text-center",
    style: {
      width: "15%"
    }
  }, "Category Icon"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "text-center"
  }, "Menu Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "text-center"
  }, "Category Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "text-center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
    className: "text-center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, categoryList.map(function (category_data, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: "image-list rounded-circle",
      src: category_data.category_icon
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "text-center"
    }, category_data.menus ? category_data.menus.menu_name : "Null"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "text-center"
    }, category_data.category_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: category_data.status == 1 ? "p-status bg-green" : "p-status bg-red"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: category_data.status == 1 ? "ik ik-repeat f-16 mr-15 text-green" : "ik ik-repeat f-16 mr-15 text-red",
      onClick: function onClick() {
        return changeStatus(category_data.category_id);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "ik ik-edit f-16 mr-15 text-blue",
      "data-toggle": "modal",
      "data-target": "#edit_modal",
      onClick: function onClick() {
        return editHandler(category_data.category_id, category_data, i);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "ik ik-trash-2 f-16 text-red",
      onClick: function onClick() {
        return deleteHandler(category_data.category_id, i);
      }
    })));
  }), totalItemsCount === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
    colSpan: "5",
    className: "text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "No Data Found"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 col-md-5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "col-sm-12 col-md-7"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_3__["default"], {
    activePage: activePage,
    currentRow: currentRow,
    totalItems: totalItemsCount,
    getFunction: getCategories
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(CategoryList));

/***/ }),

/***/ "./resources/js/components/Views/Category/EditCategory.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/Views/Category/EditCategory.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/category/CategoryContext */ "./resources/js/containers/contexts/category/CategoryContext.js");



var EditCategory = function EditCategory() {
  var categoryContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_category_CategoryContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var menu = categoryContext.menu,
      editForm = categoryContext.editForm,
      editHandleChange = categoryContext.editHandleChange,
      updateHandler = categoryContext.updateHandler,
      errors = categoryContext.errors;
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
  }, "Edit Category"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-3 col-sm-12 mt-3 text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "custom-icon rounded-circle",
    src: !editForm.category_icon ? "backend_assets/img/menu-icon.png" : editForm.category_icon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-9 col-sm-12 "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category Icon:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    name: "category_icon",
    className: "form-control",
    onChange: editHandleChange,
    placeholder: "Enter Menu Icon"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_icon))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    hidden: true
  }, "--Select One--"), menu.map(function (menu, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      key: i,
      value: menu.menu_id
    }, menu.menu_name);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.menu_id))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Category Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    name: "category_name",
    className: "form-control",
    onChange: editHandleChange,
    value: editForm.category_name,
    placeholder: "Enter Menu Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, errors.category_name))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-secondary",
    "data-dismiss": "modal"
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "btn btn-primary"
  }, "Save changes"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditCategory));

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

/***/ "./resources/js/containers/contexts/category/CategoryContext.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/contexts/category/CategoryContext.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var CategoryContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CategoryContext);

/***/ }),

/***/ "./resources/js/containers/contexts/category/CategoryState.js":
/*!********************************************************************!*\
  !*** ./resources/js/containers/contexts/category/CategoryState.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CategoryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CategoryContext */ "./resources/js/containers/contexts/category/CategoryContext.js");
/* harmony import */ var _components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/customHooks/useForms */ "./resources/js/components/customHooks/useForms.js");
/* harmony import */ var _components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/helpers/clearForm/ClearForm */ "./resources/js/components/helpers/clearForm/ClearForm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
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









var CategoryState = function CategoryState(props) {
  var select_row = [15, 20, 30, 40, 50];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(1),
      _useState2 = _slicedToArray(_useState, 2),
      activePage = _useState2[0],
      setActivePage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(15),
      _useState4 = _slicedToArray(_useState3, 2),
      currentRow = _useState4[0],
      setCurrentRow = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      categoryList = _useState8[0],
      setCategoryList = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState10 = _slicedToArray(_useState9, 2),
      totalItemsCount = _useState10[0],
      setTotalItemsCount = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState12 = _slicedToArray(_useState11, 2),
      menu = _useState12[0],
      setMenu = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      _useState14 = _slicedToArray(_useState13, 2),
      errors = _useState14[0],
      setErrors = _useState14[1];

  var _useForms = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_3__["default"])({
    menu_id: "",
    category_name: "",
    category_icon: ""
  }),
      _useForms2 = _slicedToArray(_useForms, 3),
      categoryForm = _useForms2[0],
      setCategoryForm = _useForms2[1],
      handleChange = _useForms2[2];

  var _useForms3 = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_3__["default"])({
    menu_id: "",
    category_name: "",
    category_icon: ""
  }),
      _useForms4 = _slicedToArray(_useForms3, 3),
      editForm = _useForms4[0],
      setEditForm = _useForms4[1],
      editHandleChange = _useForms4[2];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getCategories();
    return function () {
      return setCategoryList([]);
    };
  }, [currentRow, search]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getAllMenu();
  }, []); // Get category list.

  var getCategories = function getCategories() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var main_url = "category?q=".concat(search, "&row=").concat(currentRow, "&page=").concat(page);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(main_url).then(function (response) {
      setCategoryList(response.data.data.data);
      setActivePage(response.data.data.current_page);
      setTotalItemsCount(response.data.data.total);
    })["catch"](function (error) {
      console.log(error);
    });
  }; // Get menu.


  var getAllMenu = function getAllMenu() {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/all_menu_get").then(function (response) {
      setMenu(response.data.data);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  var clearFrom = function clearFrom() {
    setErrors([]);
    var form = Object(_components_helpers_clearForm_ClearForm__WEBPACK_IMPORTED_MODULE_4__["default"])(categoryForm);
    setCategoryForm(_objectSpread(_objectSpread({}, categoryForm), form));
  }; // Category submit function.


  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/category", categoryForm).then(function (response) {
      if (response.data.code === 201) {
        document.querySelector(".close").click();
        getCategories();
        clearFrom();
        react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Category Data Inserted Successfully!");
      }
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setErrors(error.response.data.errors);
      }
    });
  }; // Category delete function.


  var deleteHandler = function deleteHandler(id, index) {
    sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]("/category/" + id).then(function (response) {
          if (response.status === 204) {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Deleted!", "Category Has been Deleted", "success");

            var list = _toConsumableArray(categoryList);

            list.splice(index, 1);
            setCategoryList(list);
          } else {
            sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Oops", "Something Went Wrong", "warning");
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Your imaginary file is safe!");
      }
    });
  }; // Category edit data set function.


  var editHandler = function editHandler(id, data) {
    categoryList.category_id = id;
    var value = JSON.parse(JSON.stringify(data));
    setEditForm(_objectSpread(_objectSpread({}, editForm), value));
  }; // Category update function.


  var updateHandler = function updateHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put("/category/" + editForm.category_id, editForm).then(function (response) {
      if (response.data.code === 201) {
        document.querySelector(".close").click();
        getCategories();
        clearFrom();
        react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("Category Data Update Successfully!");
      }
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
    });
  }; // Category status change function.


  var changeStatus = function changeStatus(id) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/category/status/" + id).then(function (response) {
      if (response.data.code === 200) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].success("This category is active successfully!");
      }

      if (response.data.code === 201) {
        react_toastify__WEBPACK_IMPORTED_MODULE_5__["toast"].warning("This category is inactive successfully!");
      }

      getCategories();
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CategoryContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      activePage: activePage,
      categoryList: categoryList,
      search: search,
      currentRow: currentRow,
      totalItemsCount: totalItemsCount,
      select_row: select_row,
      errors: errors,
      menu: menu,
      categoryForm: categoryForm,
      handleChange: handleChange,
      editForm: editForm,
      editHandleChange: editHandleChange,
      setSearch: setSearch,
      setCurrentRow: setCurrentRow,
      getCategories: getCategories,
      clearFrom: clearFrom,
      submitHandler: submitHandler,
      deleteHandler: deleteHandler,
      changeStatus: changeStatus,
      editHandler: editHandler,
      updateHandler: updateHandler
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(CategoryState));

/***/ })

}]);