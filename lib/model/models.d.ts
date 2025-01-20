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
import * as fs from 'fs';
export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    };
}
export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string): any;
    static deserialize(data: any, type: string): any;
}
export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBearerAuth implements Authentication {
    accessToken: string | (() => string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
//# sourceMappingURL=models.d.ts.map