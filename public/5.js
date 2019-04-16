(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      isDisabled: false,
      labelPosition: 'left',
      errors: {},
      form: {
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      checkAllRoles: false,
      isIndeterminate: true,
      roles: [],
      jobs: [],
      checkRoles: [],
      isUser: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id)).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      });
    } else {
      axios.get("/api/users/create").then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      });
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id)).then(function (response) {
        vm.setData(response.data);
        next();
      });
    } else {
      next();
    }
  },
  methods: {
    contains: function contains(a, obj) {
      var i = a.length;

      while (i--) {
        if (a[i] === obj) {
          return true;
        }
      }

      return false;
    },
    handleCheckAllRolesChange: function handleCheckAllRolesChange(val) {
      var vm = this;
      vm.checkRoles = val ? _.map(vm.roles, 'id') : [];
      vm.isIndeterminate = false;
    },
    handleCheckedRolesChange: function handleCheckedRolesChange(value) {
      var vm = this,
          checkedCount = value.length;
      vm.contains(value, 3) ? vm.isUser = true : vm.isUser = false;
      vm.checkAllRole = checkedCount === vm.roles.length;
      vm.isIndeterminate = checkedCount > 0 && checkedCount < vm.roles.length;
    },
    onSubmit: function onSubmit() {
      var vm = this;
      vm.isDisabled = true;
      vm.errors = [];

      var form = _.clone(vm.form);

      form.roles = vm.checkRoles;
      axios.post('/api/users', form).then(function (response) {
        vm.$message({
          message: response.statusText,
          type: 'success'
        });
        vm.isDisabled = false;
      })["catch"](function (error) {
        if (error.response.data.errors && error.response.data.message) {
          vm.errors = error.response.data.errors;
          vm.$message({
            message: error.response.data.message,
            type: 'error'
          });
        }

        vm.isDisabled = false;
      });
    },
    setData: function setData(row) {
      var vm = this;
      vm.roles = row.roles;
      vm.jobs = row.jobs;

      if (row.user) {
        vm.form = row.user;
        vm.checkRoles = _.map(vm.form.roles, 'id');
        vm.contains(vm.checkRoles, 3) ? vm.isUser = true : vm.isUser = false;
      } else {
        vm.isUser = true;
        vm.checkRoles = [3];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/create.vue?vue&type=template&id=474fa276&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/create.vue?vue&type=template&id=474fa276& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-lg-6" }, [
      _c("div", { staticClass: "card" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "el-form",
              {
                ref: "form",
                attrs: {
                  "label-position": "labelPosition",
                  size: "small",
                  "label-width": "200px",
                  model: _vm.form
                },
                nativeOn: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.onSubmit($event)
                  }
                }
              },
              [
                _c(
                  "el-form-item",
                  {
                    class: _vm.errors.name ? "is-error is-required" : "",
                    attrs: { label: "Name" }
                  },
                  [
                    _c("el-input", {
                      attrs: { type: "text", required: "" },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.errors.name, function(error) {
                      return _vm.errors.name
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(error) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    class: _vm.errors.job_id ? "is-error is-required" : "",
                    attrs: { label: "Job" }
                  },
                  [
                    _c(
                      "el-select",
                      {
                        attrs: { required: "" },
                        model: {
                          value: _vm.form.job_id,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "job_id", $$v)
                          },
                          expression: "form.job_id"
                        }
                      },
                      _vm._l(_vm.jobs, function(item) {
                        return _c(
                          "el-option",
                          {
                            key: item.id,
                            attrs: { label: item.job_title, value: item.id }
                          },
                          [
                            _c("span", { staticStyle: { float: "left" } }, [
                              _vm._v(_vm._s(item.job_title))
                            ]),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticStyle: {
                                  float: "right",
                                  color: "#8492a6",
                                  "font-size": "13px"
                                }
                              },
                              [_vm._v(_vm._s(item.standard_pay))]
                            )
                          ]
                        )
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.errors.job_id, function(error) {
                      return _vm.errors.job_id
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(error) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    class: _vm.errors.email ? "is-error is-required" : "",
                    attrs: { label: "Email" }
                  },
                  [
                    _c("el-input", {
                      attrs: { type: "email", required: "" },
                      model: {
                        value: _vm.form.email,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "email", $$v)
                        },
                        expression: "form.email"
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.errors.email, function(error) {
                      return _vm.errors.email
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(error) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    class: _vm.errors.password ? "is-error is-required" : "",
                    attrs: { label: "Password" }
                  },
                  [
                    _c("el-input", {
                      attrs: { type: "password", required: "" },
                      model: {
                        value: _vm.form.password,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "password", $$v)
                        },
                        expression: "form.password"
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.errors.password, function(error) {
                      return _vm.errors.password
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(error) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  {
                    class: _vm.errors.confirm_password
                      ? "is-error is-required"
                      : "",
                    attrs: { label: "Confirm Password" }
                  },
                  [
                    _c("el-input", {
                      attrs: { type: "password", required: "" },
                      model: {
                        value: _vm.form.confirm_password,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "confirm_password", $$v)
                        },
                        expression: "form.confirm_password"
                      }
                    }),
                    _vm._v(" "),
                    _vm._l(_vm.errors.confirm_password, function(error) {
                      return _vm.errors.confirm_password
                        ? _c("div", { staticClass: "el-form-item__error" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(error) +
                                "\n                            "
                            )
                          ])
                        : _vm._e()
                    })
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "el-form-item",
                  [
                    _c(
                      "el-button",
                      {
                        attrs: { type: "primary", loading: _vm.isDisabled },
                        on: { click: _vm.onSubmit }
                      },
                      [_vm._v("Add\n                            User")]
                    ),
                    _vm._v(" "),
                    _c(
                      "el-button",
                      {
                        on: {
                          click: function($event) {
                            return _vm.$router.push({ name: "view-user" })
                          }
                        }
                      },
                      [_vm._v("Cancel")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-lg-6" }, [
      _c(
        "div",
        { staticClass: "card", class: _vm.errors.roles ? "card-danger" : "" },
        [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "card-body" },
            [
              _c(
                "el-checkbox",
                {
                  attrs: { indeterminate: _vm.isIndeterminate },
                  on: { change: _vm.handleCheckAllRolesChange },
                  model: {
                    value: _vm.checkAllRoles,
                    callback: function($$v) {
                      _vm.checkAllRoles = $$v
                    },
                    expression: "checkAllRoles"
                  }
                },
                [_vm._v("Check all\n                    ")]
              ),
              _vm._v(" "),
              _c("div", { staticStyle: { margin: "15px 0" } }),
              _vm._v(" "),
              _c(
                "el-checkbox-group",
                {
                  on: { change: _vm.handleCheckedRolesChange },
                  model: {
                    value: _vm.checkRoles,
                    callback: function($$v) {
                      _vm.checkRoles = $$v
                    },
                    expression: "checkRoles"
                  }
                },
                _vm._l(_vm.roles, function(role, index) {
                  return _c(
                    "el-checkbox",
                    { key: role.id, attrs: { label: role.id } },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(role.display_name) +
                          "\n                        "
                      )
                    ]
                  )
                }),
                1
              )
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "m-0" }, [_vm._v("Create User")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h5", { staticClass: "m-0" }, [_vm._v("Roles")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/create.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/user/create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=474fa276& */ "./resources/js/components/user/create.vue?vue&type=template&id=474fa276&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/user/create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/create.vue?vue&type=template&id=474fa276&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/user/create.vue?vue&type=template&id=474fa276& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=474fa276& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/create.vue?vue&type=template&id=474fa276&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_474fa276___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);