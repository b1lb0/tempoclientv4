export * from './accountCategoriesApi';
import { AccountCategoriesApi } from './accountCategoriesApi';
export * from './accountCategoryTypesApi';
import { AccountCategoryTypesApi } from './accountCategoryTypesApi';
export * from './accountLinksApi';
import { AccountLinksApi } from './accountLinksApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './customersApi';
import { CustomersApi } from './customersApi';
export * from './flexPlansApi';
import { FlexPlansApi } from './flexPlansApi';
export * from './genericResourceTeamMembersApi';
import { GenericResourceTeamMembersApi } from './genericResourceTeamMembersApi';
export * from './genericResourcesApi';
import { GenericResourcesApi } from './genericResourcesApi';
export * from './globalConfigurationsApi';
import { GlobalConfigurationsApi } from './globalConfigurationsApi';
export * from './holidaySchemesApi';
import { HolidaySchemesApi } from './holidaySchemesApi';
export * from './periodsApi';
import { PeriodsApi } from './periodsApi';
export * from './permissionRolesApi';
import { PermissionRolesApi } from './permissionRolesApi';
export * from './planApprovalsApi';
import { PlanApprovalsApi } from './planApprovalsApi';
export * from './plansApi';
import { PlansApi } from './plansApi';
export * from './programApi';
import { ProgramApi } from './programApi';
export * from './rolesApi';
import { RolesApi } from './rolesApi';
export * from './skillAssignmentsApi';
import { SkillAssignmentsApi } from './skillAssignmentsApi';
export * from './skillsApi';
import { SkillsApi } from './skillsApi';
export * from './teamApi';
import { TeamApi } from './teamApi';
export * from './teamLinksApi';
import { TeamLinksApi } from './teamLinksApi';
export * from './teamMembershipsApi';
import { TeamMembershipsApi } from './teamMembershipsApi';
export * from './timesheetApprovalsApi';
import { TimesheetApprovalsApi } from './timesheetApprovalsApi';
export * from './userScheduleApi';
import { UserScheduleApi } from './userScheduleApi';
export * from './workAttributesApi';
import { WorkAttributesApi } from './workAttributesApi';
export * from './workloadSchemesApi';
import { WorkloadSchemesApi } from './workloadSchemesApi';
export * from './worklogsApi';
import { WorklogsApi } from './worklogsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export const APIS = [AccountCategoriesApi, AccountCategoryTypesApi, AccountLinksApi, AccountsApi, CustomersApi, FlexPlansApi, GenericResourceTeamMembersApi, GenericResourcesApi, GlobalConfigurationsApi, HolidaySchemesApi, PeriodsApi, PermissionRolesApi, PlanApprovalsApi, PlansApi, ProgramApi, RolesApi, SkillAssignmentsApi, SkillsApi, TeamApi, TeamLinksApi, TeamMembershipsApi, TimesheetApprovalsApi, UserScheduleApi, WorkAttributesApi, WorkloadSchemesApi, WorklogsApi];
