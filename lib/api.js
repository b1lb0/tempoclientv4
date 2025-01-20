"use strict";
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
var api_1 = require("./api/");
var api_2 = require("./api/");
var api_3 = require("./api/");
var api_4 = require("./api/");
var api_5 = require("./api/");
var api_6 = require("./api/");
var api_7 = require("./api/");
var api_8 = require("./api/");
var api_9 = require("./api/");
var api_10 = require("./api/");
var api_11 = require("./api/");
var api_12 = require("./api/");
var api_13 = require("./api/");
var api_14 = require("./api/");
var api_15 = require("./api/");
var api_16 = require("./api/");
var api_17 = require("./api/");
var api_18 = require("./api/");
var api_19 = require("./api/");
var api_20 = require("./api/");
var models_1 = require("./model/models");
// This is the entrypoint for the package
__exportStar(require("./api/"), exports);
__exportStar(require("./model/models"), exports);
var TempoApi = /** @class */ (function () {
    function TempoApi(options) {
        this.accountCategories = new api_1.AccountCategoriesApi();
        this.accountCategoryTypes = new api_19.AccountCategoryTypesApi();
        this.accountLinks = new api_2.AccountLinksApi();
        this.accounts = new api_20.AccountsApi();
        this.customers = new api_18.CustomersApi();
        this.genericResources = new api_3.GenericResourcesApi();
        this.globalConfiguration = new api_17.GlobalConfigurationsApi();
        this.holidaySchemes = new api_4.HolidaySchemesApi();
        this.periods = new api_16.PeriodsApi();
        this.permissionRoles = new api_5.PermissionRolesApi();
        this.plans = new api_15.PlansApi();
        this.programs = new api_11.ProgramApi();
        this.roles = new api_6.RolesApi();
        this.teamMemberships = new api_14.TeamMembershipsApi();
        this.teamLinks = new api_7.TeamLinksApi();
        this.teams = new api_7.TeamLinksApi();
        this.timesheetApprovals = new api_13.TimesheetApprovalsApi();
        this.userSchedule = new api_8.UserScheduleApi();
        this.workAttributes = new api_12.WorkAttributesApi();
        this.workloadSchemes = new api_9.WorkloadSchemesApi();
        this.worklogs = new api_10.WorklogsApi();
        this.config = options;
        this.auth = new models_1.HttpBearerAuth();
        this.auth.accessToken = this.config.bearerToken;
        this.accountCategories.setDefaultAuthentication(this.auth);
        this.accountCategoryTypes.setDefaultAuthentication(this.auth);
        this.accountLinks.setDefaultAuthentication(this.auth);
        this.accounts.setDefaultAuthentication(this.auth);
        this.customers.setDefaultAuthentication(this.auth);
        this.genericResources.setDefaultAuthentication(this.auth);
        this.globalConfiguration.setDefaultAuthentication(this.auth);
        this.holidaySchemes.setDefaultAuthentication(this.auth);
        this.periods.setDefaultAuthentication(this.auth);
        this.permissionRoles.setDefaultAuthentication(this.auth);
        this.plans.setDefaultAuthentication(this.auth);
        this.programs.setDefaultAuthentication(this.auth);
        this.roles.setDefaultAuthentication(this.auth);
        this.teamMemberships.setDefaultAuthentication(this.auth);
        this.teamLinks.setDefaultAuthentication(this.auth);
        this.teams.setDefaultAuthentication(this.auth);
        this.timesheetApprovals.setDefaultAuthentication(this.auth);
        this.userSchedule.setDefaultAuthentication(this.auth);
        this.workAttributes.setDefaultAuthentication(this.auth);
        this.workloadSchemes.setDefaultAuthentication(this.auth);
        this.worklogs.setDefaultAuthentication(this.auth);
    }
    return TempoApi;
}());
exports.default = TempoApi;
/*
How to use
const run = async () => {
    const tempoClient = new TempoApi({bearerToken: "XXXXXXXXXX"})
    const accounts = await tempoClient.accounts.getAccounts(0, 1)
    console.log(JSON.stringify(accounts.body))
}

run()
*/
