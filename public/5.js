(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Unit/Unit.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./resources/js/components/Views/Unit/Unit.css ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".custom-icon {\n    width: 7rem;\n    height: 7rem;\n}\n\n.custom-head {\n    width: 91px;\n}\n\n.image-list {\n    width: 10%;\n}\n\n.bg-dark {\n    color: white !important;\n    background-color: #404E67 !important;\n}\n\n.ik-x {\n    color: white !important;\n}\n\n.p-status {\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./resources/js/components/Views/Unit/AddUnit.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/Views/Unit/AddUnit.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/unit/UnitContext */ "./resources/js/containers/contexts/unit/UnitContext.js");



var AddUnit = function AddUnit() {
  var unitContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var submitHandler = unitContext.submitHandler,
      handleChange = unitContext.handleChange,
      error = unitContext.error;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    onSubmit: submitHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "modal fade",
    id: "add_modal",
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
  }, "Add Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    name: "unit_name",
    onChange: handleChange,
    placeholder: "Enter Unit Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.unit_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Short Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "short_name",
    onChange: handleChange,
    placeholder: "Enter Unit Short Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.short_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "status",
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    defaultValue: true,
    hidden: true
  }, "--Select--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.status))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AddUnit));

/***/ }),

/***/ "./resources/js/components/Views/Unit/EditUnit.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Views/Unit/EditUnit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../containers/contexts/unit/UnitContext */ "./resources/js/containers/contexts/unit/UnitContext.js");



var EditUnit = function EditUnit() {
  var unitContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  var updateHandler = unitContext.updateHandler,
      EditHandleChange = unitContext.EditHandleChange,
      editForm = unitContext.editForm,
      error = unitContext.error;
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
  }, "Edit Unit"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    name: "unit_name",
    onChange: EditHandleChange,
    value: editForm.unit_name,
    placeholder: "Enter Unit Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.unit_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    name: "unit_id",
    type: "hidden",
    value: editForm.unit_id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Short Name:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control",
    name: "short_name",
    onChange: EditHandleChange,
    value: editForm.short_name,
    placeholder: "Enter Unit Short Name"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.short_name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-lg-6 control-label"
  }, "Status:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-lg-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    className: "form-control",
    name: "status",
    onChange: EditHandleChange,
    value: editForm.status
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "",
    defaultValue: true,
    disabled: true
  }, "--Select--"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "1"
  }, "Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: "0"
  }, "Inactive")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-danger"
  }, error.status))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditUnit));

/***/ }),

/***/ "./resources/js/components/Views/Unit/Unit.css":
/*!*****************************************************!*\
  !*** ./resources/js/components/Views/Unit/Unit.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/postcss-loader/src??ref--6-2!./Unit.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./resources/js/components/Views/Unit/Unit.css");

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

/***/ "./resources/js/components/Views/Unit/Unit.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Views/Unit/Unit.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Unit_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit.css */ "./resources/js/components/Views/Unit/Unit.css");
/* harmony import */ var _Unit_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Unit_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AddUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUnit */ "./resources/js/components/Views/Unit/AddUnit.js");
/* harmony import */ var _EditUnit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditUnit */ "./resources/js/components/Views/Unit/EditUnit.js");
/* harmony import */ var _Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../Layouts/PageHeader/PageHeader */ "./resources/js/components/Views/Layouts/PageHeader/PageHeader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _UnitList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./UnitList */ "./resources/js/components/Views/Unit/UnitList.js");
/* harmony import */ var _containers_contexts_unit_UnitState__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../containers/contexts/unit/UnitState */ "./resources/js/containers/contexts/unit/UnitState.js");









var Unit = function Unit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_containers_contexts_unit_UnitState__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Layouts_PageHeader_PageHeader__WEBPACK_IMPORTED_MODULE_4__["default"], {
    breadCrumbs: props.breadCrumbs,
    Module: props.Module
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_AddUnit__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_EditUnit__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_UnitList__WEBPACK_IMPORTED_MODULE_6__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.memo(Unit));

/***/ }),

/***/ "./resources/js/components/Views/Unit/UnitList.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Views/Unit/UnitList.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_pagination_CustomPagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/pagination/CustomPagination */ "./resources/js/components/helpers/pagination/CustomPagination.js");
/* harmony import */ var _containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../containers/contexts/unit/UnitContext */ "./resources/js/containers/contexts/unit/UnitContext.js");




var UnitList = function UnitList() {
  var unitContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_containers_contexts_unit_UnitContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var setCurrentRow = unitContext.setCurrentRow,
      select_row = unitContext.select_row,
      setSearch = unitContext.setSearch,
      search = unitContext.search,
      unitList = unitContext.unitList,
      ChangeStatus = unitContext.ChangeStatus,
      editHandler = unitContext.editHandler,
      DeleteHandler = unitContext.DeleteHandler,
      totalItemsCount = unitContext.totalItemsCount,
      activePage = unitContext.activePage,
      currentRow = unitContext.currentRow,
      getUnitList = unitContext.getUnitList;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header d-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Unit List"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      return setCurrentRow(e.target.value);
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
  }, "Unit Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Unit Short Name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Status"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center"
  }, "Action"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, unitList.map(function (unit, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, unit.unit_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, unit.short_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("center", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: unit.status == 1 ? "p-status bg-green" : "p-status bg-red"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: unit.status == 1 ? "ik ik-repeat f-16 mr-15 text-green" : "ik ik-repeat f-16 mr-15 text-red",
      onClick: function onClick() {
        return ChangeStatus(unit.unit_id);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-edit f-16 mr-15 text-blue",
      "data-toggle": "modal",
      "data-target": "#edit_modal",
      onClick: function onClick() {
        return editHandler(unit.unit_id, unit, i);
      }
    }), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "ik ik-trash-2 f-16 text-red",
      onClick: function onClick() {
        return DeleteHandler(unit.unit_id);
      }
    })));
  }), totalItemsCount === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: "4",
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
    getFunction: getUnitList
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(UnitList));

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

/***/ "./resources/js/containers/contexts/unit/UnitContext.js":
/*!**************************************************************!*\
  !*** ./resources/js/containers/contexts/unit/UnitContext.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var UnitContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (UnitContext);

/***/ }),

/***/ "./resources/js/containers/contexts/unit/UnitState.js":
/*!************************************************************!*\
  !*** ./resources/js/containers/contexts/unit/UnitState.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UnitContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UnitContext */ "./resources/js/containers/contexts/unit/UnitContext.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/customHooks/useForms */ "./resources/js/components/customHooks/useForms.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var UnitState = function UnitState(props) {
  var select_row = [15, 20, 30, 40, 50];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      unitList = _useState6[0],
      setUnitList = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(15),
      _useState8 = _slicedToArray(_useState7, 2),
      currentRow = _useState8[0],
      setCurrentRow = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      _useState10 = _slicedToArray(_useState9, 2),
      activePage = _useState10[0],
      setActivePage = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      totalItemsCount = _useState12[0],
      setTotalItemsCount = _useState12[1];

  var _useForms = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__["default"])({
    unit_name: "",
    short_name: "",
    status: ""
  }),
      _useForms2 = _slicedToArray(_useForms, 3),
      unitForm = _useForms2[0],
      setUnitForm = _useForms2[1],
      handleChange = _useForms2[2];

  var _useForms3 = Object(_components_customHooks_useForms__WEBPACK_IMPORTED_MODULE_5__["default"])({
    unit_name: "",
    short_name: "",
    status: ""
  }),
      _useForms4 = _slicedToArray(_useForms3, 3),
      editForm = _useForms4[0],
      setEditForm = _useForms4[1],
      EditHandleChange = _useForms4[2];

  var getUnitList = function getUnitList() {
    var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var main_url = "units?q=".concat(search, "&row=").concat(currentRow, "&page=").concat(page);
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(main_url).then(function (response) {
      setUnitList(response.data.data.data);
      setActivePage(response.data.data.current_page);
      setTotalItemsCount(response.data.data.total);
    })["catch"](function (error) {
      console.log(error);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getUnitList();
    return function () {
      return setUnitList([]);
    };
  }, [currentRow, search]);

  var submitHandler = function submitHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/units", unitForm).then(function (response) {
      setError([]);
      getUnitList();
      $("#close").click();
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("Unit Data Inserted Successfully!");
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
    });
  };

  var DeleteHandler = function DeleteHandler(id) {
    sweetalert__WEBPACK_IMPORTED_MODULE_3___default()({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(function (willDelete) {
      if (willDelete) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a["delete"]("/units/" + id).then(function (response) {
          if (response.status === 204) {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Deleted!", "Unit Has been Deleted", "success");
            getUnitList();
          } else {
            sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Oops", "Something Went Wrong", "warning");
          }
        })["catch"](function (error) {
          console.log(error);
        });
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_3___default()("Your imaginary file is safe!");
      }
    });
  };

  var editHandler = function editHandler(id, data) {
    unitList.unit_id = id;
    var value = JSON.parse(JSON.stringify(data));
    setEditForm(_objectSpread(_objectSpread({}, editForm), value));
  };

  var updateHandler = function updateHandler(e) {
    e.preventDefault();
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.put("/units/" + editForm.unit_id, editForm).then(function (response) {
      getUnitList();
      $("#edit_close").click();
      setError([]);
      react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("Unit Data Update Successfully!");
    })["catch"](function (error) {
      if (error.response.status == 422) {
        setError(error.response.data.errors);
      }
    });
  };

  var ChangeStatus = function ChangeStatus(id) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/units/" + id).then(function (response) {
      console.log(response);

      if (response.data.code === 200) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].success("This unit is active successfully!");
      }

      if (response.data.code === 201) {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"].warning("This unit is inactive successfully!");
      }

      getUnitList();
    })["catch"](function (error) {
      console.log(error);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnitContext__WEBPACK_IMPORTED_MODULE_2__["default"].Provider, {
    value: {
      select_row: select_row,
      search: search,
      setSearch: setSearch,
      error: error,
      setError: setError,
      unitList: unitList,
      setUnitList: setUnitList,
      currentRow: currentRow,
      setCurrentRow: setCurrentRow,
      activePage: activePage,
      setActivePage: setActivePage,
      totalItemsCount: totalItemsCount,
      setTotalItemsCount: setTotalItemsCount,
      unitForm: unitForm,
      setUnitForm: setUnitForm,
      handleChange: handleChange,
      editForm: editForm,
      setEditForm: setEditForm,
      EditHandleChange: EditHandleChange,
      getUnitList: getUnitList,
      submitHandler: submitHandler,
      DeleteHandler: DeleteHandler,
      editHandler: editHandler,
      updateHandler: updateHandler,
      ChangeStatus: ChangeStatus
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(UnitState));

/***/ })

}]);