function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["facilities-facilities-module"], {
  /***/
  "../../libs/perun/facility-services-config/src/index.ts":
  /*!*****************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/index.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PerunFacilityServicesConfigModule, ServiceConfiguratorComponent */

  /***/
  function libsPerunFacilityServicesConfigSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_perun_facility_services_config_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/perun-facility-services-config.module */
    "../../libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "PerunFacilityServicesConfigModule", function () {
      return _lib_perun_facility_services_config_module__WEBPACK_IMPORTED_MODULE_0__["PerunFacilityServicesConfigModule"];
    });
    /* harmony import */


    var _lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./lib/service-configurator/service-configurator.component */
    "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ServiceConfiguratorComponent", function () {
      return _lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_1__["ServiceConfiguratorComponent"];
    });
    /***/

  },

  /***/
  "../../libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts":
  /*!*****************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/lib/perun-facility-services-config.module.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: PerunFacilityServicesConfigModule */

  /***/
  function libsPerunFacilityServicesConfigSrcLibPerunFacilityServicesConfigModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PerunFacilityServicesConfigModule", function () {
      return PerunFacilityServicesConfigModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service-configurator/service-configurator.component */
    "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_ui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/ui/material */
    "../../libs/ui/material/src/index.ts");

    var PerunFacilityServicesConfigModule = function PerunFacilityServicesConfigModule() {
      _classCallCheck(this, PerunFacilityServicesConfigModule);
    };

    PerunFacilityServicesConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PerunFacilityServicesConfigModule
    });
    PerunFacilityServicesConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PerunFacilityServicesConfigModule_Factory(t) {
        return new (t || PerunFacilityServicesConfigModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _perun_web_apps_ui_material__WEBPACK_IMPORTED_MODULE_6__["UiMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PerunFacilityServicesConfigModule, {
        declarations: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _perun_web_apps_ui_material__WEBPACK_IMPORTED_MODULE_6__["UiMaterialModule"]],
        exports: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerunFacilityServicesConfigModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_4__["PerunSharedComponentsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _perun_web_apps_ui_material__WEBPACK_IMPORTED_MODULE_6__["UiMaterialModule"]],
          declarations: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]],
          exports: [_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_2__["ServiceConfiguratorComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts":
  /*!*******************************************************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: ServiceConfiguratorComponent */

  /***/
  function libsPerunFacilityServicesConfigSrcLibServiceConfiguratorServiceConfiguratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceConfiguratorComponent", function () {
      return ServiceConfiguratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tabs */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../components/src/lib/attributes-list/attributes-list.component */
    "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["FacilityAList"];
    var _c1 = ["ResourceAList"];
    var _c2 = ["GroupAList"];
    var _c3 = ["MemberAList"];

    function ServiceConfiguratorComponent_perun_web_apps_attributes_list_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 7, 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_perun_web_apps_attributes_list_9_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r0.pageSize)("attributes", ctx_r0.facilityAttributes)("selection", ctx_r0.selectionFacility);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_10_perun_web_apps_attributes_list_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 7, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_mat_tab_10_perun_web_apps_attributes_list_7_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r7.pageSize)("attributes", ctx_r7.resourceAttributes)("selection", ctx_r7.selectionResource);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.onAddAttResource();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_10_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.onSaveResource();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceConfiguratorComponent_mat_tab_10_perun_web_apps_attributes_list_7_Template, 2, 3, "perun-web-apps-attributes-list", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r1.resource.name + " (resource)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.ADD"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.selectionResource.selected.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.SAVE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r1.resourceAttributes);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_11_perun_web_apps_attributes_list_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 7, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_mat_tab_11_perun_web_apps_attributes_list_7_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r14.pageSize)("attributes", ctx_r14.groupAttributes)("selection", ctx_r14.selectionGroup);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_11_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r18.onAddAttGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_11_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.onSaveGroup();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceConfiguratorComponent_mat_tab_11_perun_web_apps_attributes_list_7_Template, 2, 3, "perun-web-apps-attributes-list", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r2.group.name + " (group)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.ADD"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selectionGroup.selected.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.SAVE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r2.groupAttributes);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_12_perun_web_apps_attributes_list_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 7, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ServiceConfiguratorComponent_mat_tab_12_perun_web_apps_attributes_list_7_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

          var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r23.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r21.pageSize)("attributes", ctx_r21.memberAttributes)("selection", ctx_r21.selectionMember);
      }
    }

    function ServiceConfiguratorComponent_mat_tab_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_12_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.onAddAttMember();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_mat_tab_12_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r27.onSaveMember();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ServiceConfiguratorComponent_mat_tab_12_perun_web_apps_attributes_list_7_Template, 2, 3, "perun-web-apps-attributes-list", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r3.member.user.firstName + " " + ctx_r3.member.user.lastName + " (member)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.ADD"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.selectionMember.selected.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.SAVE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx_r3.memberAttributes);
      }
    }

    var ServiceConfiguratorComponent = /*#__PURE__*/function () {
      function ServiceConfiguratorComponent(attributesManager, tableConfigService, dialog) {
        _classCallCheck(this, ServiceConfiguratorComponent);

        this.attributesManager = attributesManager;
        this.tableConfigService = tableConfigService;
        this.dialog = dialog;
        this.selectionFacility = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.selectionResource = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.selectionGroup = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.selectionMember = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.showTab = 0;
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TABLE_ATTRIBUTES_SETTINGS"];
      }

      _createClass(ServiceConfiguratorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.loadFacilityAttributes();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this = this;

          if (changes['service']) {
            this.reloadAll();
            return;
          }

          if (changes['resource']) {
            if (changes['resource'].currentValue === undefined) {
              this.resourceAttributes = undefined;
              this.showTab = 0;
            } else {
              this.showTab = 1;
              this.loadResourceAttributes();
            }
          } else if (changes['group']) {
            if (changes['group'].currentValue === undefined) {
              this.groupAttributes = undefined;
              this.showTab = 1;
            } else {
              this.showTab = 2;
              this.attributesManager.getGroupAttributes(this.group.id).subscribe(function (attrs) {
                return _this.groupAttributes = attrs;
              });
            }
          } else if (changes['member']) {
            if (changes['member'].currentValue === undefined) {
              this.memberAttributes = undefined;
              this.showTab = 2;
            } else {
              this.showTab = 3;
              this.attributesManager.getMemberAttributes(this.member.id).subscribe(function (attrs) {
                return _this.memberAttributes = attrs;
              });
            }
          }
        }
      }, {
        key: "loadResourceAttributes",
        value: function loadResourceAttributes() {
          var _this2 = this;

          if (this.service === 'NOT_SELECTED') {
            this.attributesManager.getResourceAttributes(this.resource.id).subscribe(function (attrs) {
              return _this2.resourceAttributes = attrs;
            });
          } else if (this.service === 'ALL') {
            this.attributesManager.getRequiredAttributesResource(this.resource.id).subscribe(function (attrs) {
              return _this2.resourceAttributes = attrs;
            });
          } else {
            this.attributesManager.getRequiredAttributesResourceService(this.service.id, this.resource.id).subscribe(function (attrs) {
              return _this2.resourceAttributes = attrs;
            });
          }
        }
      }, {
        key: "loadFacilityAttributes",
        value: function loadFacilityAttributes() {
          var _this3 = this;

          if (this.service === 'NOT_SELECTED') {
            this.attributesManager.getFacilityAttributes(this.facility.id).subscribe(function (attrs) {
              return _this3.facilityAttributes = attrs;
            });
          } else if (this.service === 'ALL') {
            this.attributesManager.getRequiredAttributesFacility(this.facility.id).subscribe(function (attrs) {
              return _this3.facilityAttributes = attrs;
            });
          } else {
            this.attributesManager.getRequiredAttributesFacilityService(this.service.id, this.facility.id).subscribe(function (attrs) {
              return _this3.facilityAttributes = attrs;
            });
          }
        }
      }, {
        key: "reloadAll",
        value: function reloadAll() {
          this.loadFacilityAttributes();

          if (this.resource !== undefined) {
            this.loadResourceAttributes();
          }
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }, {
        key: "onAddAttFacility",
        value: function onAddAttFacility() {
          var _this4 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.facility.id,
            entity: 'facility',
            notEmptyAttributes: this.facilityAttributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this4.reloadAll();
            }
          });
        }
      }, {
        key: "onSaveFacility",
        value: function onSaveFacility() {
          var _this5 = this;

          this.facilityAlist.updateMapAttributes();
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.facility.id,
              entity: 'facility',
              attributes: this.selectionFacility.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this5.selectionFacility.clear();

              _this5.ngOnInit();
            }
          });
        }
      }, {
        key: "onAddAttResource",
        value: function onAddAttResource() {
          var _this6 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.resource.id,
            entity: 'resource',
            notEmptyAttributes: this.resourceAttributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this6.reloadAll();
            }
          });
        }
      }, {
        key: "onSaveResource",
        value: function onSaveResource() {
          var _this7 = this;

          this.resourceAList.updateMapAttributes();
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.resource.id,
              entity: 'resource',
              attributes: this.selectionResource.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this7.selectionResource.clear();

              _this7.ngOnInit();
            }
          });
        }
      }, {
        key: "onAddAttGroup",
        value: function onAddAttGroup() {
          var _this8 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.group.id,
            entity: 'group',
            notEmptyAttributes: this.groupAttributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this8.reloadAll();
            }
          });
        }
      }, {
        key: "onSaveGroup",
        value: function onSaveGroup() {
          var _this9 = this;

          this.groupAList.updateMapAttributes();
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.group.id,
              entity: 'group',
              attributes: this.selectionGroup.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this9.selectionGroup.clear();

              _this9.ngOnInit();
            }
          });
        }
      }, {
        key: "onAddAttMember",
        value: function onAddAttMember() {
          var _this10 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.member.id,
            entity: 'member',
            notEmptyAttributes: this.memberAttributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this10.reloadAll();
            }
          });
        }
      }, {
        key: "onSaveMember",
        value: function onSaveMember() {
          var _this11 = this;

          this.memberAList.updateMapAttributes();
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["EditAttributeDialogComponent"], {
            width: '450px',
            data: {
              entityId: this.member.id,
              entity: 'member',
              attributes: this.selectionMember.selected
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this11.selectionMember.clear();

              _this11.ngOnInit();
            }
          });
        }
      }]);

      return ServiceConfiguratorComponent;
    }();

    ServiceConfiguratorComponent.ɵfac = function ServiceConfiguratorComponent_Factory(t) {
      return new (t || ServiceConfiguratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    ServiceConfiguratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServiceConfiguratorComponent,
      selectors: [["perun-web-apps-service-configurator"]],
      viewQuery: function ServiceConfiguratorComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.facilityAlist = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.resourceAList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.groupAList = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.memberAList = _t.first);
        }
      },
      inputs: {
        facility: "facility",
        service: "service",
        resource: "resource",
        group: "group",
        member: "member"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 13,
      vars: 14,
      consts: [[2, "min-height", "500px"], [3, "dynamicHeight", "selectedIndex", "selectedIndexChange"], [3, "label"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", "mt-3", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", "mt-3", 3, "disabled", "click"], [3, "pageSize", "attributes", "selection", "page", 4, "ngIf"], [3, "label", 4, "ngIf"], [3, "pageSize", "attributes", "selection", "page"], ["FacilityAList", ""], ["ResourceAList", ""], ["GroupAList", ""], ["MemberAList", ""]],
      template: function ServiceConfiguratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-tab-group", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function ServiceConfiguratorComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) {
            return ctx.showTab = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-tab", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_Template_button_click_3_listener() {
            return ctx.onAddAttFacility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceConfiguratorComponent_Template_button_click_6_listener() {
            return ctx.onSaveFacility();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ServiceConfiguratorComponent_perun_web_apps_attributes_list_9_Template, 2, 3, "perun-web-apps-attributes-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ServiceConfiguratorComponent_mat_tab_10_Template, 8, 9, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ServiceConfiguratorComponent_mat_tab_11_Template, 8, 9, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ServiceConfiguratorComponent_mat_tab_12_Template, 8, 9, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dynamicHeight", true)("selectedIndex", ctx.showTab);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.facility.name + " (facility)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selectionFacility.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 12, "SHARED_LIB.PERUN.SERVICES_CONFIGURATIONS.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facilityAttributes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.resource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.group);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.member);
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_10__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaWJzL3BlcnVuL2ZhY2lsaXR5LXNlcnZpY2VzLWNvbmZpZy9zcmMvbGliL3NlcnZpY2UtY29uZmlndXJhdG9yL3NlcnZpY2UtY29uZmlndXJhdG9yLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceConfiguratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'perun-web-apps-service-configurator',
          templateUrl: './service-configurator.component.html',
          styleUrls: ['./service-configurator.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["AttributesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        facility: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        service: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        resource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        group: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        member: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        facilityAlist: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['FacilityAList']
        }],
        resourceAList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['ResourceAList']
        }],
        groupAList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['GroupAList']
        }],
        memberAList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['MemberAList']
        }]
      });
    })();
    /***/

  },

  /***/
  "../../libs/ui/material/src/index.ts":
  /*!**********************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/ui/material/src/index.ts ***!
    \**********************************************************************/

  /*! exports provided: UiMaterialModule */

  /***/
  function libsUiMaterialSrcIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _lib_ui_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./lib/ui-material.module */
    "../../libs/ui/material/src/lib/ui-material.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UiMaterialModule", function () {
      return _lib_ui_material_module__WEBPACK_IMPORTED_MODULE_0__["UiMaterialModule"];
    });
    /***/

  },

  /***/
  "../../libs/ui/material/src/lib/ui-material.module.ts":
  /*!***************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/libs/ui/material/src/lib/ui-material.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: UiMaterialModule */

  /***/
  function libsUiMaterialSrcLibUiMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UiMaterialModule", function () {
      return UiMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/divider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/expansion */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/stepper */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var UiMaterialModule = function UiMaterialModule() {
      _classCallCheck(this, UiMaterialModule);
    };

    UiMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UiMaterialModule
    });
    UiMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UiMaterialModule_Factory(t) {
        return new (t || UiMaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UiMaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]],
        exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UiMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]],
          exports: [_angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_14__["MatTableModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatProgressSpinnerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_15__["ScrollingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_13__["MatStepperModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js":
  /*!**********************************************************************************************************!*\
    !*** /home/vectoun/git/perun-web-apps/node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
    \**********************************************************************************************************/

  /*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015GridListJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function () {
      return MatGridAvatarCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridList", function () {
      return MatGridList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridListModule", function () {
      return MatGridListModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTile", function () {
      return MatGridTile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function () {
      return MatGridTileFooterCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function () {
      return MatGridTileHeaderCssMatStyler;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatGridTileText", function () {
      return MatGridTileText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function () {
      return TileCoordinator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function () {
      return MAT_GRID_LIST;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "../../node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-base.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token used to provide a grid list to a tile and to avoid circular imports.
     * \@docs-private
     * @type {?}
     */


    var _c0 = ["*"];
    var _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
    var _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
    var MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');
    /**
     * Base interface for a `MatGridList`.
     * \@docs-private
     * @record
     */

    function MatGridListBase() {}

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-tile.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridTile = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?=} _gridList
       */
      function MatGridTile(_element, _gridList) {
        _classCallCheck(this, MatGridTile);

        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
      }
      /**
       * Amount of rows that the grid tile takes up.
       * @return {?}
       */


      _createClass(MatGridTile, [{
        key: "_setStyle",

        /**
         * Sets the style of the grid-tile element.  Needs to be set manually to avoid
         * "Changed after checked" errors that would occur with HostBinding.
         * @param {?} property
         * @param {?} value
         * @return {?}
         */
        value: function _setStyle(property, value) {
          /** @type {?} */
          this._element.nativeElement.style[property] = value;
        }
      }, {
        key: "rowspan",
        get: function get() {
          return this._rowspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
        /**
         * Amount of columns that the grid tile takes up.
         * @return {?}
         */

      }, {
        key: "colspan",
        get: function get() {
          return this._colspan;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value));
        }
      }]);

      return MatGridTile;
    }();

    MatGridTile.ɵfac = function MatGridTile_Factory(t) {
      return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8));
    };

    MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTile,
      selectors: [["mat-grid-tile"]],
      hostAttrs: [1, "mat-grid-tile"],
      hostVars: 2,
      hostBindings: function MatGridTile_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
        }
      },
      inputs: {
        rowspan: "rowspan",
        colspan: "colspan"
      },
      exportAs: ["matGridTile"],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "mat-figure"]],
      template: function MatGridTile_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTile.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_GRID_LIST]
        }]
      }];
    };

    MatGridTile.propDecorators = {
      rowspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      colspan: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile',
          exportAs: 'matGridTile',
          host: {
            'class': 'mat-grid-tile',
            // Ensures that the "rowspan" and "colspan" input value is reflected in
            // the DOM. This is needed for the grid-tile harness.
            '[attr.rowspan]': 'rowspan',
            '[attr.colspan]': 'colspan'
          },
          template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [MAT_GRID_LIST]
          }]
        }];
      }, {
        rowspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        colspan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}

    var MatGridTileText = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       */
      function MatGridTileText(_element) {
        _classCallCheck(this, MatGridTileText);

        this._element = _element;
      }
      /**
       * @return {?}
       */


      _createClass(MatGridTileText, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
        }
      }]);

      return MatGridTileText;
    }();

    MatGridTileText.ɵfac = function MatGridTileText_Factory(t) {
      return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridTileText,
      selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]],
      contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
        }
      },
      ngContentSelectors: _c2,
      decls: 4,
      vars: 0,
      consts: [[1, "mat-grid-list-text"]],
      template: function MatGridTileText_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
        }
      },
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridTileText.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    MatGridTileText.propDecorators = {
      _lines: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
          descendants: true
        }]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-tile-header, mat-grid-tile-footer',
          template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        _lines: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridAvatarCssMatStyler = function MatGridAvatarCssMatStyler() {
      _classCallCheck(this, MatGridAvatarCssMatStyler);
    };

    MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) {
      return new (t || MatGridAvatarCssMatStyler)();
    };

    MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridAvatarCssMatStyler,
      selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]],
      hostAttrs: [1, "mat-grid-avatar"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[mat-grid-avatar], [matGridAvatar]',
          host: {
            'class': 'mat-grid-avatar'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileHeaderCssMatStyler = function MatGridTileHeaderCssMatStyler() {
      _classCallCheck(this, MatGridTileHeaderCssMatStyler);
    };

    MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) {
      return new (t || MatGridTileHeaderCssMatStyler)();
    };

    MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileHeaderCssMatStyler,
      selectors: [["mat-grid-tile-header"]],
      hostAttrs: [1, "mat-grid-tile-header"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-header',
          host: {
            'class': 'mat-grid-tile-header'
          }
        }]
      }], null, null);
    })();
    /**
     * Directive whose purpose is to add the mat- CSS styling to this selector.
     * \@docs-private
     */


    var MatGridTileFooterCssMatStyler = function MatGridTileFooterCssMatStyler() {
      _classCallCheck(this, MatGridTileFooterCssMatStyler);
    };

    MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) {
      return new (t || MatGridTileFooterCssMatStyler)();
    };

    MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: MatGridTileFooterCssMatStyler,
      selectors: [["mat-grid-tile-footer"]],
      hostAttrs: [1, "mat-grid-tile-footer"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'mat-grid-tile-footer',
          host: {
            'class': 'mat-grid-tile-footer'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-coordinator.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Interface describing a tile.
     * \@docs-private
     * @record
     */


    function Tile() {}

    if (false) {}
    /**
     * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
     * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
     * because the tiles can have a rowspan.
     *
     * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
     * large enough to accommodate it so that the tiles still render in the same order in which they
     * are given.
     *
     * The basis of the algorithm is the use of an array to track the already placed tiles. Each
     * element of the array corresponds to a column, and the value indicates how many cells in that
     * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
     * decrements each value in the tracking array (indicating that the column is one cell closer to
     * being free).
     *
     * \@docs-private
     */


    var TileCoordinator = /*#__PURE__*/function () {
      function TileCoordinator() {
        _classCallCheck(this, TileCoordinator);

        /**
         * Index at which the search for the next gap will start.
         */
        this.columnIndex = 0;
        /**
         * The current row index.
         */

        this.rowIndex = 0;
      }
      /**
       * Gets the total number of rows occupied by tiles
       * @return {?}
       */


      _createClass(TileCoordinator, [{
        key: "update",

        /**
         * Updates the tile positions.
         * @param {?} numColumns Amount of columns in the grid.
         * @param {?} tiles Tiles to be positioned.
         * @return {?}
         */
        value: function update(numColumns, tiles) {
          var _this12 = this;

          this.columnIndex = 0;
          this.rowIndex = 0;
          this.tracker = new Array(numColumns);
          this.tracker.fill(0, 0, this.tracker.length);
          this.positions = tiles.map(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return _this12._trackTile(tile);
          });
        }
        /**
         * Calculates the row and col position of a tile.
         * @private
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_trackTile",
        value: function _trackTile(tile) {
          // Find a gap large enough for this tile.

          /** @type {?} */
          var gapStartIndex = this._findMatchingGap(tile.colspan); // Place tile in the resulting gap.


          this._markTilePosition(gapStartIndex, tile); // The next time we look for a gap, the search will start at columnIndex, which should be
          // immediately after the tile that has just been placed.


          this.columnIndex = gapStartIndex + tile.colspan;
          return new TilePosition(this.rowIndex, gapStartIndex);
        }
        /**
         * Finds the next available space large enough to fit the tile.
         * @private
         * @param {?} tileCols
         * @return {?}
         */

      }, {
        key: "_findMatchingGap",
        value: function _findMatchingGap(tileCols) {
          if (tileCols > this.tracker.length) {
            throw Error("mat-grid-list: tile with colspan ".concat(tileCols, " is wider than ") + "grid with cols=\"".concat(this.tracker.length, "\"."));
          } // Start index is inclusive, end index is exclusive.

          /** @type {?} */


          var gapStartIndex = -1;
          /** @type {?} */

          var gapEndIndex = -1; // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.

          do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapStartIndex = this.tracker.indexOf(0, this.columnIndex); // If there are no more empty spaces in this row at all, move on to the next row.

            if (gapStartIndex == -1) {
              this._nextRow();

              gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
              gapEndIndex = this._findGapEndIndex(gapStartIndex);
              continue;
            }

            gapEndIndex = this._findGapEndIndex(gapStartIndex); // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.

            this.columnIndex = gapStartIndex + 1; // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
          } while (gapEndIndex - gapStartIndex < tileCols || gapEndIndex == 0); // If we still didn't manage to find a gap, ensure that the index is
          // at least zero so the tile doesn't get pulled out of the grid.


          return Math.max(gapStartIndex, 0);
        }
        /**
         * Move "down" to the next row.
         * @private
         * @return {?}
         */

      }, {
        key: "_nextRow",
        value: function _nextRow() {
          this.columnIndex = 0;
          this.rowIndex++; // Decrement all spaces by one to reflect moving down one row.

          for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
          }
        }
        /**
         * Finds the end index (exclusive) of a gap given the index from which to start looking.
         * The gap ends when a non-zero value is found.
         * @private
         * @param {?} gapStartIndex
         * @return {?}
         */

      }, {
        key: "_findGapEndIndex",
        value: function _findGapEndIndex(gapStartIndex) {
          for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
              return i;
            }
          } // The gap ends with the end of the row.


          return this.tracker.length;
        }
        /**
         * Update the tile tracker to account for the given tile in the given space.
         * @private
         * @param {?} start
         * @param {?} tile
         * @return {?}
         */

      }, {
        key: "_markTilePosition",
        value: function _markTilePosition(start, tile) {
          for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
          }
        }
      }, {
        key: "rowCount",
        get: function get() {
          return this.rowIndex + 1;
        }
        /**
         * Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
         * @return {?}
         */

      }, {
        key: "rowspan",
        get: function get() {
          /** @type {?} */
          var lastRowMax = Math.max.apply(Math, _toConsumableArray(this.tracker)); // if any of the tiles has a rowspan that pushes it beyond the total row count,
          // add the difference to the rowcount

          return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        }
      }]);

      return TileCoordinator;
    }();

    if (false) {}
    /**
     * Simple data structure for tile position (row, col).
     * \@docs-private
     */


    var TilePosition =
    /**
     * @param {?} row
     * @param {?} col
     */
    function TilePosition(row, col) {
      _classCallCheck(this, TilePosition);

      this.row = row;
      this.col = col;
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/tile-styler.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * RegExp that can be used to check whether a value will
     * be allowed inside a CSS `calc()` expression.
     * @type {?}
     */


    var cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
    /**
     * Sets the style properties for an individual tile, given the position calculated by the
     * Tile Coordinator.
     * \@docs-private
     * @abstract
     */

    var TileStyler = /*#__PURE__*/function () {
      function TileStyler() {
        _classCallCheck(this, TileStyler);

        this._rows = 0;
        this._rowspan = 0;
      }
      /**
       * Adds grid-list layout info once it is available. Cannot be processed in the constructor
       * because these properties haven't been calculated by that point.
       *
       * @param {?} gutterSize Size of the grid's gutter.
       * @param {?} tracker Instance of the TileCoordinator.
       * @param {?} cols Amount of columns in the grid.
       * @param {?} direction Layout direction of the grid.
       * @return {?}
       */


      _createClass(TileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          this._gutterSize = normalizeUnits(gutterSize);
          this._rows = tracker.rowCount;
          this._rowspan = tracker.rowspan;
          this._cols = cols;
          this._direction = direction;
        }
        /**
         * Computes the amount of space a single 1x1 tile would take up (width or height).
         * Used as a basis for other calculations.
         * @param {?} sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
         * @param {?} gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
         * @return {?} The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
         */

      }, {
        key: "getBaseTileSize",
        value: function getBaseTileSize(sizePercent, gutterFraction) {
          // Take the base size percent (as would be if evenly dividing the size between cells),
          // and then subtracting the size of one gutter. However, since there are no gutters on the
          // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
          // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
          // edge evenly among the cells).
          return "(".concat(sizePercent, "% - (").concat(this._gutterSize, " * ").concat(gutterFraction, "))");
        }
        /**
         * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} offset Number of tiles that have already been rendered in the row/column.
         * @return {?} Position of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTilePosition",
        value: function getTilePosition(baseSize, offset) {
          // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
          // row/column (offset).
          return offset === 0 ? '0' : calc("(".concat(baseSize, " + ").concat(this._gutterSize, ") * ").concat(offset));
        }
        /**
         * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
         * @param {?} baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
         * @param {?} span The tile's rowspan or colspan.
         * @return {?} Size of the tile as a CSS calc() expression.
         */

      }, {
        key: "getTileSize",
        value: function getTileSize(baseSize, span) {
          return "(".concat(baseSize, " * ").concat(span, ") + (").concat(span - 1, " * ").concat(this._gutterSize, ")");
        }
        /**
         * Sets the style properties to be applied to a tile for the given row and column index.
         * @param {?} tile Tile to which to apply the styling.
         * @param {?} rowIndex Index of the tile's row.
         * @param {?} colIndex Index of the tile's column.
         * @return {?}
         */

      }, {
        key: "setStyle",
        value: function setStyle(tile, rowIndex, colIndex) {
          // Percent of the available horizontal space that one column takes up.

          /** @type {?} */
          var percentWidthPerTile = 100 / this._cols; // Fraction of the vertical gutter size that each column takes up.
          // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.

          /** @type {?} */

          var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
          this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
          this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        }
        /**
         * Sets the horizontal placement of the tile in the list.
         * @param {?} tile
         * @param {?} colIndex
         * @param {?} percentWidth
         * @param {?} gutterWidth
         * @return {?}
         */

      }, {
        key: "setColStyles",
        value: function setColStyles(tile, colIndex, percentWidth, gutterWidth) {
          // Base horizontal size of a column.

          /** @type {?} */
          var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth); // The width and horizontal position of each tile is always calculated the same way, but the
          // height and vertical position depends on the rowMode.

          /** @type {?} */

          var side = this._direction === 'rtl' ? 'right' : 'left';

          tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));

          tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
        }
        /**
         * Calculates the total size taken up by gutters across one axis of a list.
         * @return {?}
         */

      }, {
        key: "getGutterSpan",
        value: function getGutterSpan() {
          return "".concat(this._gutterSize, " * (").concat(this._rowspan, " - 1)");
        }
        /**
         * Calculates the total size taken up by tiles across one axis of a list.
         * @param {?} tileHeight Height of the tile.
         * @return {?}
         */

      }, {
        key: "getTileSpan",
        value: function getTileSpan(tileHeight) {
          return "".concat(this._rowspan, " * ").concat(this.getTileSize(tileHeight, 1));
        }
        /**
         * Calculates the computed height and returns the correct style property to set.
         * This method can be implemented by each type of TileStyler.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return null;
        }
      }]);

      return TileStyler;
    }();

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a fixed row height.
     * Example `<mat-grid-list cols="3" rowHeight="100px">`
     * \@docs-private
     */


    var FixedTileStyler = /*#__PURE__*/function (_TileStyler) {
      _inherits(FixedTileStyler, _TileStyler);

      var _super = _createSuper(FixedTileStyler);

      /**
       * @param {?} fixedRowHeight
       */
      function FixedTileStyler(fixedRowHeight) {
        var _this13;

        _classCallCheck(this, FixedTileStyler);

        _this13 = _super.call(this);
        _this13.fixedRowHeight = fixedRowHeight;
        return _this13;
      }
      /**
       * @param {?} gutterSize
       * @param {?} tracker
       * @param {?} cols
       * @param {?} direction
       * @return {?}
       */


      _createClass(FixedTileStyler, [{
        key: "init",
        value: function init(gutterSize, tracker, cols, direction) {
          _get(_getPrototypeOf(FixedTileStyler.prototype), "init", this).call(this, gutterSize, tracker, cols, direction);

          this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);

          if (!cssCalcAllowedValue.test(this.fixedRowHeight)) {
            throw Error("Invalid value \"".concat(this.fixedRowHeight, "\" set as rowHeight."));
          }
        }
        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */

      }, {
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex) {
          tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['height', calc("".concat(this.getTileSpan(this.fixedRowHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['height', null]);

          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FixedTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user passes in a width:height ratio
     * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
     * \@docs-private
     */


    var RatioTileStyler = /*#__PURE__*/function (_TileStyler2) {
      _inherits(RatioTileStyler, _TileStyler2);

      var _super2 = _createSuper(RatioTileStyler);

      /**
       * @param {?} value
       */
      function RatioTileStyler(value) {
        var _this14;

        _classCallCheck(this, RatioTileStyler);

        _this14 = _super2.call(this);

        _this14._parseRatio(value);

        return _this14;
      }
      /**
       * @param {?} tile
       * @param {?} rowIndex
       * @param {?} percentWidth
       * @param {?} gutterWidth
       * @return {?}
       */


      _createClass(RatioTileStyler, [{
        key: "setRowStyles",
        value: function setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
          /** @type {?} */
          var percentHeightPerTile = percentWidth / this.rowHeightRatio;
          this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth); // Use padding-top and margin-top to maintain the given aspect ratio, as
          // a percentage-based value for these properties is applied versus the *width* of the
          // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties

          tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));

          tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
        }
        /**
         * @return {?}
         */

      }, {
        key: "getComputedHeight",
        value: function getComputedHeight() {
          return ['paddingBottom', calc("".concat(this.getTileSpan(this.baseTileHeight), " + ").concat(this.getGutterSpan()))];
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          list._setListStyle(['paddingBottom', null]);

          list._tiles.forEach(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            tile._setStyle('marginTop', null);

            tile._setStyle('paddingTop', null);
          });
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_parseRatio",
        value: function _parseRatio(value) {
          /** @type {?} */
          var ratioParts = value.split(':');

          if (ratioParts.length !== 2) {
            throw Error("mat-grid-list: invalid ratio given for row-height: \"".concat(value, "\""));
          }

          this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
        }
      }]);

      return RatioTileStyler;
    }(TileStyler);

    if (false) {}
    /**
     * This type of styler is instantiated when the user selects a "fit" row height mode.
     * In other words, the row height will reflect the total height of the container divided
     * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
     *
     * \@docs-private
     */


    var FitTileStyler = /*#__PURE__*/function (_TileStyler3) {
      _inherits(FitTileStyler, _TileStyler3);

      var _super3 = _createSuper(FitTileStyler);

      function FitTileStyler() {
        _classCallCheck(this, FitTileStyler);

        return _super3.apply(this, arguments);
      }

      _createClass(FitTileStyler, [{
        key: "setRowStyles",

        /**
         * @param {?} tile
         * @param {?} rowIndex
         * @return {?}
         */
        value: function setRowStyles(tile, rowIndex) {
          // Percent of the available vertical space that one row takes up.

          /** @type {?} */
          var percentHeightPerTile = 100 / this._rowspan; // Fraction of the horizontal gutter size that each column takes up.

          /** @type {?} */

          var gutterHeightPerTile = (this._rows - 1) / this._rows; // Base vertical size of a column.

          /** @type {?} */

          var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);

          tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));

          tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset(list) {
          if (list._tiles) {
            list._tiles.forEach(
            /**
            * @param {?} tile
            * @return {?}
            */
            function (tile) {
              tile._setStyle('top', null);

              tile._setStyle('height', null);
            });
          }
        }
      }]);

      return FitTileStyler;
    }(TileStyler);
    /**
     * Wraps a CSS string in a calc function
     * @param {?} exp
     * @return {?}
     */


    function calc(exp) {
      return "calc(".concat(exp, ")");
    }
    /**
     * Appends pixels to a CSS string if no units are given.
     * @param {?} value
     * @return {?}
     */


    function normalizeUnits(value) {
      return value.match(/([A-Za-z%]+)$/) ? value : "".concat(value, "px");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // TODO(kara): Conditional (responsive) column count / row size.
    // TODO(kara): Re-layout on window resize / media change (debounced).
    // TODO(kara): gridTileHeader and gridTileFooter.

    /** @type {?} */


    var MAT_FIT_MODE = 'fit';

    var MatGridList = /*#__PURE__*/function () {
      /**
       * @param {?} _element
       * @param {?} _dir
       */
      function MatGridList(_element, _dir) {
        _classCallCheck(this, MatGridList);

        this._element = _element;
        this._dir = _dir;
        /**
         * The amount of space between tiles. This will be something like '5px' or '2em'.
         */

        this._gutter = '1px';
      }
      /**
       * Amount of columns in the grid list.
       * @return {?}
       */


      _createClass(MatGridList, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._checkCols();

          this._checkRowHeight();
        }
        /**
         * The layout calculation is fairly cheap if nothing changes, so there's little cost
         * to run it frequently.
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._layoutTiles();
        }
        /**
         * Throw a friendly error if cols property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkCols",
        value: function _checkCols() {
          if (!this.cols) {
            throw Error("mat-grid-list: must pass in number of columns. " + "Example: <mat-grid-list cols=\"3\">");
          }
        }
        /**
         * Default to equal width:height if rowHeight property is missing
         * @private
         * @return {?}
         */

      }, {
        key: "_checkRowHeight",
        value: function _checkRowHeight() {
          if (!this._rowHeight) {
            this._setTileStyler('1:1');
          }
        }
        /**
         * Creates correct Tile Styler subtype based on rowHeight passed in by user
         * @private
         * @param {?} rowHeight
         * @return {?}
         */

      }, {
        key: "_setTileStyler",
        value: function _setTileStyler(rowHeight) {
          if (this._tileStyler) {
            this._tileStyler.reset(this);
          }

          if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
          } else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
          } else {
            this._tileStyler = new FixedTileStyler(rowHeight);
          }
        }
        /**
         * Computes and applies the size and position for all children grid tiles.
         * @private
         * @return {?}
         */

      }, {
        key: "_layoutTiles",
        value: function _layoutTiles() {
          var _this15 = this;

          if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
          }
          /** @type {?} */


          var tracker = this._tileCoordinator;
          /** @type {?} */

          var tiles = this._tiles.filter(
          /**
          * @param {?} tile
          * @return {?}
          */
          function (tile) {
            return !tile._gridList || tile._gridList === _this15;
          });
          /** @type {?} */


          var direction = this._dir ? this._dir.value : 'ltr';

          this._tileCoordinator.update(this.cols, tiles);

          this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);

          tiles.forEach(
          /**
          * @param {?} tile
          * @param {?} index
          * @return {?}
          */
          function (tile, index) {
            /** @type {?} */
            var pos = tracker.positions[index];

            _this15._tileStyler.setStyle(tile, pos.row, pos.col);
          });

          this._setListStyle(this._tileStyler.getComputedHeight());
        }
        /**
         * Sets style on the main grid-list element, given the style name and value.
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "_setListStyle",
        value: function _setListStyle(style) {
          if (style) {
            /** @type {?} */
            this._element.nativeElement.style[style[0]] = style[1];
          }
        }
      }, {
        key: "cols",
        get: function get() {
          return this._cols;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
        }
        /**
         * Size of the grid list's gutter in pixels.
         * @return {?}
         */

      }, {
        key: "gutterSize",
        get: function get() {
          return this._gutter;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._gutter = "".concat(value == null ? '' : value);
        }
        /**
         * Set internal representation of row height from the user-provided value.
         * @return {?}
         */

      }, {
        key: "rowHeight",
        get: function get() {
          return this._rowHeight;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = "".concat(value == null ? '' : value);

          if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;

            this._setTileStyler(this._rowHeight);
          }
        }
      }]);

      return MatGridList;
    }();

    MatGridList.ɵfac = function MatGridList_Factory(t) {
      return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8));
    };

    MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MatGridList,
      selectors: [["mat-grid-list"]],
      contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
        }
      },
      hostAttrs: [1, "mat-grid-list"],
      hostVars: 1,
      hostBindings: function MatGridList_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
        }
      },
      inputs: {
        cols: "cols",
        gutterSize: "gutterSize",
        rowHeight: "rowHeight"
      },
      exportAs: ["matGridList"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: MAT_GRID_LIST,
        useExisting: MatGridList
      }])],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      template: function MatGridList_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"],
      encapsulation: 2,
      changeDetection: 0
    });
    /** @nocollapse */

    MatGridList.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    MatGridList.propDecorators = {
      _tiles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [MatGridTile, {
          descendants: true
        }]
      }],
      cols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rowHeight: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'mat-grid-list',
          exportAs: 'matGridList',
          template: "<div>\n  <ng-content></ng-content>\n</div>",
          host: {
            'class': 'mat-grid-list',
            // Ensures that the "cols" input value is reflected in the DOM. This is
            // needed for the grid-list harness.
            '[attr.cols]': 'cols'
          },
          providers: [{
            provide: MAT_GRID_LIST,
            useExisting: MatGridList
          }],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
          styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        cols: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        gutterSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rowHeight: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        _tiles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
          args: [MatGridTile, {
            descendants: true
          }]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/grid-list-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatGridListModule = function MatGridListModule() {
      _classCallCheck(this, MatGridListModule);
    };

    MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MatGridListModule
    });
    MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MatGridListModule_Factory(t) {
        return new (t || MatGridListModule)();
      },
      imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, {
        declarations: function declarations() {
          return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        },
        imports: function imports() {
          return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
          exports: [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler],
          declarations: [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/grid-list/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=grid-list.js.map

    /***/

  },

  /***/
  "./src/app/facilities/facilities-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/facilities/facilities-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: FacilitiesRoutingModule */

  /***/
  function srcAppFacilitiesFacilitiesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesRoutingModule", function () {
      return FacilitiesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-service-config/facility-service-config.component */
    "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_services_destinations_facility_services_destinations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component */
    "./src/app/facilities/pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_owners_facility_settings_owners_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_hosts_facility_hosts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-hosts/facility-hosts.component */
    "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_blacklist_facility_settings_blacklist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_hosts_facility_hosts_detail_facility_hosts_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component */
    "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_security_teams_facility_security_teams_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-security-teams/facility-security-teams.component */
    "./src/app/facilities/pages/facility-detail-page/facility-security-teams/facility-security-teams.component.ts");

    var routes = [{
      path: '',
      component: _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_2__["FacilitySelectPageComponent"]
    }, {
      path: ':facilityId',
      component: _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilityDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_4__["FacilityOverviewComponent"],
        data: {
          animation: 'FacilityOverviewPage'
        }
      }, {
        path: 'resources',
        component: _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_5__["FacilityResourcesComponent"],
        data: {
          animation: 'FacilityResourcesPage'
        }
      }, {
        path: 'allowed-groups',
        component: _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_6__["FacilityAllowedGroupsComponent"],
        data: {
          animation: 'FacilityAllowedGroupsPage'
        }
      }, {
        path: 'service-config',
        component: _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_16__["FacilityServiceConfigComponent"],
        data: {
          animation: 'FacilityServiceConfigPage'
        }
      }, {
        path: 'services-destinations',
        component: _pages_facility_detail_page_facility_services_destinations_facility_services_destinations_component__WEBPACK_IMPORTED_MODULE_18__["FacilityServicesDestinationsComponent"],
        data: {
          animation: 'FacilityServicesDestinationsPage'
        }
      }, {
        path: 'hosts',
        component: _pages_facility_detail_page_facility_hosts_facility_hosts_component__WEBPACK_IMPORTED_MODULE_20__["FacilityHostsComponent"],
        data: {
          animation: 'FacilityHostsPage'
        }
      }, {
        path: 'hosts/:hostId',
        component: _pages_facility_detail_page_facility_hosts_facility_hosts_detail_facility_hosts_detail_component__WEBPACK_IMPORTED_MODULE_22__["FacilityHostsDetailComponent"],
        data: {
          animation: 'FacilityHostsDetailPage'
        }
      }, {
        path: 'security-teams',
        component: _pages_facility_detail_page_facility_security_teams_facility_security_teams_component__WEBPACK_IMPORTED_MODULE_23__["FacilitySecurityTeamsComponent"],
        data: {
          animation: 'FacilitySecurityTeamsPage'
        }
      }, {
        path: 'settings',
        component: _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_9__["FacilitySettingsComponent"],
        children: [{
          path: '',
          component: _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySettingsOverviewComponent"],
          data: {
            animation: 'FacilitySettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsAttributesComponent"],
          data: {
            animation: 'FacilitySettingsAttributesPage'
          }
        }, {
          path: 'owners',
          component: _pages_facility_detail_page_facility_settings_facility_settings_owners_facility_settings_owners_component__WEBPACK_IMPORTED_MODULE_19__["FacilitySettingsOwnersComponent"],
          data: {
            animation: 'FacilitySettingOwnersPage'
          }
        }, {
          path: 'managers',
          component: _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_17__["FacilitySettingsManagersComponent"],
          data: {
            animation: 'FacilitySettingsManagersPage'
          }
        }, {
          path: 'blacklist',
          component: _pages_facility_detail_page_facility_settings_facility_settings_blacklist_facility_settings_blacklist_component__WEBPACK_IMPORTED_MODULE_21__["FacilitySettingsBlacklistComponent"],
          data: {
            animation: 'FacilitySettingsBlackListPage'
          }
        }]
      }]
    }, {
      path: ':facilityId/resources/:resourceId',
      component: _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_7__["ResourceDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_8__["ResourceOverviewComponent"],
        data: {
          animation: 'ResourceOverviewPage'
        }
      }, {
        path: 'groups',
        component: _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_15__["ResourceGroupsComponent"],
        data: {
          animation: 'ResourceGroupsComponent'
        }
      }, {
        path: 'settings',
        component: _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_12__["ResourceSettingsComponent"],
        children: [{
          path: '',
          component: _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_13__["ResourceSettingsOverviewComponent"],
          data: {
            animation: 'ResourceSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsAttributesComponent"],
          data: {
            animation: 'ResourceSettingsAttributesPage'
          }
        }]
      }]
    }];

    var FacilitiesRoutingModule = function FacilitiesRoutingModule() {
      _classCallCheck(this, FacilitiesRoutingModule);
    };

    FacilitiesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacilitiesRoutingModule
    });
    FacilitiesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacilitiesRoutingModule_Factory(t) {
        return new (t || FacilitiesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/facilities.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/facilities/facilities.module.ts ***!
    \*************************************************/

  /*! exports provided: FacilitiesModule */

  /***/
  function srcAppFacilitiesFacilitiesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitiesModule", function () {
      return FacilitiesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./facilities-routing.module */
    "./src/app/facilities/facilities-routing.module.ts");
    /* harmony import */


    var _pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/facility-select-page/facility-select-page.component */
    "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-detail-page.component */
    "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-overview/facility-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-resources/facility-resources.component */
    "./src/app/facilities/pages/facility-detail-page/facility-resources/facility-resources.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component */
    "./src/app/facilities/pages/facility-detail-page/facility-allowed-groups/facility-allowed-groups.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-detail-page.component */
    "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-overview/resource-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component */
    "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts");
    /* harmony import */


    var mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! mat-table-exporter */
    "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
    /* harmony import */


    var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @perun-web-apps/ui/alerts */
    "../../libs/ui/alerts/src/index.ts");
    /* harmony import */


    var _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/resource-detail-page/resource-groups/resource-groups.component */
    "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-service-config/facility-service-config.component */
    "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @perun-web-apps/perun/facility-services-config */
    "../../libs/perun/facility-services-config/src/index.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_services_destinations_facility_services_destinations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component */
    "./src/app/facilities/pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_owners_facility_settings_owners_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_hosts_facility_hosts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-hosts/facility-hosts.component */
    "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_settings_facility_settings_blacklist_facility_settings_blacklist_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component */
    "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_hosts_facility_hosts_detail_facility_hosts_detail_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component */
    "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component.ts");
    /* harmony import */


    var _pages_facility_detail_page_facility_security_teams_facility_security_teams_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/facility-detail-page/facility-security-teams/facility-security-teams.component */
    "./src/app/facilities/pages/facility-detail-page/facility-security-teams/facility-security-teams.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @perun-web-apps/perun/pipes */
    "../../libs/perun/pipes/src/index.ts");

    var FacilitiesModule = function FacilitiesModule() {
      _classCallCheck(this, FacilitiesModule);
    };

    FacilitiesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FacilitiesModule
    });
    FacilitiesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FacilitiesModule_Factory(t) {
        return new (t || FacilitiesModule)();
      },
      providers: [_perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__["UserFullNamePipe"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_18__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_20__["PerunSharedComponentsModule"], _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_22__["PerunFacilityServicesConfigModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__["PerunPipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FacilitiesModule, {
        declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"], _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["FacilityDetailPageComponent"], _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_6__["FacilityOverviewComponent"], _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_7__["FacilityResourcesComponent"], _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_8__["FacilityAllowedGroupsComponent"], _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_9__["ResourceDetailPageComponent"], _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_10__["ResourceOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsAttributesComponent"], _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsComponent"], _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsOverviewComponent"], _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsAttributesComponent"], _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_19__["ResourceGroupsComponent"], _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_21__["FacilityServiceConfigComponent"], _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_23__["FacilitySettingsManagersComponent"], _pages_facility_detail_page_facility_services_destinations_facility_services_destinations_component__WEBPACK_IMPORTED_MODULE_24__["FacilityServicesDestinationsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_owners_facility_settings_owners_component__WEBPACK_IMPORTED_MODULE_25__["FacilitySettingsOwnersComponent"], _pages_facility_detail_page_facility_hosts_facility_hosts_component__WEBPACK_IMPORTED_MODULE_26__["FacilityHostsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_blacklist_facility_settings_blacklist_component__WEBPACK_IMPORTED_MODULE_27__["FacilitySettingsBlacklistComponent"], _pages_facility_detail_page_facility_hosts_facility_hosts_detail_facility_hosts_detail_component__WEBPACK_IMPORTED_MODULE_28__["FacilityHostsDetailComponent"], _pages_facility_detail_page_facility_security_teams_facility_security_teams_component__WEBPACK_IMPORTED_MODULE_29__["FacilitySecurityTeamsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_18__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_20__["PerunSharedComponentsModule"], _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_22__["PerunFacilityServicesConfigModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__["PerunPipesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitiesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_pages_facility_select_page_facility_select_page_component__WEBPACK_IMPORTED_MODULE_3__["FacilitySelectPageComponent"], _pages_facility_detail_page_facility_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["FacilityDetailPageComponent"], _pages_facility_detail_page_facility_overview_facility_overview_component__WEBPACK_IMPORTED_MODULE_6__["FacilityOverviewComponent"], _pages_facility_detail_page_facility_resources_facility_resources_component__WEBPACK_IMPORTED_MODULE_7__["FacilityResourcesComponent"], _pages_facility_detail_page_facility_allowed_groups_facility_allowed_groups_component__WEBPACK_IMPORTED_MODULE_8__["FacilityAllowedGroupsComponent"], _pages_resource_detail_page_resource_detail_page_component__WEBPACK_IMPORTED_MODULE_9__["ResourceDetailPageComponent"], _pages_resource_detail_page_resource_overview_resource_overview_component__WEBPACK_IMPORTED_MODULE_10__["ResourceOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_component__WEBPACK_IMPORTED_MODULE_11__["FacilitySettingsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_overview_facility_settings_overview_component__WEBPACK_IMPORTED_MODULE_12__["FacilitySettingsOverviewComponent"], _pages_facility_detail_page_facility_settings_facility_settings_attributes_facility_settings_attributes_component__WEBPACK_IMPORTED_MODULE_13__["FacilitySettingsAttributesComponent"], _pages_resource_detail_page_resource_settings_resource_settings_component__WEBPACK_IMPORTED_MODULE_14__["ResourceSettingsComponent"], _pages_resource_detail_page_resource_settings_resource_settings_overview_resource_settings_overview_component__WEBPACK_IMPORTED_MODULE_15__["ResourceSettingsOverviewComponent"], _pages_resource_detail_page_resource_settings_resource_settings_attributes_resource_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__["ResourceSettingsAttributesComponent"], _pages_resource_detail_page_resource_groups_resource_groups_component__WEBPACK_IMPORTED_MODULE_19__["ResourceGroupsComponent"], _pages_facility_detail_page_facility_service_config_facility_service_config_component__WEBPACK_IMPORTED_MODULE_21__["FacilityServiceConfigComponent"], _pages_facility_detail_page_facility_settings_facility_settings_managers_facility_settings_managers_component__WEBPACK_IMPORTED_MODULE_23__["FacilitySettingsManagersComponent"], _pages_facility_detail_page_facility_services_destinations_facility_services_destinations_component__WEBPACK_IMPORTED_MODULE_24__["FacilityServicesDestinationsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_owners_facility_settings_owners_component__WEBPACK_IMPORTED_MODULE_25__["FacilitySettingsOwnersComponent"], _pages_facility_detail_page_facility_hosts_facility_hosts_component__WEBPACK_IMPORTED_MODULE_26__["FacilityHostsComponent"], _pages_facility_detail_page_facility_settings_facility_settings_blacklist_facility_settings_blacklist_component__WEBPACK_IMPORTED_MODULE_27__["FacilitySettingsBlacklistComponent"], _pages_facility_detail_page_facility_hosts_facility_hosts_detail_facility_hosts_detail_component__WEBPACK_IMPORTED_MODULE_28__["FacilityHostsDetailComponent"], _pages_facility_detail_page_facility_security_teams_facility_security_teams_component__WEBPACK_IMPORTED_MODULE_29__["FacilitySecurityTeamsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _facilities_routing_module__WEBPACK_IMPORTED_MODULE_2__["FacilitiesRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_17__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_18__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_20__["PerunSharedComponentsModule"], _perun_web_apps_perun_facility_services_config__WEBPACK_IMPORTED_MODULE_22__["PerunFacilityServicesConfigModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__["PerunPipesModule"]],
          providers: [_perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_30__["UserFullNamePipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilityDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityDetailPageComponent", function () {
      return FacilityDetailPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */
    "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1) {
      return ["/facilities", a1];
    };

    function FacilityDetailPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-animated-router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "FACILITY_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r0.facility.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.facility.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r0.facility.id, " ");
      }
    }

    var FacilityDetailPageComponent = /*#__PURE__*/function () {
      function FacilityDetailPageComponent(facilityManager, route, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, FacilityDetailPageComponent);

        this.facilityManager = facilityManager;
        this.route = route;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(FacilityDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this16.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this16.facility = facility;

              var facilityItem = _this16.sideMenuItemService.parseFacility(facility);

              _this16.sideMenuService.setFacilityMenuItems([facilityItem]);

              Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["addRecentlyVisited"])('facilities', _this16.facility);
            });
          });
        }
      }]);

      return FacilityDetailPageComponent;
    }();

    FacilityDetailPageComponent.ɵfac = function FacilityDetailPageComponent_Factory(t) {
      return new (t || FacilityDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]));
    };

    FacilityDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityDetailPageComponent,
      selectors: [["app-facility-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 facility-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [1, "facility-link", 3, "routerLink"], [1, "text-muted"]],
      template: function FacilityDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacilityDetailPageComponent_div_0_Template, 10, 8, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facility !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-detail-page',
          templateUrl: './facility-detail-page.component.html',
          styleUrls: ['./facility-detail-page.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts-detail/facility-hosts-detail.component.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: FacilityHostsDetailComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityHostsFacilityHostsDetailFacilityHostsDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityHostsDetailComponent", function () {
      return FacilityHostsDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/attributes-list/attributes-list.component */
    "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["list"];

    function FacilityHostsDetailComponent_perun_web_apps_attributes_list_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 6, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilityHostsDetailComponent_perun_web_apps_attributes_list_14_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r0.pageSize)("attributes", ctx_r0.attributes)("selection", ctx_r0.selected);
      }
    }

    var FacilityHostsDetailComponent = /*#__PURE__*/function () {
      function FacilityHostsDetailComponent(dialog, attributesManager, facilityManager, tableConfigService, route) {
        _classCallCheck(this, FacilityHostsDetailComponent);

        this.dialog = dialog;
        this.attributesManager = attributesManager;
        this.facilityManager = facilityManager;
        this.tableConfigService = tableConfigService;
        this.route = route;
        this.attributes = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.host = {
          beanName: '',
          id: 0
        };
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TABLE_ATTRIBUTES_SETTINGS"];
      }

      _createClass(FacilityHostsDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.params.subscribe(function (params) {
            _this17.hostId = params['hostId'];

            _this17.facilityManager.getHostById(_this17.hostId).subscribe(function (host) {
              _this17.host = host;
            });

            _this17.refreshTable();
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this18 = this;

          this.loading = true;
          this.attributesManager.getHostAttributes(this.hostId).subscribe(function (attributes) {
            _this18.attributes = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["filterCoreAttributes"])(attributes);

            _this18.selected.clear();

            _this18.loading = false;
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this19 = this;

          this.list.updateMapAttributes();
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.hostId,
            entity: 'host',
            attributes: this.selected.selected
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_7__["EditAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this19.refreshTable();
            }
          });
        }
      }, {
        key: "addAttribute",
        value: function addAttribute() {
          var _this20 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.hostId,
            entity: 'host',
            notEmptyAttributes: this.attributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_9__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this20.refreshTable();
            }
          });
        }
      }, {
        key: "removeAttribute",
        value: function removeAttribute() {
          var _this21 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.hostId,
            entity: 'host',
            attributes: this.selected.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this21.refreshTable();
            }
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilityHostsDetailComponent;
    }();

    FacilityHostsDetailComponent.ɵfac = function FacilityHostsDetailComponent_Factory(t) {
      return new (t || FacilityHostsDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    FacilityHostsDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityHostsDetailComponent,
      selectors: [["app-facility-hosts-detail"]],
      viewQuery: function FacilityHostsDetailComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      decls: 15,
      vars: 16,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "pageSize", "attributes", "selection", "page", 4, "ngIf"], [3, "pageSize", "attributes", "selection", "page"], ["list", ""]],
      template: function FacilityHostsDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilityHostsDetailComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityHostsDetailComponent_Template_button_click_5_listener() {
            return ctx.addAttribute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityHostsDetailComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityHostsDetailComponent_Template_button_click_11_listener() {
            return ctx.removeAttribute();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FacilityHostsDetailComponent_perun_web_apps_attributes_list_14_Template, 2, 3, "perun-web-apps-attributes-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "FACILITY_DETAIL.HOSTS.HOSTS_DETAIL.TITLE"), " ", ctx.host.hostname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "FACILITY_DETAIL.HOSTS.HOSTS_DETAIL.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "FACILITY_DETAIL.HOSTS.HOSTS_DETAIL.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 14, "FACILITY_DETAIL.HOSTS.HOSTS_DETAIL.REMOVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_13__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktaG9zdHMvZmFjaWxpdHktaG9zdHMtZGV0YWlsL2ZhY2lsaXR5LWhvc3RzLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityHostsDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-hosts-detail',
          templateUrl: './facility-hosts-detail.component.html',
          styleUrls: ['./facility-hosts-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["AttributesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-hosts/facility-hosts.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: FacilityHostsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityHostsFacilityHostsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityHostsComponent", function () {
      return FacilityHostsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_add_host_dialog_add_host_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/add-host-dialog/add-host-dialog.component */
    "./src/app/shared/components/dialogs/add-host-dialog/add-host-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_remove_host_dialog_remove_host_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/remove-host-dialog/remove-host-dialog.component */
    "./src/app/shared/components/dialogs/remove-host-dialog/remove-host-dialog.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_hosts_list_hosts_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../shared/components/hosts-list/hosts-list.component */
    "./src/app/shared/components/hosts-list/hosts-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilityHostsComponent_mat_spinner_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function FacilityHostsComponent_app_hosts_list_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-hosts-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilityHostsComponent_app_hosts_list_13_Template_app_hosts_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("hosts", ctx_r1.hosts)("selection", ctx_r1.selected)("facilityId", ctx_r1.facilityId);
      }
    }

    var FacilityHostsComponent = /*#__PURE__*/function () {
      function FacilityHostsComponent(dialog, facilitiesManager, tableConfigService, route) {
        _classCallCheck(this, FacilityHostsComponent);

        this.dialog = dialog;
        this.facilitiesManager = facilitiesManager;
        this.tableConfigService = tableConfigService;
        this.route = route;
        this.hosts = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TABLE_FACILITY_HOSTS_LIST"];
      }

      _createClass(FacilityHostsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.params.subscribe(function (parentParams) {
            _this22.facilityId = parentParams['facilityId'];

            _this22.facilitiesManager.getFacilityById(_this22.facilityId).subscribe(function (facility) {
              _this22.facility = facility;

              _this22.refreshTable();
            });
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this23 = this;

          this.loading = true;
          this.facilitiesManager.getHosts(this.facilityId).subscribe(function (hosts) {
            _this23.hosts = hosts;

            _this23.selected.clear();

            _this23.loading = false;
          });
        }
      }, {
        key: "addHost",
        value: function addHost() {
          var _this24 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            facilityId: this.facility.id,
            facilityName: this.facility.name,
            theme: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_add_host_dialog_add_host_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddHostDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this24.refreshTable();
            }
          });
        }
      }, {
        key: "removeHost",
        value: function removeHost() {
          var _this25 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            facilityId: this.facility.id,
            theme: 'facility-theme',
            hosts: this.selected.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_host_dialog_remove_host_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveHostDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this25.refreshTable();
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilityHostsComponent;
    }();

    FacilityHostsComponent.ɵfac = function FacilityHostsComponent_Factory(t) {
      return new (t || FacilityHostsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    FacilityHostsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityHostsComponent,
      selectors: [["app-facility-hosts"]],
      decls: 14,
      vars: 13,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "hosts", "selection", "facilityId", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "hosts", "selection", "facilityId", "page"]],
      template: function FacilityHostsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilityHostsComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityHostsComponent_Template_button_click_5_listener() {
            return ctx.addHost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityHostsComponent_Template_button_click_8_listener() {
            return ctx.removeHost();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilityHostsComponent_Template_perun_web_apps_immediate_filter_filter_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FacilityHostsComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FacilityHostsComponent_app_hosts_list_13_Template, 1, 5, "app-hosts-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "FACILITY_DETAIL.HOSTS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "FACILITY_DETAIL.HOSTS.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "FACILITY_DETAIL.HOSTS.REMOVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_DETAIL.HOSTS.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _shared_components_hosts_list_hosts_list_component__WEBPACK_IMPORTED_MODULE_14__["HostsListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktaG9zdHMvZmFjaWxpdHktaG9zdHMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityHostsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-hosts',
          templateUrl: './facility-hosts.component.html',
          styleUrls: ['./facility-hosts.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-overview/facility-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilityOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityOverviewFacilityOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityOverviewComponent", function () {
      return FacilityOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var FacilityOverviewComponent = /*#__PURE__*/function () {
      function FacilityOverviewComponent(facilityManager, route) {
        _classCallCheck(this, FacilityOverviewComponent);

        this.facilityManager = facilityManager;
        this.route = route;
        this.navItems = [];
      }

      _createClass(FacilityOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.route.params.subscribe(function (params) {
            var facilityId = params['facilityId'];

            _this26.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this26.facility = facility;

              _this26.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-manage-facility',
            url: "/facilities/".concat(this.facility.id, "/resources"),
            label: 'MENU_ITEMS.FACILITY.RESOURCES',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.facility.id, "/allowed-groups"),
            label: 'MENU_ITEMS.FACILITY.ALLOWED_GROUPS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.facility.id, "/service-config"),
            label: 'MENU_ITEMS.FACILITY.SERVICE_CONFIG',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-service_destination',
            url: "/facilities/".concat(this.facility.id, "/services-destinations"),
            label: 'MENU_ITEMS.FACILITY.SERVICES_DESTINATIONS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-hosts',
            url: "/facilities/".concat(this.facility.id, "/hosts"),
            label: 'MENU_ITEMS.FACILITY.HOSTS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-security-teams',
            url: "/facilities/".concat(this.facility.id, "/security-teams"),
            label: 'MENU_ITEMS.FACILITY.SECURITY_TEAMS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.facility.id, "/settings"),
            label: 'MENU_ITEMS.FACILITY.SETTINGS',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilityOverviewComponent;
    }();

    FacilityOverviewComponent.ɵfac = function FacilityOverviewComponent_Factory(t) {
      return new (t || FacilityOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    FacilityOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityOverviewComponent,
      selectors: [["app-facility-overview"]],
      hostVars: 2,
      hostBindings: function FacilityOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function FacilityOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktb3ZlcnZpZXcvZmFjaWxpdHktb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-overview',
          templateUrl: './facility-overview.component.html',
          styleUrls: ['./facility-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-security-teams/facility-security-teams.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-security-teams/facility-security-teams.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: FacilitySecurityTeamsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySecurityTeamsFacilitySecurityTeamsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySecurityTeamsComponent", function () {
      return FacilitySecurityTeamsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_security_teams_list_security_teams_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/components/security-teams-list/security-teams-list.component */
    "./src/app/shared/components/security-teams-list/security-teams-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilitySecurityTeamsComponent_mat_spinner_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
      }
    }

    function FacilitySecurityTeamsComponent_app_security_teams_list_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-security-teams-list", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySecurityTeamsComponent_app_security_teams_list_7_Template_app_security_teams_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("securityTeams", ctx_r1.securityTeams)("selection", ctx_r1.selected);
      }
    }

    var FacilitySecurityTeamsComponent = /*#__PURE__*/function () {
      function FacilitySecurityTeamsComponent(dialog, facilitiesManager, tableConfigService, route) {
        _classCallCheck(this, FacilitySecurityTeamsComponent);

        this.dialog = dialog;
        this.facilitiesManager = facilitiesManager;
        this.tableConfigService = tableConfigService;
        this.route = route;
        this.securityTeams = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TABLE_FACILITY_SECURITY_TEAMS_LIST"];
      }

      _createClass(FacilitySecurityTeamsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this27 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this27.facilitiesManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this27.facility = facility;

              _this27.refreshTable();
            });
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this28 = this;

          this.loading = true;
          this.facilitiesManager.getAssignedSecurityTeams(this.facility.id).subscribe(function (securityTeams) {
            _this28.securityTeams = securityTeams;

            _this28.selected.clear();

            _this28.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "addSecurityTeam",
        value: function addSecurityTeam() {//TODO
        }
      }, {
        key: "removeSecurityTeam",
        value: function removeSecurityTeam() {//TODO
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilitySecurityTeamsComponent;
    }();

    FacilitySecurityTeamsComponent.ɵfac = function FacilitySecurityTeamsComponent_Factory(t) {
      return new (t || FacilitySecurityTeamsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    FacilitySecurityTeamsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySecurityTeamsComponent,
      selectors: [["app-facility-security-teams"]],
      decls: 8,
      vars: 6,
      consts: [[1, "page-subtitle"], [3, "refresh"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "securityTeams", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "securityTeams", "selection", "page"]],
      template: function FacilitySecurityTeamsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySecurityTeamsComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "perun-web-apps-immediate-filter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySecurityTeamsComponent_Template_perun_web_apps_immediate_filter_filter_5_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilitySecurityTeamsComponent_mat_spinner_6_Template, 1, 0, "mat-spinner", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySecurityTeamsComponent_app_security_teams_list_7_Template, 1, 4, "app-security-teams-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "FACILITY_DETAIL.SECURITY_TEAMS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_DETAIL.SECURITY_TEAMS.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_6__["RefreshButtonComponent"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_7__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _shared_components_security_teams_list_security_teams_list_component__WEBPACK_IMPORTED_MODULE_10__["SecurityTeamsListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2VjdXJpdHktdGVhbXMvZmFjaWxpdHktc2VjdXJpdHktdGVhbXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySecurityTeamsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-security-teams',
          templateUrl: './facility-security-teams.component.html',
          styleUrls: ['./facility-security-teams.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-service-config/facility-service-config.component.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: FacilityServiceConfigComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityServiceConfigFacilityServiceConfigComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityServiceConfigComponent", function () {
      return FacilityServiceConfigComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "../../node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/pipes */
    "../../libs/perun/pipes/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _libs_perun_facility_services_config_src_lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component */
    "../../libs/perun/facility-services-config/src/lib/service-configurator/service-configurator.component.ts");
    /* harmony import */


    var _libs_perun_pipes_src_lib_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/pipes/src/lib/user-full-name.pipe */
    "../../libs/perun/pipes/src/lib/user-full-name.pipe.ts");

    function FacilityServiceConfigComponent_div_4_mat_form_field_1_mat_option_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_1_mat_option_11_Template_mat_option_onSelectionChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var s_r8 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9.onSelectedService(s_r8);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var s_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", s_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", s_r8.name, " ");
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FacilityServiceConfigComponent_div_4_mat_form_field_1_Template_input_keyup_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.updatedSerVal($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_1_Template_mat_option_onSelectionChange_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.onSelectedService("NOT_SELECTED");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_1_Template_mat_option_onSelectionChange_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.onSelectedService("ALL");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FacilityServiceConfigComponent_div_4_mat_form_field_1_mat_option_11_Template, 2, 2, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "FACILITY_DETAIL.SERVICE_CONFIG.SERVICE_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r2.serviceField)("matAutocomplete", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r2.serviceDisplayFn.bind(ctx_r2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "NOT_SELECTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "FACILITY_DETAIL.SERVICE_CONFIG.NOT_SELECTED"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "ALL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "FACILITY_DETAIL.SERVICE_CONFIG.ALL"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 15, ctx_r2.filteredServices));
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_5_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_5_mat_option_5_Template_mat_option_onSelectionChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var r_r17 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r18.onSelectedResource(r_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", r_r17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", r_r17.name, " ");
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FacilityServiceConfigComponent_div_4_mat_form_field_5_Template_input_keyup_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.updatedResVal($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_div_4_mat_form_field_5_mat_option_5_Template, 2, 2, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "FACILITY_DETAIL.SERVICE_CONFIG.RES_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r15)("formControl", ctx_r3.resourceField);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r3.resourceDisplayFn.bind(ctx_r3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r3.filteredResources));
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_6_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_6_mat_option_5_Template_mat_option_onSelectionChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var g_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r25.onSelectedGroup(g_r24);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var g_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", g_r24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", g_r24.name, " ");
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function FacilityServiceConfigComponent_div_4_mat_form_field_6_Template_input_keyup_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r27.updatedGroupVal($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", 13, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_div_4_mat_form_field_6_mat_option_5_Template, 2, 2, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "FACILITY_DETAIL.SERVICE_CONFIG.GROUP_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matAutocomplete", _r22)("formControl", ctx_r4.groupField);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r4.groupDisplayFn.bind(ctx_r4));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r4.filteredGroups));
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_7_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function FacilityServiceConfigComponent_div_4_mat_form_field_7_mat_option_5_Template_mat_option_onSelectionChange_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var m_r31 = ctx.$implicit;

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r32.onSelectedMember(m_r31);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "userFullName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r31 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", m_r31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, m_r31.user), " ");
      }
    }

    function FacilityServiceConfigComponent_div_4_mat_form_field_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-autocomplete", 8, 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_div_4_mat_form_field_7_mat_option_5_Template, 3, 4, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, "FACILITY_DETAIL.SERVICE_CONFIG.MEMBER_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r5.memberField)("matAutocomplete", _r29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("displayWith", ctx_r5.memberDisplayFn.bind(ctx_r5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r5.filteredMembers));
      }
    }

    function FacilityServiceConfigComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FacilityServiceConfigComponent_div_4_mat_form_field_1_Template, 13, 17, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FacilityServiceConfigComponent_div_4_Template_mat_checkbox_change_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.onOfferAllServices($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_div_4_mat_form_field_5_Template, 7, 9, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilityServiceConfigComponent_div_4_mat_form_field_6_Template, 7, 9, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilityServiceConfigComponent_div_4_mat_form_field_7_Template, 7, 9, "mat-form-field", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.services !== undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "FACILITY_DETAIL.SERVICE_CONFIG.ALL_SERVICES"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.resources !== undefined && ctx_r0.resources.length != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedResource !== undefined && ctx_r0.groups !== undefined && ctx_r0.groups.length != 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.selectedGroup !== undefined && ctx_r0.members !== undefined && ctx_r0.members.length !== 0);
      }
    }

    function FacilityServiceConfigComponent_perun_web_apps_service_configurator_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "perun-web-apps-service-configurator", 15);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("facility", ctx_r1.facility)("resource", ctx_r1.selectedResource)("group", ctx_r1.selectedGroup)("service", ctx_r1.selectedService)("member", ctx_r1.selectedMember);
      }
    }

    var FacilityServiceConfigComponent = /*#__PURE__*/function () {
      function FacilityServiceConfigComponent(route, facilityManager, resourceManager, serviceManager, membersManager, namePipe, translate) {
        var _this29 = this;

        _classCallCheck(this, FacilityServiceConfigComponent);

        this.route = route;
        this.facilityManager = facilityManager;
        this.resourceManager = resourceManager;
        this.serviceManager = serviceManager;
        this.membersManager = membersManager;
        this.namePipe = namePipe;
        this.translate = translate;
        this.selectedService = 'NOT_SELECTED';
        this.attrNames = [];
        this.serviceField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.resourceField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.groupField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.memberField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.translate.get('FACILITY_DETAIL.SERVICE_CONFIG.ALL').subscribe(function (value) {
          return _this29.serviceAllTranslation = value;
        });
        this.translate.get('FACILITY_DETAIL.SERVICE_CONFIG.NOT_SELECTED').subscribe(function (value) {
          return _this29.serviceNotSelectedTranslation = value;
        });
      }

      _createClass(FacilityServiceConfigComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.route.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this30.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this30.facility = facility;

              _this30.facilityManager.getAssignedResourcesForFacility(facility.id).subscribe(function (resources) {
                return _this30.resources = resources;
              });

              _this30.serviceManager.getAssignedServices(facility.id).subscribe(function (services) {
                return _this30.services = services;
              });
            });
          });
          this.filteredServices = this.serviceField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
            return _this30._filterServices(value);
          }));
          this.filteredResources = this.resourceField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
            return _this30._filterResources(value);
          }));
          this.filteredGroups = this.groupField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
            return _this30._filterGroups(value);
          }));
          this.filteredMembers = this.memberField.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) {
            return _this30._filterMembers(value);
          }));
        }
      }, {
        key: "onSelectedService",
        value: function onSelectedService(s) {
          this.selectedService = s;
        }
      }, {
        key: "onSelectedResource",
        value: function onSelectedResource(r) {
          var _this31 = this;

          this.selectedResource = r;

          if (this.selectedResource !== undefined) {
            this.resourceManager.getAssignedGroups(this.selectedResource.id).subscribe(function (groups) {
              return _this31.groups = groups;
            });
            this.selectedGroup = undefined;
            this.selectedMember = undefined;
          } else {
            this.groups = undefined;
          }
        }
      }, {
        key: "onOfferAllServices",
        value: function onOfferAllServices(event) {
          var _this32 = this;

          if (!event.checked) {
            this.serviceManager.getAssignedServices(this.facility.id).subscribe(function (services) {
              return _this32.services = services;
            });
          }
        }
      }, {
        key: "onSelectedGroup",
        value: function onSelectedGroup(g) {
          var _this33 = this;

          this.selectedGroup = g;

          if (this.selectedGroup !== undefined) {
            this.membersManager.getCompleteRichMembersForGroup(this.selectedGroup.id, this.attrNames).subscribe(function (members) {
              return _this33.members = members;
            });
            this.selectedMember = undefined;
          } else {
            this.members = undefined;
          }
        }
      }, {
        key: "onSelectedMember",
        value: function onSelectedMember(m) {
          this.selectedMember = m;
        }
      }, {
        key: "_filterServices",
        value: function _filterServices(value) {
          var filterValue = value.toString().toLowerCase();
          return this.services.filter(function (service) {
            return service.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterValue);
          });
        }
      }, {
        key: "_filterResources",
        value: function _filterResources(value) {
          var filterValue = value.toString().toLowerCase();
          return this.resources.filter(function (resource) {
            return resource.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterValue);
          });
        }
      }, {
        key: "_filterGroups",
        value: function _filterGroups(value) {
          var filterValue = value.toString().toLowerCase();
          return this.groups.filter(function (group) {
            return group.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterValue);
          });
        }
      }, {
        key: "_filterMembers",
        value: function _filterMembers(value) {
          var _this34 = this;

          var filterValue = value.toString().toLowerCase();
          return this.members.filter(function (member) {
            return _this34.namePipe.transform(member.user).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(filterValue);
          });
        }
      }, {
        key: "serviceDisplayFn",
        value: function serviceDisplayFn(service) {
          if (service !== null) {
            if (service === 'ALL') {
              return this.serviceAllTranslation;
            }

            if (service === 'NOT_SELECTED') {
              return this.serviceNotSelectedTranslation;
            }

            return service.name;
          }
        }
      }, {
        key: "resourceDisplayFn",
        value: function resourceDisplayFn(resource) {
          if (resource !== null) {
            return resource.name;
          }
        }
      }, {
        key: "groupDisplayFn",
        value: function groupDisplayFn(group) {
          if (group !== null) {
            return group.name;
          }
        }
      }, {
        key: "memberDisplayFn",
        value: function memberDisplayFn(member) {
          if (member !== null) {
            return this.namePipe.transform(member.user);
          }
        }
      }, {
        key: "updatedSerVal",
        value: function updatedSerVal(e) {
          if (e.target.value === '') {
            this.selectedService = "NOT_SELECTED";
          }
        }
      }, {
        key: "updatedResVal",
        value: function updatedResVal(e) {
          if (e.target.value === '') {
            this.groups = undefined;
            this.members = undefined;
          }
        }
      }, {
        key: "updatedGroupVal",
        value: function updatedGroupVal(e) {
          if (e.target.value === '') {
            this.members = undefined;
          }
        }
      }, {
        key: "updatedMemVal",
        value: function updatedMemVal(e) {
          if (e.target.value === '') {}
        }
      }]);

      return FacilityServiceConfigComponent;
    }();

    FacilityServiceConfigComponent.ɵfac = function FacilityServiceConfigComponent_Factory(t) {
      return new (t || FacilityServiceConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_6__["UserFullNamePipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]));
    };

    FacilityServiceConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityServiceConfigComponent,
      selectors: [["app-facility-service-config"]],
      decls: 6,
      vars: 5,
      consts: [[1, "page-subtitle"], ["class", "col-12 col-lg-6 mb-2", 4, "ngIf"], [3, "facility", "resource", "group", "service", "member", 4, "ngIf"], [1, "col-12", "col-lg-6", "mb-2"], ["class", "w-100", 4, "ngIf"], [3, "change"], [1, "w-100"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", "keyup"], ["autoActiveFirstOption", "", 3, "displayWith"], ["auto", "matAutocomplete"], [3, "value", "onSelectionChange"], [3, "value", "onSelectionChange", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", 3, "placeholder", "matAutocomplete", "formControl", "keyup"], ["autoActiveFirstOption", "", 3, "ngClass", "displayWith"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "facility", "resource", "group", "service", "member"]],
      template: function FacilityServiceConfigComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FacilityServiceConfigComponent_div_4_Template, 8, 7, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilityServiceConfigComponent_perun_web_apps_service_configurator_5_Template, 1, 5, "perun-web-apps-service-configurator", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, "FACILITY_DETAIL.SERVICE_CONFIG.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facility);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.facility);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckbox"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_12__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _libs_perun_facility_services_config_src_lib_service_configurator_service_configurator_component__WEBPACK_IMPORTED_MODULE_14__["ServiceConfiguratorComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _libs_perun_pipes_src_lib_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_15__["UserFullNamePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2VydmljZS1jb25maWcvZmFjaWxpdHktc2VydmljZS1jb25maWcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityServiceConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-service-config',
          templateUrl: './facility-service-config.component.html',
          styleUrls: ['./facility-service-config.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]
        }, {
          type: _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_6__["UserFullNamePipe"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component.ts":
  /*!**********************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-services-destinations/facility-services-destinations.component.ts ***!
    \**********************************************************************************************************************************/

  /*! exports provided: FacilityServicesDestinationsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilityServicesDestinationsFacilityServicesDestinationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilityServicesDestinationsComponent", function () {
      return FacilityServicesDestinationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_remove_destination_dialog_remove_destination_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/remove-destination-dialog/remove-destination-dialog.component */
    "./src/app/shared/components/dialogs/remove-destination-dialog/remove-destination-dialog.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_add_services_destination_dialog_add_services_destination_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/add-services-destination-dialog/add-services-destination-dialog.component */
    "./src/app/shared/components/dialogs/add-services-destination-dialog/add-services-destination-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_destination_list_destination_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../shared/components/destination-list/destination-list.component */
    "./src/app/shared/components/destination-list/destination-list.component.ts");

    function FacilityServicesDestinationsComponent_mat_spinner_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function FacilityServicesDestinationsComponent_app_perun_web_apps_destination_list_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-perun-web-apps-destination-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilityServicesDestinationsComponent_app_perun_web_apps_destination_list_13_Template_app_perun_web_apps_destination_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("destinations", ctx_r1.destinations)("selection", ctx_r1.selected)("displayedColumns", ctx_r1.displayedColumns);
      }
    }

    var FacilityServicesDestinationsComponent = /*#__PURE__*/function () {
      function FacilityServicesDestinationsComponent(dialog, facilitiesManager, servicesManager, tableConfigService, translate, notificator, route) {
        _classCallCheck(this, FacilityServicesDestinationsComponent);

        this.dialog = dialog;
        this.facilitiesManager = facilitiesManager;
        this.servicesManager = servicesManager;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.notificator = notificator;
        this.route = route;
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.displayedColumns = ['select', 'destinationId', 'service', 'destination', 'type', 'propagationType'];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TABLE_FACILITY_SERVICES_DESTINATION_LIST"];
      }

      _createClass(FacilityServicesDestinationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.loading = true;
          this.route.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this35.facilitiesManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this35.facility = facility;

              _this35.refreshTable();
            });
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this36 = this;

          this.loading = true;
          this.servicesManager.getAllRichDestinationsForFacility(this.facility.id).subscribe(function (destinations) {
            _this36.destinations = destinations;

            _this36.selected.clear();

            _this36.loading = false;
          });
        }
      }, {
        key: "addDestination",
        value: function addDestination() {
          var _this37 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            facility: this.facility,
            theme: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_add_services_destination_dialog_add_services_destination_dialog_component__WEBPACK_IMPORTED_MODULE_9__["AddServicesDestinationDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this37.translate.get('FACILITY_DETAIL.SERVICES_DESTINATIONS.ADD_SUCCESS').subscribe(function (successMessage) {
                _this37.refreshTable();

                _this37.notificator.showSuccess(successMessage);
              });
            }
          });
        }
      }, {
        key: "removeDestination",
        value: function removeDestination() {
          var _this38 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            destinations: this.selected.selected,
            theme: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_destination_dialog_remove_destination_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveDestinationDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this38.loading = true;

              _this38.deleteDestinations(_this38.selected.selected);
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          console.log(event.pageSize);
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }, {
        key: "deleteDestinations",
        value: function deleteDestinations(destinationsForDelete) {
          var _this39 = this;

          if (destinationsForDelete.length === 0) {
            this.translate.get('FACILITY_DETAIL.SERVICES_DESTINATIONS.REMOVE_SUCCESS').subscribe(function (successMessage) {
              _this39.refreshTable();

              _this39.notificator.showSuccess(successMessage);
            });
          } else {
            var destination = destinationsForDelete[0];
            this.servicesManager.removeDestination(destination.service.id, destination.facility.id, destination.destination, destination.type).subscribe(function () {
              destinationsForDelete.shift();

              _this39.deleteDestinations(destinationsForDelete);
            });
          }
        }
      }]);

      return FacilityServicesDestinationsComponent;
    }();

    FacilityServicesDestinationsComponent.id = 'FacilityServicesDestinationsComponent';

    FacilityServicesDestinationsComponent.ɵfac = function FacilityServicesDestinationsComponent_Factory(t) {
      return new (t || FacilityServicesDestinationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    FacilityServicesDestinationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilityServicesDestinationsComponent,
      selectors: [["app-perun-web-apps-facility-services-destinations"]],
      hostVars: 2,
      hostBindings: function FacilityServicesDestinationsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 14,
      vars: 13,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "destinations", "selection", "displayedColumns", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "destinations", "selection", "displayedColumns", "page"]],
      template: function FacilityServicesDestinationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilityServicesDestinationsComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityServicesDestinationsComponent_Template_button_click_5_listener() {
            return ctx.addDestination();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilityServicesDestinationsComponent_Template_button_click_8_listener() {
            return ctx.removeDestination();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilityServicesDestinationsComponent_Template_perun_web_apps_immediate_filter_filter_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FacilityServicesDestinationsComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FacilityServicesDestinationsComponent_app_perun_web_apps_destination_list_13_Template, 1, 5, "app-perun-web-apps-destination-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "FACILITY_DETAIL.SERVICES_DESTINATIONS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "FACILITY_DETAIL.SERVICES_DESTINATIONS.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "FACILITY_DETAIL.SERVICES_DESTINATIONS.REMOVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_DETAIL.SERVICES_DESTINATIONS.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_destination_list_destination_list_component__WEBPACK_IMPORTED_MODULE_16__["DestinationListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2VydmljZXMtZGVzdGluYXRpb25zL2ZhY2lsaXR5LXNlcnZpY2VzLWRlc3RpbmF0aW9ucy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilityServicesDestinationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perun-web-apps-facility-services-destinations',
          templateUrl: './facility-services-destinations.component.html',
          styleUrls: ['./facility-services-destinations.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ServicesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_3__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-attributes/facility-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsAttributesFacilitySettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsAttributesComponent", function () {
      return FacilitySettingsAttributesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/attributes-list/attributes-list.component */
    "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");

    var _c0 = ["list"];

    function FacilitySettingsAttributesComponent_mat_spinner_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_17_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("attributes", ctx_r1.attributes)("selection", ctx_r1.selection);
      }
    }

    var FacilitySettingsAttributesComponent = /*#__PURE__*/function () {
      function FacilitySettingsAttributesComponent(attributesManager, route, dialog, notificator, tableConfigService, translate) {
        var _this40 = this;

        _classCallCheck(this, FacilitySettingsAttributesComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this40.saveSuccessMessage = value;
        });
        this.translate.get('FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this40.deleteSuccessMessage = value;
        });
      }

      _createClass(FacilitySettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this41.facilityId = params['facilityId'];

            _this41.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this42 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.facilityId,
            entity: 'facility',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this42.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this43 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.facilityId,
            entity: 'facility',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__["EditAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this43.refreshTable();
            }
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this44 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.facilityId,
            entity: 'facility',
            notEmptyAttributes: this.attributes,
            style: 'facility-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this44.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this45 = this;

          this.loading = true;
          this.attributesManager.getFacilityAttributes(this.facilityId).subscribe(function (attributes) {
            _this45.attributes = attributes;

            _this45.selection.clear();

            _this45.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilitySettingsAttributesComponent;
    }();

    FacilitySettingsAttributesComponent.ɵfac = function FacilitySettingsAttributesComponent_Factory(t) {
      return new (t || FacilitySettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    FacilitySettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsAttributesComponent,
      selectors: [["app-facility-settings-attributes"]],
      viewQuery: function FacilitySettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function FacilitySettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 18,
      vars: 19,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]],
      template: function FacilitySettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsAttributesComponent_Template_button_click_11_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FacilitySettingsAttributesComponent_mat_spinner_16_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FacilitySettingsAttributesComponent_perun_web_apps_attributes_list_17_Template, 2, 4, "perun-web-apps-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "FACILITY_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 17, "SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtYXR0cmlidXRlcy9mYWNpbGl0eS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings-attributes',
          templateUrl: './facility-settings-attributes.component.html',
          styleUrls: ['./facility-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component.ts":
  /*!**********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-blacklist/facility-settings-blacklist.component.ts ***!
    \**********************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsBlacklistComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsBlacklistFacilitySettingsBlacklistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsBlacklistComponent", function () {
      return FacilitySettingsBlacklistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_blacklist_list_blacklist_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/blacklist-list/blacklist-list.component */
    "./src/app/shared/components/blacklist-list/blacklist-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilitySettingsBlacklistComponent_mat_spinner_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 5);
      }
    }

    function FacilitySettingsBlacklistComponent_app_perun_web_apps_blacklist_list_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-perun-web-apps-blacklist-list", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySettingsBlacklistComponent_app_perun_web_apps_blacklist_list_8_Template_app_perun_web_apps_blacklist_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("bansOnFacilitiesWithUsers", ctx_r1.bansOnFacilitiesWithUsers)("selection", ctx_r1.selected);
      }
    }

    var FacilitySettingsBlacklistComponent = /*#__PURE__*/function () {
      function FacilitySettingsBlacklistComponent(facilitiesManager, usersManager, tableConfigService, route) {
        _classCallCheck(this, FacilitySettingsBlacklistComponent);

        this.facilitiesManager = facilitiesManager;
        this.usersManager = usersManager;
        this.tableConfigService = tableConfigService;
        this.route = route;
        this.bansOnFacilitiesWithUsers = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TABLE_FACILITY_BLACKLIST_LIST"];
      }

      _createClass(FacilitySettingsBlacklistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.refreshTable();
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this46 = this;

          this.loading = true;
          this.route.parent.parent.params.subscribe(function (parentParentParams) {
            var facilityId = parentParentParams['facilityId'];

            _this46.facilitiesManager.getBansForFacility(facilityId).subscribe(function (bansOnFacility) {
              var listOfBans = bansOnFacility;

              var _iterator = _createForOfIteratorHelper(listOfBans),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var ban = _step.value;
                  var user = void 0;

                  _this46.usersManager.getUserById(ban.userId).subscribe(function (subscriptionUser) {
                    user = subscriptionUser;
                  });

                  _this46.bansOnFacilitiesWithUsers.push([ban, user]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this46.selected.clear();

              _this46.loading = false;
            });
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilitySettingsBlacklistComponent;
    }();

    FacilitySettingsBlacklistComponent.ɵfac = function FacilitySettingsBlacklistComponent_Factory(t) {
      return new (t || FacilitySettingsBlacklistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["UsersManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    FacilitySettingsBlacklistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsBlacklistComponent,
      selectors: [["app-perun-web-apps-facility-settings-blacklist"]],
      decls: 9,
      vars: 8,
      consts: [[1, "page-subtitle"], [3, "refresh"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "bansOnFacilitiesWithUsers", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "bansOnFacilitiesWithUsers", "selection", "page"]],
      template: function FacilitySettingsBlacklistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySettingsBlacklistComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "perun-web-apps-immediate-filter", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySettingsBlacklistComponent_Template_perun_web_apps_immediate_filter_filter_5_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySettingsBlacklistComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacilitySettingsBlacklistComponent_app_perun_web_apps_blacklist_list_8_Template, 1, 4, "app-perun-web-apps-blacklist-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "FACILITY_DETAIL.SETTINGS.BLACKLIST.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "FACILITY_DETAIL.SETTINGS.BLACKLIST.FILTER"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_5__["RefreshButtonComponent"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_6__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _shared_components_blacklist_list_blacklist_list_component__WEBPACK_IMPORTED_MODULE_9__["BlacklistListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtYmxhY2tsaXN0L2ZhY2lsaXR5LXNldHRpbmdzLWJsYWNrbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsBlacklistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perun-web-apps-facility-settings-blacklist',
          templateUrl: './facility-settings-blacklist.component.html',
          styleUrls: ['./facility-settings-blacklist.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["UsersManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-managers/facility-settings-managers.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsManagersComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsManagersFacilitySettingsManagersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsManagersComponent", function () {
      return FacilitySettingsManagersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/models */
    "../../libs/perun/models/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/managers-page/managers-page.component */
    "./src/app/shared/components/managers-page/managers-page.component.ts");

    function FacilitySettingsManagersComponent_app_managers_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r0.facility)("complementaryObjectType", ctx_r0.type)("theme", ctx_r0.theme)("availableRoles", ctx_r0.availableRoles);
      }
    }

    var FacilitySettingsManagersComponent = /*#__PURE__*/function () {
      function FacilitySettingsManagersComponent(facilityService, route) {
        _classCallCheck(this, FacilitySettingsManagersComponent);

        this.facilityService = facilityService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__["Role"].FACILITYADMIN];
        this.selected = 'user';
        this.type = 'Facility';
        this.theme = 'facility-theme';
      }

      _createClass(FacilitySettingsManagersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          this.route.parent.parent.params.subscribe(function (parentParentParams) {
            var facilityId = parentParentParams['facilityId'];

            _this47.facilityService.getFacilityById(facilityId).subscribe(function (facility) {
              _this47.facility = facility;
            });
          });
        }
      }]);

      return FacilitySettingsManagersComponent;
    }();

    FacilitySettingsManagersComponent.ɵfac = function FacilitySettingsManagersComponent_Factory(t) {
      return new (t || FacilitySettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    FacilitySettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsManagersComponent,
      selectors: [["app-perun-web-apps-facility-settings-managers"]],
      hostVars: 2,
      hostBindings: function FacilitySettingsManagersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]],
      template: function FacilitySettingsManagersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FacilitySettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.facility);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__["ManagersPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MtbWFuYWdlcnMvZmFjaWxpdHktc2V0dGluZ3MtbWFuYWdlcnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perun-web-apps-facility-settings-managers',
          templateUrl: './facility-settings-managers.component.html',
          styleUrls: ['./facility-settings-managers.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-overview/facility-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOverviewFacilitySettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsOverviewComponent", function () {
      return FacilitySettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var FacilitySettingsOverviewComponent = /*#__PURE__*/function () {
      function FacilitySettingsOverviewComponent(route, facilityManager) {
        _classCallCheck(this, FacilitySettingsOverviewComponent);

        this.route = route;
        this.facilityManager = facilityManager;
        this.items = [];
      }

      _createClass(FacilitySettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var facilityId = parentParams['facilityId'];

            _this48.facilityManager.getFacilityById(facilityId).subscribe(function (facility) {
              _this48.facility = facility;

              _this48.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.facility.id, "/settings/attributes"),
            label: 'MENU_ITEMS.FACILITY.ATTRIBUTES',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-user',
            url: "/facilities/".concat(this.facility.id, "/settings/owners"),
            label: 'MENU_ITEMS.FACILITY.OWNERS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-manager',
            url: "/facilities/".concat(this.facility.id, "/settings/managers"),
            label: 'MENU_ITEMS.FACILITY.MANAGERS',
            style: 'facility-btn'
          }, {
            cssIcon: 'perun-black-list',
            url: "/facilities/".concat(this.facility.id, "/settings/blacklist"),
            label: 'MENU_ITEMS.FACILITY.BLACKLIST',
            style: 'facility-btn'
          }];
        }
      }]);

      return FacilitySettingsOverviewComponent;
    }();

    FacilitySettingsOverviewComponent.ɵfac = function FacilitySettingsOverviewComponent_Factory(t) {
      return new (t || FacilitySettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]));
    };

    FacilitySettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsOverviewComponent,
      selectors: [["app-facility-settings-overview"]],
      hostVars: 2,
      hostBindings: function FacilitySettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function FacilitySettingsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
        }
      },
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcvZmFjaWxpdHktc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings-overview',
          templateUrl: './facility-settings-overview.component.html',
          styleUrls: ['./facility-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component.ts":
  /*!****************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings-owners/facility-settings-owners.component.ts ***!
    \****************************************************************************************************************************************/

  /*! exports provided: FacilitySettingsOwnersComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsOwnersFacilitySettingsOwnersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsOwnersComponent", function () {
      return FacilitySettingsOwnersComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_add_facility_owner_dialog_add_facility_owner_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/add-facility-owner-dialog/add-facility-owner-dialog.component */
    "./src/app/shared/components/dialogs/add-facility-owner-dialog/add-facility-owner-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_remove_facility_owner_dialog_remove_facility_owner_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/remove-facility-owner-dialog/remove-facility-owner-dialog.component */
    "./src/app/shared/components/dialogs/remove-facility-owner-dialog/remove-facility-owner-dialog.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_owners_list_owners_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../shared/components/owners-list/owners-list.component */
    "./src/app/shared/components/owners-list/owners-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilitySettingsOwnersComponent_perun_web_apps_refresh_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-refresh-button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySettingsOwnersComponent_perun_web_apps_refresh_button_3_Template_perun_web_apps_refresh_button_refresh_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.refreshTable();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FacilitySettingsOwnersComponent_perun_web_apps_immediate_filter_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-immediate-filter", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySettingsOwnersComponent_perun_web_apps_immediate_filter_10_Template_perun_web_apps_immediate_filter_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.applyFilter($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "VO_MANAGEMENT.FILTER_PLACEHOLDER");
      }
    }

    function FacilitySettingsOwnersComponent_mat_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 9);
      }
    }

    function FacilitySettingsOwnersComponent_app_owners_list_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-owners-list", 10);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filterValue", ctx_r3.filterValue)("owners", ctx_r3.owners)("selection", ctx_r3.selection);
      }
    }

    var FacilitySettingsOwnersComponent = /*#__PURE__*/function () {
      function FacilitySettingsOwnersComponent(facilitiesManagerService, route, dialog) {
        _classCallCheck(this, FacilitySettingsOwnersComponent);

        this.facilitiesManagerService = facilitiesManagerService;
        this.route = route;
        this.dialog = dialog;
        this.owners = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
      }

      _createClass(FacilitySettingsOwnersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this49.facilityId = params['facilityId'];

            _this49.refreshTable();
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this50 = this;

          this.loading = true;
          this.selection.clear();
          this.facilitiesManagerService.getFacilityOwners(this.facilityId).subscribe(function (owners) {
            _this50.owners = owners;
            _this50.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this51 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '800px';
          config.data = {
            theme: 'facility-theme',
            facilityId: this.facilityId,
            forbiddenOwners: this.owners.map(function (owner) {
              return owner.id;
            })
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_add_facility_owner_dialog_add_facility_owner_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddFacilityOwnerDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (response) {
            if (response) {
              _this51.refreshTable();
            }
          });
        }
      }, {
        key: "onRemove",
        value: function onRemove() {
          var _this52 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            theme: 'facility-theme',
            owners: this.selection.selected,
            facilityId: this.facilityId
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_facility_owner_dialog_remove_facility_owner_dialog_component__WEBPACK_IMPORTED_MODULE_7__["RemoveFacilityOwnerDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (response) {
            if (response) {
              _this52.refreshTable();
            }
          });
        }
      }]);

      return FacilitySettingsOwnersComponent;
    }();

    FacilitySettingsOwnersComponent.ɵfac = function FacilitySettingsOwnersComponent_Factory(t) {
      return new (t || FacilitySettingsOwnersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]));
    };

    FacilitySettingsOwnersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsOwnersComponent,
      selectors: [["app-facility-settings-owners"]],
      decls: 13,
      vars: 14,
      consts: [[1, "page-subtitle"], [3, "refresh", 4, "ngIf"], ["color", "accent", "mat-flat-button", "", 1, "mr-2", 3, "click"], ["color", "warn", "mat-flat-button", "", 1, "mr-2", 3, "disabled", "click"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "filterValue", "owners", "selection", 4, "ngIf"], [3, "refresh"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "filterValue", "owners", "selection"]],
      template: function FacilitySettingsOwnersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FacilitySettingsOwnersComponent_perun_web_apps_refresh_button_3_Template, 1, 0, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsOwnersComponent_Template_button_click_4_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FacilitySettingsOwnersComponent_Template_button_click_7_listener() {
            return ctx.onRemove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FacilitySettingsOwnersComponent_perun_web_apps_immediate_filter_10_Template, 1, 1, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FacilitySettingsOwnersComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FacilitySettingsOwnersComponent_app_owners_list_12_Template, 1, 3, "app-owners-list", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, "FACILITY_DETAIL.SETTINGS.OWNERS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "FACILITY_DETAIL.SETTINGS.OWNERS.ADD"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "FACILITY_DETAIL.SETTINGS.OWNERS.DELETE"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__["RefreshButtonComponent"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _shared_components_owners_list_owners_list_component__WEBPACK_IMPORTED_MODULE_13__["OwnersListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3Mtb3duZXJzL2ZhY2lsaXR5LXNldHRpbmdzLW93bmVycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsOwnersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings-owners',
          templateUrl: './facility-settings-owners.component.html',
          styleUrls: ['./facility-settings-owners.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["FacilitiesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-detail-page/facility-settings/facility-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: FacilitySettingsComponent */

  /***/
  function srcAppFacilitiesPagesFacilityDetailPageFacilitySettingsFacilitySettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySettingsComponent", function () {
      return FacilitySettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var FacilitySettingsComponent = /*#__PURE__*/function () {
      function FacilitySettingsComponent() {
        _classCallCheck(this, FacilitySettingsComponent);
      }

      _createClass(FacilitySettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FacilitySettingsComponent;
    }();

    FacilitySettingsComponent.ɵfac = function FacilitySettingsComponent_Factory(t) {
      return new (t || FacilitySettingsComponent)();
    };

    FacilitySettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySettingsComponent,
      selectors: [["app-facility-settings"]],
      hostVars: 2,
      hostBindings: function FacilitySettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function FacilitySettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktZGV0YWlsLXBhZ2UvZmFjaWxpdHktc2V0dGluZ3MvZmFjaWxpdHktc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-settings',
          templateUrl: './facility-settings.component.html',
          styleUrls: ['./facility-settings.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        }]
      }], function () {
        return [];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/facility-select-page/facility-select-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: FacilitySelectPageComponent */

  /***/
  function srcAppFacilitiesPagesFacilitySelectPageFacilitySelectPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FacilitySelectPageComponent", function () {
      return FacilitySelectPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */
    "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/components/facility-select-table/facility-select-table.component */
    "./src/app/shared/components/facility-select-table/facility-select-table.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-refresh-button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template_perun_web_apps_refresh_button_refresh_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.refreshTable();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-immediate-filter", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template_perun_web_apps_immediate_filter_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.applyFilter($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "FACILITY_MANAGEMENT.FILTER_PLACEHOLDER");
      }
    }

    function FacilitySelectPageComponent_mat_spinner_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function FacilitySelectPageComponent_app_facility_select_table_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-facility-select-table", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function FacilitySelectPageComponent_app_facility_select_table_8_Template_app_facility_select_table_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r3.pageSize)("filterValue", ctx_r3.filterValue)("facilities", ctx_r3.facilities)("recentIds", ctx_r3.recentIds);
      }
    }

    var FacilitySelectPageComponent = /*#__PURE__*/function () {
      function FacilitySelectPageComponent(facilityManager, sideMenuService, tableConfigService) {
        _classCallCheck(this, FacilitySelectPageComponent);

        this.facilityManager = facilityManager;
        this.sideMenuService = sideMenuService;
        this.tableConfigService = tableConfigService;
        this.facilities = [];
        this.recentIds = [];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TABLE_FACILITY_SELECT"];
      }

      _createClass(FacilitySelectPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.sideMenuService.setFacilityMenuItems([]);
          this.refreshTable();
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this53 = this;

          this.loading = true;
          this.facilityManager.getRichFacilities().subscribe(function (facilities) {
            _this53.facilities = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisited"])('facilities', facilities);
            _this53.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisitedIds"])('facilities');
            _this53.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return FacilitySelectPageComponent;
    }();

    FacilitySelectPageComponent.ɵfac = function FacilitySelectPageComponent_Factory(t) {
      return new (t || FacilitySelectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"]));
    };

    FacilitySelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FacilitySelectPageComponent,
      selectors: [["app-facility-select-page"]],
      decls: 9,
      vars: 7,
      consts: [[1, "container-fluid", "pl-xl-5", "pr-xl-5", "facility-theme"], [1, "page-title"], [3, "refresh", 4, "ngIf"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "facilities", "recentIds", "page", 4, "ngIf"], [3, "refresh"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "facilities", "recentIds", "page"]],
      template: function FacilitySelectPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FacilitySelectPageComponent_perun_web_apps_refresh_button_5_Template, 1, 0, "perun-web-apps-refresh-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FacilitySelectPageComponent_perun_web_apps_immediate_filter_6_Template, 1, 1, "perun-web-apps-immediate-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FacilitySelectPageComponent_mat_spinner_7_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FacilitySelectPageComponent_app_facility_select_table_8_Template, 1, 4, "app-facility-select-table", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "FACILITY_MANAGEMENT.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_5__["BackButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_7__["RefreshButtonComponent"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_8__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_9__["MatSpinner"], _shared_components_facility_select_table_facility_select_table_component__WEBPACK_IMPORTED_MODULE_10__["FacilitySelectTableComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvZmFjaWxpdHktc2VsZWN0LXBhZ2UvZmFjaWxpdHktc2VsZWN0LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FacilitySelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-facility-select-page',
          templateUrl: './facility-select-page.component.html',
          styleUrls: ['./facility-select-page.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["FacilitiesManagerService"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_4__["TableConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-detail-page.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ResourceDetailPageComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceDetailPageComponent", function () {
      return ResourceDetailPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */
    "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1, a3) {
      return ["/facilities", a1, "resources", a3];
    };

    function ResourceDetailPageComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-animated-router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "RESOURCE_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.resource.facilityId, ctx_r0.resource.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.resource.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r0.resource.id, " ");
      }
    }

    var ResourceDetailPageComponent = /*#__PURE__*/function () {
      function ResourceDetailPageComponent(route, facilityManager, resourcesManager, sideMenuService, sideMenuItemService) {
        _classCallCheck(this, ResourceDetailPageComponent);

        this.route = route;
        this.facilityManager = facilityManager;
        this.resourcesManager = resourcesManager;
        this.sideMenuService = sideMenuService;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(ResourceDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this54 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this54.resourcesManager.getResourceById(resourceId).subscribe(function (resource) {
              _this54.resource = resource;

              _this54.facilityManager.getFacilityById(resource.facilityId).subscribe(function (facility) {
                var facilityItem = _this54.sideMenuItemService.parseFacility(facility);

                var resourceItem = _this54.sideMenuItemService.parseResource(resource);

                _this54.sideMenuService.setFacilityMenuItems([facilityItem, resourceItem]);
              });
            });
          });
        }
      }]);

      return ResourceDetailPageComponent;
    }();

    ResourceDetailPageComponent.ɵfac = function ResourceDetailPageComponent_Factory(t) {
      return new (t || ResourceDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]));
    };

    ResourceDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceDetailPageComponent,
      selectors: [["app-resource-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 resource-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "resource-theme"], [1, "page-title"], [1, "resource-link", 3, "routerLink"], [1, "text-muted"]],
      template: function ResourceDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ResourceDetailPageComponent_div_0_Template, 10, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resource !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-detail-page',
          templateUrl: './resource-detail-page.component.html',
          styleUrls: ['./resource-detail-page.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["FacilitiesManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["ResourcesManagerService"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_4__["SideMenuItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-groups/resource-groups.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: ResourceGroupsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceGroupsResourceGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceGroupsComponent", function () {
      return ResourceGroupsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component */
    "./src/app/shared/components/dialogs/remove-group-from-resource-dialog/remove-group-from-resource-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component */
    "./src/app/shared/components/dialogs/assign-group-to-resource-dialog/assign-group-to-resource-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shared/components/debounce-filter/debounce-filter.component */
    "./src/app/shared/components/debounce-filter/debounce-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _libs_perun_components_src_lib_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/groups-list/groups-list.component */
    "../../libs/perun/components/src/lib/groups-list/groups-list.component.ts");
    /* harmony import */


    var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */
    "../../libs/ui/alerts/src/lib/alert/alert.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["checkbox"];

    function ResourceGroupsComponent_mat_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    var _c1 = function _c1() {
      return ["vo", "menu"];
    };

    function ResourceGroupsComponent_div_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "perun-web-apps-groups-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ResourceGroupsComponent_div_12_Template_perun_web_apps_groups_list_page_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("groups", ctx_r1.filteredGroups)("selection", ctx_r1.selected)("disableMembers", false)("hideColumns", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
      }
    }

    function ResourceGroupsComponent_app_alert_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"), "\n");
      }
    }

    var ResourceGroupsComponent = /*#__PURE__*/function () {
      function ResourceGroupsComponent(route, resourcesManager, tableConfigService, dialog) {
        _classCallCheck(this, ResourceGroupsComponent);

        this.route = route;
        this.resourcesManager = resourcesManager;
        this.tableConfigService = tableConfigService;
        this.dialog = dialog;
        this.assignedGroups = [];
        this.selected = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.filteredGroups = [];
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TABLE_RESOURCE_ALLOWED_GROUPS"];
      }

      _createClass(ResourceGroupsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this55 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.loading = true;
          this.route.parent.params.subscribe(function (parentParams) {
            _this55.resourceId = parentParams['resourceId'];

            _this55.loadAllGroups();
          });
        }
      }, {
        key: "loadAllGroups",
        value: function loadAllGroups() {
          var _this56 = this;

          this.loading = true;
          this.resourcesManager.getAssignedGroups(this.resourceId).subscribe(function (assignedGroups) {
            _this56.assignedGroups = assignedGroups;
            _this56.filteredGroups = assignedGroups;

            _this56.selected.clear();

            _this56.loading = false;
          });
        }
      }, {
        key: "addGroup",
        value: function addGroup() {
          var _this57 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '800px';
          config.data = {
            theme: 'resource-theme',
            resourceId: this.resourceId
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_assign_group_to_resource_dialog_assign_group_to_resource_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AssignGroupToResourceDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this57.loadAllGroups();
            }
          });
        }
      }, {
        key: "removeGroups",
        value: function removeGroups() {
          var _this58 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            resourceId: this.resourceId,
            groups: this.selected.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_group_from_resource_dialog_remove_group_from_resource_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveGroupFromResourceDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this58.loadAllGroups();
            }
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filteredGroups = this.assignedGroups.filter(function (option) {
            return option.name.toLowerCase().includes(filterValue.toLowerCase());
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return ResourceGroupsComponent;
    }();

    ResourceGroupsComponent.ɵfac = function ResourceGroupsComponent_Factory(t) {
      return new (t || ResourceGroupsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    ResourceGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceGroupsComponent,
      selectors: [["app-perun-web-apps-resource-groups"]],
      viewQuery: function ResourceGroupsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.checkbox = _t.first);
        }
      },
      decls: 14,
      vars: 14,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["class", "mt-3", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "mt-3"], [3, "pageSize", "groups", "selection", "disableMembers", "hideColumns", "page"], ["color", "warn"]],
      template: function ResourceGroupsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceGroupsComponent_Template_perun_web_apps_refresh_button_refresh_3_listener() {
            return ctx.loadAllGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_4_listener() {
            return ctx.addGroup();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceGroupsComponent_Template_button_click_7_listener() {
            return ctx.removeGroups();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "app-debounce-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceGroupsComponent_Template_app_debounce_filter_filter_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ResourceGroupsComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ResourceGroupsComponent_div_12_Template, 2, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ResourceGroupsComponent_app_alert_13_Template, 3, 3, "app-alert", 7);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 8, "RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 10, "RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selected.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 12, "RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.assignedGroups.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.assignedGroups.length === 0 && !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _shared_components_debounce_filter_debounce_filter_component__WEBPACK_IMPORTED_MODULE_12__["DebounceFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _libs_perun_components_src_lib_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_15__["GroupsListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_16__["AlertComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2UtZ3JvdXBzL3Jlc291cmNlLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceGroupsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-perun-web-apps-resource-groups',
          templateUrl: './resource-groups.component.html',
          styleUrls: ['./resource-groups.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, {
        checkbox: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['checkbox', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-overview/resource-overview.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceOverviewResourceOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceOverviewComponent", function () {
      return ResourceOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var ResourceOverviewComponent = /*#__PURE__*/function () {
      function ResourceOverviewComponent(resourcesManager, route) {
        _classCallCheck(this, ResourceOverviewComponent);

        this.resourcesManager = resourcesManager;
        this.route = route;
        this.navItems = [];
      }

      _createClass(ResourceOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          this.route.params.subscribe(function (params) {
            var resourceId = params['resourceId'];

            _this59.resourcesManager.getResourceById(resourceId).subscribe(function (resource) {
              _this59.resource = resource;

              _this59.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.navItems = [{
            cssIcon: 'perun-group',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/groups"),
            label: 'MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS',
            style: 'resource-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings"),
            label: 'MENU_ITEMS.RESOURCE.SETTINGS',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceOverviewComponent;
    }();

    ResourceOverviewComponent.ɵfac = function ResourceOverviewComponent_Factory(t) {
      return new (t || ResourceOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ResourceOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceOverviewComponent,
      selectors: [["app-resource-overview"]],
      hostVars: 2,
      hostBindings: function ResourceOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function ResourceOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utb3ZlcnZpZXcvcmVzb3VyY2Utb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-overview',
          templateUrl: './resource-overview.component.html',
          styleUrls: ['./resource-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts":
  /*!************************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-attributes/resource-settings-attributes.component.ts ***!
    \************************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsAttributesComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsAttributesResourceSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsAttributesComponent", function () {
      return ResourceSettingsAttributesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/attributes-list/attributes-list.component */
    "../../libs/perun/components/src/lib/attributes-list/attributes-list.component.ts");

    var _c0 = ["list"];

    function ResourceSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("attributes", ctx_r1.attributes)("selection", ctx_r1.selection);
      }
    }

    var ResourceSettingsAttributesComponent = /*#__PURE__*/function () {
      function ResourceSettingsAttributesComponent(attributesManager, route, dialog, notificator, tableConfigService, translate) {
        var _this60 = this;

        _classCallCheck(this, ResourceSettingsAttributesComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this60.saveSuccessMessage = value;
        });
        this.translate.get('RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this60.deleteSuccessMessage = value;
        });
      }

      _createClass(ResourceSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this61 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this61.resourceId = params['resourceId'];

            _this61.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this62 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.resourceId,
            entity: 'resource',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this62.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this63 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.resourceId,
            entity: 'resource',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_5__["EditAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this63.refreshTable();
            }
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this64 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.resourceId,
            entity: 'resource',
            notEmptyAttributes: this.attributes,
            style: 'resource-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this64.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this65 = this;

          this.loading = true;
          this.attributesManager.getResourceAttributes(this.resourceId).subscribe(function (attributes) {
            _this65.attributes = attributes;

            _this65.selection.clear();

            _this65.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return ResourceSettingsAttributesComponent;
    }();

    ResourceSettingsAttributesComponent.ɵfac = function ResourceSettingsAttributesComponent_Factory(t) {
      return new (t || ResourceSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]));
    };

    ResourceSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsAttributesComponent,
      selectors: [["app-resource-settings-attributes"]],
      viewQuery: function ResourceSettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function ResourceSettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]],
      template: function ResourceSettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function ResourceSettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResourceSettingsAttributesComponent_Template_button_click_11_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function ResourceSettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ResourceSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ResourceSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MtYXR0cmlidXRlcy9yZXNvdXJjZS1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings-attributes',
          templateUrl: './resource-settings-attributes.component.html',
          styleUrls: ['./resource-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts":
  /*!********************************************************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings-overview/resource-settings-overview.component.ts ***!
    \********************************************************************************************************************************************/

  /*! exports provided: ResourceSettingsOverviewComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsOverviewResourceSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsOverviewComponent", function () {
      return ResourceSettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var ResourceSettingsOverviewComponent = /*#__PURE__*/function () {
      function ResourceSettingsOverviewComponent(route, resourceManager) {
        _classCallCheck(this, ResourceSettingsOverviewComponent);

        this.route = route;
        this.resourceManager = resourceManager;
        this.items = [];
      }

      _createClass(ResourceSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this66 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var resourceId = parentParams['resourceId'];

            _this66.resourceManager.getResourceById(resourceId).subscribe(function (resource) {
              _this66.resource = resource;

              _this66.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/facilities/".concat(this.resource.facilityId, "/resources/").concat(this.resource.id, "/settings/attributes"),
            label: 'MENU_ITEMS.RESOURCE.ATTRIBUTES',
            style: 'resource-btn'
          }];
        }
      }]);

      return ResourceSettingsOverviewComponent;
    }();

    ResourceSettingsOverviewComponent.ɵfac = function ResourceSettingsOverviewComponent_Factory(t) {
      return new (t || ResourceSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]));
    };

    ResourceSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsOverviewComponent,
      selectors: [["app-resource-settings-overview"]],
      hostVars: 2,
      hostBindings: function ResourceSettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function ResourceSettingsOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("size", "small");
        }
      },
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_3__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcvcmVzb3VyY2Utc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings-overview',
          templateUrl: './resource-settings-overview.component.html',
          styleUrls: ['./resource-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/facilities/pages/resource-detail-page/resource-settings/resource-settings.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: ResourceSettingsComponent */

  /***/
  function srcAppFacilitiesPagesResourceDetailPageResourceSettingsResourceSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResourceSettingsComponent", function () {
      return ResourceSettingsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var ResourceSettingsComponent = /*#__PURE__*/function () {
      function ResourceSettingsComponent() {
        _classCallCheck(this, ResourceSettingsComponent);
      }

      _createClass(ResourceSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResourceSettingsComponent;
    }();

    ResourceSettingsComponent.ɵfac = function ResourceSettingsComponent_Factory(t) {
      return new (t || ResourceSettingsComponent)();
    };

    ResourceSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResourceSettingsComponent,
      selectors: [["app-resource-settings"]],
      hostVars: 2,
      hostBindings: function ResourceSettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function ResourceSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL2ZhY2lsaXRpZXMvcGFnZXMvcmVzb3VyY2UtZGV0YWlsLXBhZ2UvcmVzb3VyY2Utc2V0dGluZ3MvcmVzb3VyY2Utc2V0dGluZ3MuY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResourceSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-resource-settings',
          templateUrl: './resource-settings.component.html',
          styleUrls: ['./resource-settings.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
        }]
      }], function () {
        return [];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.router-component']
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=facilities-facilities-module-es5.js.map