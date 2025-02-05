import localVarRequest from 'request';

export * from './account';
export * from './accountInput';
export * from './accountLink';
export * from './accountLinkInput';
export * from './accountLinkResults';
export * from './accountLinkScope';
export * from './accountSearchInput';
export * from './accountUser';
export * from './activeMemberships';
export * from './category';
export * from './categoryInput';
export * from './categoryResults';
export * from './categoryType';
export * from './categoryTypeResults';
export * from './createWorkAttributeInput';
export * from './customer';
export * from './customerInput';
export * from './customerSearchInput';
export * from './daySchedule';
export * from './dayScheduleResults';
export * from './entity';
export * from './flexPlan';
export * from './flexPlanInput';
export * from './flexPlanSearchInput';
export * from './flexPlanSearchResult';
export * from './genericResource';
export * from './genericResourceInput';
export * from './genericResourceReference';
export * from './genericResourceSearchInput';
export * from './genericResourceTeamMember';
export * from './genericResourceTeamMemberInput';
export * from './genericResourceTeamMembers';
export * from './globalConfiguration';
export * from './holiday';
export * from './holidayInput';
export * from './holidayResults';
export * from './holidayScheme';
export * from './holidaySchemeInputBean';
export * from './holidaySchemeMembersInput';
export * from './holidaySchemeResults';
export * from './issue';
export * from './jiraWorklogIdList';
export * from './memberMemberships';
export * from './membership';
export * from './membershipInput';
export * from './membershipSearchInput';
export * from './pageable';
export * from './pageableAccount';
export * from './pageableAccountLink';
export * from './pageableBeanWithoutLinks';
export * from './pageableCustomer';
export * from './pageableGenericResourceWithoutSelfLink';
export * from './pageableMemberMemberships';
export * from './pageableMetadata';
export * from './pageableMetadataBeanWithoutLinks';
export * from './pageablePermissionRole';
export * from './pageablePlan';
export * from './pageablePlanBeanWithoutLinks';
export * from './pageableSkill';
export * from './pageableTeam';
export * from './pageableTeamLink';
export * from './pageableUser';
export * from './pageableWithoutSelfLink';
export * from './pageableWorkAttribute';
export * from './pageableWorkloadScheme';
export * from './pageableWorklog';
export * from './pageableWorklogIdMapper';
export * from './permission';
export * from './permissionRole';
export * from './permissionRoleInput';
export * from './plan';
export * from './planApproval';
export * from './planApprovalInput';
export * from './planApprovalSearchBean';
export * from './planApprovalsResult';
export * from './planAssignee';
export * from './planDay';
export * from './planInput';
export * from './planItem';
export * from './planMetadata';
export * from './planPeriod';
export * from './planResults';
export * from './planReviewersResult';
export * from './planSearchInput';
export * from './plannedTime';
export * from './plannedTimeValuesPlanDay';
export * from './plannedTimeValuesPlanPeriod';
export * from './program';
export * from './programInput';
export * from './programReference';
export * from './programResults';
export * from './resultsMetadata';
export * from './role';
export * from './roleInput';
export * from './roleReference';
export * from './roleResults';
export * from './searchOrderBean';
export * from './self';
export * from './selfApiBean';
export * from './selfLink';
export * from './selfListTeamRef';
export * from './selfListWorkAttributeValue';
export * from './selfMember';
export * from './skill';
export * from './skillInput';
export * from './skillsAssignmentInput';
export * from './team';
export * from './teamInput';
export * from './teamLead';
export * from './teamLink';
export * from './teamLinkInput';
export * from './teamLinkResults';
export * from './teamLinkScope';
export * from './teamMember';
export * from './teamMembership';
export * from './teamMembershipInput';
export * from './teamMembershipResults';
export * from './teamMembershipResultsPageable';
export * from './teamRef';
export * from './teamRefResults';
export * from './teamReference';
export * from './tempoWorklogIdList';
export * from './timesheetApproval';
export * from './timesheetApprovalActor';
export * from './timesheetApprovalAvailableActions';
export * from './timesheetApprovalInput';
export * from './timesheetApprovalPeriod';
export * from './timesheetApprovalPeriodsBean';
export * from './timesheetApprovalResults';
export * from './timesheetApprovalReviewer';
export * from './timesheetApprovalStatus';
export * from './timesheetApprovalUser';
export * from './updateWorkAttributeInput';
export * from './user';
export * from './userContact';
export * from './userRefBean';
export * from './userResults';
export * from './workAttribute';
export * from './workAttributeSearchInput';
export * from './workAttributeValue';
export * from './workAttributeValueInput';
export * from './workAttributeValueResults';
export * from './workAttributeValuesByWorklog';
export * from './workAttributeValuesInput';
export * from './workloadScheme';
export * from './workloadSchemeDay';
export * from './workloadSchemeDayInput';
export * from './workloadSchemeInput';
export * from './workloadSchemeMembersInput';
export * from './worklog';
export * from './worklogIdMapper';
export * from './worklogInput';
export * from './worklogSearchInput';
export * from './worklogUpdate';

import { Account } from './account';
import { AccountInput } from './accountInput';
import { AccountLink } from './accountLink';
import { AccountLinkInput } from './accountLinkInput';
import { AccountLinkResults } from './accountLinkResults';
import { AccountLinkScope } from './accountLinkScope';
import { AccountSearchInput } from './accountSearchInput';
import { AccountUser } from './accountUser';
import { ActiveMemberships } from './activeMemberships';
import { Category } from './category';
import { CategoryInput } from './categoryInput';
import { CategoryResults } from './categoryResults';
import { CategoryType } from './categoryType';
import { CategoryTypeResults } from './categoryTypeResults';
import { CreateWorkAttributeInput } from './createWorkAttributeInput';
import { Customer } from './customer';
import { CustomerInput } from './customerInput';
import { CustomerSearchInput } from './customerSearchInput';
import { DaySchedule } from './daySchedule';
import { DayScheduleResults } from './dayScheduleResults';
import { Entity } from './entity';
import { FlexPlan } from './flexPlan';
import { FlexPlanInput } from './flexPlanInput';
import { FlexPlanSearchInput } from './flexPlanSearchInput';
import { FlexPlanSearchResult } from './flexPlanSearchResult';
import { GenericResource } from './genericResource';
import { GenericResourceInput } from './genericResourceInput';
import { GenericResourceReference } from './genericResourceReference';
import { GenericResourceSearchInput } from './genericResourceSearchInput';
import { GenericResourceTeamMember } from './genericResourceTeamMember';
import { GenericResourceTeamMemberInput } from './genericResourceTeamMemberInput';
import { GenericResourceTeamMembers } from './genericResourceTeamMembers';
import { GlobalConfiguration } from './globalConfiguration';
import { Holiday } from './holiday';
import { HolidayInput } from './holidayInput';
import { HolidayResults } from './holidayResults';
import { HolidayScheme } from './holidayScheme';
import { HolidaySchemeInputBean } from './holidaySchemeInputBean';
import { HolidaySchemeMembersInput } from './holidaySchemeMembersInput';
import { HolidaySchemeResults } from './holidaySchemeResults';
import { Issue } from './issue';
import { JiraWorklogIdList } from './jiraWorklogIdList';
import { MemberMemberships } from './memberMemberships';
import { Membership } from './membership';
import { MembershipInput } from './membershipInput';
import { MembershipSearchInput } from './membershipSearchInput';
import { Pageable } from './pageable';
import { PageableAccount } from './pageableAccount';
import { PageableAccountLink } from './pageableAccountLink';
import { PageableBeanWithoutLinks } from './pageableBeanWithoutLinks';
import { PageableCustomer } from './pageableCustomer';
import { PageableGenericResourceWithoutSelfLink } from './pageableGenericResourceWithoutSelfLink';
import { PageableMemberMemberships } from './pageableMemberMemberships';
import { PageableMetadata } from './pageableMetadata';
import { PageableMetadataBeanWithoutLinks } from './pageableMetadataBeanWithoutLinks';
import { PageablePermissionRole } from './pageablePermissionRole';
import { PageablePlan } from './pageablePlan';
import { PageablePlanBeanWithoutLinks } from './pageablePlanBeanWithoutLinks';
import { PageableSkill } from './pageableSkill';
import { PageableTeam } from './pageableTeam';
import { PageableTeamLink } from './pageableTeamLink';
import { PageableUser } from './pageableUser';
import { PageableWithoutSelfLink } from './pageableWithoutSelfLink';
import { PageableWorkAttribute } from './pageableWorkAttribute';
import { PageableWorkloadScheme } from './pageableWorkloadScheme';
import { PageableWorklog } from './pageableWorklog';
import { PageableWorklogIdMapper } from './pageableWorklogIdMapper';
import { Permission } from './permission';
import { PermissionRole } from './permissionRole';
import { PermissionRoleInput } from './permissionRoleInput';
import { Plan } from './plan';
import { PlanApproval } from './planApproval';
import { PlanApprovalInput } from './planApprovalInput';
import { PlanApprovalSearchBean } from './planApprovalSearchBean';
import { PlanApprovalsResult } from './planApprovalsResult';
import { PlanAssignee } from './planAssignee';
import { PlanDay } from './planDay';
import { PlanInput } from './planInput';
import { PlanItem } from './planItem';
import { PlanMetadata } from './planMetadata';
import { PlanPeriod } from './planPeriod';
import { PlanResults } from './planResults';
import { PlanReviewersResult } from './planReviewersResult';
import { PlanSearchInput } from './planSearchInput';
import { PlannedTime } from './plannedTime';
import { PlannedTimeValuesPlanDay } from './plannedTimeValuesPlanDay';
import { PlannedTimeValuesPlanPeriod } from './plannedTimeValuesPlanPeriod';
import { Program } from './program';
import { ProgramInput } from './programInput';
import { ProgramReference } from './programReference';
import { ProgramResults } from './programResults';
import { ResultsMetadata } from './resultsMetadata';
import { Role } from './role';
import { RoleInput } from './roleInput';
import { RoleReference } from './roleReference';
import { RoleResults } from './roleResults';
import { SearchOrderBean } from './searchOrderBean';
import { Self } from './self';
import { SelfApiBean } from './selfApiBean';
import { SelfLink } from './selfLink';
import { SelfListTeamRef } from './selfListTeamRef';
import { SelfListWorkAttributeValue } from './selfListWorkAttributeValue';
import { SelfMember } from './selfMember';
import { Skill } from './skill';
import { SkillInput } from './skillInput';
import { SkillsAssignmentInput } from './skillsAssignmentInput';
import { Team } from './team';
import { TeamInput } from './teamInput';
import { TeamLead } from './teamLead';
import { TeamLink } from './teamLink';
import { TeamLinkInput } from './teamLinkInput';
import { TeamLinkResults } from './teamLinkResults';
import { TeamLinkScope } from './teamLinkScope';
import { TeamMember } from './teamMember';
import { TeamMembership } from './teamMembership';
import { TeamMembershipInput } from './teamMembershipInput';
import { TeamMembershipResults } from './teamMembershipResults';
import { TeamMembershipResultsPageable } from './teamMembershipResultsPageable';
import { TeamRef } from './teamRef';
import { TeamRefResults } from './teamRefResults';
import { TeamReference } from './teamReference';
import { TempoWorklogIdList } from './tempoWorklogIdList';
import { TimesheetApproval } from './timesheetApproval';
import { TimesheetApprovalActor } from './timesheetApprovalActor';
import { TimesheetApprovalAvailableActions } from './timesheetApprovalAvailableActions';
import { TimesheetApprovalInput } from './timesheetApprovalInput';
import { TimesheetApprovalPeriod } from './timesheetApprovalPeriod';
import { TimesheetApprovalPeriodsBean } from './timesheetApprovalPeriodsBean';
import { TimesheetApprovalResults } from './timesheetApprovalResults';
import { TimesheetApprovalReviewer } from './timesheetApprovalReviewer';
import { TimesheetApprovalStatus } from './timesheetApprovalStatus';
import { TimesheetApprovalUser } from './timesheetApprovalUser';
import { UpdateWorkAttributeInput } from './updateWorkAttributeInput';
import { User } from './user';
import { UserContact } from './userContact';
import { UserRefBean } from './userRefBean';
import { UserResults } from './userResults';
import { WorkAttribute } from './workAttribute';
import { WorkAttributeSearchInput } from './workAttributeSearchInput';
import { WorkAttributeValue } from './workAttributeValue';
import { WorkAttributeValueInput } from './workAttributeValueInput';
import { WorkAttributeValueResults } from './workAttributeValueResults';
import { WorkAttributeValuesByWorklog } from './workAttributeValuesByWorklog';
import { WorkAttributeValuesInput } from './workAttributeValuesInput';
import { WorkloadScheme } from './workloadScheme';
import { WorkloadSchemeDay } from './workloadSchemeDay';
import { WorkloadSchemeDayInput } from './workloadSchemeDayInput';
import { WorkloadSchemeInput } from './workloadSchemeInput';
import { WorkloadSchemeMembersInput } from './workloadSchemeMembersInput';
import { Worklog } from './worklog';
import { WorklogIdMapper } from './worklogIdMapper';
import { WorklogInput } from './worklogInput';
import { WorklogSearchInput } from './worklogSearchInput';
import { WorklogUpdate } from './worklogUpdate';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Account.StatusEnum": Account.StatusEnum,
        "AccountInput.StatusEnum": AccountInput.StatusEnum,
        "AccountLinkInput.ScopeTypeEnum": AccountLinkInput.ScopeTypeEnum,
        "AccountLinkScope.TypeEnum": AccountLinkScope.TypeEnum,
        "AccountSearchInput.StatusesEnum": AccountSearchInput.StatusesEnum,
        "CategoryInput.TypeNameEnum": CategoryInput.TypeNameEnum,
        "CreateWorkAttributeInput.TypeEnum": CreateWorkAttributeInput.TypeEnum,
        "DaySchedule.TypeEnum": DaySchedule.TypeEnum,
        "GlobalConfiguration.ApprovalPeriodEnum": GlobalConfiguration.ApprovalPeriodEnum,
        "Holiday.TypeEnum": Holiday.TypeEnum,
        "HolidayInput.TypeEnum": HolidayInput.TypeEnum,
        "PermissionRole.AccessTypeEnum": PermissionRole.AccessTypeEnum,
        "PermissionRoleInput.AccessTypeEnum": PermissionRoleInput.AccessTypeEnum,
        "PlanApproval.StatusEnum": PlanApproval.StatusEnum,
        "PlanApprovalInput.StatusEnum": PlanApprovalInput.StatusEnum,
        "PlanInput.AssigneeTypeEnum": PlanInput.AssigneeTypeEnum,
        "PlanInput.EffortPersistenceTypeEnum": PlanInput.EffortPersistenceTypeEnum,
        "PlanInput.PlanItemTypeEnum": PlanInput.PlanItemTypeEnum,
        "PlanInput.RuleEnum": PlanInput.RuleEnum,
        "PlanSearchInput.AssigneeTypesEnum": PlanSearchInput.AssigneeTypesEnum,
        "PlanSearchInput.PlanItemTypesEnum": PlanSearchInput.PlanItemTypesEnum,
        "PlanSearchInput.PlannedTimeBreakdownEnum": PlanSearchInput.PlannedTimeBreakdownEnum,
        "SearchOrderBean.FieldEnum": SearchOrderBean.FieldEnum,
        "SearchOrderBean.OrderEnum": SearchOrderBean.OrderEnum,
        "SkillsAssignmentInput.AssigneeTypeEnum": SkillsAssignmentInput.AssigneeTypeEnum,
        "TeamLinkInput.ScopeTypeEnum": TeamLinkInput.ScopeTypeEnum,
        "TeamLinkScope.TypeEnum": TeamLinkScope.TypeEnum,
        "TimesheetApprovalStatus.KeyEnum": TimesheetApprovalStatus.KeyEnum,
        "UpdateWorkAttributeInput.TypeEnum": UpdateWorkAttributeInput.TypeEnum,
        "UserContact.TypeEnum": UserContact.TypeEnum,
        "WorkloadSchemeDay.DayEnum": WorkloadSchemeDay.DayEnum,
        "WorkloadSchemeDayInput.DayEnum": WorkloadSchemeDayInput.DayEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountInput": AccountInput,
    "AccountLink": AccountLink,
    "AccountLinkInput": AccountLinkInput,
    "AccountLinkResults": AccountLinkResults,
    "AccountLinkScope": AccountLinkScope,
    "AccountSearchInput": AccountSearchInput,
    "AccountUser": AccountUser,
    "ActiveMemberships": ActiveMemberships,
    "Category": Category,
    "CategoryInput": CategoryInput,
    "CategoryResults": CategoryResults,
    "CategoryType": CategoryType,
    "CategoryTypeResults": CategoryTypeResults,
    "CreateWorkAttributeInput": CreateWorkAttributeInput,
    "Customer": Customer,
    "CustomerInput": CustomerInput,
    "CustomerSearchInput": CustomerSearchInput,
    "DaySchedule": DaySchedule,
    "DayScheduleResults": DayScheduleResults,
    "Entity": Entity,
    "FlexPlan": FlexPlan,
    "FlexPlanInput": FlexPlanInput,
    "FlexPlanSearchInput": FlexPlanSearchInput,
    "FlexPlanSearchResult": FlexPlanSearchResult,
    "GenericResource": GenericResource,
    "GenericResourceInput": GenericResourceInput,
    "GenericResourceReference": GenericResourceReference,
    "GenericResourceSearchInput": GenericResourceSearchInput,
    "GenericResourceTeamMember": GenericResourceTeamMember,
    "GenericResourceTeamMemberInput": GenericResourceTeamMemberInput,
    "GenericResourceTeamMembers": GenericResourceTeamMembers,
    "GlobalConfiguration": GlobalConfiguration,
    "Holiday": Holiday,
    "HolidayInput": HolidayInput,
    "HolidayResults": HolidayResults,
    "HolidayScheme": HolidayScheme,
    "HolidaySchemeInputBean": HolidaySchemeInputBean,
    "HolidaySchemeMembersInput": HolidaySchemeMembersInput,
    "HolidaySchemeResults": HolidaySchemeResults,
    "Issue": Issue,
    "JiraWorklogIdList": JiraWorklogIdList,
    "MemberMemberships": MemberMemberships,
    "Membership": Membership,
    "MembershipInput": MembershipInput,
    "MembershipSearchInput": MembershipSearchInput,
    "Pageable": Pageable,
    "PageableAccount": PageableAccount,
    "PageableAccountLink": PageableAccountLink,
    "PageableBeanWithoutLinks": PageableBeanWithoutLinks,
    "PageableCustomer": PageableCustomer,
    "PageableGenericResourceWithoutSelfLink": PageableGenericResourceWithoutSelfLink,
    "PageableMemberMemberships": PageableMemberMemberships,
    "PageableMetadata": PageableMetadata,
    "PageableMetadataBeanWithoutLinks": PageableMetadataBeanWithoutLinks,
    "PageablePermissionRole": PageablePermissionRole,
    "PageablePlan": PageablePlan,
    "PageablePlanBeanWithoutLinks": PageablePlanBeanWithoutLinks,
    "PageableSkill": PageableSkill,
    "PageableTeam": PageableTeam,
    "PageableTeamLink": PageableTeamLink,
    "PageableUser": PageableUser,
    "PageableWithoutSelfLink": PageableWithoutSelfLink,
    "PageableWorkAttribute": PageableWorkAttribute,
    "PageableWorkloadScheme": PageableWorkloadScheme,
    "PageableWorklog": PageableWorklog,
    "PageableWorklogIdMapper": PageableWorklogIdMapper,
    "Permission": Permission,
    "PermissionRole": PermissionRole,
    "PermissionRoleInput": PermissionRoleInput,
    "Plan": Plan,
    "PlanApproval": PlanApproval,
    "PlanApprovalInput": PlanApprovalInput,
    "PlanApprovalSearchBean": PlanApprovalSearchBean,
    "PlanApprovalsResult": PlanApprovalsResult,
    "PlanAssignee": PlanAssignee,
    "PlanDay": PlanDay,
    "PlanInput": PlanInput,
    "PlanItem": PlanItem,
    "PlanMetadata": PlanMetadata,
    "PlanPeriod": PlanPeriod,
    "PlanResults": PlanResults,
    "PlanReviewersResult": PlanReviewersResult,
    "PlanSearchInput": PlanSearchInput,
    "PlannedTime": PlannedTime,
    "PlannedTimeValuesPlanDay": PlannedTimeValuesPlanDay,
    "PlannedTimeValuesPlanPeriod": PlannedTimeValuesPlanPeriod,
    "Program": Program,
    "ProgramInput": ProgramInput,
    "ProgramReference": ProgramReference,
    "ProgramResults": ProgramResults,
    "ResultsMetadata": ResultsMetadata,
    "Role": Role,
    "RoleInput": RoleInput,
    "RoleReference": RoleReference,
    "RoleResults": RoleResults,
    "SearchOrderBean": SearchOrderBean,
    "Self": Self,
    "SelfApiBean": SelfApiBean,
    "SelfLink": SelfLink,
    "SelfListTeamRef": SelfListTeamRef,
    "SelfListWorkAttributeValue": SelfListWorkAttributeValue,
    "SelfMember": SelfMember,
    "Skill": Skill,
    "SkillInput": SkillInput,
    "SkillsAssignmentInput": SkillsAssignmentInput,
    "Team": Team,
    "TeamInput": TeamInput,
    "TeamLead": TeamLead,
    "TeamLink": TeamLink,
    "TeamLinkInput": TeamLinkInput,
    "TeamLinkResults": TeamLinkResults,
    "TeamLinkScope": TeamLinkScope,
    "TeamMember": TeamMember,
    "TeamMembership": TeamMembership,
    "TeamMembershipInput": TeamMembershipInput,
    "TeamMembershipResults": TeamMembershipResults,
    "TeamMembershipResultsPageable": TeamMembershipResultsPageable,
    "TeamRef": TeamRef,
    "TeamRefResults": TeamRefResults,
    "TeamReference": TeamReference,
    "TempoWorklogIdList": TempoWorklogIdList,
    "TimesheetApproval": TimesheetApproval,
    "TimesheetApprovalActor": TimesheetApprovalActor,
    "TimesheetApprovalAvailableActions": TimesheetApprovalAvailableActions,
    "TimesheetApprovalInput": TimesheetApprovalInput,
    "TimesheetApprovalPeriod": TimesheetApprovalPeriod,
    "TimesheetApprovalPeriodsBean": TimesheetApprovalPeriodsBean,
    "TimesheetApprovalResults": TimesheetApprovalResults,
    "TimesheetApprovalReviewer": TimesheetApprovalReviewer,
    "TimesheetApprovalStatus": TimesheetApprovalStatus,
    "TimesheetApprovalUser": TimesheetApprovalUser,
    "UpdateWorkAttributeInput": UpdateWorkAttributeInput,
    "User": User,
    "UserContact": UserContact,
    "UserRefBean": UserRefBean,
    "UserResults": UserResults,
    "WorkAttribute": WorkAttribute,
    "WorkAttributeSearchInput": WorkAttributeSearchInput,
    "WorkAttributeValue": WorkAttributeValue,
    "WorkAttributeValueInput": WorkAttributeValueInput,
    "WorkAttributeValueResults": WorkAttributeValueResults,
    "WorkAttributeValuesByWorklog": WorkAttributeValuesByWorklog,
    "WorkAttributeValuesInput": WorkAttributeValuesInput,
    "WorkloadScheme": WorkloadScheme,
    "WorkloadSchemeDay": WorkloadSchemeDay,
    "WorkloadSchemeDayInput": WorkloadSchemeDayInput,
    "WorkloadSchemeInput": WorkloadSchemeInput,
    "WorkloadSchemeMembersInput": WorkloadSchemeMembersInput,
    "Worklog": Worklog,
    "WorklogIdMapper": WorklogIdMapper,
    "WorklogInput": WorklogInput,
    "WorklogSearchInput": WorklogSearchInput,
    "WorklogUpdate": WorklogUpdate,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
