import { AccountCategoriesApi } from './api/';
import { AccountLinksApi } from './api/';
import { GenericResourcesApi } from './api/';
import { HolidaySchemesApi } from './api/';
import { PermissionRolesApi } from './api/';
import { RolesApi } from './api/';
import { TeamLinksApi } from './api/';
import { UserScheduleApi } from './api/';
import { WorkloadSchemesApi } from './api/';
import { WorklogsApi } from './api/';
import { ProgramApi } from './api/';
import { WorkAttributesApi } from './api/';
import { TimesheetApprovalsApi } from './api/';
import { TeamMembershipsApi } from './api/';
import { PlansApi } from './api/';
import { PeriodsApi } from './api/';
import { GlobalConfigurationsApi } from './api/';
import { CustomersApi } from './api/';
import { AccountCategoryTypesApi } from './api/';
import { AccountsApi } from './api/';
import { HttpBearerAuth } from './model/models';
export * from './api/';
export * from './model/models';
export interface TempoApiOptions {
    bearerToken: string;
}
export default class TempoApi {
    readonly config: TempoApiOptions;
    readonly auth: HttpBearerAuth;
    readonly accountCategories: AccountCategoriesApi;
    readonly accountCategoryTypes: AccountCategoryTypesApi;
    readonly accountLinks: AccountLinksApi;
    readonly accounts: AccountsApi;
    readonly customers: CustomersApi;
    readonly genericResources: GenericResourcesApi;
    readonly globalConfiguration: GlobalConfigurationsApi;
    readonly holidaySchemes: HolidaySchemesApi;
    readonly periods: PeriodsApi;
    readonly permissionRoles: PermissionRolesApi;
    readonly plans: PlansApi;
    readonly programs: ProgramApi;
    readonly roles: RolesApi;
    readonly teamMemberships: TeamMembershipsApi;
    readonly teamLinks: TeamLinksApi;
    readonly teams: TeamLinksApi;
    readonly timesheetApprovals: TimesheetApprovalsApi;
    readonly userSchedule: UserScheduleApi;
    readonly workAttributes: WorkAttributesApi;
    readonly workloadSchemes: WorkloadSchemesApi;
    readonly worklogs: WorklogsApi;
    constructor(options: TempoApiOptions);
}
//# sourceMappingURL=api.d.ts.map