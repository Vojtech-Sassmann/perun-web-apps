function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,s){return t&&_defineProperties(e.prototype,t),s&&_defineProperties(e,s),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{Fm3m:function(e,t,s){"use strict";s.d(t,"a",(function(){return l}));var r=s("X2Q7"),i=s("Iydx"),n=s("EM62"),c=s("sEIs"),a=s("2kYt"),o=s("NU+N");function u(e,t){if(1&e&&n.Rb(0,"app-managers-page",1),2&e){var s=n.ic();n.oc("complementaryObject",s.resource)("complementaryObjectType",s.type)("theme",s.theme)("availableRoles",s.availableRoles)}}var l=function(){var e=function(){function e(t,s){_classCallCheck(this,e),this.route=t,this.resourceService=s,this.availableRoles=[i.a.RESOURCEADMIN],this.type="Resource",this.theme="resource-theme"}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.parent.params.subscribe((function(t){e.resourceService.getResourceById(t.resourceId).subscribe((function(t){e.resource=t}))}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(n.Qb(c.a),n.Qb(r.l))},e.\u0275cmp=n.Kb({type:e,selectors:[["app-resource-settings-managers"]],decls:1,vars:1,consts:[[3,"complementaryObject","complementaryObjectType","theme","availableRoles",4,"ngIf"],[3,"complementaryObject","complementaryObjectType","theme","availableRoles"]],template:function(e,t){1&e&&n.Jc(0,u,1,4,"app-managers-page",0),2&e&&n.oc("ngIf",t.resource)},directives:[a.t,o.a],styles:[""]}),e}()},GyaY:function(e,t,s){"use strict";s.d(t,"a",(function(){return c}));var r=s("TkCa"),i=s("EM62"),n=s("ma6z"),c=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Kb({type:e,selectors:[["app-resource-settings"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Gb("router-component",!0)},decls:1,vars:0,template:function(e,t){1&e&&i.Rb(0,"app-animated-router-outlet")},directives:[n.a],styles:[""],data:{animation:[r.a]}}),e}()},HUrR:function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("X2Q7"),i=s("EM62"),n=s("sEIs"),c=s("ZG5M"),a=function(){var e=function(){function e(t,s){_classCallCheck(this,e),this.route=t,this.resourceManager=s,this.items=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.parent.parent.params.subscribe((function(t){e.resourceManager.getResourceById(t.resourceId).subscribe((function(t){e.resource=t,e.initItems("facilities"!==e.route.parent.parent.parent.snapshot.url[0].path)}))}))}},{key:"initItems",value:function(e){this.items=[{cssIcon:"perun-attributes",url:"".concat(e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId,"/resources/").concat(this.resource.id,"/settings/attributes"),label:"MENU_ITEMS.RESOURCE.ATTRIBUTES",style:"resource-btn"},{cssIcon:"perun-manager",url:"".concat(e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId,"/resources/").concat(this.resource.id,"/settings/managers"),label:"MENU_ITEMS.RESOURCE.MANAGERS",style:"resource-btn"}]}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(n.a),i.Qb(r.l))},e.\u0275cmp=i.Kb({type:e,selectors:[["app-resource-settings-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Gb("router-component",!0)},decls:2,vars:2,consts:[[3,"items","size"]],template:function(e,t){1&e&&(i.Wb(0,"div"),i.Rb(1,"perun-web-apps-menu-buttons-field",0),i.Vb()),2&e&&(i.Cb(1),i.oc("items",t.items)("size","small"))},directives:[c.a],styles:[""]}),e}()},Igkk:function(e,t,s){"use strict";s.d(t,"a",(function(){return R}));var r=s("Ssnw"),i=s("HHEo"),n=s("cqs0"),c=s("mEf3"),a=s("IDQ9"),o=s("8clQ"),u=s("X2Q7"),l=s("iyZ4"),b=s("EM62"),p=s("sEIs"),f=s("OZ4H"),d=s("s2Ay"),h=s("0XDM"),g=s("PBFl"),I=s("A8Ay"),v=s("2kYt"),m=s("csyo"),E=s("LKLE"),S=["list"];function C(e,t){1&e&&b.Rb(0,"mat-spinner",8)}function y(e,t){if(1&e){var s=b.Xb();b.Wb(0,"perun-web-apps-attributes-list",9,10),b.ec("page",(function(e){return b.Bc(s),b.ic().pageChanged(e)})),b.Vb()}if(2&e){var r=b.ic();b.oc("pageSize",r.pageSize)("filterValue",r.filterValue)("attributes",r.attributes)("selection",r.selection)}}var R=function(){var e=function(){function e(t,s,r,i,c,a){var o=this;_classCallCheck(this,e),this.attributesManager=t,this.route=s,this.dialog=r,this.notificator=i,this.tableConfigService=c,this.translate=a,this.attributes=[],this.selection=new n.c(!0,[]),this.filterValue="",this.tableId=l.m,this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_SAVE").subscribe((function(e){return o.saveSuccessMessage=e})),this.translate.get("RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SUCCESS_DELETE").subscribe((function(e){return o.deleteSuccessMessage=e}))}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.route.parent.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.refreshTable()}))}},{key:"onDelete",value:function(){var e=this,t=Object(o.k)();t.width="450px",t.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected},this.dialog.open(c.a,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onSave",value:function(){var e=this;this.list.updateMapAttributes();var t=Object(o.k)();t.width="450px",t.data={entityId:this.resourceId,entity:"resource",attributes:this.selection.selected},this.dialog.open(i.c,t).afterClosed().subscribe((function(t){t&&e.refreshTable()}))}},{key:"onCreate",value:function(){var e=this,t=Object(o.k)();t.width="1050px",t.data={entityId:this.resourceId,entity:"resource",notEmptyAttributes:this.attributes,style:"resource-theme"},this.dialog.open(a.a,t).afterClosed().subscribe((function(t){"saved"===t&&e.refreshTable()}))}},{key:"refreshTable",value:function(){var e=this;this.loading=!0,this.attributesManager.getResourceAttributes(this.resourceId).subscribe((function(t){e.attributes=t,e.selection.clear(),e.loading=!1}))}},{key:"applyFilter",value:function(e){this.filterValue=e}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(b.Qb(u.c),b.Qb(p.a),b.Qb(f.b),b.Qb(r.j),b.Qb(l.bb),b.Qb(d.e))},e.\u0275cmp=b.Kb({type:e,selectors:[["app-resource-settings-attributes"]],viewQuery:function(e,t){var s;1&e&&b.Sc(S,!0),2&e&&b.wc(s=b.fc())&&(t.list=s.first)},hostVars:2,hostBindings:function(e,t){2&e&&b.Gb("router-component",!0)},decls:17,vars:17,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",1,"mr-2",3,"click"],["mat-flat-button","","color","accent",1,"mr-2",3,"disabled","click"],["mat-flat-button","","color","warn",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],[3,"pageSize","filterValue","attributes","selection","page",4,"ngIf"],[1,"ml-auto","mr-auto"],[3,"pageSize","filterValue","attributes","selection","page"],["list",""]],template:function(e,t){1&e&&(b.Wb(0,"div"),b.Wb(1,"h1",0),b.Lc(2),b.jc(3,"translate"),b.Vb(),b.Wb(4,"perun-web-apps-refresh-button",1),b.ec("refresh",(function(){return t.refreshTable()})),b.Vb(),b.Wb(5,"button",2),b.ec("click",(function(){return t.onCreate()})),b.Lc(6),b.jc(7,"translate"),b.Vb(),b.Wb(8,"button",3),b.ec("click",(function(){return t.onSave()})),b.Lc(9),b.jc(10,"translate"),b.Vb(),b.Wb(11,"button",4),b.ec("click",(function(){return t.onDelete()})),b.Lc(12),b.jc(13,"translate"),b.Vb(),b.Wb(14,"perun-web-apps-immediate-filter",5),b.ec("filter",(function(e){return t.applyFilter(e)})),b.Vb(),b.Jc(15,C,1,0,"mat-spinner",6),b.Jc(16,y,2,4,"perun-web-apps-attributes-list",7),b.Vb()),2&e&&(b.Cb(2),b.Mc(b.kc(3,9,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.TITLE")),b.Cb(4),b.Nc(" ",b.kc(7,11,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.CREATE")," "),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(10,13,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.SAVE")," "),b.Cb(2),b.oc("disabled",0===t.selection.selected.length),b.Cb(1),b.Nc(" ",b.kc(13,15,"RESOURCE_DETAIL.SETTINGS.ATTRIBUTES.DELETE")," "),b.Cb(2),b.oc("placeholder","SHARED_LIB.PERUN.COMPONENTS.ATTRIBUTES_LIST.FILTER"),b.Cb(1),b.oc("ngIf",t.loading),b.Cb(1),b.oc("ngIf",!t.loading))},directives:[h.a,g.b,I.a,v.t,m.c,E.a],pipes:[d.d],styles:[""]}),e}()},jblC:function(e,t,s){"use strict";s.d(t,"a",(function(){return T}));var r=s("X2Q7"),i=s("cqs0"),n=s("ILoV"),c=s("VEwN"),a=s("iyZ4"),o=s("8clQ"),u=s("EM62"),l=s("sEIs"),b=s("OZ4H"),p=s("0XDM"),f=s("PBFl"),d=s("FoxU"),h=s("2kYt"),g=s("csyo"),I=s("K9kF"),v=s("FcRk"),m=s("s2Ay"),E=["checkbox"];function S(e,t){1&e&&u.Rb(0,"mat-spinner",8)}var C=function(){return["vo","menu"]};function y(e,t){if(1&e){var s=u.Xb();u.Wb(0,"div",9),u.Wb(1,"perun-web-apps-groups-list",10),u.ec("page",(function(e){return u.Bc(s),u.ic().pageChanged(e)})),u.Vb(),u.Vb()}if(2&e){var r=u.ic();u.Cb(1),u.oc("pageSize",r.pageSize)("groups",r.filteredGroups)("selection",r.selected)("disableMembers",!1)("hideColumns",u.sc(5,C))}}function R(e,t){1&e&&(u.Wb(0,"app-alert",11),u.Lc(1),u.jc(2,"translate"),u.Vb()),2&e&&(u.Cb(1),u.Nc(" ",u.kc(2,1,"RESOURCE_DETAIL.ASSIGNED_GROUPS.NO_GROUPS"),"\n"))}var T=function(){var e=function(){function e(t,s,r,n){_classCallCheck(this,e),this.route=t,this.resourcesManager=s,this.tableConfigService=r,this.dialog=n,this.assignedGroups=[],this.selected=new i.c(!0,[]),this.filteredGroups=[],this.tableId=a.I}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.pageSize=this.tableConfigService.getTablePageSize(this.tableId),this.loading=!0,this.route.parent.params.subscribe((function(t){e.resourceId=t.resourceId,e.loadAllGroups()}))}},{key:"loadAllGroups",value:function(){var e=this;this.loading=!0,this.resourcesManager.getAssignedGroups(this.resourceId).subscribe((function(t){e.assignedGroups=t,e.filteredGroups=t,e.selected.clear(),e.loading=!1}))}},{key:"addGroup",value:function(){var e=this,t=Object(o.k)();t.width="800px",t.data={theme:"resource-theme",resourceId:this.resourceId},this.dialog.open(c.a,t).afterClosed().subscribe((function(t){t&&e.loadAllGroups()}))}},{key:"removeGroups",value:function(){var e=this,t=Object(o.k)();t.width="500px",t.data={resourceId:this.resourceId,groups:this.selected.selected},this.dialog.open(n.a,t).afterClosed().subscribe((function(t){t&&e.loadAllGroups()}))}},{key:"applyFilter",value:function(e){this.filteredGroups=this.assignedGroups.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}},{key:"pageChanged",value:function(e){this.pageSize=e.pageSize,this.tableConfigService.setTablePageSize(this.tableId,e.pageSize)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Qb(l.a),u.Qb(r.l),u.Qb(a.bb),u.Qb(b.b))},e.\u0275cmp=u.Kb({type:e,selectors:[["app-perun-web-apps-resource-groups"]],viewQuery:function(e,t){var s;1&e&&u.Hc(E,!0),2&e&&u.wc(s=u.fc())&&(t.checkbox=s.first)},decls:14,vars:14,consts:[[1,"page-subtitle"],[3,"refresh"],["mat-flat-button","","color","accent",3,"click"],["mat-flat-button","","color","warn",1,"ml-2",3,"disabled","click"],[3,"placeholder","filter"],["class","ml-auto mr-auto",4,"ngIf"],["class","mt-3",4,"ngIf"],["color","warn",4,"ngIf"],[1,"ml-auto","mr-auto"],[1,"mt-3"],[3,"pageSize","groups","selection","disableMembers","hideColumns","page"],["color","warn"]],template:function(e,t){1&e&&(u.Wb(0,"h1",0),u.Lc(1),u.jc(2,"translate"),u.Vb(),u.Wb(3,"perun-web-apps-refresh-button",1),u.ec("refresh",(function(){return t.loadAllGroups()})),u.Vb(),u.Wb(4,"button",2),u.ec("click",(function(){return t.addGroup()})),u.Lc(5),u.jc(6,"translate"),u.Vb(),u.Wb(7,"button",3),u.ec("click",(function(){return t.removeGroups()})),u.Lc(8),u.jc(9,"translate"),u.Vb(),u.Wb(10,"app-debounce-filter",4),u.ec("filter",(function(e){return t.applyFilter(e)})),u.Vb(),u.Jc(11,S,1,0,"mat-spinner",5),u.Jc(12,y,2,6,"div",6),u.Jc(13,R,3,3,"app-alert",7)),2&e&&(u.Cb(1),u.Mc(u.kc(2,8,"RESOURCE_DETAIL.ASSIGNED_GROUPS.TITLE")),u.Cb(4),u.Nc(" ",u.kc(6,10,"RESOURCE_DETAIL.ASSIGNED_GROUPS.ADD_GROUP"),"\n"),u.Cb(2),u.oc("disabled",0===t.selected.selected.length),u.Cb(1),u.Nc(" ",u.kc(9,12,"RESOURCE_DETAIL.ASSIGNED_GROUPS.REMOVE_GROUP"),"\n"),u.Cb(2),u.oc("placeholder","RESOURCE_DETAIL.ASSIGNED_GROUPS.FILTER_GROUPS"),u.Cb(1),u.oc("ngIf",t.loading),u.Cb(1),u.oc("ngIf",!t.loading&&0!==t.assignedGroups.length),u.Cb(1),u.oc("ngIf",0===t.assignedGroups.length&&!t.loading))},directives:[p.a,f.b,d.a,h.t,g.c,I.a,v.a],pipes:[m.d],styles:[""]}),e}()},nSPi:function(e,t,s){"use strict";s.d(t,"a",(function(){return I}));var r=s("TkCa"),i=s("4sdY"),n=s("EkAj"),c=s("X2Q7"),a=s("EM62"),o=s("sEIs"),u=s("2kYt"),l=s("EtYo"),b=s("ma6z"),p=s("s2Ay"),f=function(e,t){return["/facilities",e,"resources",t]},d=function(e){return["/facilities",e]},h=function(e){return["/organizations",e]};function g(e,t){if(1&e&&(a.Wb(0,"div",1),a.Rb(1,"perun-web-apps-back-button"),a.Wb(2,"h1",2),a.Lc(3),a.jc(4,"translate"),a.Wb(5,"a",3),a.Lc(6),a.Vb(),a.Wb(7,"span",4),a.Lc(8),a.Vb(),a.Rb(9,"br"),a.Wb(10,"span",5),a.Lc(11),a.jc(12,"translate"),a.Wb(13,"a",3),a.Lc(14),a.Vb(),a.Wb(15,"span",4),a.Lc(16),a.Vb(),a.Vb(),a.Wb(17,"span",6),a.Lc(18),a.jc(19,"translate"),a.Wb(20,"a",3),a.Lc(21),a.Vb(),a.Wb(22,"span",4),a.Lc(23),a.Vb(),a.Vb(),a.Wb(24,"span",6),a.Lc(25),a.jc(26,"translate"),a.Wb(27,"span",7),a.Lc(28),a.Vb(),a.Vb(),a.Vb(),a.Rb(29,"app-animated-router-outlet"),a.Vb()),2&e){var s=a.ic();a.Cb(3),a.Nc(" ",a.kc(4,14,"RESOURCE_DETAIL.TITLE")," "),a.Cb(2),a.oc("routerLink",a.uc(22,f,s.resource.facilityId,s.resource.id)),a.Cb(1),a.Nc(" ",s.resource.name," "),a.Cb(2),a.Nc(" \xa0#",s.resource.id," "),a.Cb(3),a.Nc(" ",a.kc(12,16,"RESOURCE_DETAIL.FACILITY"),": "),a.Cb(2),a.oc("routerLink",a.tc(25,d,s.resource.facilityId)),a.Cb(1),a.Nc(" ",s.resource.facility.name," "),a.Cb(2),a.Nc(" \xa0#",s.resource.facilityId," "),a.Cb(2),a.Nc(" ",a.kc(19,18,"RESOURCE_DETAIL.VO"),": "),a.Cb(2),a.oc("routerLink",a.tc(27,h,s.resource.vo.id)),a.Cb(1),a.Nc(" ",s.resource.vo.name," "),a.Cb(2),a.Nc(" \xa0#",s.resource.voId," "),a.Cb(2),a.Nc(" ",a.kc(26,20,"RESOURCE_DETAIL.DESCRIPTION"),": "),a.Cb(3),a.Nc(" ",s.resource.description," ")}}var I=function(){var e=function(){function e(t,s,r,i,n,c){_classCallCheck(this,e),this.route=t,this.facilityManager=s,this.vosManagerService=r,this.resourcesManager=i,this.sideMenuService=n,this.sideMenuItemService=c}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.resourcesManager.getRichResourceById(t.resourceId).subscribe((function(t){e.resource=t,"facilities"===e.route.parent.snapshot.url[0].path?e.facilityManager.getFacilityById(t.facilityId).subscribe((function(s){var r=e.sideMenuItemService.parseFacility(s),i=e.sideMenuItemService.parseResource(t,!1);e.sideMenuService.setFacilityMenuItems([r,i])})):e.vosManagerService.getVoById(t.voId).subscribe((function(s){var r=e.sideMenuItemService.parseVo(s),i=e.sideMenuItemService.parseResource(t,!0);e.sideMenuService.setAccessMenuItems([r,i])}))}))}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(a.Qb(o.a),a.Qb(c.g),a.Qb(c.p),a.Qb(c.l),a.Qb(i.a),a.Qb(n.a))},e.\u0275cmp=a.Kb({type:e,selectors:[["app-resource-detail-page"]],decls:1,vars:1,consts:[["class","container-fluid pl-xl-5 pr-xl-5 resource-theme",4,"ngIf"],[1,"container-fluid","pl-xl-5","pr-xl-5","resource-theme"],[1,"page-title"],[1,"resource-link",3,"routerLink"],[1,"text-muted"],[1,"text-muted","mr-5","entity-info"],[1,"text-muted","mr-5","entity-info","break-line"],[1,"resource-text"]],template:function(e,t){1&e&&a.Jc(0,g,30,29,"div",0),2&e&&a.oc("ngIf",void 0!==t.resource)},directives:[u.t,l.a,o.i,b.a],pipes:[p.d],styles:[".break-line[_ngcontent-%COMP%]{display:inline-block}"],data:{animation:[r.a]}}),e}()},"y/MV":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var r=s("X2Q7"),i=s("EM62"),n=s("sEIs"),c=s("ZG5M"),a=function(){var e=function(){function e(t,s){_classCallCheck(this,e),this.resourcesManager=t,this.route=s,this.navItems=[]}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.route.params.subscribe((function(t){e.resourcesManager.getResourceById(t.resourceId).subscribe((function(t){e.resource=t,e.initItems("facilities"!==e.route.parent.parent.snapshot.url[0].path)}))}))}},{key:"initItems",value:function(e){var t=e?"/organizations/"+this.resource.voId:"/facilities/"+this.resource.facilityId;this.navItems=[{cssIcon:"perun-group",url:"".concat(t,"/resources/").concat(this.resource.id,"/groups"),label:"MENU_ITEMS.RESOURCE.ASSIGNED_GROUPS",style:"resource-btn"},{cssIcon:"perun-settings2",url:"".concat(t,"/resources/").concat(this.resource.id,"/settings"),label:"MENU_ITEMS.RESOURCE.SETTINGS",style:"resource-btn"}]}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i.Qb(r.l),i.Qb(n.a))},e.\u0275cmp=i.Kb({type:e,selectors:[["app-resource-overview"]],hostVars:2,hostBindings:function(e,t){2&e&&i.Gb("router-component",!0)},decls:2,vars:2,consts:[[3,"items","size"]],template:function(e,t){1&e&&(i.Wb(0,"div"),i.Rb(1,"perun-web-apps-menu-buttons-field",0),i.Vb()),2&e&&(i.Cb(1),i.oc("items",t.navItems)("size","small"))},directives:[c.a],styles:[""]}),e}()}}]);