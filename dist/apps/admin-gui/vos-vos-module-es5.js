function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vos-vos-module"], {
  /***/
  "./src/app/vos/components/application-detail/application-detail.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/vos/components/application-detail/application-detail.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ApplicationDetailComponent */

  /***/
  function srcAppVosComponentsApplicationDetailApplicationDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationDetailComponent", function () {
      return ApplicationDetailComponent;
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


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_dialogs_application_re_send_notification_dialog_application_re_send_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component */
    "./src/app/shared/components/dialogs/application-re-send-notification-dialog/application-re-send-notification-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_application_reject_dialog_application_reject_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/dialogs/application-reject-dialog/application-reject-dialog.component */
    "./src/app/shared/components/dialogs/application-reject-dialog/application-reject-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/pipes/application-state.pipe */
    "./src/app/shared/pipes/application-state.pipe.ts");
    /* harmony import */


    var _libs_perun_pipes_src_lib_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/pipes/src/lib/user-full-name.pipe */
    "../../libs/perun/pipes/src/lib/user-full-name.pipe.ts");

    function ApplicationDetailComponent_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" #", ctx_r0.application.id, " ");
      }
    }

    function ApplicationDetailComponent_mat_spinner_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 6);
      }
    }

    function ApplicationDetailComponent_div_6_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_6_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r14.verifyApplication();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY"), " ");
      }
    }

    function ApplicationDetailComponent_div_6_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_6_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.approveApplication();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE"), " ");
      }
    }

    function ApplicationDetailComponent_div_6_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_6_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.rejectApplication();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECT"), " ");
      }
    }

    function ApplicationDetailComponent_div_6_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_6_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r20.deleteApplication();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DELETE"), " ");
      }
    }

    function ApplicationDetailComponent_div_6_span_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Initial ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationDetailComponent_div_6_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cached");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Extension ");
      }
    }

    function ApplicationDetailComponent_div_6_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "clear");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.REJECTED_BY"), ": ", ctx_r10.getModifiedAtName(ctx_r10.application.modifiedBy), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx_r10.application.modifiedAt, "d.M.y h:mm:ss a"), "");
      }
    }

    function ApplicationDetailComponent_div_6_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "done");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVED_BY"), ": ", ctx_r11.getModifiedAtName(ctx_r11.application.modifiedBy), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 6, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx_r11.application.modifiedAt, "d.M.y h:mm:ss a"), "");
      }
    }

    function ApplicationDetailComponent_div_6_table_55_th_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 33);
      }
    }

    function ApplicationDetailComponent_div_6_table_55_td_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userData_r28 = ctx.$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r23.getLabel(userData_r28.formItem), "", userData_r28.formItem.type.startsWith("FROM_FEDERATION") ? "*" : "", "");
      }
    }

    function ApplicationDetailComponent_div_6_table_55_th_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 33);
      }
    }

    function ApplicationDetailComponent_div_6_table_55_td_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var userData_r29 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", userData_r29.value, " ");
      }
    }

    function ApplicationDetailComponent_div_6_table_55_tr_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 36);
      }
    }

    function ApplicationDetailComponent_div_6_table_55_tr_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 37);
      }
    }

    function ApplicationDetailComponent_div_6_table_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationDetailComponent_div_6_table_55_th_2_Template, 1, 0, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationDetailComponent_div_6_table_55_td_3_Template, 2, 2, "td", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationDetailComponent_div_6_table_55_th_5_Template, 1, 0, "th", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationDetailComponent_div_6_table_55_td_6_Template, 2, 1, "td", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationDetailComponent_div_6_table_55_tr_7_Template, 1, 0, "tr", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApplicationDetailComponent_div_6_table_55_tr_8_Template, 1, 0, "tr", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx_r12.dataSource);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx_r12.displayedColumns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx_r12.displayedColumns);
      }
    }

    function ApplicationDetailComponent_div_6_div_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("*", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VALUE_BY_EXTERNALS"), "");
      }
    }

    function ApplicationDetailComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationDetailComponent_div_6_button_1_Template, 3, 3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationDetailComponent_div_6_button_2_Template, 3, 3, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationDetailComponent_div_6_button_3_Template, 3, 3, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationDetailComponent_div_6_button_4_Template, 3, 3, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationDetailComponent_div_6_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.resendNotification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " mail_outline ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "span", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "applicationState");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](25, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ApplicationDetailComponent_div_6_span_27_Template, 4, 0, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ApplicationDetailComponent_div_6_ng_template_28_Template, 3, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ApplicationDetailComponent_div_6_div_30_Template, 12, 11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ApplicationDetailComponent_div_6_div_31_Template, 12, 11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "redo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "userFullName");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](42, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](47, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](54, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ApplicationDetailComponent_div_6_table_55_Template, 9, 3, "table", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ApplicationDetailComponent_div_6_div_56_Template, 3, 3, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "NEW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "VERIFIED" || ctx_r2.application.state == "NEW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "VERIFIED" || ctx_r2.application.state == "NEW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "REJECTED" || ctx_r2.application.state == "NEW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 24, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SEND_NOTIFICATION"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 26, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPLICATION_FOR_VO"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" : ", ctx_r2.application.vo.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 28, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.STATE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 30, ctx_r2.application.state), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](25, 32, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TYPE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.type == "INITIAL")("ngIfElse", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "REJECTED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.application.state == "APPROVED");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 34, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.SUBMITTED_BY"), ": ", ctx_r2.application.user === null ? ctx_r2.submittedBy() : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 36, ctx_r2.application.user), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](42, 38, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.EXT_SRC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r2.application.extSourceName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](47, 40, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.LOA"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", ctx_r2.application.extSourceLoa, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 42, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DATE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](54, 44, ctx_r2.application.createdAt, "d.M.y h:mm:ss a"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userData.length !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.userData.length !== 0);
      }
    }

    var ApplicationDetailComponent = /*#__PURE__*/function () {
      function ApplicationDetailComponent(registrarManager, dialog, translate, route, notificator, router) {
        _classCallCheck(this, ApplicationDetailComponent);

        this.registrarManager = registrarManager;
        this.dialog = dialog;
        this.translate = translate;
        this.route = route;
        this.notificator = notificator;
        this.router = router;
        this.userData = [];
        this.displayedColumns = ['label', 'value'];
        this.loading = true;
      }

      _createClass(ApplicationDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loading = true;
          this.route.params.subscribe(function (parentParams) {
            var applicationId = parentParams['applicationId'];

            _this.registrarManager.getApplicationById(applicationId).subscribe(function (application) {
              _this.application = application;

              _this.registrarManager.getApplicationDataById(_this.application.id).subscribe(function (value) {
                _this.userData = value;
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.userData);
                _this.loading = false;
              });
            });
          });
        }
      }, {
        key: "getLabel",
        value: function getLabel(formItem) {
          if (formItem.i18n['en'].label !== null) {
            if (formItem.i18n['en'].label.length !== 0) {
              return formItem.i18n['en'].label; // prerobit na ne en
            }
          }

          return formItem.shortname;
        }
      }, {
        key: "submittedBy",
        value: function submittedBy() {
          return this.application.createdBy.slice(this.application.createdBy.lastIndexOf('=') + 1, this.application.createdBy.length);
        }
      }, {
        key: "getModifiedAtName",
        value: function getModifiedAtName(modifiedBy) {
          var index = modifiedBy.lastIndexOf('/CN=');

          if (index !== -1) {
            var string = modifiedBy.slice(index + 4, modifiedBy.length).replace('/unstructuredName=', ' ');

            if (string.lastIndexOf('\\') !== -1) {
              return modifiedBy.slice(modifiedBy.lastIndexOf('=') + 1, modifiedBy.length);
            }

            return string;
          }

          return modifiedBy;
        }
      }, {
        key: "resendNotification",
        value: function resendNotification() {
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            applicationId: this.application.id
          };
          this.dialog.open(_shared_components_dialogs_application_re_send_notification_dialog_application_re_send_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ApplicationReSendNotificationDialogComponent"], config);
        }
      }, {
        key: "deleteApplication",
        value: function deleteApplication() {
          var _this2 = this;

          this.registrarManager.deleteApplication(this.application.id).subscribe(function () {
            _this2.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.DELETE_MESSAGE').subscribe(function (successMessage) {
              _this2.notificator.showSuccess(successMessage);

              _this2.router.navigateByUrl(_this2.router.url.substring(0, _this2.router.url.lastIndexOf('/')));
            });
          });
        }
      }, {
        key: "rejectApplication",
        value: function rejectApplication() {
          var _this3 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            applicationId: this.application.id
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_application_reject_dialog_application_reject_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ApplicationRejectDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function () {
            _this3.loading = true;

            _this3.registrarManager.getApplicationById(_this3.application.id).subscribe(function (reloaded) {
              _this3.application = reloaded;
              _this3.loading = false;
            });
          });
        }
      }, {
        key: "approveApplication",
        value: function approveApplication() {
          var _this4 = this;

          this.registrarManager.approveApplication(this.application.id).subscribe(function () {
            _this4.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.APPROVE_MESSAGE').subscribe(function (successMessage) {
              _this4.notificator.showSuccess(successMessage);
            });

            _this4.loading = true;

            _this4.registrarManager.getApplicationById(_this4.application.id).subscribe(function (reloaded) {
              _this4.application = reloaded;
              _this4.loading = false;
            });
          });
        }
      }, {
        key: "verifyApplication",
        value: function verifyApplication() {
          var _this5 = this;

          this.registrarManager.verifyApplication(this.application.id).subscribe(function () {
            _this5.translate.get('VO_DETAIL.APPLICATION.APPLICATION_DETAIL.VERIFY_MESSAGE').subscribe(function (successMessage) {
              _this5.notificator.showSuccess(successMessage);
            });

            _this5.loading = true;

            _this5.registrarManager.getApplicationById(_this5.application.id).subscribe(function (reloaded) {
              _this5.application = reloaded;
              _this5.loading = false;
            });
          });
        }
      }]);

      return ApplicationDetailComponent;
    }();

    ApplicationDetailComponent.ɵfac = function ApplicationDetailComponent_Factory(t) {
      return new (t || ApplicationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    ApplicationDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationDetailComponent,
      selectors: [["app-application-detail"]],
      hostVars: 2,
      hostBindings: function ApplicationDetailComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 7,
      vars: 6,
      consts: [[1, "page-subtitle"], ["class", "text-muted", 4, "ngIf"], [1, "mb-4"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "text-muted"], [1, "ml-auto", "mr-auto"], ["mat-flat-button", "", "color", "accent", "class", "mr-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "class", "mr-2", 3, "click", 4, "ngIf"], ["mat-stroked-button", "", 1, "mr-2", "mb-2", 3, "click"], [1, "material-icons"], [1, "font-weight-bold"], [3, "outerHTML"], [4, "ngIf", "ngIfElse"], ["extension", ""], ["class", "card p-3 mt-2", 4, "ngIf"], [1, "card", "p-4", "mt-2"], ["mat-table", "", "class", "w-100", 3, "dataSource", 4, "ngIf"], ["class", "font-italic", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "click"], [1, "align-text-bottom"], [1, "card", "p-3", "mt-2"], [1, "material-icons", "red"], [1, "material-icons", "green"], ["mat-table", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "label"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "font-weight-bold", 4, "matCellDef"], ["matColumnDef", "value"], ["class", "word-break-all", "mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", "class", "h-50", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "font-weight-bold"], ["mat-cell", "", 1, "word-break-all"], ["mat-header-row", "", 1, "h-50"], ["mat-row", ""], [1, "font-italic"]],
      template: function ApplicationDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationDetailComponent_span_3_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-divider", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationDetailComponent_mat_spinner_5_Template, 1, 0, "mat-spinner", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationDetailComponent_div_6_Template, 57, 47, "div", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "VO_DETAIL.APPLICATION.APPLICATION_DETAIL.TITLE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !!ctx.application);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardTitle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"], _shared_pipes_application_state_pipe__WEBPACK_IMPORTED_MODULE_16__["ApplicationStatePipe"], _libs_perun_pipes_src_lib_user_full_name_pipe__WEBPACK_IMPORTED_MODULE_17__["UserFullNamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWRldGFpbC9hcHBsaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-detail',
          templateUrl: './application-detail.component.html',
          styleUrls: ['./application-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["RegistrarManagerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
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
  "./src/app/vos/components/application-form-preview/application-form-preview.component.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/app/vos/components/application-form-preview/application-form-preview.component.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ApplicationFormPreviewComponent */

  /***/
  function srcAppVosComponentsApplicationFormPreviewApplicationFormPreviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationFormPreviewComponent", function () {
      return ApplicationFormPreviewComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ApplicationFormPreviewComponent_mat_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    function ApplicationFormPreviewComponent_div_4_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.switchToInitial();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_INITIAL"), " ");
      }
    }

    function ApplicationFormPreviewComponent_div_4_button_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_3_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.switchToExtension();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "cached");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_EXTENSION"), " ");
      }
    }

    function ApplicationFormPreviewComponent_div_4_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.switchToEnglish();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "public");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_ENGLISH"), " ");
      }
    }

    function ApplicationFormPreviewComponent_div_4_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationFormPreviewComponent_div_4_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r13.switchToCzech();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "public");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.SWITCH_CZECH"), " ");
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r18.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r19.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r33 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r33, "");
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_div_5_Template, 4, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r20.getLocalizedOptions(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 4, "VO_DETAIL.SETTINGS.APPLICATION_FORM.CLEAR_SELECTION"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r20.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r21.getLocalizedLabel(applicationFormItem_r15), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r37 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r37);
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_option_6_Template, 2, 1, "option", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r22.getLocalizedOptions(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r22.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "textarea", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r23.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r42 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r42);
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template_select_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44);

          var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r43.mapForCombobox[applicationFormItem_r15.id] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_option_9_Template, 2, 1, "option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_div_10_Template, 3, 0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r24.mapForCombobox[applicationFormItem_r15.id]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "VO_DETAIL.SETTINGS.APPLICATION_FORM.OTHER_VALUE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.getLocalizedOptions(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r24.mapForCombobox[applicationFormItem_r15.id] === "true");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r24.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r48 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r48, " ");
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_div_6_Template, 3, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r25.getLocalizedOptions(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r26.getLocalizedLabel(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r27.getLocalizedLabel(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(GMT -12:00) Eniwetok, Kwajalein");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "(GMT -11:00) Midway Island, Samoa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "(GMT -10:00) Hawaii");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "(GMT -9:30) Taiohae");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "(GMT -9:00) Alaska");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "(GMT -8:00) Pacific Time (US & Canada)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "(GMT -7:00) Mountain Time (US & Canada)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(GMT -6:00) Central Time (US & Canada), Mexico City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "(GMT -4:30) Caracas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "(GMT -3:30) Newfoundland");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "(GMT -3:00) Brazil, Buenos Aires, Georgetown");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "(GMT -2:00) Mid-Atlantic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "option", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "(GMT -1:00) Azores, Cape Verde Islands");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "(GMT) Western Europe Time, London, Lisbon, Casablanca");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "(GMT +1:00) Brussels, Copenhagen, Madrid, Paris");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "(GMT +2:00) Kaliningrad, South Africa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "(GMT +3:30) Tehran");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "(GMT +4:30) Kabul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "(GMT +5:30) Bombay, Calcutta, Madras, New Delhi");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "(GMT +5:45) Kathmandu, Pokhara");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "(GMT +6:00) Almaty, Dhaka, Colombo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "(GMT +6:30) Yangon, Mandalay");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "option", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "(GMT +7:00) Bangkok, Hanoi, Jakarta");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "option", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "(GMT +8:00) Beijing, Perth, Singapore, Hong Kong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "option", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "(GMT +8:45) Eucla");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "option", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "option", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "(GMT +9:30) Adelaide, Darwin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "option", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "(GMT +10:00) Eastern Australia, Guam, Vladivostok");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "option", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "(GMT +10:30) Lord Howe Island");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "option", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "(GMT +11:00) Magadan, Solomon Islands, New Caledonia");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "option", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "(GMT +11:30) Norfolk Island");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "(GMT +12:45) Chatham Islands");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "(GMT +13:00) Apia, Nukualofa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "(GMT +14:00) Line Islands, Tokelau");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "span", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.getLocalizedLabel(applicationFormItem_r15));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 3, "VO_DETAIL.SETTINGS.APPLICATION_FORM.NOT_SELECTED"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.getLocalizedHint(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_1_Template, 9, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_2_Template, 9, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_3_Template, 11, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_4_Template, 11, 6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_5_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_6_Template, 10, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_7_Template, 8, 2, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_8_Template, 14, 8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_9_Template, 10, 3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_10_Template, 3, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_11_Template, 3, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ApplicationFormPreviewComponent_div_4_div_7_div_1_div_12_Template, 92, 5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "TEXTFIELD" || applicationFormItem_r15.type === "VALIDATED_EMAIL" || applicationFormItem_r15.type === "USERNAME");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "FROM_FEDERATION_SHOW");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "PASSWORD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "RADIO");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "HEADING" || applicationFormItem_r15.type === "HTML_COMMENT");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "SELECTIONBOX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "TEXTAREA");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "COMBOBOX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "CHECKBOX");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "SUBMIT_BUTTON");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "AUTO_SUBMIT_BUTTON");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationFormItem_r15.type === "TIMEZONE");
      }
    }

    function ApplicationFormPreviewComponent_div_4_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ApplicationFormPreviewComponent_div_4_div_7_div_1_Template, 13, 12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationFormItem_r15 = ctx.$implicit;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.isValid(applicationFormItem_r15));
      }
    }

    function ApplicationFormPreviewComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ApplicationFormPreviewComponent_div_4_button_2_Template, 5, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_div_4_button_3_Template, 5, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_button_4_Template, 5, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ApplicationFormPreviewComponent_div_4_button_5_Template, 5, 3, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ApplicationFormPreviewComponent_div_4_div_7_Template, 2, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.initialPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.initialPage);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.language === "cs");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.language === "en");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.applicationFormItems);
      }
    }

    var ApplicationFormPreviewComponent = /*#__PURE__*/function () {
      function ApplicationFormPreviewComponent(route) {
        _classCallCheck(this, ApplicationFormPreviewComponent);

        this.route = route;
        this.loading = true;
        this.applicationFormItems = [];
        this.language = 'en';
        this.initialPage = true;
        this.mapForCombobox = new Map();
      }

      _createClass(ApplicationFormPreviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.queryParamMap.subscribe(function (params) {
            _this6.applicationFormItems = JSON.parse(params.get('applicationFormItems'));
            _this6.loading = false;
          });
        }
      }, {
        key: "switchToInitial",
        value: function switchToInitial() {
          this.initialPage = true;
        }
      }, {
        key: "switchToExtension",
        value: function switchToExtension() {
          this.initialPage = false;
        }
      }, {
        key: "switchToEnglish",
        value: function switchToEnglish() {
          this.language = 'en';
        }
      }, {
        key: "switchToCzech",
        value: function switchToCzech() {
          this.language = 'cs';
        }
      }, {
        key: "getLocalizedOptions",
        value: function getLocalizedOptions(applicationFormItem) {
          if (applicationFormItem.i18n[this.language]) {
            var options = applicationFormItem.i18n[this.language].options;

            if (options !== null && options !== '') {
              var labels = [];

              var _iterator = _createForOfIteratorHelper(options.split('|')),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var item = _step.value;
                  labels.push(item.split('#')[1]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              return labels;
            }
          }

          return [];
        }
      }, {
        key: "isValid",
        value: function isValid(applicationFormItem) {
          if (applicationFormItem.forDelete) {
            return false;
          }

          var _iterator2 = _createForOfIteratorHelper(applicationFormItem.applicationTypes),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var type = _step2.value;

              if (type === 'INITIAL' && this.initialPage) {
                return true;
              }

              if (type === 'EXTENSION' && !this.initialPage) {
                return true;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          return false;
        }
      }, {
        key: "getLocalizedLabel",
        value: function getLocalizedLabel(applicationFormItem) {
          if (applicationFormItem.i18n[this.language]) {
            return applicationFormItem.i18n[this.language].label;
          }

          return applicationFormItem.shortname;
        }
      }, {
        key: "getLocalizedHint",
        value: function getLocalizedHint(applicationFormItem) {
          if (applicationFormItem.i18n[this.language]) {
            return applicationFormItem.i18n[this.language].help;
          }

          return '';
        }
      }]);

      return ApplicationFormPreviewComponent;
    }();

    ApplicationFormPreviewComponent.ɵfac = function ApplicationFormPreviewComponent_Factory(t) {
      return new (t || ApplicationFormPreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ApplicationFormPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationFormPreviewComponent,
      selectors: [["app-application-form-preview"]],
      hostVars: 2,
      hostBindings: function ApplicationFormPreviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 5,
      vars: 5,
      consts: [[1, "page-subtitle"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "w-100", "d-flex", "mb-2"], ["mat-stroked-button", "", "class", "mr-2", 3, "click", 4, "ngIf"], [1, "card", "mb-4", "p-5"], [4, "ngFor", "ngForOf"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], ["class", "d-flex", 4, "ngIf"], [1, "d-flex"], [1, "w-50", "d-flex"], [1, "w-50"], ["type", "text", 1, "w-100"], [1, "ml-2"], ["type", "text", "disabled", "", 1, "w-100"], ["type", "text", 1, "mb-1", "w-100"], ["type", "reset", 3, "value"], ["type", "radio", "name", "temp"], [3, "innerHTML"], [1, "w-100"], [1, "w-100", 3, "ngModel", "ngModelChange"], ["value", "true", "selected", ""], ["value", "false", 4, "ngFor", "ngForOf"], ["class", "w-100", 4, "ngIf"], ["value", "false"], ["type", "text"], ["type", "checkbox"], ["mat-flat-button", "", "color", "accent"], ["name", "timezone_offset", "id", "timezone-offset", 1, "w-100"], ["value", "-12:00", "selected", "selected"], ["value", "-12:00"], ["value", "-11:00"], ["value", "-10:00"], ["value", "-09:50"], ["value", "-09:00"], ["value", "-08:00"], ["value", "-07:00"], ["value", "-06:00"], ["value", "-05:00"], ["value", "-04:50"], ["value", "-04:00"], ["value", "-03:50"], ["value", "-03:00"], ["value", "-02:00"], ["value", "-01:00"], ["value", "+00:00"], ["value", "+01:00"], ["value", "+02:00"], ["value", "+03:00"], ["value", "+03:50"], ["value", "+04:00"], ["value", "+04:50"], ["value", "+05:00"], ["value", "+05:50"], ["value", "+05:75"], ["value", "+06:00"], ["value", "+06:50"], ["value", "+07:00"], ["value", "+08:00"], ["value", "+08:75"], ["value", "+09:00"], ["value", "+09:50"], ["value", "+10:00"], ["value", "+10:50"], ["value", "+11:00"], ["value", "+11:50"], ["value", "+12:00"], ["value", "+12:75"], ["value", "+13:00"], ["value", "+14:00"]],
      template: function ApplicationFormPreviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ApplicationFormPreviewComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationFormPreviewComponent_div_4_Template, 8, 5, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "VO_DETAIL.SETTINGS.APPLICATION_FORM.PREVIEW_PAGE.TITLE"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_3__["MatSpinner"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL2FwcGxpY2F0aW9uLWZvcm0tcHJldmlldy9hcHBsaWNhdGlvbi1mb3JtLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationFormPreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application-form-preview',
          templateUrl: './application-form-preview.component.html',
          styleUrls: ['./application-form-preview.component.scss']
        }]
      }], function () {
        return [{
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
  "./src/app/vos/components/expiration-settings/expiration-settings.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/vos/components/expiration-settings/expiration-settings.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ExpirationAttrValue, ExpirationSettingsComponent */

  /***/
  function srcAppVosComponentsExpirationSettingsExpirationSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpirationAttrValue", function () {
      return ExpirationAttrValue;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExpirationSettingsComponent", function () {
      return ExpirationSettingsComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/radio */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/settings-toggle-item/settings-toggle-item.component */
    "./src/app/shared/components/settings-toggle-item/settings-toggle-item.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/select */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function ExpirationSettingsComponent_div_0_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_21_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.currentConfiguration.periodStatic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r4.datePattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.currentConfiguration.periodStatic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT"));
      }
    }

    function ExpirationSettingsComponent_div_0_div_22_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r15.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r15.text);
      }
    }

    function ExpirationSettingsComponent_div_0_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_22_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r16.currentConfiguration.periodDynamic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_22_Template_mat_select_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r18.currentConfiguration.periodDynamicUnit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpirationSettingsComponent_div_0_div_22_mat_option_9_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r5.dynamicAmountPattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.currentConfiguration.periodDynamic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.currentConfiguration.periodDynamicUnit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.amountOptions);
      }
    }

    function ExpirationSettingsComponent_div_0_mat_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loa_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loa_r19);
      }
    }

    function ExpirationSettingsComponent_div_0_mat_option_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loa_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loa_r20);
      }
    }

    function ExpirationSettingsComponent_div_0_mat_option_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r21.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r21.text);
      }
    }

    function ExpirationSettingsComponent_div_0_mat_option_61_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var loa_r22 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", loa_r22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", loa_r22, " ");
      }
    }

    function ExpirationSettingsComponent_div_0_div_62_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_10_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r27.currentConfiguration.specialLoaPeriodStatic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-hint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r25.datePattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_INPUT_STATIC"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r25.currentConfiguration.specialLoaPeriodStatic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DP_HINT"));
      }
    }

    function ExpirationSettingsComponent_div_0_div_62_div_11_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r30 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r30.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r30.text);
      }
    }

    function ExpirationSettingsComponent_div_0_div_62_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_11_Template_input_ngModelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r31.currentConfiguration.specialLoaPeriodDynamic = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_div_11_Template_mat_select_ngModelChange_8_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r33.currentConfiguration.specialLoaPeriodDynamicUnit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExpirationSettingsComponent_div_0_div_62_div_11_mat_option_9_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r26.dynamicAmountPattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_VALUE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.currentConfiguration.specialLoaPeriodDynamic);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 8, "VO_MANAGEMENT.SETTINGS.EXPIRATION.AMOUNT_TYPE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r26.currentConfiguration.specialLoaPeriodDynamicUnit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r26.amountOptions);
      }
    }

    function ExpirationSettingsComponent_div_0_div_62_Template(rf, ctx) {
      if (rf & 1) {
        var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-radio-group", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_Template_mat_radio_group_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r34.currentConfiguration.specialLoaPeriodType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-radio-button", 9, 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-button", 11, 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExpirationSettingsComponent_div_0_div_62_div_10_Template, 7, 8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ExpirationSettingsComponent_div_0_div_62_div_11_Template, 10, 10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-checkbox", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_div_62_Template_mat_checkbox_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r36.currentConfiguration.specialLoaPeriodExtendExpiredMembers = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.currentConfiguration.specialLoaPeriodType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r23.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r24.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.currentConfiguration.specialLoaPeriodExtendExpiredMembers);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 11, "VO_MANAGEMENT.SETTINGS.EXPIRATION.EXTEND_EXPIRED_MEMBERS_CHECKBOX"), " ");
      }
    }

    function ExpirationSettingsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpirationSettingsComponent_div_0_Template_h1_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          return _r1.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-slide-toggle", 4, 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r39.currentConfiguration.enabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-group", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_radio_group_ngModelChange_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r40.currentConfiguration.periodType = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-radio-button", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-radio-button", 11, 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ExpirationSettingsComponent_div_0_div_21_Template, 7, 8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ExpirationSettingsComponent_div_0_div_22_Template, 10, 10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "app-settings-toggle-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r41.currentConfiguration.doNotAllowLoasEnabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-placeholder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r42.currentConfiguration.doNotAllowLoas = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ExpirationSettingsComponent_div_0_mat_option_30_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-settings-toggle-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r43.currentConfiguration.doNotExtendLoasEnabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-placeholder");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](36, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.currentConfiguration.doNotExtendLoas = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, ExpirationSettingsComponent_div_0_mat_option_38_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "app-settings-toggle-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.currentConfiguration.gracePeriodEnabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](40, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_input_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.currentConfiguration.gracePeriod = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](48, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_49_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.currentConfiguration.gracePeriodUnit = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ExpirationSettingsComponent_div_0_mat_option_50_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "app-settings-toggle-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExpirationSettingsComponent_div_0_Template_app_settings_toggle_item_modelChange_51_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.currentConfiguration.specialLoaPeriodEnabled = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-select", 8, 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExpirationSettingsComponent_div_0_Template_mat_select_ngModelChange_59_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.currentConfiguration.specialLoa = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](61, ExpirationSettingsComponent_div_0_mat_option_61_Template, 2, 2, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, ExpirationSettingsComponent_div_0_div_62_Template, 16, 13, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExpirationSettingsComponent_div_0_Template_button_click_64_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.saveChanges();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](66, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("unselected-setting", !_r1.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 37, "VO_MANAGEMENT.SETTINGS.EXPIRATION.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.enabled);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", _r1.checked ? "open" : "closed");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 39, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.periodType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 41, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_STATIC"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 43, "VO_MANAGEMENT.SETTINGS.EXPIRATION.PERIOD_TYPE_DYNAMIC"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r2.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r3.checked);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.currentConfiguration.doNotAllowLoasEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 45, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 47, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_ALLOW_LOA_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.doNotAllowLoas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.LOAS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.currentConfiguration.doNotExtendLoasEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 49, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](36, 51, "VO_MANAGEMENT.SETTINGS.EXPIRATION.DONT_EXTEND_LOA_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.doNotExtendLoas);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.LOAS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.currentConfiguration.gracePeriodEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](40, 53, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_PERIOD_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("pattern", ctx_r0.dynamicAmountPattern);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 55, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_VALUE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.gracePeriod);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](48, 57, "VO_MANAGEMENT.SETTINGS.EXPIRATION.GRACE_AMOUNT_TYPE"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.gracePeriodUnit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.amountOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.currentConfiguration.specialLoaPeriodEnabled)("title", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 59, "VO_MANAGEMENT.SETTINGS.EXPIRATION.LOA_PERIOD_LABEL"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 61, "VO_MANAGEMENT.SETTINGS.EXPIRATION.SPECIAL_LOA_SELECT"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.currentConfiguration.specialLoa);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.LOAS);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.currentConfiguration.specialLoa !== null);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.areChangesMade());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](66, 63, "VO_MANAGEMENT.SETTINGS.EXPIRATION.SAVE"), " ");
      }
    }

    var ExpirationAttrValue = function ExpirationAttrValue() {
      _classCallCheck(this, ExpirationAttrValue);
    };

    var ExpirationSettingsComponent = /*#__PURE__*/function () {
      function ExpirationSettingsComponent() {
        _classCallCheck(this, ExpirationSettingsComponent);

        this.saveAttribute = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.LOAS = [0, 1, 2];
        this.datePattern = '^(3[01]|[12][0-9]|0?[1-9])\\.(1[012]|0?[1-9])\\.$';
        this.dynamicAmountPattern = '^[1-9]+$'; // TODO translation

        this.amountOptions = [{
          value: 'd',
          text: 'Days'
        }, {
          value: 'm',
          text: 'Months'
        }, {
          value: 'y',
          text: 'Years'
        }];
      }

      _createClass(ExpirationSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var loaPeriods = new Map();
          this.LOAS.forEach(function (loa) {
            return loaPeriods.set(loa, '');
          });
          this.initialConfiguration = this.unParseAttrValue(this.expirationAttribute.value);
          this.currentConfiguration = this.unParseAttrValue(this.expirationAttribute.value);
        }
      }, {
        key: "saveChanges",
        value: function saveChanges() {
          this.saveAttribute.emit(this.parseExpirationRulesAttribute());
        }
      }, {
        key: "areChangesMade",
        value: function areChangesMade() {
          var currentValue = this.parseAttributeValueFromConfig(this.currentConfiguration);
          var initValue = this.parseAttributeValueFromConfig(this.initialConfiguration);

          if (initValue === null) {
            return currentValue !== null;
          }

          if (currentValue === null) {
            return true;
          }

          return currentValue.period !== initValue.period || currentValue.gracePeriod !== initValue.gracePeriod || currentValue.doNotExtendLoa !== initValue.doNotExtendLoa || currentValue.doNotAllowLoa !== initValue.doNotAllowLoa || currentValue.periodLoa !== initValue.periodLoa;
        }
      }, {
        key: "parseExpirationRulesAttribute",
        value: function parseExpirationRulesAttribute() {
          this.expirationAttribute.value = this.parseAttributeValueFromConfig(this.currentConfiguration);
          return this.expirationAttribute;
        }
      }, {
        key: "parsePeriod",
        value: function parsePeriod(config) {
          switch (config.periodType) {
            case 'dynamic':
              return this.parseDynamicPeriod(config);

            case 'static':
              return this.parseStaticPeriod(config);

            default: // TODO show error

          }
        }
      }, {
        key: "createInitConfiguration",
        value: function createInitConfiguration() {
          var loaPeriods = new Map();
          this.LOAS.forEach(function (loa) {
            return loaPeriods.set(loa, '');
          });
          return {
            enabled: false,
            periodType: null,
            periodStatic: '',
            periodDynamic: '',
            periodDynamicUnit: 'm',
            doNotAllowLoas: [],
            doNotAllowLoasEnabled: false,
            doNotExtendLoas: [],
            doNotExtendLoasEnabled: false,
            gracePeriodEnabled: false,
            gracePeriod: null,
            gracePeriodUnit: null,
            specialLoaPeriodEnabled: false,
            specialLoaPeriod: '',
            specialLoa: null,
            specialLoaPeriodType: null,
            specialLoaPeriodDynamic: '',
            specialLoaPeriodDynamicUnit: 'm',
            specialLoaPeriodStatic: '',
            specialLoaPeriodExtendExpiredMembers: false
          };
        }
      }, {
        key: "unParseAttrValue",
        value: function unParseAttrValue(value) {
          var config = this.createInitConfiguration();

          if (value == null) {
            return config;
          }

          if (value.period !== undefined && value.period.length > 0) {
            config = this.setPeriodValues(value, config);
          }

          if (value.doNotAllowLoa !== undefined && value.doNotAllowLoa.length > 0) {
            config = this.setDoNotAllowLoasValues(value, config);
          }

          if (value.doNotExtendLoa !== undefined && value.doNotExtendLoa.length > 0) {
            config = this.setDoNotExtendLoasValues(value, config);
          }

          if (value.gracePeriod !== undefined && value.gracePeriod.length > 0) {
            config = this.setGracePeriodValues(value, config);
          }

          if (value.periodLoa !== undefined && value.periodLoa.length > 0) {
            config = this.setSpecialLoaPeriodValues(value, config);
          }

          return config;
        }
      }, {
        key: "setPeriodValues",
        value: function setPeriodValues(value, config) {
          config.enabled = true;

          if (value.period.startsWith('+')) {
            config.periodType = 'dynamic';
            var unit = value.period.charAt(value.period.length - 1);
            config.periodDynamic = value.period.substring(1, value.period.length - 1);
            config.periodDynamicUnit = unit;
          } else {
            config.periodType = 'static';
            config.periodStatic = value.period;
          }

          return config;
        }
      }, {
        key: "setDoNotAllowLoasValues",
        value: function setDoNotAllowLoasValues(value, config) {
          var loas = [];
          value.doNotAllowLoa.split(',').forEach(function (l) {
            return loas.push(parseInt(l.trim(), 10));
          });
          config.doNotAllowLoas = loas;

          if (loas.length > 0) {
            config.doNotAllowLoasEnabled = true;
          }

          return config;
        }
      }, {
        key: "setDoNotExtendLoasValues",
        value: function setDoNotExtendLoasValues(value, config) {
          var loas = [];
          value.doNotExtendLoa.split(',').forEach(function (l) {
            return loas.push(parseInt(l.trim(), 10));
          });
          config.doNotExtendLoas = loas;

          if (loas.length > 0) {
            config.doNotExtendLoasEnabled = true;
          }

          return config;
        }
      }, {
        key: "setGracePeriodValues",
        value: function setGracePeriodValues(value, config) {
          config.gracePeriodEnabled = true;
          var unit = value.gracePeriod.charAt(value.gracePeriod.length - 1);
          config.gracePeriod = value.gracePeriod.substring(0, value.gracePeriod.length - 1);
          config.gracePeriodUnit = unit;
          return config;
        }
      }, {
        key: "setSpecialLoaPeriodValues",
        value: function setSpecialLoaPeriodValues(value, config) {
          config.specialLoa = parseInt(value.periodLoa.substring(0, value.periodLoa.indexOf('|')), 10);
          config.specialLoaPeriodEnabled = true;
          var specialPeriodValue = value.periodLoa.substring(value.periodLoa.indexOf('|') + 1, value.periodLoa.length);

          if (specialPeriodValue.startsWith('+')) {
            if (specialPeriodValue.endsWith('.')) {
              config.specialLoaPeriodExtendExpiredMembers = true;
              specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);
            }

            config.specialLoaPeriodType = 'dynamic';
            var unit = specialPeriodValue.charAt(specialPeriodValue.length - 1);
            config.specialLoaPeriodDynamic = specialPeriodValue.substring(1, specialPeriodValue.length - 1);
            config.specialLoaPeriodDynamicUnit = unit;
          } else {
            if (specialPeriodValue.endsWith('..')) {
              config.specialLoaPeriodExtendExpiredMembers = true;
              specialPeriodValue = specialPeriodValue.substring(0, specialPeriodValue.length - 1);
            }

            config.specialLoaPeriodType = 'static';
            config.specialLoaPeriodStatic = specialPeriodValue;
          }

          return config;
        }
      }, {
        key: "parseDynamicPeriod",
        value: function parseDynamicPeriod(config) {
          return '+' + config.periodDynamic + config.periodDynamicUnit;
        }
      }, {
        key: "parseStaticPeriod",
        value: function parseStaticPeriod(config) {
          return config.periodStatic;
        }
      }, {
        key: "parseDontAllowLoas",
        value: function parseDontAllowLoas(config) {
          if (!config.doNotAllowLoasEnabled) {
            return null;
          }

          var dontAllowLoas = '';
          config.doNotAllowLoas.forEach(function (loa) {
            return dontAllowLoas += loa + ',';
          });

          if (dontAllowLoas.length > 0) {
            dontAllowLoas = dontAllowLoas.substring(0, dontAllowLoas.length - 1);
          }

          return dontAllowLoas.length > 0 ? dontAllowLoas : null;
        }
      }, {
        key: "parseDontExtendLoas",
        value: function parseDontExtendLoas(config) {
          if (!config.doNotExtendLoasEnabled) {
            return null;
          }

          var dontExtendLoas = '';
          config.doNotExtendLoas.forEach(function (loa) {
            return dontExtendLoas += loa + ',';
          });

          if (dontExtendLoas.length > 0) {
            dontExtendLoas = dontExtendLoas.substring(0, dontExtendLoas.length - 1);
          }

          return dontExtendLoas.length > 0 ? dontExtendLoas : null;
        }
      }, {
        key: "parseGracePeriod",
        value: function parseGracePeriod(config) {
          if (!config.gracePeriodEnabled) {
            return null;
          }

          return config.gracePeriod + config.gracePeriodUnit;
        }
      }, {
        key: "parseSpecialLoaPeriod",
        value: function parseSpecialLoaPeriod(config) {
          if (!config.specialLoaPeriodEnabled) {
            return null;
          }

          var period = config.specialLoa + '|';

          switch (config.specialLoaPeriodType) {
            case 'static':
              period += this.parseSpecialLoaPeriodStatic(config);
              break;

            case 'dynamic':
              period += this.parseSpecialLoaPeriodDynamic(config);
              break;

            default: // TODO show error

          }

          if (period != null && config.specialLoaPeriodExtendExpiredMembers) {
            period += '.';
          }

          return period;
        }
      }, {
        key: "parseSpecialLoaPeriodStatic",
        value: function parseSpecialLoaPeriodStatic(config) {
          return config.specialLoaPeriodStatic;
        }
      }, {
        key: "parseSpecialLoaPeriodDynamic",
        value: function parseSpecialLoaPeriodDynamic(config) {
          return '+' + config.specialLoaPeriodDynamic + config.specialLoaPeriodDynamicUnit;
        }
      }, {
        key: "parseAttributeValueFromConfig",
        value: function parseAttributeValueFromConfig(config) {
          if (!config.enabled) {
            return null;
          }

          var period = this.parsePeriod(config);
          var dontAllowLoas = this.parseDontAllowLoas(config);
          var dontExtendLoad = this.parseDontExtendLoas(config);
          var gracePeriod = this.parseGracePeriod(config);
          var specialLoaPeriod = this.parseSpecialLoaPeriod(config);
          var value = {
            period: period
          };

          if (dontExtendLoad !== null) {
            value.doNotExtendLoa = dontExtendLoad;
          }

          if (dontAllowLoas !== null) {
            value.doNotAllowLoa = dontAllowLoas;
          }

          if (gracePeriod !== null) {
            value.gracePeriod = gracePeriod;
          }

          if (specialLoaPeriod !== null) {
            value.periodLoa = specialLoaPeriod;
          }

          return value;
        }
      }]);

      return ExpirationSettingsComponent;
    }();

    ExpirationSettingsComponent.ɵfac = function ExpirationSettingsComponent_Factory(t) {
      return new (t || ExpirationSettingsComponent)();
    };

    ExpirationSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExpirationSettingsComponent,
      selectors: [["app-expiration-settings"]],
      inputs: {
        expirationAttribute: "expirationAttribute"
      },
      outputs: {
        saveAttribute: "saveAttribute"
      },
      decls: 1,
      vars: 1,
      consts: [["class", "card settings-card col-12 col-md-12 col-xl-6", 4, "ngIf"], [1, "card", "settings-card", "col-12", "col-md-12", "col-xl-6"], [1, "d-flex", "flex-row", "align-items-baseline", "justify-content-between"], [1, "settings-header", 3, "click"], ["color", "primary", 1, "ml-4", 3, "ngModel", "ngModelChange"], ["mainToggle", ""], [1, "setting-item", "pt-2"], [1, "ml-1"], [3, "ngModel", "ngModelChange"], ["color", "primary", "value", "static", 1, "mr-3"], ["staticPeriod", ""], ["color", "primary", "value", "dynamic"], ["dynamicPeriod", ""], ["class", "form-container", 4, "ngIf"], ["class", "d-flex flex-row", 4, "ngIf"], [3, "model", "title", "modelChange"], ["multiple", "", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "flex-row"], [1, "mr-2", "amount-field"], ["matInput", "", 3, "pattern", "ngModel", "placeholder", "ngModelChange"], ["specialLoaSelect", ""], ["class", "mt-2", 4, "ngIf"], [1, "w-100", "d-flex", "mt-3", "mb-3"], ["mat-flat-button", "", "color", "primary", 1, "ml-auto", 3, "disabled", "click"], [1, "form-container"], [1, "date-field"], [3, "value"], [1, "mt-2"], ["loaStaticRadioButton", ""], ["loaDynamicRadioButton", ""], ["color", "primary", 3, "ngModel", "ngModelChange"]],
      template: function ExpirationSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExpirationSettingsComponent_div_0_Template, 67, 65, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentConfiguration);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioButton"], _shared_components_settings_toggle_item_settings_toggle_item_component__WEBPACK_IMPORTED_MODULE_6__["SettingsToggleItemComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatPlaceholder"], _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatHint"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"]],
      styles: [".period-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin-top: 1.5rem;\n}\n\n.amount-field[_ngcontent-%COMP%] {\n  width: 80px;\n}\n\n.date-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.settings-header[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n  font-size: 1.25rem;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.settings-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.5rem 0.5rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvY29tcG9uZW50cy9leHBpcmF0aW9uLXNldHRpbmdzL2V4cGlyYXRpb24tc2V0dGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FDQUY7O0FER0E7RUFDRSxvQ0FBQTtBQ0FGIiwiZmlsZSI6ImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvZXhwaXJhdGlvbi1zZXR0aW5ncy9leHBpcmF0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmlvZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAxLjVyZW07XG59XG5cbi5hbW91bnQtZmllbGQge1xuICB3aWR0aDogODBweDtcbn1cblxuLmRhdGUtZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNldHRpbmdzLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5zZXR0aW5ncy1jYXJkIHtcbiAgcGFkZGluZzogLjVyZW0gMS41cmVtIC41cmVtIDEuNXJlbTtcbn1cbiIsIi5wZXJpb2QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xufVxuXG4uYW1vdW50LWZpZWxkIHtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbi5kYXRlLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZXR0aW5ncy1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAwLjc1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnNldHRpbmdzLWNhcmQge1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtIDAuNXJlbSAxLjVyZW07XG59Il19 */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpirationSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-expiration-settings',
          templateUrl: './expiration-settings.component.html',
          styleUrls: ['./expiration-settings.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]]
        }]
      }], function () {
        return [];
      }, {
        expirationAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        saveAttribute: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/vos/components/notification-list/notification-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/vos/components/notification-list/notification-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: NotificationListComponent */

  /***/
  function srcAppVosComponentsNotificationListNotificationListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotificationListComponent", function () {
      return NotificationListComponent;
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


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/sort */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/table */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */
    "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NotificationListComponent_th_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotificationListComponent_th_4_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return $event ? ctx_r12.masterToggle() : null;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r0.checkboxLabel())("checked", ctx_r0.selection.hasValue() && ctx_r0.isAllSelected())("indeterminate", ctx_r0.selection.hasValue() && !ctx_r0.isAllSelected());
      }
    }

    function NotificationListComponent_td_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotificationListComponent_td_5_Template_mat_checkbox_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var row_r14 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return $event ? ctx_r15.toggle(row_r14) : null;
        })("click", function NotificationListComponent_td_5_Template_mat_checkbox_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var row_r14 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("aria-label", ctx_r1.checkboxLabel(row_r14))("checked", ctx_r1.selection.isSelected(row_r14));
      }
    }

    function NotificationListComponent_th_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_ID"), " ");
      }
    }

    function NotificationListComponent_td_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationMail_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](applicationMail_r18.id);
      }
    }

    function NotificationListComponent_th_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_EMAIL_TYPE"), " ");
      }
    }

    function NotificationListComponent_td_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationMail_r19 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.getMailType(applicationMail_r19));
      }
    }

    function NotificationListComponent_th_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE"), " ");
      }
    }

    function NotificationListComponent_td_14_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_right_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_INITIAL"), " ");
      }
    }

    function NotificationListComponent_td_14_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cached");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_APPLICATION_TYPE_EXTENSION"), " ");
      }
    }

    function NotificationListComponent_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationListComponent_td_14_div_1_Template, 5, 3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NotificationListComponent_td_14_ng_template_2_Template, 4, 3, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationMail_r20 = ctx.$implicit;

        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", applicationMail_r20.appType == "INITIAL")("ngIfElse", _r22);
      }
    }

    function NotificationListComponent_th_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TABLE_SENDING_ENABLED"), " ");
      }
    }

    function NotificationListComponent_td_17_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NotificationListComponent_td_17_Template_mat_checkbox_change_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var applicationMail_r24 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r25.changeSending(applicationMail_r24);
        })("click", function NotificationListComponent_td_17_Template_mat_checkbox_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var applicationMail_r24 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", applicationMail_r24.send);
      }
    }

    function NotificationListComponent_tr_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
      }
    }

    function NotificationListComponent_tr_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationListComponent_tr_19_Template_tr_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var applicationMail_r28 = ctx.$implicit;

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.openApplicationMailDetail(applicationMail_r28);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var NotificationListComponent = /*#__PURE__*/function () {
      function NotificationListComponent(registrarService, translate, notificator, dialog) {
        _classCallCheck(this, NotificationListComponent);

        this.registrarService = registrarService;
        this.translate = translate;
        this.notificator = notificator;
        this.dialog = dialog;
        this.displayedColumns = ['select', 'id', 'mailType', 'appType', 'send'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.pageSize = 10;
        this.selectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageSizeOptions = _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["TABLE_ITEMS_COUNT_OPTIONS"];
      }

      _createClass(NotificationListComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.applicationMails);
          this.setDataSource();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
        }
      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this7 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this7.selection.select(row);
          });
          this.selectionChange.emit(this.selection);
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select', " row ").concat(row.id + 1);
        }
      }, {
        key: "changeSending",
        value: function changeSending(applicationMail) {
          if (applicationMail.send) {
            this.registrarService.setSendingEnabled({
              mails: [applicationMail],
              enabled: false
            }).subscribe(function () {
              applicationMail.send = false;
            });
          } else {
            this.registrarService.setSendingEnabled({
              mails: [applicationMail],
              enabled: true
            }).subscribe(function () {
              applicationMail.send = true;
            });
          }
        }
      }, {
        key: "openApplicationMailDetail",
        value: function openApplicationMailDetail(applicationMail) {
          var _this8 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["getDefaultDialogConfig"])();
          config.width = '1400px';
          config.height = '700px';
          config.data = {
            voId: this.voId,
            groupId: this.groupId,
            createMailNotification: false,
            applicationMail: applicationMail
          };
          var dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddEditNotificationDialogComponent"], config);
          dialog.afterClosed().subscribe(function (success) {
            if (success) {
              _this8.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.EDIT_SUCCESS').subscribe(function (text) {
                _this8.notificator.showSuccess(text);
              });

              _this8.selection.clear();

              _this8.selectionChange.emit(_this8.selection);

              _this8.update();
            }
          });
        }
      }, {
        key: "getMailType",
        value: function getMailType(applicationMail) {
          var value = ''; // @ts-ignore

          if (applicationMail.mailType === undefined || applicationMail.mailType === null || applicationMail.mailType === '') {
            value = '';
          } else {
            this.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.MAIL_TYPE_' + applicationMail.mailType).subscribe(function (text) {
              value = text;
            });
          }

          return value;
        }
      }, {
        key: "update",
        value: function update() {
          var _this9 = this;

          if (this.groupId) {
            this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(function (mails) {
              _this9.updateTable(mails);
            });
          } else {
            this.registrarService.getApplicationMailsForVo(this.voId).subscribe(function (mails) {
              _this9.updateTable(mails);
            });
          }
        }
      }, {
        key: "toggle",
        value: function toggle(row) {
          this.selection.toggle(row);
          this.selectionChange.emit(this.selection);
        }
      }, {
        key: "updateTable",
        value: function updateTable(mails) {
          this.applicationMails = mails;
          this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.applicationMails);
          this.setDataSource();
        }
      }, {
        key: "setDataSource",
        value: function setDataSource() {
          if (!!this.dataSource) {
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
          }
        }
      }, {
        key: "matSort",
        set: function set(ms) {
          this.sort = ms;
          this.setDataSource();
        }
      }]);

      return NotificationListComponent;
    }();

    NotificationListComponent.ɵfac = function NotificationListComponent_Factory(t) {
      return new (t || NotificationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    NotificationListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotificationListComponent,
      selectors: [["app-notification-list"]],
      viewQuery: function NotificationListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      inputs: {
        applicationMails: "applicationMails",
        voId: "voId",
        groupId: "groupId",
        selection: "selection",
        pageSize: "pageSize"
      },
      outputs: {
        selectionChange: "selectionChange",
        page: "page"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 21,
      vars: 6,
      consts: [[1, "card-body"], [1, "overflow-auto"], ["mat-table", "", "matSort", "", "matSortDirection", "asc", "matSortDisableClear", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "static-column-size", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "id"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "mailType"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "appType"], ["matColumnDef", "send"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "dark-hover-list-item", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [3, "length", "pageSize", "pageSizeOptions", "page"], ["mat-header-cell", ""], ["color", "primary", 3, "aria-label", "checked", "indeterminate", "change"], ["mat-cell", "", 1, "static-column-size"], ["color", "primary", 3, "aria-label", "checked", "change", "click"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [4, "ngIf", "ngIfElse"], ["extension", ""], ["matTooltip", "Initial", "matTooltipPosition", "above"], ["matTooltip", "Extension", "matTooltipPosition", "above"], [3, "ngModel", "change", "click"], ["mat-header-row", ""], ["mat-row", "", 1, "dark-hover-list-item", 3, "click"]],
      template: function NotificationListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NotificationListComponent_th_4_Template, 2, 3, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NotificationListComponent_td_5_Template, 2, 2, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NotificationListComponent_th_7_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NotificationListComponent_td_8_Template, 2, 1, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NotificationListComponent_th_10_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NotificationListComponent_td_11_Template, 2, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NotificationListComponent_th_13_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NotificationListComponent_td_14_Template, 4, 2, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NotificationListComponent_th_16_Template, 3, 3, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NotificationListComponent_td_17_Template, 3, 1, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, NotificationListComponent_tr_18_Template, 1, 0, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, NotificationListComponent_tr_19_Template, 1, 0, "tr", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function NotificationListComponent_Template_mat_paginator_page_20_listener($event) {
            return ctx.page.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.applicationMails.length)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
        }
      },
      directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NgModel"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["tr[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1saXN0L25vdGlmaWNhdGlvbi1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWxpc3Qvbm90aWZpY2F0aW9uLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0cntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIiwidHIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-notification-list',
          templateUrl: './notification-list.component.html',
          styleUrls: ['./notification-list.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_9__["RegistrarManagerService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_8__["NotificatorService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        applicationMails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        voId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        groupId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        matSort: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], {
            "static": true
          }]
        }],
        paginator: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-detail-page.component.ts ***!
    \****************************************************************************/

  /*! exports provided: GroupDetailPageComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupDetailPageComponent", function () {
      return GroupDetailPageComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
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
      return ["/organizations", a1, "groups", a3];
    };

    function GroupDetailPageComponent_div_0_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "GROUP_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.vo.id, ctx_r0.group.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.group.shortName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r0.group.id, " ");
      }
    }

    var GroupDetailPageComponent = /*#__PURE__*/function () {
      function GroupDetailPageComponent(sideMenuService, voService, route, sideMenuItemService, groupService) {
        _classCallCheck(this, GroupDetailPageComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.sideMenuItemService = sideMenuItemService;
        this.groupService = groupService;
      }

      _createClass(GroupDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.params.subscribe(function (params) {
            var voId = params['voId'];
            var groupId = params['groupId'];

            _this10.voService.getVoById(voId).subscribe(function (vo) {
              _this10.vo = vo;

              _this10.groupService.getGroupById(groupId).subscribe(function (group) {
                _this10.group = group;

                var voSideMenuItem = _this10.sideMenuItemService.parseVo(vo);

                var groupSideMenuItem = _this10.sideMenuItemService.parseGroup(group);

                _this10.sideMenuService.setAccessMenuItems([voSideMenuItem, groupSideMenuItem]);
              });
            });
          });
        }
      }]);

      return GroupDetailPageComponent;
    }();

    GroupDetailPageComponent.ɵfac = function GroupDetailPageComponent_Factory(t) {
      return new (t || GroupDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["GroupsManagerService"]));
    };

    GroupDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupDetailPageComponent,
      selectors: [["app-group-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 group-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "group-theme"], [1, "page-title"], [1, "group-link", 3, "routerLink"], [1, "text-muted"]],
      template: function GroupDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupDetailPageComponent_div_0_Template, 10, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined && ctx.group !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_7__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_8__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1kZXRhaWwtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-detail-page',
          templateUrl: './group-detail-page.component.html',
          styleUrls: ['./group-detail-page.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["GroupsManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: GroupOverviewComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupOverviewGroupOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupOverviewComponent", function () {
      return GroupOverviewComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = function _c0(a1, a3) {
      return ["/organizations", a1, "groups", a3];
    };

    function GroupOverviewComponent_p_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, "GROUP_DETAIL.SUBGROUP_INFO"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r0.parentGroup.voId, ctx_r0.parentGroup.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.parentGroup.name, "\n");
      }
    }

    var GroupOverviewComponent = /*#__PURE__*/function () {
      function GroupOverviewComponent(route, groupService) {
        _classCallCheck(this, GroupOverviewComponent);

        this.route = route;
        this.groupService = groupService;
        this.navItems = [];
        this.parentGroup = null;
      }

      _createClass(GroupOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.route.params.subscribe(function (params) {
            _this11.groupId = params['groupId'];

            _this11.groupService.getGroupById(_this11.groupId).subscribe(function (group) {
              _this11.group = group;

              if (_this11.group.parentGroupId !== null) {
                _this11.loadParentGroupData();
              } else {
                _this11.parentGroup = null;

                _this11.initNavItems();
              }
            });
          });
        }
      }, {
        key: "loadParentGroupData",
        value: function loadParentGroupData() {
          var _this12 = this;

          this.groupService.getGroupById(this.group.parentGroupId).subscribe(function (parentGroup) {
            _this12.parentGroup = parentGroup;

            _this12.initNavItems();
          });
        }
      }, {
        key: "initNavItems",
        value: function initNavItems() {
          this.navItems = [{
            cssIcon: 'perun-user',
            url: "/organizations/".concat(this.group.voId, "/groups/").concat(this.groupId, "/members"),
            label: 'MENU_ITEMS.GROUP.MEMBERS',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/organizations/".concat(this.group.voId, "/groups/").concat(this.groupId, "/subgroups"),
            label: 'MENU_ITEMS.GROUP.SUBGROUPS',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-manage-facility',
            url: "/organizations/".concat(this.group.voId, "/groups/").concat(this.groupId, "/resources"),
            label: 'MENU_ITEMS.GROUP.RESOURCES',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-applications',
            url: "/organizations/".concat(this.group.voId, "/groups/").concat(this.groupId, "/applications"),
            label: 'MENU_ITEMS.GROUP.APPLICATIONS',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/organizations/".concat(this.group.voId, "/groups/").concat(this.groupId, "/settings"),
            label: 'MENU_ITEMS.GROUP.SETTINGS',
            style: 'group-btn'
          }];
        }
      }]);

      return GroupOverviewComponent;
    }();

    GroupOverviewComponent.ɵfac = function GroupOverviewComponent_Factory(t) {
      return new (t || GroupOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]));
    };

    GroupOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupOverviewComponent,
      selectors: [["app-group-overview"]],
      hostVars: 2,
      hostBindings: function GroupOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 3,
      consts: [[4, "ngIf"], [3, "items", "size"], [1, "group-link", 3, "routerLink"]],
      template: function GroupOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupOverviewComponent_p_0_Template, 5, 8, "p", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-menu-buttons-field", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.parentGroup !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1vdmVydmlldy9ncm91cC1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-overview',
          templateUrl: './group-overview.component.html',
          styleUrls: ['./group-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: GroupSettingsAttributesComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsAttributesGroupSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsAttributesComponent", function () {
      return GroupSettingsAttributesComponent;
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


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
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

    function GroupSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function GroupSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function GroupSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) {
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

    var GroupSettingsAttributesComponent = /*#__PURE__*/function () {
      function GroupSettingsAttributesComponent(route, attributesManager, notificator, dialog, translate, tableConfigService) {
        var _this13 = this;

        _classCallCheck(this, GroupSettingsAttributesComponent);

        this.route = route;
        this.attributesManager = attributesManager;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.tableConfigService = tableConfigService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](true, []);
        this.attributes = [];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this13.saveSuccessMessage = value;
        });
        this.translate.get('GROUP_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this13.deleteSuccessMessage = value;
        });
      }

      _createClass(GroupSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this14.groupId = params['groupId'];

            _this14.refreshTable();
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this15 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.groupId,
            entity: 'group',
            notEmptyAttributes: this.attributes,
            style: 'group-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this15.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this16 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.groupId,
            entity: 'group',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_3__["EditAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this16.refreshTable();
            }
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this17 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.groupId,
            entity: 'group',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (didConfirm) {
            if (didConfirm) {
              _this17.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this18 = this;

          // TODO Does not apply filter on refresh.
          this.loading = true;
          this.attributesManager.getGroupAttributes(this.groupId).subscribe(function (attributes) {
            _this18.attributes = attributes;

            _this18.selection.clear();

            _this18.loading = false;
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

      return GroupSettingsAttributesComponent;
    }();

    GroupSettingsAttributesComponent.ɵfac = function GroupSettingsAttributesComponent_Factory(t) {
      return new (t || GroupSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]));
    };

    GroupSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsAttributesComponent,
      selectors: [["app-group-settings-attributes"]],
      viewQuery: function GroupSettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function GroupSettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]],
      template: function GroupSettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function GroupSettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsAttributesComponent_Template_button_click_11_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function GroupSettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "GROUP_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1hdHRyaWJ1dGVzL2dyb3VwLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-attributes',
          templateUrl: './group-settings-attributes.component.html',
          styleUrls: ['./group-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: GroupSettingsExpirationComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsExpirationGroupSettingsExpirationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsExpirationComponent", function () {
      return GroupSettingsExpirationComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/urns */
    "../../libs/perun/urns/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../components/expiration-settings/expiration-settings.component */
    "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");

    function GroupSettingsExpirationComponent_app_expiration_settings_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-expiration-settings", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveAttribute", function GroupSettingsExpirationComponent_app_expiration_settings_0_Template_app_expiration_settings_saveAttribute_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.saveExpirationAttribute($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expirationAttribute", ctx_r0.expirationAttribute);
      }
    }

    var GroupSettingsExpirationComponent = /*#__PURE__*/function () {
      function GroupSettingsExpirationComponent(attributesManager, route, translate, notificator, apiRequest) {
        var _this19 = this;

        _classCallCheck(this, GroupSettingsExpirationComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.translate = translate;
        this.notificator = notificator;
        this.apiRequest = apiRequest;
        this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.SUCCESS_MESSAGE').subscribe(function (value) {
          return _this19.successMessage = value;
        });
        this.translate.get('GROUP_DETAIL.SETTINGS.EXPIRATION.ERROR_MESSAGE').subscribe(function (value) {
          return _this19.errorMessage = value;
        });
      }

      _createClass(GroupSettingsExpirationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this20.groupId = params['groupId'];

            _this20.loadSettings();
          });
        }
      }, {
        key: "loadSettings",
        value: function loadSettings() {
          var _this21 = this;

          this.attributesManager.getGroupAttributeByName(this.groupId, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__["Urns"].GROUP_DEF_EXPIRATION_RULES).subscribe(function (attr) {
            _this21.expirationAttribute = attr;
          });
        }
      }, {
        key: "saveExpirationAttribute",
        value: function saveExpirationAttribute(attribute) {
          var _this22 = this;

          // FIXME this might not work in case of some race condition (other request finishes sooner)
          this.apiRequest.dontHandleErrorForNext();
          this.attributesManager.setGroupAttribute({
            group: this.groupId,
            attribute: attribute
          }).subscribe(function () {
            _this22.loadSettings();

            _this22.notificator.showSuccess(_this22.successMessage);
          }, function (error) {
            return _this22.notificator.showRPCError(error.error, _this22.errorMessage);
          });
        }
      }]);

      return GroupSettingsExpirationComponent;
    }();

    GroupSettingsExpirationComponent.ɵfac = function GroupSettingsExpirationComponent_Factory(t) {
      return new (t || GroupSettingsExpirationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ApiRequestConfigurationService"]));
    };

    GroupSettingsExpirationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsExpirationComponent,
      selectors: [["app-group-settings-expiration"]],
      hostVars: 2,
      hostBindings: function GroupSettingsExpirationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "expirationAttribute", "saveAttribute", 4, "ngIf"], [3, "expirationAttribute", "saveAttribute"]],
      template: function GroupSettingsExpirationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSettingsExpirationComponent_app_expiration_settings_0_Template, 1, 1, "app-expiration-settings", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expirationAttribute !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_7__["ExpirationSettingsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1leHBpcmF0aW9uL2dyb3VwLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsExpirationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-expiration',
          templateUrl: './group-settings-expiration.component.html',
          styleUrls: ['./group-settings-expiration.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ApiRequestConfigurationService"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: GroupSettingsManagersComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsManagersGroupSettingsManagersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsManagersComponent", function () {
      return GroupSettingsManagersComponent;
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

    function GroupSettingsManagersComponent_app_managers_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r0.group)("complementaryObjectType", ctx_r0.type)("theme", ctx_r0.theme)("availableRoles", ctx_r0.availableRoles);
      }
    }

    var GroupSettingsManagersComponent = /*#__PURE__*/function () {
      function GroupSettingsManagersComponent(groupService, route) {
        _classCallCheck(this, GroupSettingsManagersComponent);

        this.groupService = groupService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_3__["Role"].GROUPADMIN];
        this.selected = 'user';
        this.type = 'Group';
        this.theme = 'group-theme';
      }

      _createClass(GroupSettingsManagersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.route.parent.parent.params.subscribe(function (parentParentParams) {
            var groupId = parentParentParams['groupId'];

            _this23.groupService.getGroupById(groupId).subscribe(function (group) {
              _this23.group = group;
            });
          });
        }
      }]);

      return GroupSettingsManagersComponent;
    }();

    GroupSettingsManagersComponent.ɵfac = function GroupSettingsManagersComponent_Factory(t) {
      return new (t || GroupSettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    GroupSettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsManagersComponent,
      selectors: [["app-group-settings-managers"]],
      hostVars: 2,
      hostBindings: function GroupSettingsManagersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]],
      template: function GroupSettingsManagersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_5__["ManagersPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy9ncm91cC1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-managers',
          templateUrl: './group-settings-managers.component.html',
          styleUrls: ['./group-settings-managers.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: GroupSettingsNotificationsComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsNotificationsGroupSettingsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsNotificationsComponent", function () {
      return GroupSettingsNotificationsComponent;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */
    "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */
    "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */
    "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */
    "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../components/notification-list/notification-list.component */
    "./src/app/vos/components/notification-list/notification-list.component.ts");
    /* harmony import */


    var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */
    "../../libs/ui/alerts/src/lib/alert/alert.component.ts");

    function GroupSettingsNotificationsComponent_mat_spinner_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    function GroupSettingsNotificationsComponent_div_4_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-notification-list", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function GroupSettingsNotificationsComponent_div_4_div_18_Template_app_notification_list_page_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.pageChanged($event);
        })("selectionChange", function GroupSettingsNotificationsComponent_div_4_div_18_Template_app_notification_list_selectionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.changeSelection($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("applicationMails", ctx_r3.applicationMails)("pageSize", ctx_r3.pageSize)("groupId", ctx_r3.groupId)("selection", ctx_r3.selection);
      }
    }

    function GroupSettingsNotificationsComponent_div_4_app_alert_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS"), " ");
      }
    }

    function GroupSettingsNotificationsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.add();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.remove();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r11.changeEmailFooter();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_4_Template_button_click_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.copy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "file_copy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GroupSettingsNotificationsComponent_div_4_div_18_Template, 2, 4, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GroupSettingsNotificationsComponent_div_4_app_alert_19_Template, 3, 3, "app-alert", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.ADD"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.selection.selected.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 11, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](17, 13, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationMails.length !== 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.applicationMails.length === 0);
      }
    }

    function GroupSettingsNotificationsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-alert", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsNotificationsComponent_div_5_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.createEmptyApplicationForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.NO_APPLICATION_FORM"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.CREATE_APPLICATION_FORM"), " ");
      }
    }

    var GroupSettingsNotificationsComponent = /*#__PURE__*/function () {
      function GroupSettingsNotificationsComponent(route, registrarService, translate, dialog, apiRequest, tableConfigService, notificator) {
        _classCallCheck(this, GroupSettingsNotificationsComponent);

        this.route = route;
        this.registrarService = registrarService;
        this.translate = translate;
        this.dialog = dialog;
        this.apiRequest = apiRequest;
        this.tableConfigService = tableConfigService;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.noApplicationForm = false;
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TABLE_GROUP_SETTINGS_NOTIFICATIONS"];
      }

      _createClass(GroupSettingsNotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.loading = true;
          this.route.parent.parent.params.subscribe(function (params) {
            _this24.voId = params['voId'];
            _this24.groupId = params['groupId']; // FIXME this might not work in case of some race condition (other request finishes sooner)

            _this24.apiRequest.dontHandleErrorForNext();

            _this24.registrarService.getGroupApplicationForm(_this24.groupId).subscribe(function (form) {
              _this24.applicationForm = form;

              _this24.registrarService.getApplicationMailsForGroup(_this24.groupId).subscribe(function (mails) {
                _this24.applicationMails = mails;
                _this24.loading = false;
              });
            }, function (error) {
              if (error.error.name === 'FormNotExistsException') {
                _this24.noApplicationForm = true;
                _this24.loading = false;
              } else {
                _this24.notificator.showRPCError(error);
              }
            });
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this25 = this;

          var applicationMail = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["createNewApplicationMail"])();
          applicationMail.formId = this.applicationForm.id;
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '1400px';
          config.height = '700px';
          config.data = {
            voId: this.voId,
            groupId: this.groupId,
            createMailNotification: true,
            applicationMail: applicationMail,
            applicationMails: this.applicationMails
          };
          var dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_6__["AddEditNotificationDialogComponent"], config);
          dialog.afterClosed().subscribe(function (success) {
            if (success) {
              _this25.translate.get('GROUP_DETAIL.SETTINGS.NOTIFICATIONS.ADD_SUCCESS').subscribe(function (text) {
                _this25.notificator.showSuccess(text);
              });

              _this25.selection.clear();

              _this25.updateTable();
            }
          });
        }
      }, {
        key: "remove",
        value: function remove() {
          var _this26 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId,
            groupId: this.groupId,
            mails: this.selection.selected
          };
          var dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteNotificationDialogComponent"], config);
          dialog.afterClosed().subscribe(function (success) {
            if (success) {
              _this26.translate.get('GROUP_DETAIL.SETTINGS.NOTIFICATIONS.DELETE_SUCCESS').subscribe(function (text) {
                _this26.notificator.showSuccess(text);
              });

              _this26.selection.clear();

              _this26.updateTable();
            }
          });
        }
      }, {
        key: "copy",
        value: function copy() {
          var _this27 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId,
            groupId: this.groupId
          };
          var dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_8__["NotificationsCopyMailsDialogComponent"], config);
          dialog.afterClosed().subscribe(function (copyFrom) {
            if (copyFrom) {
              _this27.selection.clear();

              _this27.updateTable();
            }
          });
        }
      }, {
        key: "updateTable",
        value: function updateTable() {
          var _this28 = this;

          this.loading = true;
          this.registrarService.getApplicationMailsForGroup(this.groupId).subscribe(function (mails) {
            _this28.applicationMails = mails;
            _this28.loading = false;
          });
        }
      }, {
        key: "changeEmailFooter",
        value: function changeEmailFooter() {
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId,
            groupId: this.groupId
          };
          this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditEmailFooterDialogComponent"], config);
        }
      }, {
        key: "changeSelection",
        value: function changeSelection(selection) {
          this.selection = selection;
        }
      }, {
        key: "createEmptyApplicationForm",
        value: function createEmptyApplicationForm() {
          var _this29 = this;

          this.registrarService.createApplicationFormInGroup(this.groupId).subscribe(function () {
            _this29.noApplicationForm = false;

            _this29.ngOnInit();
          });
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return GroupSettingsNotificationsComponent;
    }();

    GroupSettingsNotificationsComponent.ɵfac = function GroupSettingsNotificationsComponent_Factory(t) {
      return new (t || GroupSettingsNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["ApiRequestConfigurationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"]));
    };

    GroupSettingsNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsNotificationsComponent,
      selectors: [["app-group-settings-notifications"]],
      hostVars: 2,
      hostBindings: function GroupSettingsNotificationsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 6,
      vars: 6,
      consts: [[1, "page-subtitle"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "w-100", "d-flex"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "disabled", "click"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["mat-stroked-button", "", 1, "ml-auto", 3, "click"], ["class", "card mt-2", 4, "ngIf"], ["color", "warn", 4, "ngIf"], [1, "card", "mt-2"], [3, "applicationMails", "pageSize", "groupId", "selection", "page", "selectionChange"], ["color", "warn"], ["mat-stroked-button", "", 3, "click"]],
      template: function GroupSettingsNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupSettingsNotificationsComponent_mat_spinner_3_Template, 1, 0, "mat-spinner", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GroupSettingsNotificationsComponent_div_4_Template, 20, 15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GroupSettingsNotificationsComponent_div_5_Template, 7, 6, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "GROUP_DETAIL.SETTINGS.NOTIFICATIONS.TITLE"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noApplicationForm && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.noApplicationForm && !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__["NotificationListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1ub3RpZmljYXRpb25zL2dyb3VwLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-notifications',
          templateUrl: './group-settings-notifications.component.html',
          styleUrls: ['./group-settings-notifications.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["ApiRequestConfigurationService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["NotificatorService"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: GroupSettingsOverviewComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsOverviewGroupSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsOverviewComponent", function () {
      return GroupSettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var GroupSettingsOverviewComponent = /*#__PURE__*/function () {
      function GroupSettingsOverviewComponent(sideMenuService, voService, groupService, route, router) {
        _classCallCheck(this, GroupSettingsOverviewComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.groupService = groupService;
        this.route = route;
        this.router = router;
        this.items = [];
      }

      _createClass(GroupSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this30 = this;

          this.route.parent.parent.params.subscribe(function (grandParentParams) {
            var voId = grandParentParams['voId'];
            var groupId = grandParentParams['groupId'];

            _this30.groupService.getGroupById(groupId).subscribe(function (group) {
              _this30.group = group;

              _this30.voService.getVoById(voId).subscribe(function (vo) {
                _this30.vo = vo;

                _this30.initItems();
              });
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/attributes"),
            label: 'MENU_ITEMS.GROUP.ATTRIBUTES',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/resourceAttributes"),
            label: 'MENU_ITEMS.GROUP.RESOURCE_ATTRIBUTES',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/expiration"),
            label: 'MENU_ITEMS.GROUP.EXPIRATION',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-manager',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/managers"),
            label: 'MENU_ITEMS.GROUP.MANAGERS',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-application-form',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/applicationForm"),
            label: 'MENU_ITEMS.GROUP.APPLICATION_FORM',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-notification',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/notifications"),
            label: 'MENU_ITEMS.GROUP.NOTIFICATIONS',
            style: 'group-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/organizations/".concat(this.vo.id, "/groups/").concat(this.group.id, "/settings/relations"),
            label: 'MENU_ITEMS.GROUP.RELATIONS',
            style: 'group-btn'
          }];
        }
      }]);

      return GroupSettingsOverviewComponent;
    }();

    GroupSettingsOverviewComponent.ɵfac = function GroupSettingsOverviewComponent_Factory(t) {
      return new (t || GroupSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    GroupSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsOverviewComponent,
      selectors: [["app-group-settings-overview"]],
      hostVars: 2,
      hostBindings: function GroupSettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function GroupSettingsOverviewComponent_Template(rf, ctx) {
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
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy9ncm91cC1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-overview',
          templateUrl: './group-settings-overview.component.html',
          styleUrls: ['./group-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["GroupsManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: GroupSettingsRelationsComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsRelationsGroupSettingsRelationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsRelationsComponent", function () {
      return GroupSettingsRelationsComponent;
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


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_create_relation_dialog_create_relation_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-relation-dialog/create-relation-dialog.component */
    "./src/app/shared/components/dialogs/create-relation-dialog/create-relation-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_remove_relation_dialog_remove_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/remove-relation-dialog/remove-relation-dialog.component */
    "./src/app/shared/components/dialogs/remove-relation-dialog/remove-relation-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
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
    /*! ../../../../../../../../../libs/perun/components/src/lib/groups-list/groups-list.component */
    "../../libs/perun/components/src/lib/groups-list/groups-list.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function GroupSettingsRelationsComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function GroupSettingsRelationsComponent_perun_web_apps_groups_list_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-groups-list", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function GroupSettingsRelationsComponent_perun_web_apps_groups_list_16_Template_perun_web_apps_groups_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("groups", ctx_r1.groups)("selection", ctx_r1.selection)("filter", ctx_r1.filterValue)("disableHeadCheckbox", true);
      }
    }

    var GroupSettingsRelationsComponent = /*#__PURE__*/function () {
      function GroupSettingsRelationsComponent(route, groupService, tableConfigService, dialog) {
        _classCallCheck(this, GroupSettingsRelationsComponent);

        this.route = route;
        this.groupService = groupService;
        this.tableConfigService = tableConfigService;
        this.dialog = dialog;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.groups = [];
        this.reverse = false;
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_7__["TABLE_GROUP_SETTINGS_RELATIONS"];
      }

      _createClass(GroupSettingsRelationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this31.groupId = params['groupId'];
            _this31.voId = params['voId'];

            _this31.refreshTable();
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this32 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_8__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            groups: this.groups,
            theme: 'group-theme',
            groupId: +this.groupId,
            voId: this.voId,
            reverse: this.reverse
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_relation_dialog_create_relation_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateRelationDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this32.refreshTable();
            }
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this33 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_8__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            groups: this.selection.selected,
            theme: 'group-theme',
            groupId: +this.groupId,
            reverse: this.reverse
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_relation_dialog_remove_relation_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveRelationDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this33.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this34 = this;

          this.loading = true;
          this.groupService.getGroupUnions(this.groupId, this.reverse).subscribe(function (groups) {
            _this34.groups = groups;

            _this34.selection.clear();

            _this34.loading = false;
          }, function () {
            return _this34.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "showReverseUnions",
        value: function showReverseUnions() {
          this.reverse = !this.reverse;
          this.refreshTable();
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return GroupSettingsRelationsComponent;
    }();

    GroupSettingsRelationsComponent.ɵfac = function GroupSettingsRelationsComponent_Factory(t) {
      return new (t || GroupSettingsRelationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_7__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    GroupSettingsRelationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsRelationsComponent,
      selectors: [["app-group-settings-relations"]],
      hostVars: 2,
      hostBindings: function GroupSettingsRelationsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 16,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], [3, "change"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "groups", "selection", "filter", "disableHeadCheckbox", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "groups", "selection", "filter", "disableHeadCheckbox", "page"]],
      template: function GroupSettingsRelationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function GroupSettingsRelationsComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsRelationsComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GroupSettingsRelationsComponent_Template_button_click_8_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function GroupSettingsRelationsComponent_Template_perun_web_apps_immediate_filter_filter_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-checkbox", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GroupSettingsRelationsComponent_Template_mat_checkbox_change_12_listener() {
            return ctx.showReverseUnions();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GroupSettingsRelationsComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GroupSettingsRelationsComponent_perun_web_apps_groups_list_16_Template, 1, 5, "perun-web-apps-groups-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 8, "GROUP_DETAIL.SETTINGS.RELATIONS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 10, "GROUP_DETAIL.SETTINGS.RELATIONS.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 12, "GROUP_DETAIL.SETTINGS.RELATIONS.DELETE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "GROUP_DETAIL.SETTINGS.RELATIONS.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 14, "GROUP_DETAIL.SETTINGS.RELATIONS.REVERSE_UNIONS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_9__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_11__["ImmediateFilterComponent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckbox"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _libs_perun_components_src_lib_groups_list_groups_list_component__WEBPACK_IMPORTED_MODULE_15__["GroupsListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1yZWxhdGlvbnMvZ3JvdXAtc2V0dGluZ3MtcmVsYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsRelationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-relations',
          templateUrl: './group-settings-relations.component.html',
          styleUrls: ['./group-settings-relations.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["GroupsManagerService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_7__["TableConfigService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
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
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component.ts":
  /*!***********************************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component.ts ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: GroupSettingsResourceAttributesComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsResourceAttributesGroupSettingsResourceAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsResourceAttributesComponent", function () {
      return GroupSettingsResourceAttributesComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/components/two-entity-attribute-page/two-entity-attribute-page.component */
    "./src/app/shared/components/two-entity-attribute-page/two-entity-attribute-page.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function GroupSettingsResourceAttributesComponent_app_two_entity_attribute_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-two-entity-attribute-page", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityValues", ctx_r0.resources)("firstEntity", "group")("firstEntityId", ctx_r0.groupId)("secondEntity", "resource");
      }
    }

    function GroupSettingsResourceAttributesComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    var GroupSettingsResourceAttributesComponent = /*#__PURE__*/function () {
      function GroupSettingsResourceAttributesComponent(route, resourcesManagerService) {
        _classCallCheck(this, GroupSettingsResourceAttributesComponent);

        this.route = route;
        this.resourcesManagerService = resourcesManagerService;
        this.resources = [];
      }

      _createClass(GroupSettingsResourceAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.loading = true;
          this.route.parent.parent.params.subscribe(function (parent) {
            _this35.groupId = parent['groupId'];

            _this35.resourcesManagerService.getAssignedResourcesWithGroup(_this35.groupId).subscribe(function (resources) {
              _this35.resources = resources;
              _this35.loading = false;
            });
          });
        }
      }]);

      return GroupSettingsResourceAttributesComponent;
    }();

    GroupSettingsResourceAttributesComponent.ɵfac = function GroupSettingsResourceAttributesComponent_Factory(t) {
      return new (t || GroupSettingsResourceAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]));
    };

    GroupSettingsResourceAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsResourceAttributesComponent,
      selectors: [["app-group-settings-resource-attributes"]],
      decls: 2,
      vars: 2,
      consts: [[3, "entityValues", "firstEntity", "firstEntityId", "secondEntity", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "entityValues", "firstEntity", "firstEntityId", "secondEntity"], [1, "ml-auto", "mr-auto"]],
      template: function GroupSettingsResourceAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GroupSettingsResourceAttributesComponent_app_two_entity_attribute_page_0_Template, 1, 4, "app-two-entity-attribute-page", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GroupSettingsResourceAttributesComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__["TwoEntityAttributePageComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy1yZXNvdXJjZS1hdHRyaWJ1dGVzL2dyb3VwLXNldHRpbmdzLXJlc291cmNlLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsResourceAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings-resource-attributes',
          templateUrl: './group-settings-resource-attributes.component.html',
          styleUrls: ['./group-settings-resource-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: GroupSettingsComponent */

  /***/
  function srcAppVosPagesGroupDetailPageGroupSettingsGroupSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupSettingsComponent", function () {
      return GroupSettingsComponent;
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

    var GroupSettingsComponent = /*#__PURE__*/function () {
      function GroupSettingsComponent() {
        _classCallCheck(this, GroupSettingsComponent);
      }

      _createClass(GroupSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GroupSettingsComponent;
    }();

    GroupSettingsComponent.ɵfac = function GroupSettingsComponent_Factory(t) {
      return new (t || GroupSettingsComponent)();
    };

    GroupSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GroupSettingsComponent,
      selectors: [["app-group-settings"]],
      hostVars: 2,
      hostBindings: function GroupSettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function GroupSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9ncm91cC1kZXRhaWwtcGFnZS9ncm91cC1zZXR0aW5ncy9ncm91cC1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-group-settings',
          templateUrl: './group-settings.component.html',
          styleUrls: ['./group-settings.component.scss'],
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
  "./src/app/vos/pages/member-detail-page/member-applications/member-applications.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-applications/member-applications.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: MemberApplicationsComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberApplicationsMemberApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberApplicationsComponent", function () {
      return MemberApplicationsComponent;
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


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../components/applications-list/applications-list.component */
    "./src/app/vos/components/applications-list/applications-list.component.ts");
    /* harmony import */


    var _components_application_list_details_application_list_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../components/application-list-details/application-list-details.component */
    "./src/app/vos/components/application-list-details/application-list-details.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function MemberApplicationsComponent_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberApplicationsComponent_button_5_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.showAllDetails = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "MEMBER_DETAIL.APPLICATIONS.SHOW_ALL_DETAILS"), " ");
      }
    }

    function MemberApplicationsComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberApplicationsComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.showAllDetails = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "MEMBER_DETAIL.APPLICATIONS.SHOW_LESS_DETAILS"), " ");
      }
    }

    function MemberApplicationsComponent_mat_spinner_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function MemberApplicationsComponent_div_9_app_applications_list_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-applications-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MemberApplicationsComponent_div_9_app_applications_list_1_Template_app_applications_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r10.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r8.pageSize)("filterValue", ctx_r8.filterValue)("applications", ctx_r8.applications)("member", ctx_r8.member)("displayedColumns", ctx_r8.displayedColumns);
      }
    }

    function MemberApplicationsComponent_div_9_app_perun_web_apps_application_list_details_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-perun-web-apps-application-list-details", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MemberApplicationsComponent_div_9_app_perun_web_apps_application_list_details_2_Template_app_perun_web_apps_application_list_details_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.detailPageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r9.detailPageSize)("filterValue", ctx_r9.filterValue)("applications", ctx_r9.applications)("member", ctx_r9.member);
      }
    }

    function MemberApplicationsComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberApplicationsComponent_div_9_app_applications_list_1_Template, 1, 5, "app-applications-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberApplicationsComponent_div_9_app_perun_web_apps_application_list_details_2_Template, 1, 4, "app-perun-web-apps-application-list-details", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.showAllDetails);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.showAllDetails);
      }
    }

    var MemberApplicationsComponent = /*#__PURE__*/function () {
      function MemberApplicationsComponent(registrarManager, memberManager, tableConfigService, route) {
        _classCallCheck(this, MemberApplicationsComponent);

        this.registrarManager = registrarManager;
        this.memberManager = memberManager;
        this.tableConfigService = tableConfigService;
        this.route = route;
        this.loading = false;
        this.applications = [];
        this.displayedColumns = ['id', 'createdAt', 'type', 'state', 'user', 'extSourceLoa', 'group', 'modifiedBy'];
        this.filterValue = '';
        this.showAllDetails = false;
        this.detailTableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TABLE_MEMBER_APPLICATIONS_DETAILED"];
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TABLE_MEMBER_APPLICATIONS_NORMAL"];
      }

      _createClass(MemberApplicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.detailPageSize = this.tableConfigService.getTablePageSize(this.detailTableId);
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.loading = true;
          this.route.parent.params.subscribe(function (parentParams) {
            _this36.memberId = parentParams['memberId'];

            _this36.memberManager.getMemberById(_this36.memberId).subscribe(function (member) {
              _this36.member = member;
            });

            _this36.registrarManager.getApplicationsForMember(_this36.memberId).subscribe(function (applications) {
              _this36.applications = applications;
              _this36.loading = false;
            });
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this37 = this;

          this.loading = true;
          this.registrarManager.getApplicationsForMember(this.memberId).subscribe(function (applications) {
            _this37.applications = applications;
            _this37.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "detailPageChanged",
        value: function detailPageChanged(event) {
          this.detailPageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.detailTableId, event.pageSize);
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return MemberApplicationsComponent;
    }();

    MemberApplicationsComponent.ɵfac = function MemberApplicationsComponent_Factory(t) {
      return new (t || MemberApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["MembersManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_2__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    MemberApplicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberApplicationsComponent,
      selectors: [["app-member-applications"]],
      decls: 10,
      vars: 8,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-stroked-button", "", 3, "click", 4, "ngIf"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [4, "ngIf"], ["mat-stroked-button", "", 3, "click"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "applications", "member", "displayedColumns", "page", 4, "ngIf"], [3, "pageSize", "filterValue", "applications", "member", "page", 4, "ngIf"], [3, "pageSize", "filterValue", "applications", "member", "displayedColumns", "page"], [3, "pageSize", "filterValue", "applications", "member", "page"]],
      template: function MemberApplicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function MemberApplicationsComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MemberApplicationsComponent_button_5_Template, 3, 3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MemberApplicationsComponent_button_6_Template, 3, 3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "perun-web-apps-immediate-filter", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function MemberApplicationsComponent_Template_perun_web_apps_immediate_filter_filter_7_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MemberApplicationsComponent_mat_spinner_8_Template, 1, 0, "mat-spinner", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MemberApplicationsComponent_div_9_Template, 3, 2, "div", 5);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, "MEMBER_DETAIL.APPLICATIONS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showAllDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAllDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "MEMBER_DETAIL.APPLICATIONS.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_4__["RefreshButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_6__["ImmediateFilterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationsListComponent"], _components_application_list_details_application_list_details_component__WEBPACK_IMPORTED_MODULE_10__["ApplicationListDetailsComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLWFwcGxpY2F0aW9ucy9tZW1iZXItYXBwbGljYXRpb25zLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberApplicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-applications',
          templateUrl: './member-applications.component.html',
          styleUrls: ['./member-applications.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["RegistrarManagerService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_1__["MembersManagerService"]
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
  "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-detail-page.component.ts ***!
    \******************************************************************************/

  /*! exports provided: MemberDetailPageComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberDetailPageComponent", function () {
      return MemberDetailPageComponent;
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


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */
    "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
    /* harmony import */


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var _c0 = function _c0(a1, a3) {
      return ["/organizations", a1, "members", a3];
    };

    function MemberDetailPageComponent_div_0_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-animated-router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 4, "MEMBER_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c0, ctx_r0.vo.id, ctx_r0.member.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.fullName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r0.member.id, " ");
      }
    }

    var MemberDetailPageComponent = /*#__PURE__*/function () {
      function MemberDetailPageComponent(sideMenuItemService, translate, sideMenuService, membersService, voService, route) {
        _classCallCheck(this, MemberDetailPageComponent);

        this.sideMenuItemService = sideMenuItemService;
        this.translate = translate;
        this.sideMenuService = sideMenuService;
        this.membersService = membersService;
        this.voService = voService;
        this.route = route;
        this.fullName = '';
      }

      _createClass(MemberDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.route.params.subscribe(function (params) {
            var voId = params['voId'];
            var memberId = params['memberId'];

            _this38.voService.getVoById(voId).subscribe(function (vo) {
              _this38.vo = vo;

              _this38.membersService.getRichMemberWithAttributes(memberId).subscribe(function (member) {
                _this38.member = member;

                var voSideMenuItem = _this38.sideMenuItemService.parseVo(_this38.vo);

                var memberSideMenuItem = _this38.sideMenuItemService.parseMember(_this38.member);

                _this38.fullName = memberSideMenuItem.label;

                _this38.sideMenuService.setAccessMenuItems([voSideMenuItem, memberSideMenuItem]);
              });
            });
          });
        }
      }]);

      return MemberDetailPageComponent;
    }();

    MemberDetailPageComponent.ɵfac = function MemberDetailPageComponent_Factory(t) {
      return new (t || MemberDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    MemberDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberDetailPageComponent,
      selectors: [["app-member-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 member-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "member-theme"], [1, "page-title", "mb-1"], [1, "member-link", 3, "routerLink"], [1, "text-muted"], [1, "mb-5"]],
      template: function MemberDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberDetailPageComponent_div_0_Template, 11, 9, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined && ctx.member !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_9__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_10__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-detail-page',
          templateUrl: './member-detail-page.component.html',
          styleUrls: ['./member-detail-page.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_5__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuItemService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["MembersService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_7__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MemberOverviewComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberOverviewMemberOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberOverviewComponent", function () {
      return MemberOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/urns */
    "../../libs/perun/urns/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    function MemberOverviewComponent_table_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Expiration:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "i");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r0.statusIconColor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.statusIcon, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.member.status, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.expiration, " ");
      }
    }

    var MemberOverviewComponent = /*#__PURE__*/function () {
      function MemberOverviewComponent(attributesManager, membersService, translate, route) {
        _classCallCheck(this, MemberOverviewComponent);

        this.attributesManager = attributesManager;
        this.membersService = membersService;
        this.translate = translate;
        this.route = route;
        this.fullName = '';
        this.statusIcon = '';
        this.statusIconColor = '';
        this.expiration = '';
        this.member = null;
        this.navItems = [];
      }

      _createClass(MemberOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this39 = this;

          this.route.parent.params.subscribe(function (parentParams) {
            var memberId = parentParams['memberId'];

            _this39.membersService.getRichMemberWithAttributes(memberId).subscribe(function (member) {
              _this39.member = member;
              _this39.fullName = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseFullName"])(_this39.member.user);
              _this39.statusIcon = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseStatusIcon"])(_this39.member);
              _this39.statusIconColor = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_5__["parseStatusColor"])(_this39.member);

              _this39.initNavItems();

              _this39.attributesManager.getMemberAttributeByName(_this39.member.id, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_4__["Urns"].MEMBER_DEF_EXPIRATION).subscribe(function (attr) {
                _this39.expiration = attr.value === null ? _this39.translate.instant('MEMBER_DETAIL.OVERVIEW.NEVER_EXPIRES') : attr.value;
              });
            });
          });
        }
      }, {
        key: "initNavItems",
        value: function initNavItems() {
          this.navItems = [{
            cssIcon: 'perun-group',
            url: "/organizations/".concat(this.member.voId, "/members/").concat(this.member.id, "/groups"),
            label: 'MENU_ITEMS.MEMBER.GROUPS',
            style: 'member-btn'
          }, {
            cssIcon: 'perun-applications',
            url: "/organizations/".concat(this.member.voId, "/members/").concat(this.member.id, "/applications"),
            label: 'MENU_ITEMS.MEMBER.APPLICATIONS',
            style: 'member-btn'
          }, {
            cssIcon: 'perun-settings2',
            url: "/organizations/".concat(this.member.voId, "/members/").concat(this.member.id, "/settings"),
            label: 'MENU_ITEMS.MEMBER.SETTINGS',
            style: 'member-btn'
          }];
        }
      }]);

      return MemberOverviewComponent;
    }();

    MemberOverviewComponent.ɵfac = function MemberOverviewComponent_Factory(t) {
      return new (t || MemberOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    MemberOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberOverviewComponent,
      selectors: [["app-member-overview"]],
      hostVars: 2,
      hostBindings: function MemberOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 5,
      vars: 6,
      consts: [[1, "page-subtitle"], ["class", "table table-bordered info-table col-3", 4, "ngIf"], [3, "items", "size"], [1, "table", "table-bordered", "info-table", "col-3"], [1, "d-flex", "border-0"], [1, "mr-1", 3, "color"]],
      template: function MemberOverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MemberOverviewComponent_table_3_Template, 16, 4, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "perun-web-apps-menu-buttons-field", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, "MEMBER_DETAIL.OVERVIEW.MEMBERSHIP"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.member !== null);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.navItems)("size", "small");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_8__["MenuButtonsFieldComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLW92ZXJ2aWV3L21lbWJlci1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-overview',
          templateUrl: './member-overview.component.html',
          styleUrls: ['./member-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
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
  "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts":
  /*!*********************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts ***!
    \*********************************************************************************************************************************/

  /*! exports provided: MemberSettingsAttributesComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberSettingsMemberSettingsAttributesMemberSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberSettingsAttributesComponent", function () {
      return MemberSettingsAttributesComponent;
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


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
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


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
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

    function MemberSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function MemberSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function MemberSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) {
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

    var MemberSettingsAttributesComponent = /*#__PURE__*/function () {
      function MemberSettingsAttributesComponent(route, attributesManager, notificator, dialog, translate, tableConfigService) {
        var _this40 = this;

        _classCallCheck(this, MemberSettingsAttributesComponent);

        this.route = route;
        this.attributesManager = attributesManager;
        this.notificator = notificator;
        this.dialog = dialog;
        this.translate = translate;
        this.tableConfigService = tableConfigService;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.attributes = [];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this40.saveSuccessMessage = value;
        });
        this.translate.get('MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this40.deleteSuccessMessage = value;
        });
      }

      _createClass(MemberSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this41 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this41.memberId = params['memberId'];

            _this41.refreshTable();
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this42 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.memberId,
            entity: 'member',
            notEmptyAttributes: this.attributes,
            style: 'member-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_7__["CreateAttributeDialogComponent"], config);
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
            entityId: this.memberId,
            entity: 'member',
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
        key: "onDelete",
        value: function onDelete() {
          var _this44 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.memberId,
            entity: 'member',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (didConfirm) {
            if (didConfirm) {
              _this44.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this45 = this;

          this.loading = true;
          this.attributesManager.getMemberAttributes(this.memberId).subscribe(function (attributes) {
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

      return MemberSettingsAttributesComponent;
    }();

    MemberSettingsAttributesComponent.ɵfac = function MemberSettingsAttributesComponent_Factory(t) {
      return new (t || MemberSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]));
    };

    MemberSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberSettingsAttributesComponent,
      selectors: [["app-member-settings-attributes"]],
      viewQuery: function MemberSettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function MemberSettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "mr-auto ml-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "mr-auto", "ml-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]],
      template: function MemberSettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function MemberSettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberSettingsAttributesComponent_Template_button_click_11_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function MemberSettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MemberSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MemberSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 9, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 11, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 13, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 15, "MEMBER_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");

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
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzL21lbWJlci1zZXR0aW5ncy1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-settings-attributes',
          templateUrl: './member-settings-attributes.component.html',
          styleUrls: ['./member-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_2__["NotificatorService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]
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
  "./src/app/vos/pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component.ts":
  /*!*********************************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component.ts ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: MemberSettingsGroupAttributesComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberSettingsMemberSettingsGroupAttributesMemberSettingsGroupAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberSettingsGroupAttributesComponent", function () {
      return MemberSettingsGroupAttributesComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/components/two-entity-attribute-page/two-entity-attribute-page.component */
    "./src/app/shared/components/two-entity-attribute-page/two-entity-attribute-page.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function MemberSettingsGroupAttributesComponent_app_two_entity_attribute_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-two-entity-attribute-page", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityValues", ctx_r0.groups)("firstEntity", "member")("firstEntityId", ctx_r0.memberId)("secondEntity", "group");
      }
    }

    function MemberSettingsGroupAttributesComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    var MemberSettingsGroupAttributesComponent = /*#__PURE__*/function () {
      function MemberSettingsGroupAttributesComponent(route, groupsManagerService) {
        _classCallCheck(this, MemberSettingsGroupAttributesComponent);

        this.route = route;
        this.groupsManagerService = groupsManagerService;
        this.groups = [];
      }

      _createClass(MemberSettingsGroupAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this46 = this;

          this.loading = true;
          this.route.parent.parent.params.subscribe(function (parent) {
            _this46.memberId = parent['memberId'];

            _this46.groupsManagerService.getMemberGroups(_this46.memberId).subscribe(function (groups) {
              _this46.groups = groups;
              _this46.loading = false;
            });
          });
        }
      }]);

      return MemberSettingsGroupAttributesComponent;
    }();

    MemberSettingsGroupAttributesComponent.ɵfac = function MemberSettingsGroupAttributesComponent_Factory(t) {
      return new (t || MemberSettingsGroupAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]));
    };

    MemberSettingsGroupAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberSettingsGroupAttributesComponent,
      selectors: [["app-member-settings-group-attributes"]],
      decls: 2,
      vars: 2,
      consts: [[3, "entityValues", "firstEntity", "firstEntityId", "secondEntity", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "entityValues", "firstEntity", "firstEntityId", "secondEntity"], [1, "ml-auto", "mr-auto"]],
      template: function MemberSettingsGroupAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberSettingsGroupAttributesComponent_app_two_entity_attribute_page_0_Template, 1, 4, "app-two-entity-attribute-page", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberSettingsGroupAttributesComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__["TwoEntityAttributePageComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1ncm91cC1hdHRyaWJ1dGVzL21lbWJlci1zZXR0aW5ncy1ncm91cC1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsGroupAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-settings-group-attributes',
          templateUrl: './member-settings-group-attributes.component.html',
          styleUrls: ['./member-settings-group-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["GroupsManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts":
  /*!*****************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts ***!
    \*****************************************************************************************************************************/

  /*! exports provided: MemberSettingsOverviewComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberSettingsMemberSettingsOverviewMemberSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberSettingsOverviewComponent", function () {
      return MemberSettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var MemberSettingsOverviewComponent = /*#__PURE__*/function () {
      function MemberSettingsOverviewComponent(sideMenuService, voService, memberService, route, router) {
        _classCallCheck(this, MemberSettingsOverviewComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.memberService = memberService;
        this.route = route;
        this.router = router;
        this.items = [];
      }

      _createClass(MemberSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this47 = this;

          this.route.parent.parent.params.subscribe(function (grandParentParams) {
            var voId = grandParentParams['voId'];
            var memberId = grandParentParams['memberId'];

            _this47.memberService.getMemberById(memberId).subscribe(function (member) {
              _this47.member = member;

              _this47.voService.getVoById(voId).subscribe(function (vo) {
                _this47.vo = vo;

                _this47.initItems();
              });
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/members/").concat(this.member.id, "/settings/attributes"),
            label: 'MENU_ITEMS.MEMBER.ATTRIBUTES',
            style: 'member-btn'
          }, {
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/members/").concat(this.member.id, "/settings/resourceAttributes"),
            label: 'MENU_ITEMS.MEMBER.RESOURCE_ATTRIBUTES',
            style: 'member-btn'
          }, {
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/members/").concat(this.member.id, "/settings/groupAttributes"),
            label: 'MENU_ITEMS.MEMBER.GROUP_ATTRIBUTES',
            style: 'member-btn'
          }];
        }
      }]);

      return MemberSettingsOverviewComponent;
    }();

    MemberSettingsOverviewComponent.ɵfac = function MemberSettingsOverviewComponent_Factory(t) {
      return new (t || MemberSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    MemberSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberSettingsOverviewComponent,
      selectors: [["app-member-settings-overview"]],
      hostVars: 2,
      hostBindings: function MemberSettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function MemberSettingsOverviewComponent_Template(rf, ctx) {
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
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_5__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1vdmVydmlldy9tZW1iZXItc2V0dGluZ3Mtb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-settings-overview',
          templateUrl: './member-settings-overview.component.html',
          styleUrls: ['./member-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_4__["VosManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["MembersService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
  "./src/app/vos/pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component.ts":
  /*!***************************************************************************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component.ts ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: MemberSettingsResourceAttributesComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberSettingsMemberSettingsResourceAttributesMemberSettingsResourceAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberSettingsResourceAttributesComponent", function () {
      return MemberSettingsResourceAttributesComponent;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/components/two-entity-attribute-page/two-entity-attribute-page.component */
    "./src/app/shared/components/two-entity-attribute-page/two-entity-attribute-page.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    function MemberSettingsResourceAttributesComponent_app_two_entity_attribute_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-two-entity-attribute-page", 2);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("entityValues", ctx_r0.resources)("firstEntity", "member")("firstEntityId", ctx_r0.memberId)("secondEntity", "resource");
      }
    }

    function MemberSettingsResourceAttributesComponent_mat_spinner_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 3);
      }
    }

    var MemberSettingsResourceAttributesComponent = /*#__PURE__*/function () {
      function MemberSettingsResourceAttributesComponent(route, resourcesManagerService) {
        _classCallCheck(this, MemberSettingsResourceAttributesComponent);

        this.route = route;
        this.resourcesManagerService = resourcesManagerService;
        this.resources = [];
      }

      _createClass(MemberSettingsResourceAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this48 = this;

          this.loading = true;
          this.route.parent.parent.params.subscribe(function (parent) {
            _this48.memberId = parent['memberId'];

            _this48.resourcesManagerService.getAllowedResources(_this48.memberId).subscribe(function (resources) {
              _this48.resources = resources;
              _this48.loading = false;
            });
          });
        }
      }]);

      return MemberSettingsResourceAttributesComponent;
    }();

    MemberSettingsResourceAttributesComponent.ɵfac = function MemberSettingsResourceAttributesComponent_Factory(t) {
      return new (t || MemberSettingsResourceAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]));
    };

    MemberSettingsResourceAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberSettingsResourceAttributesComponent,
      selectors: [["app-member-settings-resource-attributes"]],
      decls: 2,
      vars: 2,
      consts: [[3, "entityValues", "firstEntity", "firstEntityId", "secondEntity", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "entityValues", "firstEntity", "firstEntityId", "secondEntity"], [1, "ml-auto", "mr-auto"]],
      template: function MemberSettingsResourceAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberSettingsResourceAttributesComponent_app_two_entity_attribute_page_0_Template, 1, 4, "app-two-entity-attribute-page", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberSettingsResourceAttributesComponent_mat_spinner_1_Template, 1, 0, "mat-spinner", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_two_entity_attribute_page_two_entity_attribute_page_component__WEBPACK_IMPORTED_MODULE_4__["TwoEntityAttributePageComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy1yZXNvdXJjZS1hdHRyaWJ1dGVzL21lbWJlci1zZXR0aW5ncy1yZXNvdXJjZS1hdHRyaWJ1dGVzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsResourceAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-settings-resource-attributes',
          templateUrl: './member-settings-resource-attributes.component.html',
          styleUrls: ['./member-settings-resource-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ResourcesManagerService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: MemberSettingsComponent */

  /***/
  function srcAppVosPagesMemberDetailPageMemberSettingsMemberSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberSettingsComponent", function () {
      return MemberSettingsComponent;
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

    var MemberSettingsComponent = /*#__PURE__*/function () {
      function MemberSettingsComponent() {
        _classCallCheck(this, MemberSettingsComponent);
      }

      _createClass(MemberSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MemberSettingsComponent;
    }();

    MemberSettingsComponent.ɵfac = function MemberSettingsComponent_Factory(t) {
      return new (t || MemberSettingsComponent)();
    };

    MemberSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MemberSettingsComponent,
      selectors: [["app-member-settings"]],
      hostVars: 2,
      hostBindings: function MemberSettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function MemberSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_2__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy9tZW1iZXItZGV0YWlsLXBhZ2UvbWVtYmVyLXNldHRpbmdzL21lbWJlci1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-member-settings',
          templateUrl: './member-settings.component.html',
          styleUrls: ['./member-settings.component.scss'],
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
  "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: VoDetailPageComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoDetailPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoDetailPageComponent", function () {
      return VoDetailPageComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/side-menu/side-menu-item.service */
    "./src/app/shared/side-menu/side-menu-item.service.ts");
    /* harmony import */


    var _perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/animations */
    "../../libs/perun/animations/src/index.ts");
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
      return ["/organizations/", a1];
    };

    function VoDetailPageComponent_div_0_Template(rf, ctx) {
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

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-animated-router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, "VO_DETAIL.TITLE"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx_r0.vo.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.vo.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \xA0#", ctx_r0.vo.id, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 8, "VO_DETAIL.SUB_TITLE"), ": ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.vo.shortName, " ");
      }
    }

    var VoDetailPageComponent = /*#__PURE__*/function () {
      function VoDetailPageComponent(sideMenuService, voService, route, router, sideMenuItemService) {
        _classCallCheck(this, VoDetailPageComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.sideMenuItemService = sideMenuItemService;
      }

      _createClass(VoDetailPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this49 = this;

          this.route.params.subscribe(function (params) {
            var voId = params['voId'];

            _this49.voService.getVoById(voId).subscribe(function (vo) {
              _this49.vo = vo;

              var sideMenuItem = _this49.sideMenuItemService.parseVo(vo);

              _this49.sideMenuService.setAccessMenuItems([sideMenuItem]);

              Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["addRecentlyVisited"])('vos', _this49.vo);
            });
          });
        }
      }]);

      return VoDetailPageComponent;
    }();

    VoDetailPageComponent.ɵfac = function VoDetailPageComponent_Factory(t) {
      return new (t || VoDetailPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"]));
    };

    VoDetailPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoDetailPageComponent,
      selectors: [["app-vo-detail-page"]],
      decls: 1,
      vars: 1,
      consts: [["class", "container-fluid pl-xl-5 pr-xl-5 vo-theme", 4, "ngIf"], [1, "container-fluid", "pl-xl-5", "pr-xl-5", "vo-theme"], [1, "page-title"], [1, "vo-link", 3, "routerLink"], [1, "text-muted"], [1, "text-muted", "mt-1", "shortname"], [1, "vo-text"]],
      template: function VoDetailPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoDetailPageComponent_div_0_Template, 16, 12, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_8__["BackButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_9__["AnimatedRouterOutletComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslatePipe"]],
      styles: [".shortname[_ngcontent-%COMP%] {\n  font-size: medium;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZlY3RvdW4vZ2l0L3BlcnVuLXdlYi1hcHBzL2FwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL3BhZ2VzL3ZvLWRldGFpbC1wYWdlL3ZvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9hZG1pbi1ndWkvc3JjL2FwcC92b3MvcGFnZXMvdm8tZGV0YWlsLXBhZ2Uvdm8tZGV0YWlsLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvYWRtaW4tZ3VpL3NyYy9hcHAvdm9zL3BhZ2VzL3ZvLWRldGFpbC1wYWdlL3ZvLWRldGFpbC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNob3J0bmFtZSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufVxuIiwiLnNob3J0bmFtZSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xufSJdfQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoDetailPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-detail-page',
          templateUrl: './vo-detail-page.component.html',
          styleUrls: ['./vo-detail-page.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_4__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _shared_side_menu_side_menu_item_service__WEBPACK_IMPORTED_MODULE_3__["SideMenuItemService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: VoOverviewComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoOverviewVoOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoOverviewComponent", function () {
      return VoOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/components/dialogs/invite-member-dialog/invite-member-dialog.component */
    "./src/app/shared/components/dialogs/invite-member-dialog/invite-member-dialog.component.ts");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var VoOverviewComponent = /*#__PURE__*/function () {
      // @HostBinding('class.router-component') true;
      function VoOverviewComponent(sideMenuService, voService, route, router, authResolver) {
        _classCallCheck(this, VoOverviewComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.authResolver = authResolver;
        this.items = [];
        this.navItems = [];
      }

      _createClass(VoOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this50 = this;

          this.route.parent.params.subscribe(function (parentParams) {
            var voId = parentParams['voId'];

            _this50.voService.getVoById(voId).subscribe(function (vo) {
              _this50.vo = vo; // this.initItems();

              _this50.initNavItems();
            });
          });
        }
      }, {
        key: "initNavItems",
        value: function initNavItems() {
          // Members
          if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
              cssIcon: 'perun-user',
              url: "/organizations/".concat(this.vo.id, "/members"),
              label: 'MENU_ITEMS.VO.MEMBERS',
              style: 'vo-btn'
            });
          } // Groups


          if (this.authResolver.isThisVoAdminOrObserver(this.vo.id) || this.authResolver.isGroupAdminInThisVo(this.vo.id)) {
            this.navItems.push({
              cssIcon: 'perun-group',
              url: "/organizations/".concat(this.vo.id, "/groups"),
              label: 'MENU_ITEMS.VO.GROUPS',
              style: 'vo-btn'
            });
          } // Resource management


          if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
              cssIcon: 'perun-manage-facility',
              url: "/organizations/".concat(this.vo.id, "/resources"),
              label: 'MENU_ITEMS.VO.RESOURCES',
              style: 'vo-btn'
            });
          } // Applications


          if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
              cssIcon: 'perun-applications',
              url: "/organizations/".concat(this.vo.id, "/applications"),
              label: 'MENU_ITEMS.VO.APPLICATIONS',
              style: 'vo-btn'
            });
          } // Settings


          if (this.authResolver.isThisVoAdminOrObserver(this.vo.id)) {
            this.navItems.push({
              cssIcon: 'perun-settings2',
              url: "/organizations/".concat(this.vo.id, "/settings"),
              label: 'MENU_ITEMS.VO.SETTINGS',
              style: 'vo-btn'
            });
          }
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-invite-member',
            label: 'VO_DETAIL.OVERVIEW.INVITE_MEMBER',
            style: 'vo-btn',
            url: "/organizations/".concat(this.vo.id, "/invite-member"),
            clickAction: function clickAction(dialog, voId) {
              var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_6__["getDefaultDialogConfig"])();
              config.width = '450px';
              config.data = {
                voId: voId
              };
              dialog.open(_shared_components_dialogs_invite_member_dialog_invite_member_dialog_component__WEBPACK_IMPORTED_MODULE_1__["InviteMemberDialogComponent"], config);
            }
          }, {
            cssIcon: 'perun-service-identity',
            label: 'VO_DETAIL.OVERVIEW.CREATE_SERVICE_MEMBER',
            style: 'vo-btn',
            url: "/organizations/".concat(this.vo.id, "/create-service-member"),
            clickAction: function clickAction(dialog, voId) {
              return;
            }
          }, {
            cssIcon: 'perun-manager',
            label: 'VO_DETAIL.OVERVIEW.ADD_MANAGER',
            style: 'vo-btn',
            url: "/organizations/".concat(this.vo.id, "/add-manager"),
            clickAction: function clickAction(dialog, voId) {
              return;
            }
          }, {
            cssIcon: 'perun-group',
            label: 'VO_DETAIL.OVERVIEW.CREATE_GROUP',
            style: 'vo-btn',
            url: "/organizations/".concat(this.vo.id, "/create-group"),
            clickAction: function clickAction(dialog, voId) {
              return;
            }
          }, {
            cssIcon: 'perun-create1',
            label: 'VO_DETAIL.OVERVIEW.ADD_MEMBER',
            style: 'vo-btn',
            url: "/organizations/".concat(this.vo.id, "/invite-member"),
            clickAction: function clickAction(dialog, voId) {
              return;
            }
          }];
        }
      }]);

      return VoOverviewComponent;
    }();

    VoOverviewComponent.ɵfac = function VoOverviewComponent_Factory(t) {
      return new (t || VoOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GuiAuthResolver"]));
    };

    VoOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoOverviewComponent,
      selectors: [["app-vo-overview"]],
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function VoOverviewComponent_Template(rf, ctx) {
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
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_7__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1vdmVydmlldy92by1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-overview',
          templateUrl: './vo-overview.component.html',
          styleUrls: ['./vo-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_2__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_5__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GuiAuthResolver"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: VoResourcesOverviewComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoResourcesVoResourcesOverviewVoResourcesOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoResourcesOverviewComponent", function () {
      return VoResourcesOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var VoResourcesOverviewComponent = /*#__PURE__*/function () {
      function VoResourcesOverviewComponent(sideMenuService, voService, route, router) {
        _classCallCheck(this, VoResourcesOverviewComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.items = [];
      }

      _createClass(VoResourcesOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this51 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var voId = parentParams['voId'];

            _this51.voService.getVoById(voId).subscribe(function (vo) {
              _this51.vo = vo;

              _this51.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-resource',
            url: "/organizations/".concat(this.vo.id, "/resources/preview"),
            label: 'MENU_ITEMS.VO.RESOURCE_PREVIEW',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-resource-tags',
            url: "/organizations/".concat(this.vo.id, "/resources/tags"),
            label: 'MENU_ITEMS.VO.RESOURCE_TAGS',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-resources-state',
            url: "/organizations/".concat(this.vo.id, "/resources/states"),
            label: 'MENU_ITEMS.VO.RESOURCE_STATES',
            style: 'vo-btn'
          }];
        }
      }]);

      return VoResourcesOverviewComponent;
    }();

    VoResourcesOverviewComponent.ɵfac = function VoResourcesOverviewComponent_Factory(t) {
      return new (t || VoResourcesOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    VoResourcesOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoResourcesOverviewComponent,
      selectors: [["app-vo-resources-overview"]],
      hostVars: 2,
      hostBindings: function VoResourcesOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function VoResourcesOverviewComponent_Template(rf, ctx) {
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
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLW92ZXJ2aWV3L3ZvLXJlc291cmNlcy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-resources-overview',
          templateUrl: './vo-resources-overview.component.html',
          styleUrls: ['./vo-resources-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
  "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts":
  /*!********************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts ***!
    \********************************************************************************************************/

  /*! exports provided: VoResourcesTagsComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoResourcesVoResourcesTagsVoResourcesTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoResourcesTagsComponent", function () {
      return VoResourcesTagsComponent;
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


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component */
    "./src/app/shared/components/dialogs/create-resource-tag-dialog/create-resource-tag-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component */
    "./src/app/shared/components/dialogs/delete-resource-tag-dialog/delete-resource-tag-dialog.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
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


    var _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../shared/components/resources-tags-list/resources-tags-list.component */
    "./src/app/shared/components/resources-tags-list/resources-tags-list.component.ts");

    function VoResourcesTagsComponent_mat_spinner_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function VoResourcesTagsComponent_app_resources_tags_list_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-resources-tags-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VoResourcesTagsComponent_app_resources_tags_list_12_Template_app_resources_tags_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selection", ctx_r1.selection)("pageSize", ctx_r1.pageSize)("resourceTags", ctx_r1.resourceTag)("filterValue", ctx_r1.filterValue);
      }
    }

    var VoResourcesTagsComponent = /*#__PURE__*/function () {
      function VoResourcesTagsComponent(route, resourceManager, dialog, notificator, tableConfigService, translator) {
        _classCallCheck(this, VoResourcesTagsComponent);

        this.route = route;
        this.resourceManager = resourceManager;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translator = translator;
        this.loading = false;
        this.resourceTag = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TABLE_VO_RESOURCES_TAGS"];
      }

      _createClass(VoResourcesTagsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this52 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (parentParams) {
            _this52.voId = parentParams['voId'];

            _this52.updateData();
          });
        }
      }, {
        key: "deleteTag",
        value: function deleteTag() {
          var _this53 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            tagsForDelete: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_resource_tag_dialog_delete_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteResourceTagDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this53.translator.get('VO_DETAIL.RESOURCES.TAGS.DELETE_SUCCESS').subscribe(function (text) {
                _this53.notificator.showSuccess(text);
              });

              _this53.updateData();
            }
          });
        }
      }, {
        key: "create",
        value: function create() {
          var _this54 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_10__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            voId: this.voId
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_resource_tag_dialog_create_resource_tag_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateResourceTagDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (success) {
            if (success) {
              _this54.translator.get('VO_DETAIL.RESOURCES.TAGS.CREATE_SUCCESS').subscribe(function (text) {
                _this54.notificator.showSuccess(text);
              });

              _this54.updateData();
            }
          });
        }
      }, {
        key: "updateData",
        value: function updateData() {
          var _this55 = this;

          this.loading = true;
          this.selection.clear();
          this.resourceManager.getAllResourcesTagsForVo(this.voId).subscribe(function (tags) {
            _this55.resourceTag = tags;
            _this55.loading = false;
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

      return VoResourcesTagsComponent;
    }();

    VoResourcesTagsComponent.ɵfac = function VoResourcesTagsComponent_Factory(t) {
      return new (t || VoResourcesTagsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["ResourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]));
    };

    VoResourcesTagsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoResourcesTagsComponent,
      selectors: [["app-vo-resources-tags"]],
      hostVars: 2,
      hostBindings: function VoResourcesTagsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 13,
      vars: 13,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "selection", "pageSize", "resourceTags", "filterValue", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "selection", "pageSize", "resourceTags", "filterValue", "page"]],
      template: function VoResourcesTagsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoResourcesTagsComponent_Template_perun_web_apps_refresh_button_refresh_3_listener() {
            return ctx.updateData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoResourcesTagsComponent_Template_button_click_4_listener() {
            return ctx.create();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoResourcesTagsComponent_Template_button_click_7_listener() {
            return ctx.deleteTag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoResourcesTagsComponent_Template_perun_web_apps_immediate_filter_filter_10_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VoResourcesTagsComponent_mat_spinner_11_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoResourcesTagsComponent_app_resources_tags_list_12_Template, 1, 4, "app-resources-tags-list", 6);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 7, "VO_DETAIL.RESOURCES.TAGS.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, "VO_DETAIL.RESOURCES.TAGS.CREATE_BUTTON"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, "VO_DETAIL.RESOURCES.TAGS.DELETE_BUTTON"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "SHARED_LIB.PERUN.COMPONENTS.RESOURCES_LIST.TABLE_SEARCH");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_11__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_13__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _shared_components_resources_tags_list_resources_tags_list_component__WEBPACK_IMPORTED_MODULE_16__["ResourcesTagsListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLXRhZ3Mvdm8tcmVzb3VyY2VzLXRhZ3MuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesTagsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-resources-tags',
          templateUrl: './vo-resources-tags.component.html',
          styleUrls: ['./vo-resources-tags.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_8__["ResourcesManagerService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]
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
  "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: VoResourcesComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoResourcesVoResourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoResourcesComponent", function () {
      return VoResourcesComponent;
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


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var VoResourcesComponent = /*#__PURE__*/function () {
      function VoResourcesComponent(route) {
        _classCallCheck(this, VoResourcesComponent);

        this.route = route;
      }

      _createClass(VoResourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          this.route.parent.params.subscribe(function (parentParams) {
            _this56.voId = parentParams['voId'];
          });
        }
      }]);

      return VoResourcesComponent;
    }();

    VoResourcesComponent.ɵfac = function VoResourcesComponent_Factory(t) {
      return new (t || VoResourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    VoResourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoResourcesComponent,
      selectors: [["app-vo-resources"]],
      hostVars: 2,
      hostBindings: function VoResourcesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function VoResourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1yZXNvdXJjZXMvdm8tcmVzb3VyY2VzLmNvbXBvbmVudC5zY3NzIn0= */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoResourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-resources',
          templateUrl: './vo-resources.component.html',
          styleUrls: ['./vo-resources.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
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
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: VoSettingsAttributesComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsAttributesVoSettingsAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsAttributesComponent", function () {
      return VoSettingsAttributesComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component */
    "./src/app/shared/components/dialogs/delete-attribute-dialog/delete-attribute-dialog.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component */
    "./src/app/shared/components/dialogs/create-attribute-dialog/create-attribute-dialog.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
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

    function VoSettingsAttributesComponent_mat_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "mat-spinner", 8);
      }
    }

    function VoSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "perun-web-apps-attributes-list", 9, 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("page", function VoSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template_perun_web_apps_attributes_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          return ctx_r3.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("filterValue", ctx_r1.filterValue)("attributes", ctx_r1.attributes)("selection", ctx_r1.selection);
      }
    }

    var VoSettingsAttributesComponent = /*#__PURE__*/function () {
      function VoSettingsAttributesComponent(attributesManager, route, dialog, notificator, tableConfigService, translate) {
        var _this57 = this;

        _classCallCheck(this, VoSettingsAttributesComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.attributes = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_1__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TABLE_ATTRIBUTES_SETTINGS"];
        this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE').subscribe(function (value) {
          return _this57.saveSuccessMessage = value;
        });
        this.translate.get('VO_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE').subscribe(function (value) {
          return _this57.deleteSuccessMessage = value;
        });
      }

      _createClass(VoSettingsAttributesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (parentParams) {
            _this58.voId = parentParams['voId'];

            _this58.refreshTable();
          });
        }
      }, {
        key: "onDelete",
        value: function onDelete() {
          var _this59 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.voId,
            entity: 'vo',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_delete_attribute_dialog_delete_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DeleteAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this59.refreshTable();
            }
          });
        }
      }, {
        key: "onCreate",
        value: function onCreate() {
          var _this60 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1050px';
          config.data = {
            entityId: this.voId,
            entity: 'vo',
            notEmptyAttributes: this.attributes,
            style: 'vo-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_attribute_dialog_create_attribute_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
              _this60.refreshTable();
            }
          });
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var _this61 = this;

          // have to use this to update attribute with map in it, before saving it
          this.list.updateMapAttributes();
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '450px';
          config.data = {
            entityId: this.voId,
            entity: 'vo',
            attributes: this.selection.selected
          };
          var dialogRef = this.dialog.open(_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_6__["EditAttributeDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              _this61.refreshTable();
            }
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this62 = this;

          this.loading = true;
          this.attributesManager.getVoAttributes(this.voId).subscribe(function (attributes) {
            _this62.attributes = attributes;

            _this62.selection.clear();

            _this62.loading = false;
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

      return VoSettingsAttributesComponent;
    }();

    VoSettingsAttributesComponent.ɵfac = function VoSettingsAttributesComponent_Factory(t) {
      return new (t || VoSettingsAttributesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
    };

    VoSettingsAttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: VoSettingsAttributesComponent,
      selectors: [["app-vo-settings-attributes"]],
      viewQuery: function VoSettingsAttributesComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.list = _t.first);
        }
      },
      hostVars: 2,
      hostBindings: function VoSettingsAttributesComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 17,
      vars: 17,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "disabled", "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "filterValue", "attributes", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "filterValue", "attributes", "selection", "page"], ["list", ""]],
      template: function VoSettingsAttributesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("refresh", function VoSettingsAttributesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_5_listener() {
            return ctx.onCreate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_8_listener() {
            return ctx.onSave();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoSettingsAttributesComponent_Template_button_click_11_listener() {
            return ctx.onDelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("filter", function VoSettingsAttributesComponent_Template_perun_web_apps_immediate_filter_filter_14_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, VoSettingsAttributesComponent_mat_spinner_15_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, VoSettingsAttributesComponent_perun_web_apps_attributes_list_16_Template, 2, 4, "perun-web-apps-attributes-list", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 9, "VO_DETAIL.SETTINGS.ATTRIBUTES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 11, "VO_DETAIL.SETTINGS.ATTRIBUTES.CREATE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 13, "VO_DETAIL.SETTINGS.ATTRIBUTES.SAVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 15, "VO_DETAIL.SETTINGS.ATTRIBUTES.DELETE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", "SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatSpinner"], _libs_perun_components_src_lib_attributes_list_attributes_list_component__WEBPACK_IMPORTED_MODULE_17__["AttributesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1hdHRyaWJ1dGVzL3ZvLXNldHRpbmdzLWF0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](VoSettingsAttributesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
          selector: 'app-vo-settings-attributes',
          templateUrl: './vo-settings-attributes.component.html',
          styleUrls: ['./vo-settings-attributes.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_7__["NotificatorService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_11__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }];
      }, {
        "true": [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["HostBinding"],
          args: ['class.router-component']
        }],
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
          args: ['list']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: VoSettingsExpirationComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsExpirationVoSettingsExpirationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsExpirationComponent", function () {
      return VoSettingsExpirationComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @perun-web-apps/perun/urns */
    "../../libs/perun/urns/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../components/expiration-settings/expiration-settings.component */
    "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");

    function VoSettingsExpirationComponent_app_expiration_settings_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-expiration-settings", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("saveAttribute", function VoSettingsExpirationComponent_app_expiration_settings_0_Template_app_expiration_settings_saveAttribute_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.saveExpirationAttribute($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expirationAttribute", ctx_r0.expirationAttribute);
      }
    }

    var VoSettingsExpirationComponent = /*#__PURE__*/function () {
      function VoSettingsExpirationComponent(attributesManager, route, translate, notificator, apiRequest) {
        var _this63 = this;

        _classCallCheck(this, VoSettingsExpirationComponent);

        this.attributesManager = attributesManager;
        this.route = route;
        this.translate = translate;
        this.notificator = notificator;
        this.apiRequest = apiRequest;
        this.translate.get('VO_DETAIL.SETTINGS.EXPIRATION.SUCCESS_MESSAGE').subscribe(function (value) {
          return _this63.successMessage = value;
        });
        this.translate.get('VO_DETAIL.SETTINGS.EXPIRATION.ERROR_MESSAGE').subscribe(function (value) {
          return _this63.errorMessage = value;
        });
      }

      _createClass(VoSettingsExpirationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this64 = this;

          this.route.parent.parent.params.subscribe(function (params) {
            _this64.voId = params['voId'];

            _this64.loadSettings();
          });
        }
      }, {
        key: "loadSettings",
        value: function loadSettings() {
          var _this65 = this;

          this.attributesManager.getVoAttributeByName(this.voId, _perun_web_apps_perun_urns__WEBPACK_IMPORTED_MODULE_5__["Urns"].VO_DEF_EXPIRATION_RULES).subscribe(function (attr) {
            _this65.expirationAttribute = attr;
          });
        }
      }, {
        key: "saveExpirationAttribute",
        value: function saveExpirationAttribute(attribute) {
          var _this66 = this;

          // FIXME this might not work in case of some race condition (other request finishes sooner)
          this.apiRequest.dontHandleErrorForNext();
          this.attributesManager.setVoAttribute({
            vo: this.voId,
            attribute: attribute
          }).subscribe(function () {
            _this66.loadSettings();

            _this66.notificator.showSuccess(_this66.successMessage);
          }, function (error) {
            console.log(error);

            _this66.notificator.showRPCError(error.error, _this66.errorMessage);
          });
        }
      }]);

      return VoSettingsExpirationComponent;
    }();

    VoSettingsExpirationComponent.ɵfac = function VoSettingsExpirationComponent_Factory(t) {
      return new (t || VoSettingsExpirationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ApiRequestConfigurationService"]));
    };

    VoSettingsExpirationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsExpirationComponent,
      selectors: [["app-vo-settings-expiration"]],
      hostVars: 2,
      hostBindings: function VoSettingsExpirationComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "expirationAttribute", "saveAttribute", 4, "ngIf"], [3, "expirationAttribute", "saveAttribute"]],
      template: function VoSettingsExpirationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoSettingsExpirationComponent_app_expiration_settings_0_Template, 1, 1, "app-expiration-settings", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expirationAttribute !== undefined);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_8__["ExpirationSettingsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHBpcmF0aW9uL3ZvLXNldHRpbmdzLWV4cGlyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsExpirationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings-expiration',
          templateUrl: './vo-settings-expiration.component.html',
          styleUrls: ['./vo-settings-expiration.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_1__["openClose"]]
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_6__["AttributesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["NotificatorService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_3__["ApiRequestConfigurationService"]
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
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: VoSettingsExtsourcesComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsExtsourcesVoSettingsExtsourcesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsExtsourcesComponent", function () {
      return VoSettingsExtsourcesComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component */
    "./src/app/shared/components/dialogs/add-ext-source-dialog/add-ext-source-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
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
    /*! ../../../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../../shared/components/ext-sources-list/ext-sources-list.component */
    "./src/app/shared/components/ext-sources-list/ext-sources-list.component.ts");

    function VoSettingsExtsourcesComponent_mat_spinner_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 7);
      }
    }

    function VoSettingsExtsourcesComponent_app_ext_sources_list_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-ext-sources-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VoSettingsExtsourcesComponent_app_ext_sources_list_13_Template_app_ext_sources_list_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r1.pageSize)("extSources", ctx_r1.extSources)("filterValue", ctx_r1.filterValue)("selection", ctx_r1.selection);
      }
    }

    var VoSettingsExtsourcesComponent = /*#__PURE__*/function () {
      function VoSettingsExtsourcesComponent(extSourceService, route, dialog, notificator, tableConfigService, translate) {
        var _this67 = this;

        _classCallCheck(this, VoSettingsExtsourcesComponent);

        this.extSourceService = extSourceService;
        this.route = route;
        this.dialog = dialog;
        this.notificator = notificator;
        this.tableConfigService = tableConfigService;
        this.translate = translate;
        this.extSources = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TABLE_VO_EXTSOURCES_SETTINGS"];
        this.translate.get('VO_DETAIL.SETTINGS.EXT_SOURCES.SUCCESS_REMOVED').subscribe(function (result) {
          return _this67.successMessage = result;
        });
      }

      _createClass(VoSettingsExtsourcesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this68 = this;

          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (parentParams) {
            _this68.voId = parentParams['voId'];

            _this68.refreshTable();
          });
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this69 = this;

          this.loading = true;
          this.extSourceService.getVoExtSources(this.voId).subscribe(function (sources) {
            _this69.extSources = sources;

            _this69.selection.clear();

            _this69.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "onAdd",
        value: function onAdd() {
          var _this70 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_9__["getDefaultDialogConfig"])();
          config.width = '1000px';
          config.data = {
            voId: this.voId,
            voExtSources: this.extSources,
            theme: 'vo-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_add_ext_source_dialog_add_ext_source_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AddExtSourceDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (added) {
            if (added) {
              _this70.refreshTable();
            }
          });
        }
      }, {
        key: "onRemove",
        value: function onRemove() {
          var _this71 = this;

          var _iterator3 = _createForOfIteratorHelper(this.selection.selected),
              _step3;

          try {
            var _loop = function _loop() {
              var extSource = _step3.value;

              _this71.extSourceService.removeExtSourceWithVoSource(_this71.voId, extSource.id).subscribe(function (_) {
                _this71.notificator.showSuccess(_this71.successMessage + extSource.name);

                _this71.refreshTable();
              });
            };

            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return VoSettingsExtsourcesComponent;
    }();

    VoSettingsExtsourcesComponent.ɵfac = function VoSettingsExtsourcesComponent_Factory(t) {
      return new (t || VoSettingsExtsourcesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ExtSourcesManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]));
    };

    VoSettingsExtsourcesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsExtsourcesComponent,
      selectors: [["app-vo-settings-extsources"]],
      decls: 14,
      vars: 13,
      consts: [[1, "page-subtitle"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 3, "disabled", "click"], [3, "placeholder", "filter"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "extSources", "filterValue", "selection", "page", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "extSources", "filterValue", "selection", "page"]],
      template: function VoSettingsExtsourcesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "perun-web-apps-refresh-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoSettingsExtsourcesComponent_Template_perun_web_apps_refresh_button_refresh_4_listener() {
            return ctx.refreshTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsExtsourcesComponent_Template_button_click_5_listener() {
            return ctx.onAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsExtsourcesComponent_Template_button_click_8_listener() {
            return ctx.onRemove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "perun-web-apps-immediate-filter", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoSettingsExtsourcesComponent_Template_perun_web_apps_immediate_filter_filter_11_listener($event) {
            return ctx.applyFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, VoSettingsExtsourcesComponent_mat_spinner_12_Template, 1, 0, "mat-spinner", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, VoSettingsExtsourcesComponent_app_ext_sources_list_13_Template, 1, 4, "app-ext-sources-list", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, "VO_DETAIL.SETTINGS.EXT_SOURCES.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, "VO_DETAIL.SETTINGS.EXT_SOURCES.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 11, "VO_DETAIL.SETTINGS.EXT_SOURCES.REMOVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "VO_DETAIL.SETTINGS.EXT_SOURCES.FILTER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_10__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_12__["ImmediateFilterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_14__["MatSpinner"], _shared_components_ext_sources_list_ext_sources_list_component__WEBPACK_IMPORTED_MODULE_15__["ExtSourcesListComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1leHRzb3VyY2VzL3ZvLXNldHRpbmdzLWV4dHNvdXJjZXMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsExtsourcesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings-extsources',
          templateUrl: './vo-settings-extsources.component.html',
          styleUrls: ['./vo-settings-extsources.component.scss']
        }]
      }], function () {
        return [{
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["ExtSourcesManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_8__["TableConfigService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: VoSettingsManagersComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsManagersVoSettingsManagersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsManagersComponent", function () {
      return VoSettingsManagersComponent;
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


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/models */
    "../../libs/perun/models/src/index.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../../shared/components/managers-page/managers-page.component */
    "./src/app/shared/components/managers-page/managers-page.component.ts");

    function VoSettingsManagersComponent_app_managers_page_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-managers-page", 1);
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("complementaryObject", ctx_r0.vo)("complementaryObjectType", ctx_r0.type)("theme", ctx_r0.theme)("availableRoles", ctx_r0.availableRoles);
      }
    }

    var VoSettingsManagersComponent = /*#__PURE__*/function () {
      function VoSettingsManagersComponent(dialog, voService, route) {
        _classCallCheck(this, VoSettingsManagersComponent);

        this.dialog = dialog;
        this.voService = voService;
        this.route = route;
        this.availableRoles = [_perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].VOADMIN, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].VOOBSERVER, _perun_web_apps_perun_models__WEBPACK_IMPORTED_MODULE_4__["Role"].TOPGROUPCREATOR];
        this.selected = 'user';
        this.type = 'Vo';
        this.theme = 'vo-theme';
      }

      _createClass(VoSettingsManagersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this72 = this;

          this.route.parent.parent.params.subscribe(function (parentParentParams) {
            var voId = parentParentParams['voId'];

            _this72.voService.getVoById(voId).subscribe(function (vo) {
              _this72.vo = vo;
            });
          });
        }
      }]);

      return VoSettingsManagersComponent;
    }();

    VoSettingsManagersComponent.ɵfac = function VoSettingsManagersComponent_Factory(t) {
      return new (t || VoSettingsManagersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    VoSettingsManagersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsManagersComponent,
      selectors: [["app-vo-settings-managers"]],
      hostVars: 2,
      hostBindings: function VoSettingsManagersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 1,
      consts: [[3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles", 4, "ngIf"], [3, "complementaryObject", "complementaryObjectType", "theme", "availableRoles"]],
      template: function VoSettingsManagersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VoSettingsManagersComponent_app_managers_page_0_Template, 1, 4, "app-managers-page", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.vo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _shared_components_managers_page_managers_page_component__WEBPACK_IMPORTED_MODULE_6__["ManagersPageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1tYW5hZ2Vycy92by1zZXR0aW5ncy1tYW5hZ2Vycy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsManagersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings-managers',
          templateUrl: './vo-settings-managers.component.html',
          styleUrls: ['./vo-settings-managers.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]
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
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: VoSettingsNotificationsComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsNotificationsVoSettingsNotificationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsNotificationsComponent", function () {
      return VoSettingsNotificationsComponent;
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


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component */
    "./src/app/shared/components/dialogs/delete-notification-dialog/delete-notification-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component */
    "./src/app/shared/components/dialogs/edit-email-footer-dialog/edit-email-footer-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component */
    "./src/app/shared/components/dialogs/add-edit-notification-dialog/add-edit-notification-dialog.component.ts");
    /* harmony import */


    var _shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component */
    "./src/app/shared/components/dialogs/notifications-copy-mails-dialog/notifications-copy-mails-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @perun-web-apps/perun/utils */
    "../../libs/perun/utils/src/index.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../components/notification-list/notification-list.component */
    "./src/app/vos/components/notification-list/notification-list.component.ts");
    /* harmony import */


    var _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../../../../../../../libs/ui/alerts/src/lib/alert/alert.component */
    "../../libs/ui/alerts/src/lib/alert/alert.component.ts");

    function VoSettingsNotificationsComponent_mat_spinner_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 10);
      }
    }

    function VoSettingsNotificationsComponent_div_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-notification-list", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VoSettingsNotificationsComponent_div_21_Template_app_notification_list_page_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.pageChanged($event);
        })("selectionChange", function VoSettingsNotificationsComponent_div_21_Template_app_notification_list_selectionChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.changeSelection($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("applicationMails", ctx_r1.applicationMails)("pageSize", ctx_r1.pageSize)("voId", ctx_r1.voId)("selection", ctx_r1.selection);
      }
    }

    function VoSettingsNotificationsComponent_app_alert_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-alert", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "VO_DETAIL.SETTINGS.NOTIFICATIONS.NO_EMAILS"), "\n");
      }
    }

    var VoSettingsNotificationsComponent = /*#__PURE__*/function () {
      function VoSettingsNotificationsComponent(route, registrarService, translate, dialog, tableConfigService, notificator) {
        _classCallCheck(this, VoSettingsNotificationsComponent);

        this.route = route;
        this.registrarService = registrarService;
        this.translate = translate;
        this.dialog = dialog;
        this.tableConfigService = tableConfigService;
        this.notificator = notificator;
        this.loading = false;
        this.applicationMails = [];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TABLE_VO_SETTINGS_NOTIFICATIONS"];
      }

      _createClass(VoSettingsNotificationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this73 = this;

          this.loading = true;
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.route.parent.parent.params.subscribe(function (params) {
            _this73.voId = params['voId'];

            _this73.registrarService.getVoApplicationForm(_this73.voId).subscribe(function (form) {
              _this73.applicationForm = form;

              _this73.registrarService.getApplicationMailsForVo(_this73.voId).subscribe(function (mails) {
                _this73.applicationMails = mails;
                _this73.loading = false;
              });
            });
          });
        }
      }, {
        key: "add",
        value: function add() {
          var _this74 = this;

          var applicationMail = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["createNewApplicationMail"])();
          applicationMail.formId = this.applicationForm.id;
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '1400px';
          config.height = '700px';
          config.data = {
            voId: this.voId,
            createMailNotification: true,
            applicationMail: applicationMail,
            applicationMails: this.applicationMails
          };
          var dialog = this.dialog.open(_shared_components_dialogs_add_edit_notification_dialog_add_edit_notification_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AddEditNotificationDialogComponent"], config);
          dialog.afterClosed().subscribe(function (success) {
            if (success) {
              _this74.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD_SUCCESS').subscribe(function (text) {
                _this74.notificator.showSuccess(text);
              });

              _this74.selection.clear();

              _this74.updateTable();
            }
          });
        }
      }, {
        key: "remove",
        value: function remove() {
          var _this75 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId,
            mails: this.selection.selected
          };
          var dialog = this.dialog.open(_shared_components_dialogs_delete_notification_dialog_delete_notification_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DeleteNotificationDialogComponent"], config);
          dialog.afterClosed().subscribe(function (success) {
            if (success) {
              _this75.translate.get('VO_DETAIL.SETTINGS.NOTIFICATIONS.DELETE_SUCCESS').subscribe(function (text) {
                _this75.notificator.showSuccess(text);
              });

              _this75.selection.clear();

              _this75.updateTable();
            }
          });
        }
      }, {
        key: "copy",
        value: function copy() {
          var _this76 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId
          };
          var dialog = this.dialog.open(_shared_components_dialogs_notifications_copy_mails_dialog_notifications_copy_mails_dialog_component__WEBPACK_IMPORTED_MODULE_9__["NotificationsCopyMailsDialogComponent"], config);
          dialog.afterClosed().subscribe(function (copyFrom) {
            if (copyFrom) {
              _this76.selection.clear();

              _this76.updateTable();
            }
          });
        }
      }, {
        key: "updateTable",
        value: function updateTable() {
          var _this77 = this;

          this.loading = true;
          this.registrarService.getApplicationMailsForVo(this.voId).subscribe(function (mails) {
            _this77.applicationMails = mails;
            _this77.loading = false;
          });
        }
      }, {
        key: "changeEmailFooter",
        value: function changeEmailFooter() {
          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_11__["getDefaultDialogConfig"])();
          config.width = '500px';
          config.data = {
            voId: this.voId
          };
          this.dialog.open(_shared_components_dialogs_edit_email_footer_dialog_edit_email_footer_dialog_component__WEBPACK_IMPORTED_MODULE_7__["EditEmailFooterDialogComponent"], config);
        }
      }, {
        key: "changeSelection",
        value: function changeSelection(selection) {
          this.selection = selection;
        }
      }, {
        key: "pageChanged",
        value: function pageChanged(event) {
          this.pageSize = event.pageSize;
          this.tableConfigService.setTablePageSize(this.tableId, event.pageSize);
        }
      }]);

      return VoSettingsNotificationsComponent;
    }();

    VoSettingsNotificationsComponent.ɵfac = function VoSettingsNotificationsComponent_Factory(t) {
      return new (t || VoSettingsNotificationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"]));
    };

    VoSettingsNotificationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsNotificationsComponent,
      selectors: [["app-vo-settings-notifications"]],
      hostVars: 2,
      hostBindings: function VoSettingsNotificationsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 23,
      vars: 19,
      consts: [[1, "page-subtitle"], [1, "w-100", "d-flex"], ["mat-flat-button", "", "color", "accent", 1, "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "mr-2", 3, "disabled", "click"], ["mat-stroked-button", "", 1, "mr-2", 3, "click"], [1, "material-icons"], ["mat-stroked-button", "", 3, "click"], ["class", "ml-auto mr-auto", 4, "ngIf"], ["class", "card mt-2", 4, "ngIf"], [3, "color", 4, "ngIf"], [1, "ml-auto", "mr-auto"], [1, "card", "mt-2"], [3, "applicationMails", "pageSize", "voId", "selection", "page", "selectionChange"], [3, "color"]],
      template: function VoSettingsNotificationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_4_listener() {
            return ctx.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_7_listener() {
            return ctx.remove();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_10_listener() {
            return ctx.changeEmailFooter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSettingsNotificationsComponent_Template_button_click_15_listener() {
            return ctx.copy();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "file_copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, VoSettingsNotificationsComponent_mat_spinner_20_Template, 1, 0, "mat-spinner", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, VoSettingsNotificationsComponent_div_21_Template, 2, 4, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VoSettingsNotificationsComponent_app_alert_22_Template, 3, 4, "app-alert", 9);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 9, "VO_DETAIL.SETTINGS.NOTIFICATIONS.TITLE"), "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 11, "VO_DETAIL.SETTINGS.NOTIFICATIONS.ADD"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.selection.selected.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 13, "VO_DETAIL.SETTINGS.NOTIFICATIONS.REMOVE"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 15, "VO_DETAIL.SETTINGS.NOTIFICATIONS.EMAIL_FOOTER"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 17, "VO_DETAIL.SETTINGS.NOTIFICATIONS.COPY_FROM_VO"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationMails.length !== 0 && !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.applicationMails.length === 0 && !ctx.loading);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_16__["NotificationListComponent"], _libs_ui_alerts_src_lib_alert_alert_component__WEBPACK_IMPORTED_MODULE_17__["AlertComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1ub3RpZmljYXRpb25zL3ZvLXNldHRpbmdzLW5vdGlmaWNhdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsNotificationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings-notifications',
          templateUrl: './vo-settings-notifications.component.html',
          styleUrls: ['./vo-settings-notifications.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_10__["RegistrarManagerService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_12__["TableConfigService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_6__["NotificatorService"]
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
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: VoSettingsOverviewComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsOverviewVoSettingsOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsOverviewComponent", function () {
      return VoSettingsOverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../../core/services/common/side-menu.service */
    "./src/app/core/services/common/side-menu.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @perun-web-apps/perun/openapi */
    "../../libs/perun/openapi/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../../../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component */
    "../../libs/perun/components/src/lib/menu-buttons-field/menu-buttons-field.component.ts");

    var VoSettingsOverviewComponent = /*#__PURE__*/function () {
      function VoSettingsOverviewComponent(sideMenuService, voService, route, router) {
        _classCallCheck(this, VoSettingsOverviewComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.route = route;
        this.router = router;
        this.items = [];
      }

      _createClass(VoSettingsOverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this78 = this;

          this.route.parent.parent.params.subscribe(function (parentParams) {
            var voId = parentParams['voId'];

            _this78.voService.getVoById(voId).subscribe(function (vo) {
              _this78.vo = vo;

              _this78.initItems();
            });
          });
        }
      }, {
        key: "initItems",
        value: function initItems() {
          this.items = [{
            cssIcon: 'perun-attributes',
            url: "/organizations/".concat(this.vo.id, "/settings/attributes"),
            label: 'MENU_ITEMS.VO.ATTRIBUTES',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-group',
            url: "/organizations/".concat(this.vo.id, "/settings/expiration"),
            label: 'MENU_ITEMS.VO.EXPIRATION',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-manager',
            url: "/organizations/".concat(this.vo.id, "/settings/managers"),
            label: 'MENU_ITEMS.VO.MANAGERS',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-application-form',
            url: "/organizations/".concat(this.vo.id, "/settings/applicationForm"),
            label: 'MENU_ITEMS.VO.APPLICATION_FORM',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-notification',
            url: "/organizations/".concat(this.vo.id, "/settings/notifications"),
            label: 'MENU_ITEMS.VO.NOTIFICATIONS',
            style: 'vo-btn'
          }, {
            cssIcon: 'perun-external-sources',
            url: "/organizations/".concat(this.vo.id, "/settings/extsources"),
            label: 'MENU_ITEMS.VO.EXTSOURCES',
            style: 'vo-btn'
          }];
        }
      }]);

      return VoSettingsOverviewComponent;
    }();

    VoSettingsOverviewComponent.ɵfac = function VoSettingsOverviewComponent_Factory(t) {
      return new (t || VoSettingsOverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    VoSettingsOverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsOverviewComponent,
      selectors: [["app-vo-settings-overview"]],
      hostVars: 2,
      hostBindings: function VoSettingsOverviewComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 2,
      vars: 2,
      consts: [[3, "items", "size"]],
      template: function VoSettingsOverviewComponent_Template(rf, ctx) {
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
      directives: [_libs_perun_components_src_lib_menu_buttons_field_menu_buttons_field_component__WEBPACK_IMPORTED_MODULE_4__["MenuButtonsFieldComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy1vdmVydmlldy92by1zZXR0aW5ncy1vdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsOverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings-overview',
          templateUrl: './vo-settings-overview.component.html',
          styleUrls: ['./vo-settings-overview.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_3__["VosManagerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
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
  "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: VoSettingsComponent */

  /***/
  function srcAppVosPagesVoDetailPageVoSettingsVoSettingsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSettingsComponent", function () {
      return VoSettingsComponent;
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


    var _shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/components/animated-router-outlet/animated-router-outlet.component */
    "./src/app/shared/components/animated-router-outlet/animated-router-outlet.component.ts");

    var VoSettingsComponent = /*#__PURE__*/function () {
      function VoSettingsComponent(route, router) {
        var _this79 = this;

        _classCallCheck(this, VoSettingsComponent);

        this.route = route;
        this.router = router;
        this.backButtonRegex = new RegExp('/organizations/\\d+/settings/\\w+$');
        this.backButtonDisplayed = false;
        this.currentUrl = router.url;
        this.backButtonDisplayed = this.backButtonRegex.test(this.currentUrl);
        router.events.subscribe(function (_) {
          if (_ instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this79.currentUrl = _.url;
            _this79.backButtonDisplayed = _this79.backButtonRegex.test(_this79.currentUrl);
          }
        });
      }

      _createClass(VoSettingsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this80 = this;

          this.route.parent.params.subscribe(function (parentParams) {
            _this80.voId = parentParams['voId'];
          });
        }
      }]);

      return VoSettingsComponent;
    }();

    VoSettingsComponent.ɵfac = function VoSettingsComponent_Factory(t) {
      return new (t || VoSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    VoSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSettingsComponent,
      selectors: [["app-vo-settings"]],
      hostVars: 2,
      hostBindings: function VoSettingsComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("router-component", true);
        }
      },
      decls: 1,
      vars: 0,
      template: function VoSettingsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-animated-router-outlet");
        }
      },
      directives: [_shared_components_animated_router_outlet_animated_router_outlet_component__WEBPACK_IMPORTED_MODULE_3__["AnimatedRouterOutletComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1kZXRhaWwtcGFnZS92by1zZXR0aW5ncy92by1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-settings',
          templateUrl: './vo-settings.component.html',
          styleUrls: ['./vo-settings.component.scss'],
          animations: [_perun_web_apps_perun_animations__WEBPACK_IMPORTED_MODULE_2__["fadeIn"]]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
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
  "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/vos/pages/vo-select-page/vo-select-page.component.ts ***!
    \**********************************************************************/

  /*! exports provided: VoSelectPageComponent */

  /***/
  function srcAppVosPagesVoSelectPageVoSelectPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VoSelectPageComponent", function () {
      return VoSelectPageComponent;
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


    var _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @perun-web-apps/perun/services */
    "../../libs/perun/services/src/index.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component */
    "./src/app/shared/components/dialogs/remove-vo-dialog/remove-vo-dialog.component.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
    /* harmony import */


    var _shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/components/dialogs/create-vo-dialog/create-vo-dialog.component */
    "./src/app/shared/components/dialogs/create-vo-dialog/create-vo-dialog.component.ts");
    /* harmony import */


    var _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @perun-web-apps/config/table-config */
    "../../libs/config/table-config/src/index.ts");
    /* harmony import */


    var _libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/back-button/back-button.component */
    "../../libs/perun/components/src/lib/back-button/back-button.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/refresh-button/refresh-button.component */
    "../../libs/perun/components/src/lib/refresh-button/refresh-button.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component */
    "../../libs/perun/components/src/lib/immediate-filter/immediate-filter.component.ts");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _libs_perun_components_src_lib_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../../../../libs/perun/components/src/lib/vo-select-table/vo-select-table.component */
    "../../libs/perun/components/src/lib/vo-select-table/vo-select-table.component.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "../../node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function VoSelectPageComponent_perun_web_apps_refresh_button_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-refresh-button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function VoSelectPageComponent_perun_web_apps_refresh_button_5_Template_perun_web_apps_refresh_button_refresh_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.refreshTable();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VoSelectPageComponent_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSelectPageComponent_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.onCreateVo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "VO_MANAGEMENT.CREATE_VO"), " ");
      }
    }

    function VoSelectPageComponent_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VoSelectPageComponent_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.onRemoveVo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selection.selected.length === 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, "VO_MANAGEMENT.REMOVE_VO"), " ");
      }
    }

    function VoSelectPageComponent_perun_web_apps_immediate_filter_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-immediate-filter", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filter", function VoSelectPageComponent_perun_web_apps_immediate_filter_8_Template_perun_web_apps_immediate_filter_filter_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.applyFilter($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "VO_MANAGEMENT.FILTER_PLACEHOLDER");
      }
    }

    function VoSelectPageComponent_mat_spinner_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 12);
      }
    }

    function VoSelectPageComponent_perun_web_apps_vo_select_table_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "perun-web-apps-vo-select-table", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function VoSelectPageComponent_perun_web_apps_vo_select_table_10_Template_perun_web_apps_vo_select_table_page_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.pageChanged($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx_r5.pageSize)("displayedColumns", ctx_r5.displayedColumns)("filterValue", ctx_r5.filterValue)("recentIds", ctx_r5.recentIds)("selection", ctx_r5.selection)("vos", ctx_r5.vos);
      }
    }

    var VoSelectPageComponent = /*#__PURE__*/function () {
      function VoSelectPageComponent(sideMenuService, voService, authzService, tableConfigService, dialog) {
        _classCallCheck(this, VoSelectPageComponent);

        this.sideMenuService = sideMenuService;
        this.voService = voService;
        this.authzService = authzService;
        this.tableConfigService = tableConfigService;
        this.dialog = dialog;
        this.vos = [];
        this.recentIds = [];
        this.filterValue = '';
        this.tableId = _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TABLE_VO_SELECT"];
      }

      _createClass(VoSelectPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true;
          this.pageSize = this.tableConfigService.getTablePageSize(this.tableId);
          this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_7__["SelectionModel"](false, []);
          this.isVoAdmin = this.authzService.isVoAdmin();
          this.displayedColumns = this.isVoAdmin ? ['checkbox', 'id', 'recent', 'shortName', 'name'] : ['id', 'recent', 'shortName', 'name'];
          this.sideMenuService.setAccessMenuItems([]);
          this.refreshTable();
        }
      }, {
        key: "refreshTable",
        value: function refreshTable() {
          var _this81 = this;

          this.loading = true;
          this.selection.clear();
          this.voService.getMyVos().subscribe(function (vos) {
            _this81.vos = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisited"])('vos', vos);
            _this81.recentIds = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getRecentlyVisitedIds"])('vos');
            _this81.loading = false;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.filterValue = filterValue;
        }
      }, {
        key: "onCreateVo",
        value: function onCreateVo() {
          var _this82 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            theme: 'vo-theme'
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_create_vo_dialog_create_vo_dialog_component__WEBPACK_IMPORTED_MODULE_8__["CreateVoDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (isVoCreated) {
            if (isVoCreated) {
              _this82.refreshTable();
            }
          });
        }
      }, {
        key: "onRemoveVo",
        value: function onRemoveVo() {
          var _this83 = this;

          var config = Object(_perun_web_apps_perun_utils__WEBPACK_IMPORTED_MODULE_3__["getDefaultDialogConfig"])();
          config.width = '600px';
          config.data = {
            theme: 'vo-theme',
            vos: this.selection.selected
          };
          var dialogRef = this.dialog.open(_shared_components_dialogs_remove_vo_dialog_remove_vo_dialog_component__WEBPACK_IMPORTED_MODULE_6__["RemoveVoDialogComponent"], config);
          dialogRef.afterClosed().subscribe(function (isVoRemoved) {
            if (isVoRemoved) {
              _this83.refreshTable();
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

      return VoSelectPageComponent;
    }();

    VoSelectPageComponent.ɵfac = function VoSelectPageComponent_Factory(t) {
      return new (t || VoSelectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["VosManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GuiAuthResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TableConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]));
    };

    VoSelectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VoSelectPageComponent,
      selectors: [["app-vo-select-page"]],
      decls: 11,
      vars: 9,
      consts: [[1, "container-fluid", "pl-xl-5", "pr-xl-5", "vo-theme"], [1, "page-title"], [3, "refresh", 4, "ngIf"], ["mat-flat-button", "", "color", "accent", "class", "ml-2 mr-2", 3, "click", 4, "ngIf"], ["mat-flat-button", "", "color", "warn", "class", "ml-2 mr-2", 3, "disabled", "click", 4, "ngIf"], [3, "placeholder", "filter", 4, "ngIf"], ["class", "ml-auto mr-auto", 4, "ngIf"], [3, "pageSize", "displayedColumns", "filterValue", "recentIds", "selection", "vos", "page", 4, "ngIf"], [3, "refresh"], ["mat-flat-button", "", "color", "accent", 1, "ml-2", "mr-2", 3, "click"], ["mat-flat-button", "", "color", "warn", 1, "ml-2", "mr-2", 3, "disabled", "click"], [3, "placeholder", "filter"], [1, "ml-auto", "mr-auto"], [3, "pageSize", "displayedColumns", "filterValue", "recentIds", "selection", "vos", "page"]],
      template: function VoSelectPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "perun-web-apps-back-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VoSelectPageComponent_perun_web_apps_refresh_button_5_Template, 1, 0, "perun-web-apps-refresh-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VoSelectPageComponent_button_6_Template, 3, 3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VoSelectPageComponent_button_7_Template, 3, 4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VoSelectPageComponent_perun_web_apps_immediate_filter_8_Template, 1, 1, "perun-web-apps-immediate-filter", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VoSelectPageComponent_mat_spinner_9_Template, 1, 0, "mat-spinner", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, VoSelectPageComponent_perun_web_apps_vo_select_table_10_Template, 1, 6, "perun-web-apps-vo-select-table", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, "VO_MANAGEMENT.TITLE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isVoAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isVoAdmin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_libs_perun_components_src_lib_back_button_back_button_component__WEBPACK_IMPORTED_MODULE_10__["BackButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _libs_perun_components_src_lib_refresh_button_refresh_button_component__WEBPACK_IMPORTED_MODULE_12__["RefreshButtonComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _libs_perun_components_src_lib_immediate_filter_immediate_filter_component__WEBPACK_IMPORTED_MODULE_14__["ImmediateFilterComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _libs_perun_components_src_lib_vo_select_table_vo_select_table_component__WEBPACK_IMPORTED_MODULE_16__["VoSelectTableComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2FkbWluLWd1aS9zcmMvYXBwL3Zvcy9wYWdlcy92by1zZWxlY3QtcGFnZS92by1zZWxlY3QtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VoSelectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-vo-select-page',
          templateUrl: './vo-select-page.component.html',
          styleUrls: ['./vo-select-page.component.scss']
        }]
      }], function () {
        return [{
          type: _core_services_common_side_menu_service__WEBPACK_IMPORTED_MODULE_1__["SideMenuService"]
        }, {
          type: _perun_web_apps_perun_openapi__WEBPACK_IMPORTED_MODULE_2__["VosManagerService"]
        }, {
          type: _perun_web_apps_perun_services__WEBPACK_IMPORTED_MODULE_4__["GuiAuthResolver"]
        }, {
          type: _perun_web_apps_config_table_config__WEBPACK_IMPORTED_MODULE_9__["TableConfigService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/vos-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/vos/vos-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: VosRoutingModule */

  /***/
  function srcAppVosVosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VosRoutingModule", function () {
      return VosRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/vo-select-page/vo-select-page.component */
    "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-detail-page.component */
    "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-detail-page.component */
    "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-overview/vo-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-groups/vo-groups.component */
    "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-members/vo-members.component */
    "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-detail-page.component */
    "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-overview/member-overview.component */
    "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-groups/member-groups.component */
    "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-overview/group-overview.component */
    "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */
    "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-applications/vo-applications.component */
    "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-applications/group-applications.component */
    "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
    /* harmony import */


    var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/application-detail/application-detail.component */
    "./src/app/vos/components/application-detail/application-detail.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-members/group-members.component */
    "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-resources/group-resources.component */
    "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
    /* harmony import */


    var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/application-form-preview/application-form-preview.component */
    "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_resource_attributes_member_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_resource_attributes_group_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_applications_member_applications_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-applications/member-applications.component */
    "./src/app/vos/pages/member-detail-page/member-applications/member-applications.component.ts"); // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length


    var routes = [{
      path: '',
      component: _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_1__["VoSelectPageComponent"]
    }, {
      path: ':voId',
      component: _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_8__["VoDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_5__["VoOverviewComponent"],
        data: {
          animation: 'VoOverviewPage'
        }
      }, {
        path: 'groups',
        component: _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_6__["VoGroupsComponent"],
        data: {
          animation: 'VoGroupsPage'
        }
      }, {
        path: 'members',
        component: _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_7__["VoMembersComponent"],
        data: {
          animation: 'VoMembersPage'
        }
      }, {
        path: 'resources',
        component: _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_13__["VoResourcesComponent"],
        children: [{
          path: '',
          component: _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_32__["VoResourcesOverviewComponent"],
          data: {
            animation: 'VoResourcesOverviewPage'
          }
        }, {
          path: 'preview',
          component: _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_33__["VoResourcesPreviewComponent"],
          data: {
            animation: 'VoResourcesPreviewPage'
          }
        }, {
          path: 'states',
          component: _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_34__["VoResourcesStatesComponent"],
          data: {
            animation: 'VoResourcesStatesPage'
          }
        }, {
          path: 'tags',
          component: _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_35__["VoResourcesTagsComponent"],
          data: {
            animation: 'VoResourcesTagsPage'
          }
        }]
      }, {
        path: 'applications',
        component: _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_14__["VoApplicationsComponent"],
        data: {
          animation: 'VoApplicationsPage'
        }
      }, {
        path: 'applications/:applicationId',
        component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationDetailComponent"],
        data: {
          animation: 'VoApplicationDetailPage'
        }
      }, {
        path: 'settings',
        component: _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_15__["VoSettingsComponent"],
        children: [{
          path: '',
          component: _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_17__["VoSettingsOverviewComponent"],
          data: {
            animation: 'VoSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_16__["VoSettingsAttributesComponent"],
          data: {
            animation: 'VoSettingsAttributesPage'
          }
        }, {
          path: 'expiration',
          component: _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_18__["VoSettingsExpirationComponent"],
          data: {
            animation: 'VoSettingsExpirationPage'
          }
        }, {
          path: 'managers',
          component: _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsManagersComponent"],
          data: {
            animation: 'VoSettingsManagersPage'
          }
        }, {
          path: 'applicationForm',
          component: _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_27__["VoSettingsApplicationFormComponent"],
          data: {
            animation: 'SettingsApplicationFormPage'
          }
        }, {
          path: 'applicationForm/preview',
          component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationFormPreviewComponent"],
          data: {
            animation: 'SettingsApplicationFormPreviewPage'
          }
        }, {
          path: 'notifications',
          component: _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_38__["VoSettingsNotificationsComponent"],
          data: {
            animation: 'SettingsApplicationFormNotificationsPage'
          }
        }, {
          path: 'extsources',
          component: _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_41__["VoSettingsExtsourcesComponent"],
          data: {
            animation: 'VoSettingsExtSourcesPage'
          }
        }]
      }]
    }, {
      path: ':voId/members/:memberId',
      component: _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_4__["MemberDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_9__["MemberOverviewComponent"],
        data: {
          animation: 'MemberOverviewPage'
        }
      }, {
        path: 'groups',
        component: _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_10__["MemberGroupsComponent"],
        data: {
          animation: 'MemberGroupsPage'
        }
      }, {
        path: 'applications',
        component: _pages_member_detail_page_member_applications_member_applications_component__WEBPACK_IMPORTED_MODULE_46__["MemberApplicationsComponent"],
        data: {
          animation: 'MemberApplicationsPage'
        }
      }, {
        path: 'applications/:applicationId',
        component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationDetailComponent"],
        data: {
          animation: 'MemberApplicationDetailPage'
        }
      }, {
        path: 'settings',
        component: _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_29__["MemberSettingsComponent"],
        children: [{
          path: '',
          component: _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_30__["MemberSettingsOverviewComponent"],
          data: {
            animation: 'MemberSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["MemberSettingsAttributesComponent"],
          data: {
            animation: 'MemberSettingsAttributesPage'
          }
        }, {
          path: 'resourceAttributes',
          component: _pages_member_detail_page_member_settings_member_settings_resource_attributes_member_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_43__["MemberSettingsResourceAttributesComponent"],
          data: {
            animation: 'MemberSettingsResourceAttributesPage'
          }
        }, {
          path: 'groupAttributes',
          component: _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_45__["MemberSettingsGroupAttributesComponent"],
          data: {
            animation: 'MemberSettingsGroupAttributesPage'
          }
        }]
      }]
    }, {
      path: ':voId/groups/:groupId',
      component: _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_3__["GroupDetailPageComponent"],
      children: [{
        path: '',
        component: _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_11__["GroupOverviewComponent"],
        data: {
          animation: 'GroupOverviewPage'
        }
      }, {
        path: 'members',
        component: _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_22__["GroupMembersComponent"],
        data: {
          animation: 'GroupMembersPage'
        }
      }, {
        path: 'subgroups',
        component: _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_12__["GroupSubgroupsComponent"],
        data: {
          animation: 'GroupSubgroupsPage'
        }
      }, {
        path: 'applications',
        component: _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_19__["GroupApplicationsComponent"],
        data: {
          animation: 'GroupApplicationsPage'
        }
      }, {
        path: 'resources',
        component: _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_23__["GroupResourcesComponent"],
        data: {
          animation: 'GroupResourcesPage'
        }
      }, {
        path: 'settings',
        component: _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_24__["GroupSettingsComponent"],
        children: [{
          path: '',
          component: _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_26__["GroupSettingsOverviewComponent"],
          data: {
            animation: 'GroupSettingsOverviewPage'
          }
        }, {
          path: 'attributes',
          component: _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_25__["GroupSettingsAttributesComponent"],
          data: {
            animation: 'GroupSettingsAttributesPage'
          }
        }, {
          path: 'resourceAttributes',
          component: _pages_group_detail_page_group_settings_group_settings_resource_attributes_group_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_44__["GroupSettingsResourceAttributesComponent"],
          data: {
            animation: 'GroupSettingsResourceAttributesPage'
          }
        }, {
          path: 'groupAttributes',
          component: _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_45__["MemberSettingsGroupAttributesComponent"],
          data: {
            animation: 'MemberSettingsGroupAttributesPage'
          }
        }, {
          path: 'expiration',
          component: _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_36__["GroupSettingsExpirationComponent"],
          data: {
            animation: 'GroupSettingsExpirationPage'
          }
        }, {
          path: 'managers',
          component: _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_37__["GroupSettingsManagersComponent"],
          data: {
            animation: 'GroupSettingsManagersPage'
          }
        }, {
          path: 'applicationForm',
          component: _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_39__["GroupSettingsApplicationFormComponent"],
          data: {
            animation: 'GroupSettingsApplicationFormPage'
          }
        }, {
          path: 'applicationForm/preview',
          component: _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_28__["ApplicationFormPreviewComponent"]
        }, {
          path: 'notifications',
          component: _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_40__["GroupSettingsNotificationsComponent"],
          data: {
            animation: 'GroupSettingsNotificationsPage'
          }
        }, {
          path: 'relations',
          component: _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_42__["GroupSettingsRelationsComponent"],
          data: {
            animation: 'GroupSettingsRelationsPage'
          }
        }]
      }, {
        path: 'applications/:applicationId',
        component: _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_21__["ApplicationDetailComponent"],
        data: {
          animation: 'GroupApplicationDetailPage'
        }
      }]
    }];

    var VosRoutingModule = function VosRoutingModule() {
      _classCallCheck(this, VosRoutingModule);
    };

    VosRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: VosRoutingModule
    });
    VosRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function VosRoutingModule_Factory(t) {
        return new (t || VosRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VosRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](VosRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/vos/vos.module.ts":
  /*!***********************************!*\
    !*** ./src/app/vos/vos.module.ts ***!
    \***********************************/

  /*! exports provided: VosModule */

  /***/
  function srcAppVosVosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VosModule", function () {
      return VosModule;
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


    var _pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/vo-select-page/vo-select-page.component */
    "./src/app/vos/pages/vo-select-page/vo-select-page.component.ts");
    /* harmony import */


    var _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./vos-routing.module */
    "./src/app/vos/vos-routing.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-detail-page.component */
    "./src/app/vos/pages/vo-detail-page/vo-detail-page.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-detail-page.component */
    "./src/app/vos/pages/group-detail-page/group-detail-page.component.ts");
    /* harmony import */


    var _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/groups-tree/groups-tree.component */
    "./src/app/vos/components/groups-tree/groups-tree.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-overview/vo-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-overview/vo-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-groups/vo-groups.component */
    "./src/app/vos/pages/vo-detail-page/vo-groups/vo-groups.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-members/vo-members.component */
    "./src/app/vos/pages/vo-detail-page/vo-members/vo-members.component.ts");
    /* harmony import */


    var _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/members-list/members-list.component */
    "./src/app/vos/components/members-list/members-list.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-detail-page.component */
    "./src/app/vos/pages/member-detail-page/member-detail-page.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-overview/member-overview.component */
    "./src/app/vos/pages/member-detail-page/member-overview/member-overview.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-groups/member-groups.component */
    "./src/app/vos/pages/member-detail-page/member-groups/member-groups.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-overview/group-overview.component */
    "./src/app/vos/pages/group-detail-page/group-overview/group-overview.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-subgroups/group-subgroups.component */
    "./src/app/vos/pages/group-detail-page/group-subgroups/group-subgroups.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-applications/vo-applications.component */
    "./src/app/vos/pages/vo-detail-page/vo-applications/vo-applications.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-attributes/vo-settings-attributes.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-overview/vo-settings-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-expiration/vo-settings-expiration.component.ts");
    /* harmony import */


    var _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/applications-list/applications-list.component */
    "./src/app/vos/components/applications-list/applications-list.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-applications/group-applications.component */
    "./src/app/vos/pages/group-detail-page/group-applications/group-applications.component.ts");
    /* harmony import */


    var _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/member-group-list/member-group-list.component */
    "./src/app/vos/components/member-group-list/member-group-list.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-managers/vo-settings-managers.component.ts");
    /* harmony import */


    var _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/application-detail/application-detail.component */
    "./src/app/vos/components/application-detail/application-detail.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-members/group-members.component */
    "./src/app/vos/pages/group-detail-page/group-members/group-members.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-resources/group-resources.component */
    "./src/app/vos/pages/group-detail-page/group-resources/group-resources.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-attributes/group-settings-attributes.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-overview/group-settings-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-application-form/vo-settings-application-form.component.ts");
    /* harmony import */


    var _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/application-form-list/application-form-list.component */
    "./src/app/vos/components/application-form-list/application-form-list.component.ts");
    /* harmony import */


    var _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/application-form-preview/application-form-preview.component */
    "./src/app/vos/components/application-form-preview/application-form-preview.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-attributes/member-settings-attributes.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-overview/member-settings-overview.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @perun-web-apps/perun/components */
    "../../libs/perun/components/src/index.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-preview/vo-resources-preview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-tags/vo-resources-tags.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/vo-resources-states.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-overview/vo-resources-overview.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component */
    "./src/app/vos/pages/vo-detail-page/vo-resources/vo-resources-states/state-tab/state-tab.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-expiration/group-settings-expiration.component.ts");
    /* harmony import */


    var _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/expiration-settings/expiration-settings.component */
    "./src/app/vos/components/expiration-settings/expiration-settings.component.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-notifications/vo-settings-notifications.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-application-form/group-settings-application-form.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-managers/group-settings-managers.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-notifications/group-settings-notifications.component.ts");
    /* harmony import */


    var _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/notification-list/notification-list.component */
    "./src/app/vos/components/notification-list/notification-list.component.ts");
    /* harmony import */


    var mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! mat-table-exporter */
    "../../node_modules/mat-table-exporter/__ivy_ngcc__/fesm2015/mat-table-exporter.js");
    /* harmony import */


    var _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! @perun-web-apps/ui/alerts */
    "../../libs/ui/alerts/src/index.ts");
    /* harmony import */


    var _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component */
    "./src/app/vos/pages/vo-detail-page/vo-settings/vo-settings-extsources/vo-settings-extsources.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-relations/group-settings-relations.component.ts");
    /* harmony import */


    var _components_application_list_details_application_list_details_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/application-list-details/application-list-details.component */
    "./src/app/vos/components/application-list-details/application-list-details.component.ts");
    /* harmony import */


    var _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! @perun-web-apps/perun/pipes */
    "../../libs/perun/pipes/src/index.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_resource_attributes_member_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-resource-attributes/member-settings-resource-attributes.component.ts");
    /* harmony import */


    var _pages_group_detail_page_group_settings_group_settings_resource_attributes_group_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component */
    "./src/app/vos/pages/group-detail-page/group-settings/group-settings-resource-attributes/group-settings-resource-attributes.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component */
    "./src/app/vos/pages/member-detail-page/member-settings/member-settings-group-attributes/member-settings-group-attributes.component.ts");
    /* harmony import */


    var _pages_member_detail_page_member_applications_member_applications_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./pages/member-detail-page/member-applications/member-applications.component */
    "./src/app/vos/pages/member-detail-page/member-applications/member-applications.component.ts"); // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:max-line-length


    var VosModule = function VosModule() {
      _classCallCheck(this, VosModule);
    };

    VosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VosModule
    });
    VosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VosModule_Factory(t) {
        return new (t || VosModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__["PerunSharedComponentsModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_57__["PerunPipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VosModule, {
        declarations: [_pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"], _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["VoDetailPageComponent"], _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPageComponent"], _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"], _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__["VoOverviewComponent"], _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__["VoGroupsComponent"], _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__["VoMembersComponent"], _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"], _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailPageComponent"], _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__["MemberOverviewComponent"], _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__["MemberGroupsComponent"], _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__["GroupOverviewComponent"], _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__["GroupSubgroupsComponent"], _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__["VoResourcesComponent"], _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__["VoApplicationsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsAttributesComponent"], _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsOverviewComponent"], _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsExpirationComponent"], _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsListComponent"], _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"], _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__["MemberGroupListComponent"], _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__["VoSettingsManagersComponent"], _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"], _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"], _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"], _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"], _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__["GroupResourcesComponent"], _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__["GroupSettingsComponent"], _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsAttributesComponent"], _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"], _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__["VoSettingsApplicationFormComponent"], _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationFormListComponent"], _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormPreviewComponent"], _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"], _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__["MemberSettingsComponent"], _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsAttributesComponent"], _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsOverviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__["VoResourcesPreviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesTagsComponent"], _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesStatesComponent"], _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesOverviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__["StateTabComponent"], _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__["GroupSettingsExpirationComponent"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__["VoSettingsNotificationsComponent"], _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__["GroupSettingsApplicationFormComponent"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"], _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsManagersComponent"], _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsNotificationsComponent"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__["NotificationListComponent"], _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__["VoSettingsExtsourcesComponent"], _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__["GroupSettingsRelationsComponent"], _components_application_list_details_application_list_details_component__WEBPACK_IMPORTED_MODULE_56__["ApplicationListDetailsComponent"], _pages_member_detail_page_member_settings_member_settings_resource_attributes_member_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_58__["MemberSettingsResourceAttributesComponent"], _pages_group_detail_page_group_settings_group_settings_resource_attributes_group_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_59__["GroupSettingsResourceAttributesComponent"], _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_60__["MemberSettingsGroupAttributesComponent"], _pages_member_detail_page_member_applications_member_applications_component__WEBPACK_IMPORTED_MODULE_61__["MemberApplicationsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__["PerunSharedComponentsModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_57__["PerunPipesModule"]],
        exports: [_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__["AttributesListComponent"], _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _vos_routing_module__WEBPACK_IMPORTED_MODULE_3__["VosRoutingModule"], mat_table_exporter__WEBPACK_IMPORTED_MODULE_52__["MatTableExporterModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _perun_web_apps_ui_alerts__WEBPACK_IMPORTED_MODULE_53__["UiAlertsModule"], _perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__["PerunSharedComponentsModule"], _perun_web_apps_perun_pipes__WEBPACK_IMPORTED_MODULE_57__["PerunPipesModule"]],
          exports: [_perun_web_apps_perun_components__WEBPACK_IMPORTED_MODULE_39__["AttributesListComponent"], _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"]],
          declarations: [_pages_vo_select_page_vo_select_page_component__WEBPACK_IMPORTED_MODULE_2__["VoSelectPageComponent"], _pages_vo_detail_page_vo_detail_page_component__WEBPACK_IMPORTED_MODULE_5__["VoDetailPageComponent"], _pages_group_detail_page_group_detail_page_component__WEBPACK_IMPORTED_MODULE_6__["GroupDetailPageComponent"], _components_groups_tree_groups_tree_component__WEBPACK_IMPORTED_MODULE_7__["GroupsTreeComponent"], _pages_vo_detail_page_vo_overview_vo_overview_component__WEBPACK_IMPORTED_MODULE_8__["VoOverviewComponent"], _pages_vo_detail_page_vo_groups_vo_groups_component__WEBPACK_IMPORTED_MODULE_9__["VoGroupsComponent"], _pages_vo_detail_page_vo_members_vo_members_component__WEBPACK_IMPORTED_MODULE_10__["VoMembersComponent"], _components_members_list_members_list_component__WEBPACK_IMPORTED_MODULE_11__["MembersListComponent"], _pages_member_detail_page_member_detail_page_component__WEBPACK_IMPORTED_MODULE_12__["MemberDetailPageComponent"], _pages_member_detail_page_member_overview_member_overview_component__WEBPACK_IMPORTED_MODULE_13__["MemberOverviewComponent"], _pages_member_detail_page_member_groups_member_groups_component__WEBPACK_IMPORTED_MODULE_14__["MemberGroupsComponent"], _pages_group_detail_page_group_overview_group_overview_component__WEBPACK_IMPORTED_MODULE_15__["GroupOverviewComponent"], _pages_group_detail_page_group_subgroups_group_subgroups_component__WEBPACK_IMPORTED_MODULE_16__["GroupSubgroupsComponent"], _pages_vo_detail_page_vo_resources_vo_resources_component__WEBPACK_IMPORTED_MODULE_17__["VoResourcesComponent"], _pages_vo_detail_page_vo_applications_vo_applications_component__WEBPACK_IMPORTED_MODULE_18__["VoApplicationsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_component__WEBPACK_IMPORTED_MODULE_19__["VoSettingsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_attributes_vo_settings_attributes_component__WEBPACK_IMPORTED_MODULE_20__["VoSettingsAttributesComponent"], _pages_vo_detail_page_vo_settings_vo_settings_overview_vo_settings_overview_component__WEBPACK_IMPORTED_MODULE_21__["VoSettingsOverviewComponent"], _pages_vo_detail_page_vo_settings_vo_settings_expiration_vo_settings_expiration_component__WEBPACK_IMPORTED_MODULE_22__["VoSettingsExpirationComponent"], _components_applications_list_applications_list_component__WEBPACK_IMPORTED_MODULE_23__["ApplicationsListComponent"], _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"], _components_member_group_list_member_group_list_component__WEBPACK_IMPORTED_MODULE_25__["MemberGroupListComponent"], _pages_vo_detail_page_vo_settings_vo_settings_managers_vo_settings_managers_component__WEBPACK_IMPORTED_MODULE_26__["VoSettingsManagersComponent"], _components_application_detail_application_detail_component__WEBPACK_IMPORTED_MODULE_27__["ApplicationDetailComponent"], _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"], _pages_group_detail_page_group_members_group_members_component__WEBPACK_IMPORTED_MODULE_28__["GroupMembersComponent"], _pages_group_detail_page_group_applications_group_applications_component__WEBPACK_IMPORTED_MODULE_24__["GroupApplicationsComponent"], _pages_group_detail_page_group_resources_group_resources_component__WEBPACK_IMPORTED_MODULE_29__["GroupResourcesComponent"], _pages_group_detail_page_group_settings_group_settings_component__WEBPACK_IMPORTED_MODULE_30__["GroupSettingsComponent"], _pages_group_detail_page_group_settings_group_settings_attributes_group_settings_attributes_component__WEBPACK_IMPORTED_MODULE_31__["GroupSettingsAttributesComponent"], _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"], _pages_vo_detail_page_vo_settings_vo_settings_application_form_vo_settings_application_form_component__WEBPACK_IMPORTED_MODULE_33__["VoSettingsApplicationFormComponent"], _components_application_form_list_application_form_list_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationFormListComponent"], _components_application_form_preview_application_form_preview_component__WEBPACK_IMPORTED_MODULE_35__["ApplicationFormPreviewComponent"], _pages_group_detail_page_group_settings_group_settings_overview_group_settings_overview_component__WEBPACK_IMPORTED_MODULE_32__["GroupSettingsOverviewComponent"], _pages_member_detail_page_member_settings_member_settings_component__WEBPACK_IMPORTED_MODULE_36__["MemberSettingsComponent"], _pages_member_detail_page_member_settings_member_settings_attributes_member_settings_attributes_component__WEBPACK_IMPORTED_MODULE_37__["MemberSettingsAttributesComponent"], _pages_member_detail_page_member_settings_member_settings_overview_member_settings_overview_component__WEBPACK_IMPORTED_MODULE_38__["MemberSettingsOverviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_preview_vo_resources_preview_component__WEBPACK_IMPORTED_MODULE_40__["VoResourcesPreviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_tags_vo_resources_tags_component__WEBPACK_IMPORTED_MODULE_41__["VoResourcesTagsComponent"], _pages_vo_detail_page_vo_resources_vo_resources_states_vo_resources_states_component__WEBPACK_IMPORTED_MODULE_42__["VoResourcesStatesComponent"], _pages_vo_detail_page_vo_resources_vo_resources_overview_vo_resources_overview_component__WEBPACK_IMPORTED_MODULE_43__["VoResourcesOverviewComponent"], _pages_vo_detail_page_vo_resources_vo_resources_states_state_tab_state_tab_component__WEBPACK_IMPORTED_MODULE_44__["StateTabComponent"], _pages_group_detail_page_group_settings_group_settings_expiration_group_settings_expiration_component__WEBPACK_IMPORTED_MODULE_45__["GroupSettingsExpirationComponent"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"], _pages_vo_detail_page_vo_settings_vo_settings_notifications_vo_settings_notifications_component__WEBPACK_IMPORTED_MODULE_47__["VoSettingsNotificationsComponent"], _pages_group_detail_page_group_settings_group_settings_application_form_group_settings_application_form_component__WEBPACK_IMPORTED_MODULE_48__["GroupSettingsApplicationFormComponent"], _components_expiration_settings_expiration_settings_component__WEBPACK_IMPORTED_MODULE_46__["ExpirationSettingsComponent"], _pages_group_detail_page_group_settings_group_settings_managers_group_settings_managers_component__WEBPACK_IMPORTED_MODULE_49__["GroupSettingsManagersComponent"], _pages_group_detail_page_group_settings_group_settings_notifications_group_settings_notifications_component__WEBPACK_IMPORTED_MODULE_50__["GroupSettingsNotificationsComponent"], _components_notification_list_notification_list_component__WEBPACK_IMPORTED_MODULE_51__["NotificationListComponent"], _pages_vo_detail_page_vo_settings_vo_settings_extsources_vo_settings_extsources_component__WEBPACK_IMPORTED_MODULE_54__["VoSettingsExtsourcesComponent"], _pages_group_detail_page_group_settings_group_settings_relations_group_settings_relations_component__WEBPACK_IMPORTED_MODULE_55__["GroupSettingsRelationsComponent"], _components_application_list_details_application_list_details_component__WEBPACK_IMPORTED_MODULE_56__["ApplicationListDetailsComponent"], _pages_member_detail_page_member_settings_member_settings_resource_attributes_member_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_58__["MemberSettingsResourceAttributesComponent"], _pages_group_detail_page_group_settings_group_settings_resource_attributes_group_settings_resource_attributes_component__WEBPACK_IMPORTED_MODULE_59__["GroupSettingsResourceAttributesComponent"], _pages_member_detail_page_member_settings_member_settings_group_attributes_member_settings_group_attributes_component__WEBPACK_IMPORTED_MODULE_60__["MemberSettingsGroupAttributesComponent"], _pages_member_detail_page_member_applications_member_applications_component__WEBPACK_IMPORTED_MODULE_61__["MemberApplicationsComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=vos-vos-module-es5.js.map