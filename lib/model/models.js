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
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./account"), exports);
__exportStar(require("./accountInput"), exports);
__exportStar(require("./accountLink"), exports);
__exportStar(require("./accountLinkInput"), exports);
__exportStar(require("./accountLinkResults"), exports);
__exportStar(require("./accountLinkScope"), exports);
__exportStar(require("./accountSearchInput"), exports);
__exportStar(require("./accountUser"), exports);
__exportStar(require("./activeMemberships"), exports);
__exportStar(require("./category"), exports);
__exportStar(require("./categoryInput"), exports);
__exportStar(require("./categoryResults"), exports);
__exportStar(require("./categoryType"), exports);
__exportStar(require("./categoryTypeResults"), exports);
__exportStar(require("./createWorkAttributeInput"), exports);
__exportStar(require("./customer"), exports);
__exportStar(require("./customerInput"), exports);
__exportStar(require("./customerSearchInput"), exports);
__exportStar(require("./daySchedule"), exports);
__exportStar(require("./dayScheduleResults"), exports);
__exportStar(require("./entity"), exports);
__exportStar(require("./flexPlan"), exports);
__exportStar(require("./flexPlanInput"), exports);
__exportStar(require("./flexPlanSearchInput"), exports);
__exportStar(require("./flexPlanSearchResult"), exports);
__exportStar(require("./genericResource"), exports);
__exportStar(require("./genericResourceInput"), exports);
__exportStar(require("./genericResourceReference"), exports);
__exportStar(require("./genericResourceSearchInput"), exports);
__exportStar(require("./genericResourceTeamMember"), exports);
__exportStar(require("./genericResourceTeamMemberInput"), exports);
__exportStar(require("./genericResourceTeamMembers"), exports);
__exportStar(require("./globalConfiguration"), exports);
__exportStar(require("./holiday"), exports);
__exportStar(require("./holidayInput"), exports);
__exportStar(require("./holidayResults"), exports);
__exportStar(require("./holidayScheme"), exports);
__exportStar(require("./holidaySchemeInputBean"), exports);
__exportStar(require("./holidaySchemeMembersInput"), exports);
__exportStar(require("./holidaySchemeResults"), exports);
__exportStar(require("./issue"), exports);
__exportStar(require("./jiraWorklogIdList"), exports);
__exportStar(require("./memberMemberships"), exports);
__exportStar(require("./membership"), exports);
__exportStar(require("./membershipInput"), exports);
__exportStar(require("./membershipSearchInput"), exports);
__exportStar(require("./pageable"), exports);
__exportStar(require("./pageableAccount"), exports);
__exportStar(require("./pageableAccountLink"), exports);
__exportStar(require("./pageableBeanWithoutLinks"), exports);
__exportStar(require("./pageableCustomer"), exports);
__exportStar(require("./pageableGenericResourceWithoutSelfLink"), exports);
__exportStar(require("./pageableMemberMemberships"), exports);
__exportStar(require("./pageableMetadata"), exports);
__exportStar(require("./pageableMetadataBeanWithoutLinks"), exports);
__exportStar(require("./pageablePermissionRole"), exports);
__exportStar(require("./pageablePlan"), exports);
__exportStar(require("./pageablePlanBeanWithoutLinks"), exports);
__exportStar(require("./pageableSkill"), exports);
__exportStar(require("./pageableTeam"), exports);
__exportStar(require("./pageableTeamLink"), exports);
__exportStar(require("./pageableUser"), exports);
__exportStar(require("./pageableWithoutSelfLink"), exports);
__exportStar(require("./pageableWorkAttribute"), exports);
__exportStar(require("./pageableWorkloadScheme"), exports);
__exportStar(require("./pageableWorklog"), exports);
__exportStar(require("./pageableWorklogIdMapper"), exports);
__exportStar(require("./permission"), exports);
__exportStar(require("./permissionRole"), exports);
__exportStar(require("./permissionRoleInput"), exports);
__exportStar(require("./plan"), exports);
__exportStar(require("./planApproval"), exports);
__exportStar(require("./planApprovalInput"), exports);
__exportStar(require("./planApprovalSearchBean"), exports);
__exportStar(require("./planApprovalsResult"), exports);
__exportStar(require("./planAssignee"), exports);
__exportStar(require("./planDay"), exports);
__exportStar(require("./planInput"), exports);
__exportStar(require("./planItem"), exports);
__exportStar(require("./planMetadata"), exports);
__exportStar(require("./planPeriod"), exports);
__exportStar(require("./planResults"), exports);
__exportStar(require("./planReviewersResult"), exports);
__exportStar(require("./planSearchInput"), exports);
__exportStar(require("./plannedTime"), exports);
__exportStar(require("./plannedTimeValuesPlanDay"), exports);
__exportStar(require("./plannedTimeValuesPlanPeriod"), exports);
__exportStar(require("./program"), exports);
__exportStar(require("./programInput"), exports);
__exportStar(require("./programReference"), exports);
__exportStar(require("./programResults"), exports);
__exportStar(require("./resultsMetadata"), exports);
__exportStar(require("./role"), exports);
__exportStar(require("./roleInput"), exports);
__exportStar(require("./roleReference"), exports);
__exportStar(require("./roleResults"), exports);
__exportStar(require("./searchOrderBean"), exports);
__exportStar(require("./self"), exports);
__exportStar(require("./selfApiBean"), exports);
__exportStar(require("./selfLink"), exports);
__exportStar(require("./selfListTeamRef"), exports);
__exportStar(require("./selfListWorkAttributeValue"), exports);
__exportStar(require("./selfMember"), exports);
__exportStar(require("./skill"), exports);
__exportStar(require("./skillInput"), exports);
__exportStar(require("./skillsAssignmentInput"), exports);
__exportStar(require("./team"), exports);
__exportStar(require("./teamInput"), exports);
__exportStar(require("./teamLead"), exports);
__exportStar(require("./teamLink"), exports);
__exportStar(require("./teamLinkInput"), exports);
__exportStar(require("./teamLinkResults"), exports);
__exportStar(require("./teamLinkScope"), exports);
__exportStar(require("./teamMember"), exports);
__exportStar(require("./teamMembership"), exports);
__exportStar(require("./teamMembershipInput"), exports);
__exportStar(require("./teamMembershipResults"), exports);
__exportStar(require("./teamMembershipResultsPageable"), exports);
__exportStar(require("./teamRef"), exports);
__exportStar(require("./teamRefResults"), exports);
__exportStar(require("./teamReference"), exports);
__exportStar(require("./tempoWorklogIdList"), exports);
__exportStar(require("./timesheetApproval"), exports);
__exportStar(require("./timesheetApprovalActor"), exports);
__exportStar(require("./timesheetApprovalAvailableActions"), exports);
__exportStar(require("./timesheetApprovalInput"), exports);
__exportStar(require("./timesheetApprovalPeriod"), exports);
__exportStar(require("./timesheetApprovalPeriodsBean"), exports);
__exportStar(require("./timesheetApprovalResults"), exports);
__exportStar(require("./timesheetApprovalReviewer"), exports);
__exportStar(require("./timesheetApprovalStatus"), exports);
__exportStar(require("./timesheetApprovalUser"), exports);
__exportStar(require("./updateWorkAttributeInput"), exports);
__exportStar(require("./user"), exports);
__exportStar(require("./userContact"), exports);
__exportStar(require("./userRefBean"), exports);
__exportStar(require("./userResults"), exports);
__exportStar(require("./workAttribute"), exports);
__exportStar(require("./workAttributeSearchInput"), exports);
__exportStar(require("./workAttributeValue"), exports);
__exportStar(require("./workAttributeValueInput"), exports);
__exportStar(require("./workAttributeValueResults"), exports);
__exportStar(require("./workAttributeValuesByWorklog"), exports);
__exportStar(require("./workAttributeValuesInput"), exports);
__exportStar(require("./workloadScheme"), exports);
__exportStar(require("./workloadSchemeDay"), exports);
__exportStar(require("./workloadSchemeDayInput"), exports);
__exportStar(require("./workloadSchemeInput"), exports);
__exportStar(require("./workloadSchemeMembersInput"), exports);
__exportStar(require("./worklog"), exports);
__exportStar(require("./worklogIdMapper"), exports);
__exportStar(require("./worklogInput"), exports);
__exportStar(require("./worklogSearchInput"), exports);
__exportStar(require("./worklogUpdate"), exports);
var account_1 = require("./account");
var accountInput_1 = require("./accountInput");
var accountLink_1 = require("./accountLink");
var accountLinkInput_1 = require("./accountLinkInput");
var accountLinkResults_1 = require("./accountLinkResults");
var accountLinkScope_1 = require("./accountLinkScope");
var accountSearchInput_1 = require("./accountSearchInput");
var accountUser_1 = require("./accountUser");
var activeMemberships_1 = require("./activeMemberships");
var category_1 = require("./category");
var categoryInput_1 = require("./categoryInput");
var categoryResults_1 = require("./categoryResults");
var categoryType_1 = require("./categoryType");
var categoryTypeResults_1 = require("./categoryTypeResults");
var createWorkAttributeInput_1 = require("./createWorkAttributeInput");
var customer_1 = require("./customer");
var customerInput_1 = require("./customerInput");
var customerSearchInput_1 = require("./customerSearchInput");
var daySchedule_1 = require("./daySchedule");
var dayScheduleResults_1 = require("./dayScheduleResults");
var entity_1 = require("./entity");
var flexPlan_1 = require("./flexPlan");
var flexPlanInput_1 = require("./flexPlanInput");
var flexPlanSearchInput_1 = require("./flexPlanSearchInput");
var flexPlanSearchResult_1 = require("./flexPlanSearchResult");
var genericResource_1 = require("./genericResource");
var genericResourceInput_1 = require("./genericResourceInput");
var genericResourceReference_1 = require("./genericResourceReference");
var genericResourceSearchInput_1 = require("./genericResourceSearchInput");
var genericResourceTeamMember_1 = require("./genericResourceTeamMember");
var genericResourceTeamMemberInput_1 = require("./genericResourceTeamMemberInput");
var genericResourceTeamMembers_1 = require("./genericResourceTeamMembers");
var globalConfiguration_1 = require("./globalConfiguration");
var holiday_1 = require("./holiday");
var holidayInput_1 = require("./holidayInput");
var holidayResults_1 = require("./holidayResults");
var holidayScheme_1 = require("./holidayScheme");
var holidaySchemeInputBean_1 = require("./holidaySchemeInputBean");
var holidaySchemeMembersInput_1 = require("./holidaySchemeMembersInput");
var holidaySchemeResults_1 = require("./holidaySchemeResults");
var issue_1 = require("./issue");
var jiraWorklogIdList_1 = require("./jiraWorklogIdList");
var memberMemberships_1 = require("./memberMemberships");
var membership_1 = require("./membership");
var membershipInput_1 = require("./membershipInput");
var membershipSearchInput_1 = require("./membershipSearchInput");
var pageable_1 = require("./pageable");
var pageableAccount_1 = require("./pageableAccount");
var pageableAccountLink_1 = require("./pageableAccountLink");
var pageableBeanWithoutLinks_1 = require("./pageableBeanWithoutLinks");
var pageableCustomer_1 = require("./pageableCustomer");
var pageableGenericResourceWithoutSelfLink_1 = require("./pageableGenericResourceWithoutSelfLink");
var pageableMemberMemberships_1 = require("./pageableMemberMemberships");
var pageableMetadata_1 = require("./pageableMetadata");
var pageableMetadataBeanWithoutLinks_1 = require("./pageableMetadataBeanWithoutLinks");
var pageablePermissionRole_1 = require("./pageablePermissionRole");
var pageablePlan_1 = require("./pageablePlan");
var pageablePlanBeanWithoutLinks_1 = require("./pageablePlanBeanWithoutLinks");
var pageableSkill_1 = require("./pageableSkill");
var pageableTeam_1 = require("./pageableTeam");
var pageableTeamLink_1 = require("./pageableTeamLink");
var pageableUser_1 = require("./pageableUser");
var pageableWithoutSelfLink_1 = require("./pageableWithoutSelfLink");
var pageableWorkAttribute_1 = require("./pageableWorkAttribute");
var pageableWorkloadScheme_1 = require("./pageableWorkloadScheme");
var pageableWorklog_1 = require("./pageableWorklog");
var pageableWorklogIdMapper_1 = require("./pageableWorklogIdMapper");
var permission_1 = require("./permission");
var permissionRole_1 = require("./permissionRole");
var permissionRoleInput_1 = require("./permissionRoleInput");
var plan_1 = require("./plan");
var planApproval_1 = require("./planApproval");
var planApprovalInput_1 = require("./planApprovalInput");
var planApprovalSearchBean_1 = require("./planApprovalSearchBean");
var planApprovalsResult_1 = require("./planApprovalsResult");
var planAssignee_1 = require("./planAssignee");
var planDay_1 = require("./planDay");
var planInput_1 = require("./planInput");
var planItem_1 = require("./planItem");
var planMetadata_1 = require("./planMetadata");
var planPeriod_1 = require("./planPeriod");
var planResults_1 = require("./planResults");
var planReviewersResult_1 = require("./planReviewersResult");
var planSearchInput_1 = require("./planSearchInput");
var plannedTime_1 = require("./plannedTime");
var plannedTimeValuesPlanDay_1 = require("./plannedTimeValuesPlanDay");
var plannedTimeValuesPlanPeriod_1 = require("./plannedTimeValuesPlanPeriod");
var program_1 = require("./program");
var programInput_1 = require("./programInput");
var programReference_1 = require("./programReference");
var programResults_1 = require("./programResults");
var resultsMetadata_1 = require("./resultsMetadata");
var role_1 = require("./role");
var roleInput_1 = require("./roleInput");
var roleReference_1 = require("./roleReference");
var roleResults_1 = require("./roleResults");
var searchOrderBean_1 = require("./searchOrderBean");
var self_1 = require("./self");
var selfApiBean_1 = require("./selfApiBean");
var selfLink_1 = require("./selfLink");
var selfListTeamRef_1 = require("./selfListTeamRef");
var selfListWorkAttributeValue_1 = require("./selfListWorkAttributeValue");
var selfMember_1 = require("./selfMember");
var skill_1 = require("./skill");
var skillInput_1 = require("./skillInput");
var skillsAssignmentInput_1 = require("./skillsAssignmentInput");
var team_1 = require("./team");
var teamInput_1 = require("./teamInput");
var teamLead_1 = require("./teamLead");
var teamLink_1 = require("./teamLink");
var teamLinkInput_1 = require("./teamLinkInput");
var teamLinkResults_1 = require("./teamLinkResults");
var teamLinkScope_1 = require("./teamLinkScope");
var teamMember_1 = require("./teamMember");
var teamMembership_1 = require("./teamMembership");
var teamMembershipInput_1 = require("./teamMembershipInput");
var teamMembershipResults_1 = require("./teamMembershipResults");
var teamMembershipResultsPageable_1 = require("./teamMembershipResultsPageable");
var teamRef_1 = require("./teamRef");
var teamRefResults_1 = require("./teamRefResults");
var teamReference_1 = require("./teamReference");
var tempoWorklogIdList_1 = require("./tempoWorklogIdList");
var timesheetApproval_1 = require("./timesheetApproval");
var timesheetApprovalActor_1 = require("./timesheetApprovalActor");
var timesheetApprovalAvailableActions_1 = require("./timesheetApprovalAvailableActions");
var timesheetApprovalInput_1 = require("./timesheetApprovalInput");
var timesheetApprovalPeriod_1 = require("./timesheetApprovalPeriod");
var timesheetApprovalPeriodsBean_1 = require("./timesheetApprovalPeriodsBean");
var timesheetApprovalResults_1 = require("./timesheetApprovalResults");
var timesheetApprovalReviewer_1 = require("./timesheetApprovalReviewer");
var timesheetApprovalStatus_1 = require("./timesheetApprovalStatus");
var timesheetApprovalUser_1 = require("./timesheetApprovalUser");
var updateWorkAttributeInput_1 = require("./updateWorkAttributeInput");
var user_1 = require("./user");
var userContact_1 = require("./userContact");
var userRefBean_1 = require("./userRefBean");
var userResults_1 = require("./userResults");
var workAttribute_1 = require("./workAttribute");
var workAttributeSearchInput_1 = require("./workAttributeSearchInput");
var workAttributeValue_1 = require("./workAttributeValue");
var workAttributeValueInput_1 = require("./workAttributeValueInput");
var workAttributeValueResults_1 = require("./workAttributeValueResults");
var workAttributeValuesByWorklog_1 = require("./workAttributeValuesByWorklog");
var workAttributeValuesInput_1 = require("./workAttributeValuesInput");
var workloadScheme_1 = require("./workloadScheme");
var workloadSchemeDay_1 = require("./workloadSchemeDay");
var workloadSchemeDayInput_1 = require("./workloadSchemeDayInput");
var workloadSchemeInput_1 = require("./workloadSchemeInput");
var workloadSchemeMembersInput_1 = require("./workloadSchemeMembersInput");
var worklog_1 = require("./worklog");
var worklogIdMapper_1 = require("./worklogIdMapper");
var worklogInput_1 = require("./worklogInput");
var worklogSearchInput_1 = require("./worklogSearchInput");
var worklogUpdate_1 = require("./worklogUpdate");
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "Account.StatusEnum": account_1.Account.StatusEnum,
    "AccountInput.StatusEnum": accountInput_1.AccountInput.StatusEnum,
    "AccountLinkInput.ScopeTypeEnum": accountLinkInput_1.AccountLinkInput.ScopeTypeEnum,
    "AccountLinkScope.TypeEnum": accountLinkScope_1.AccountLinkScope.TypeEnum,
    "AccountSearchInput.StatusesEnum": accountSearchInput_1.AccountSearchInput.StatusesEnum,
    "CategoryInput.TypeNameEnum": categoryInput_1.CategoryInput.TypeNameEnum,
    "CreateWorkAttributeInput.TypeEnum": createWorkAttributeInput_1.CreateWorkAttributeInput.TypeEnum,
    "DaySchedule.TypeEnum": daySchedule_1.DaySchedule.TypeEnum,
    "GlobalConfiguration.ApprovalPeriodEnum": globalConfiguration_1.GlobalConfiguration.ApprovalPeriodEnum,
    "Holiday.TypeEnum": holiday_1.Holiday.TypeEnum,
    "HolidayInput.TypeEnum": holidayInput_1.HolidayInput.TypeEnum,
    "PermissionRole.AccessTypeEnum": permissionRole_1.PermissionRole.AccessTypeEnum,
    "PermissionRoleInput.AccessTypeEnum": permissionRoleInput_1.PermissionRoleInput.AccessTypeEnum,
    "PlanApproval.StatusEnum": planApproval_1.PlanApproval.StatusEnum,
    "PlanApprovalInput.StatusEnum": planApprovalInput_1.PlanApprovalInput.StatusEnum,
    "PlanInput.AssigneeTypeEnum": planInput_1.PlanInput.AssigneeTypeEnum,
    "PlanInput.EffortPersistenceTypeEnum": planInput_1.PlanInput.EffortPersistenceTypeEnum,
    "PlanInput.PlanItemTypeEnum": planInput_1.PlanInput.PlanItemTypeEnum,
    "PlanInput.RuleEnum": planInput_1.PlanInput.RuleEnum,
    "PlanSearchInput.AssigneeTypesEnum": planSearchInput_1.PlanSearchInput.AssigneeTypesEnum,
    "PlanSearchInput.PlanItemTypesEnum": planSearchInput_1.PlanSearchInput.PlanItemTypesEnum,
    "PlanSearchInput.PlannedTimeBreakdownEnum": planSearchInput_1.PlanSearchInput.PlannedTimeBreakdownEnum,
    "SearchOrderBean.FieldEnum": searchOrderBean_1.SearchOrderBean.FieldEnum,
    "SearchOrderBean.OrderEnum": searchOrderBean_1.SearchOrderBean.OrderEnum,
    "SkillsAssignmentInput.AssigneeTypeEnum": skillsAssignmentInput_1.SkillsAssignmentInput.AssigneeTypeEnum,
    "TeamLinkInput.ScopeTypeEnum": teamLinkInput_1.TeamLinkInput.ScopeTypeEnum,
    "TeamLinkScope.TypeEnum": teamLinkScope_1.TeamLinkScope.TypeEnum,
    "TimesheetApprovalStatus.KeyEnum": timesheetApprovalStatus_1.TimesheetApprovalStatus.KeyEnum,
    "UpdateWorkAttributeInput.TypeEnum": updateWorkAttributeInput_1.UpdateWorkAttributeInput.TypeEnum,
    "UserContact.TypeEnum": userContact_1.UserContact.TypeEnum,
    "WorkloadSchemeDay.DayEnum": workloadSchemeDay_1.WorkloadSchemeDay.DayEnum,
    "WorkloadSchemeDayInput.DayEnum": workloadSchemeDayInput_1.WorkloadSchemeDayInput.DayEnum,
};
var typeMap = {
    "Account": account_1.Account,
    "AccountInput": accountInput_1.AccountInput,
    "AccountLink": accountLink_1.AccountLink,
    "AccountLinkInput": accountLinkInput_1.AccountLinkInput,
    "AccountLinkResults": accountLinkResults_1.AccountLinkResults,
    "AccountLinkScope": accountLinkScope_1.AccountLinkScope,
    "AccountSearchInput": accountSearchInput_1.AccountSearchInput,
    "AccountUser": accountUser_1.AccountUser,
    "ActiveMemberships": activeMemberships_1.ActiveMemberships,
    "Category": category_1.Category,
    "CategoryInput": categoryInput_1.CategoryInput,
    "CategoryResults": categoryResults_1.CategoryResults,
    "CategoryType": categoryType_1.CategoryType,
    "CategoryTypeResults": categoryTypeResults_1.CategoryTypeResults,
    "CreateWorkAttributeInput": createWorkAttributeInput_1.CreateWorkAttributeInput,
    "Customer": customer_1.Customer,
    "CustomerInput": customerInput_1.CustomerInput,
    "CustomerSearchInput": customerSearchInput_1.CustomerSearchInput,
    "DaySchedule": daySchedule_1.DaySchedule,
    "DayScheduleResults": dayScheduleResults_1.DayScheduleResults,
    "Entity": entity_1.Entity,
    "FlexPlan": flexPlan_1.FlexPlan,
    "FlexPlanInput": flexPlanInput_1.FlexPlanInput,
    "FlexPlanSearchInput": flexPlanSearchInput_1.FlexPlanSearchInput,
    "FlexPlanSearchResult": flexPlanSearchResult_1.FlexPlanSearchResult,
    "GenericResource": genericResource_1.GenericResource,
    "GenericResourceInput": genericResourceInput_1.GenericResourceInput,
    "GenericResourceReference": genericResourceReference_1.GenericResourceReference,
    "GenericResourceSearchInput": genericResourceSearchInput_1.GenericResourceSearchInput,
    "GenericResourceTeamMember": genericResourceTeamMember_1.GenericResourceTeamMember,
    "GenericResourceTeamMemberInput": genericResourceTeamMemberInput_1.GenericResourceTeamMemberInput,
    "GenericResourceTeamMembers": genericResourceTeamMembers_1.GenericResourceTeamMembers,
    "GlobalConfiguration": globalConfiguration_1.GlobalConfiguration,
    "Holiday": holiday_1.Holiday,
    "HolidayInput": holidayInput_1.HolidayInput,
    "HolidayResults": holidayResults_1.HolidayResults,
    "HolidayScheme": holidayScheme_1.HolidayScheme,
    "HolidaySchemeInputBean": holidaySchemeInputBean_1.HolidaySchemeInputBean,
    "HolidaySchemeMembersInput": holidaySchemeMembersInput_1.HolidaySchemeMembersInput,
    "HolidaySchemeResults": holidaySchemeResults_1.HolidaySchemeResults,
    "Issue": issue_1.Issue,
    "JiraWorklogIdList": jiraWorklogIdList_1.JiraWorklogIdList,
    "MemberMemberships": memberMemberships_1.MemberMemberships,
    "Membership": membership_1.Membership,
    "MembershipInput": membershipInput_1.MembershipInput,
    "MembershipSearchInput": membershipSearchInput_1.MembershipSearchInput,
    "Pageable": pageable_1.Pageable,
    "PageableAccount": pageableAccount_1.PageableAccount,
    "PageableAccountLink": pageableAccountLink_1.PageableAccountLink,
    "PageableBeanWithoutLinks": pageableBeanWithoutLinks_1.PageableBeanWithoutLinks,
    "PageableCustomer": pageableCustomer_1.PageableCustomer,
    "PageableGenericResourceWithoutSelfLink": pageableGenericResourceWithoutSelfLink_1.PageableGenericResourceWithoutSelfLink,
    "PageableMemberMemberships": pageableMemberMemberships_1.PageableMemberMemberships,
    "PageableMetadata": pageableMetadata_1.PageableMetadata,
    "PageableMetadataBeanWithoutLinks": pageableMetadataBeanWithoutLinks_1.PageableMetadataBeanWithoutLinks,
    "PageablePermissionRole": pageablePermissionRole_1.PageablePermissionRole,
    "PageablePlan": pageablePlan_1.PageablePlan,
    "PageablePlanBeanWithoutLinks": pageablePlanBeanWithoutLinks_1.PageablePlanBeanWithoutLinks,
    "PageableSkill": pageableSkill_1.PageableSkill,
    "PageableTeam": pageableTeam_1.PageableTeam,
    "PageableTeamLink": pageableTeamLink_1.PageableTeamLink,
    "PageableUser": pageableUser_1.PageableUser,
    "PageableWithoutSelfLink": pageableWithoutSelfLink_1.PageableWithoutSelfLink,
    "PageableWorkAttribute": pageableWorkAttribute_1.PageableWorkAttribute,
    "PageableWorkloadScheme": pageableWorkloadScheme_1.PageableWorkloadScheme,
    "PageableWorklog": pageableWorklog_1.PageableWorklog,
    "PageableWorklogIdMapper": pageableWorklogIdMapper_1.PageableWorklogIdMapper,
    "Permission": permission_1.Permission,
    "PermissionRole": permissionRole_1.PermissionRole,
    "PermissionRoleInput": permissionRoleInput_1.PermissionRoleInput,
    "Plan": plan_1.Plan,
    "PlanApproval": planApproval_1.PlanApproval,
    "PlanApprovalInput": planApprovalInput_1.PlanApprovalInput,
    "PlanApprovalSearchBean": planApprovalSearchBean_1.PlanApprovalSearchBean,
    "PlanApprovalsResult": planApprovalsResult_1.PlanApprovalsResult,
    "PlanAssignee": planAssignee_1.PlanAssignee,
    "PlanDay": planDay_1.PlanDay,
    "PlanInput": planInput_1.PlanInput,
    "PlanItem": planItem_1.PlanItem,
    "PlanMetadata": planMetadata_1.PlanMetadata,
    "PlanPeriod": planPeriod_1.PlanPeriod,
    "PlanResults": planResults_1.PlanResults,
    "PlanReviewersResult": planReviewersResult_1.PlanReviewersResult,
    "PlanSearchInput": planSearchInput_1.PlanSearchInput,
    "PlannedTime": plannedTime_1.PlannedTime,
    "PlannedTimeValuesPlanDay": plannedTimeValuesPlanDay_1.PlannedTimeValuesPlanDay,
    "PlannedTimeValuesPlanPeriod": plannedTimeValuesPlanPeriod_1.PlannedTimeValuesPlanPeriod,
    "Program": program_1.Program,
    "ProgramInput": programInput_1.ProgramInput,
    "ProgramReference": programReference_1.ProgramReference,
    "ProgramResults": programResults_1.ProgramResults,
    "ResultsMetadata": resultsMetadata_1.ResultsMetadata,
    "Role": role_1.Role,
    "RoleInput": roleInput_1.RoleInput,
    "RoleReference": roleReference_1.RoleReference,
    "RoleResults": roleResults_1.RoleResults,
    "SearchOrderBean": searchOrderBean_1.SearchOrderBean,
    "Self": self_1.Self,
    "SelfApiBean": selfApiBean_1.SelfApiBean,
    "SelfLink": selfLink_1.SelfLink,
    "SelfListTeamRef": selfListTeamRef_1.SelfListTeamRef,
    "SelfListWorkAttributeValue": selfListWorkAttributeValue_1.SelfListWorkAttributeValue,
    "SelfMember": selfMember_1.SelfMember,
    "Skill": skill_1.Skill,
    "SkillInput": skillInput_1.SkillInput,
    "SkillsAssignmentInput": skillsAssignmentInput_1.SkillsAssignmentInput,
    "Team": team_1.Team,
    "TeamInput": teamInput_1.TeamInput,
    "TeamLead": teamLead_1.TeamLead,
    "TeamLink": teamLink_1.TeamLink,
    "TeamLinkInput": teamLinkInput_1.TeamLinkInput,
    "TeamLinkResults": teamLinkResults_1.TeamLinkResults,
    "TeamLinkScope": teamLinkScope_1.TeamLinkScope,
    "TeamMember": teamMember_1.TeamMember,
    "TeamMembership": teamMembership_1.TeamMembership,
    "TeamMembershipInput": teamMembershipInput_1.TeamMembershipInput,
    "TeamMembershipResults": teamMembershipResults_1.TeamMembershipResults,
    "TeamMembershipResultsPageable": teamMembershipResultsPageable_1.TeamMembershipResultsPageable,
    "TeamRef": teamRef_1.TeamRef,
    "TeamRefResults": teamRefResults_1.TeamRefResults,
    "TeamReference": teamReference_1.TeamReference,
    "TempoWorklogIdList": tempoWorklogIdList_1.TempoWorklogIdList,
    "TimesheetApproval": timesheetApproval_1.TimesheetApproval,
    "TimesheetApprovalActor": timesheetApprovalActor_1.TimesheetApprovalActor,
    "TimesheetApprovalAvailableActions": timesheetApprovalAvailableActions_1.TimesheetApprovalAvailableActions,
    "TimesheetApprovalInput": timesheetApprovalInput_1.TimesheetApprovalInput,
    "TimesheetApprovalPeriod": timesheetApprovalPeriod_1.TimesheetApprovalPeriod,
    "TimesheetApprovalPeriodsBean": timesheetApprovalPeriodsBean_1.TimesheetApprovalPeriodsBean,
    "TimesheetApprovalResults": timesheetApprovalResults_1.TimesheetApprovalResults,
    "TimesheetApprovalReviewer": timesheetApprovalReviewer_1.TimesheetApprovalReviewer,
    "TimesheetApprovalStatus": timesheetApprovalStatus_1.TimesheetApprovalStatus,
    "TimesheetApprovalUser": timesheetApprovalUser_1.TimesheetApprovalUser,
    "UpdateWorkAttributeInput": updateWorkAttributeInput_1.UpdateWorkAttributeInput,
    "User": user_1.User,
    "UserContact": userContact_1.UserContact,
    "UserRefBean": userRefBean_1.UserRefBean,
    "UserResults": userResults_1.UserResults,
    "WorkAttribute": workAttribute_1.WorkAttribute,
    "WorkAttributeSearchInput": workAttributeSearchInput_1.WorkAttributeSearchInput,
    "WorkAttributeValue": workAttributeValue_1.WorkAttributeValue,
    "WorkAttributeValueInput": workAttributeValueInput_1.WorkAttributeValueInput,
    "WorkAttributeValueResults": workAttributeValueResults_1.WorkAttributeValueResults,
    "WorkAttributeValuesByWorklog": workAttributeValuesByWorklog_1.WorkAttributeValuesByWorklog,
    "WorkAttributeValuesInput": workAttributeValuesInput_1.WorkAttributeValuesInput,
    "WorkloadScheme": workloadScheme_1.WorkloadScheme,
    "WorkloadSchemeDay": workloadSchemeDay_1.WorkloadSchemeDay,
    "WorkloadSchemeDayInput": workloadSchemeDayInput_1.WorkloadSchemeDayInput,
    "WorkloadSchemeInput": workloadSchemeInput_1.WorkloadSchemeInput,
    "WorkloadSchemeMembersInput": workloadSchemeMembersInput_1.WorkloadSchemeMembersInput,
    "Worklog": worklog_1.Worklog,
    "WorklogIdMapper": worklogIdMapper_1.WorklogIdMapper,
    "WorklogInput": worklogInput_1.WorklogInput,
    "WorklogSearchInput": worklogSearchInput_1.WorklogSearchInput,
    "WorklogUpdate": worklogUpdate_1.WorklogUpdate,
};
// Check if a string starts with another string without using es6 features
function startsWith(str, match) {
    return str.substring(0, match.length) === match;
}
// Check if a string ends with another string without using es6 features
function endsWith(str, match) {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}
var nullableSuffix = " | null";
var optionalSuffix = " | undefined";
var arrayPrefix = "Array<";
var arraySuffix = ">";
var mapPrefix = "{ [key: string]: ";
var mapSuffix = "; }";
var ObjectSerializer = /** @class */ (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.serialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (endsWith(type, nullableSuffix)) {
            var subType = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (endsWith(type, optionalSuffix)) {
            var subType = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        }
        else if (startsWith(type, arrayPrefix)) {
            var subType = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (startsWith(type, mapPrefix)) {
            var subType = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            var transformedData = {};
            for (var key in data) {
                transformedData[key] = ObjectSerializer.deserialize(data[key], subType);
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) { // is Enum
                return data;
            }
            if (!typeMap[type]) { // dont know the type
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = /** @class */ (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = /** @class */ (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = /** @class */ (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = /** @class */ (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = /** @class */ (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
        // Do nothing
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
