import { AccountCategoriesApi } from './api/';
import { AccountCategoryTypesApi } from './api/';
import { AccountLinksApi } from './api/';
import { AccountsApi } from './api/';
import { CustomersApi } from './api/';
import { FlexPlansApi } from './api/';
import { GenericResourcesApi } from './api/';
import { GenericResourceTeamMembersApi } from './api/';
import { GlobalConfigurationsApi } from './api/';
import { HolidaySchemesApi } from './api/';
import { PeriodsApi } from './api/';
import { PermissionRolesApi } from './api/';
import { PlanApprovalsApi } from './api/';
import { PlansApi } from './api/';
import { ProgramApi } from './api/';
import { RolesApi } from './api/';
import { SkillAssignmentsApi } from './api/';
import { SkillsApi } from './api/';
import { TeamApi } from './api/';
import { TeamLinksApi } from './api/';
import { TeamMembershipsApi } from './api/';
import { TimesheetApprovalsApi } from './api/';
import { UserScheduleApi } from './api/';
import { WorkAttributesApi } from './api/';
import { WorkloadSchemesApi } from './api/';
import { WorklogsApi } from './api/';

import { HttpBearerAuth } from './model/models';

// This is the entrypoint for the package
export * from './api/';
export * from './model/models';

export interface TempoApiOptions {
    bearerToken: string;
}

export default class TempoApi {
    readonly config: TempoApiOptions;
    readonly auth: HttpBearerAuth;


    readonly accountCategories: AccountCategoriesApi = new AccountCategoriesApi();
    readonly accountCategoryTypes: AccountCategoryTypesApi = new AccountCategoryTypesApi();
    readonly accountLinks: AccountLinksApi = new AccountLinksApi();
    readonly accounts: AccountsApi = new AccountsApi();
    readonly customers: CustomersApi = new CustomersApi();
    readonly genericResources: GenericResourcesApi = new GenericResourcesApi();
    readonly genericResourceTeamMembers: GenericResourceTeamMembersApi = new GenericResourceTeamMembersApi();
    readonly globalConfiguration: GlobalConfigurationsApi = new GlobalConfigurationsApi();
    readonly holidaySchemes: HolidaySchemesApi = new HolidaySchemesApi();
    readonly periods: PeriodsApi = new PeriodsApi();
    readonly permissionRoles: PermissionRolesApi = new PermissionRolesApi();
    readonly planApprovals: PlanApprovalsApi = new PlanApprovalsApi();
    readonly plans: PlansApi = new PlansApi();
    readonly programs: ProgramApi = new ProgramApi();
    readonly roles: RolesApi = new  RolesApi();
    readonly skillAssignments: SkillAssignmentsApi = new  SkillAssignmentsApi();
    readonly skills: SkillsApi = new  SkillsApi();
    readonly teams: TeamApi = new TeamApi();
    readonly flexPlans: FlexPlansApi = new FlexPlansApi();
    readonly teamMemberships: TeamMembershipsApi = new TeamMembershipsApi();
    readonly teamLinks: TeamLinksApi = new TeamLinksApi();
    readonly timesheetApprovals: TimesheetApprovalsApi = new TimesheetApprovalsApi();
    readonly userSchedule: UserScheduleApi = new UserScheduleApi();
    readonly workAttributes: WorkAttributesApi = new WorkAttributesApi();
    readonly workloadSchemes: WorkloadSchemesApi = new WorkloadSchemesApi();
    readonly worklogs: WorklogsApi = new WorklogsApi();
    constructor(options: TempoApiOptions) {
        this.config = options

        this.auth = new HttpBearerAuth()
        this.auth.accessToken = this.config.bearerToken
        this.accountCategories.setDefaultAuthentication(this.auth)
        this.accountCategoryTypes.setDefaultAuthentication(this.auth)
        this.accountLinks.setDefaultAuthentication(this.auth)
        this.accounts.setDefaultAuthentication(this.auth)
        this.customers.setDefaultAuthentication(this.auth)
        this.genericResources.setDefaultAuthentication(this.auth)
        this.globalConfiguration.setDefaultAuthentication(this.auth)
        this.holidaySchemes.setDefaultAuthentication(this.auth)
        this.periods.setDefaultAuthentication(this.auth)
        this.permissionRoles.setDefaultAuthentication(this.auth)
        this.plans.setDefaultAuthentication(this.auth)
        this.programs.setDefaultAuthentication(this.auth)
        this.roles.setDefaultAuthentication(this.auth)
        this.teamMemberships.setDefaultAuthentication(this.auth)
        this.teamLinks.setDefaultAuthentication(this.auth)
        this.teams.setDefaultAuthentication(this.auth)
        this.timesheetApprovals.setDefaultAuthentication(this.auth)
        this.userSchedule.setDefaultAuthentication(this.auth)
        this.workAttributes.setDefaultAuthentication(this.auth)
        this.workloadSchemes.setDefaultAuthentication(this.auth)
        this.worklogs.setDefaultAuthentication(this.auth)
    }
}

module.exports = TempoApi;

/*
//How to use
const run = async () => {
    const tempoClient = new TempoApi({bearerToken: "XXXXXX"})
    try {
        const accounts = await tempoClient.accounts.getAccounts(0, 1)
        console.log(JSON.stringify(accounts.body))
    } catch (err) {
        console.log(JSON.stringify(err))
    }
}

run()
*/
