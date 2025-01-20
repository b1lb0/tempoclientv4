"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIS = exports.HttpError = void 0;
__exportStar(require("./accountCategoriesApi"), exports);
var accountCategoriesApi_1 = require("./accountCategoriesApi");
__exportStar(require("./accountCategoryTypesApi"), exports);
var accountCategoryTypesApi_1 = require("./accountCategoryTypesApi");
__exportStar(require("./accountLinksApi"), exports);
var accountLinksApi_1 = require("./accountLinksApi");
__exportStar(require("./accountsApi"), exports);
var accountsApi_1 = require("./accountsApi");
__exportStar(require("./customersApi"), exports);
var customersApi_1 = require("./customersApi");
__exportStar(require("./flexPlansApi"), exports);
var flexPlansApi_1 = require("./flexPlansApi");
__exportStar(require("./genericResourceTeamMembersApi"), exports);
var genericResourceTeamMembersApi_1 = require("./genericResourceTeamMembersApi");
__exportStar(require("./genericResourcesApi"), exports);
var genericResourcesApi_1 = require("./genericResourcesApi");
__exportStar(require("./globalConfigurationsApi"), exports);
var globalConfigurationsApi_1 = require("./globalConfigurationsApi");
__exportStar(require("./holidaySchemesApi"), exports);
var holidaySchemesApi_1 = require("./holidaySchemesApi");
__exportStar(require("./periodsApi"), exports);
var periodsApi_1 = require("./periodsApi");
__exportStar(require("./permissionRolesApi"), exports);
var permissionRolesApi_1 = require("./permissionRolesApi");
__exportStar(require("./planApprovalsApi"), exports);
var planApprovalsApi_1 = require("./planApprovalsApi");
__exportStar(require("./plansApi"), exports);
var plansApi_1 = require("./plansApi");
__exportStar(require("./programApi"), exports);
var programApi_1 = require("./programApi");
__exportStar(require("./rolesApi"), exports);
var rolesApi_1 = require("./rolesApi");
__exportStar(require("./skillAssignmentsApi"), exports);
var skillAssignmentsApi_1 = require("./skillAssignmentsApi");
__exportStar(require("./skillsApi"), exports);
var skillsApi_1 = require("./skillsApi");
__exportStar(require("./teamApi"), exports);
var teamApi_1 = require("./teamApi");
__exportStar(require("./teamLinksApi"), exports);
var teamLinksApi_1 = require("./teamLinksApi");
__exportStar(require("./teamMembershipsApi"), exports);
var teamMembershipsApi_1 = require("./teamMembershipsApi");
__exportStar(require("./timesheetApprovalsApi"), exports);
var timesheetApprovalsApi_1 = require("./timesheetApprovalsApi");
__exportStar(require("./userScheduleApi"), exports);
var userScheduleApi_1 = require("./userScheduleApi");
__exportStar(require("./workAttributesApi"), exports);
var workAttributesApi_1 = require("./workAttributesApi");
__exportStar(require("./workloadSchemesApi"), exports);
var workloadSchemesApi_1 = require("./workloadSchemesApi");
__exportStar(require("./worklogsApi"), exports);
var worklogsApi_1 = require("./worklogsApi");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(response, body, statusCode) {
        var _this = _super.call(this, 'HTTP request failed') || this;
        _this.response = response;
        _this.body = body;
        _this.statusCode = statusCode;
        _this.name = 'HttpError';
        return _this;
    }
    return HttpError;
}(Error));
exports.HttpError = HttpError;
exports.APIS = [accountCategoriesApi_1.AccountCategoriesApi, accountCategoryTypesApi_1.AccountCategoryTypesApi, accountLinksApi_1.AccountLinksApi, accountsApi_1.AccountsApi, customersApi_1.CustomersApi, flexPlansApi_1.FlexPlansApi, genericResourceTeamMembersApi_1.GenericResourceTeamMembersApi, genericResourcesApi_1.GenericResourcesApi, globalConfigurationsApi_1.GlobalConfigurationsApi, holidaySchemesApi_1.HolidaySchemesApi, periodsApi_1.PeriodsApi, permissionRolesApi_1.PermissionRolesApi, planApprovalsApi_1.PlanApprovalsApi, plansApi_1.PlansApi, programApi_1.ProgramApi, rolesApi_1.RolesApi, skillAssignmentsApi_1.SkillAssignmentsApi, skillsApi_1.SkillsApi, teamApi_1.TeamApi, teamLinksApi_1.TeamLinksApi, teamMembershipsApi_1.TeamMembershipsApi, timesheetApprovalsApi_1.TimesheetApprovalsApi, userScheduleApi_1.UserScheduleApi, workAttributesApi_1.WorkAttributesApi, workloadSchemesApi_1.WorkloadSchemesApi, worklogsApi_1.WorklogsApi];
