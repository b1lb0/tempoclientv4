/**
 * REST API documentation
 * <div style=\"background-color: #E5F9FD;padding: 15px;margin: 20px 0;\">   This documentation is for <strong>version 4</strong> of the Tempo REST API, which is the latest version. To read documentation for version 3 of the Tempo REST API, <a href=\"https://apidocs.tempo.io/v3\"><strong>click here</strong></a>  </div>  We encourage you to join our developer community on Slack at [www.tempo.io/developers](https://www.tempo.io/developers), where you can get support from our internal experts and share best practices with other developers building with Tempo.  If you have feedback or requests, you can also reach us through our Customer Support Portal. You can find general product  information in the Tempo Help Center.  Below are links to other Tempo APIs. <ul>   <li><a href=\"https://apidocs.tempo.io/papertrail\">Papertrail API (drop-in replacement for the Audit API)</a></li>   <li><a href=\"https://apidocs.tempo.io/cost-tracker\">Financial Manager API</a></li>   <li><a href=\"https://apidocs.tempo.io/jira\">Jira Links API</a></li>   <li><a href=\"https://apidocs.tempo.io/webhooks\">Webhooks API</a></li> </ul>  ## Base Paths for API Access  We recommend using a geographically direct base path, when possible, to ensure you have the quickest and most efficient access to our services based on where your Tempo data resides.  * https://api.eu.tempo.io/4 : Use this for clients based in Europe. * https://api.us.tempo.io/4 : Use this for clients based in the Americas. * https://api.tempo.io/4 : Use this if your clients are based in other locations, if you are unsure where your client is installed, or if you prefer a universal path.  If you use a base path for a different cluster than the one your Tempo data resides in, you will receive an authorization error.  ## Authentication ### Using the REST API as an individual user  You can use the REST API to interact with the data your permissions give you access to. To do so, you will need to  generate a Tempo OAuth 2.0 token.  Go to **Tempo>Settings**, scroll down to **Data Access** and select **API integration**.  Once you have a token, you need to use it inside the Authorization HTTP header. Ex:  `curl -v -H \"Authorization: Bearer $token\" \"https://api.tempo.io/4/worklogs?...\"`<br><br>  ### Using the REST API as an application developer  If you are building apps with Tempo, and have the required Tempo administrator permissions, you can quickly  obtain the OAuth 2.0 credentials you need to retrieve an access token. Access tokens grant temporary, secure  access to Tempo, based on your current permissions.  #### Obtain your credentials  Go to **Tempo>Settings**, scroll down to **Data Access** and select **OAuth 2.0 authentication**.  Enter a Redirect URI and specify the Client type and Authorization grant type.  Once you click **Add**, your Client ID and Client secret are generated and you can retrieve your access token.<br><br>  ### How to retrieve an access token for a user #### Authorization grant type used is *authorization_code* ##### Step 1 Obtain an authorization code against your Jira Cloud instance :  `GET: https://{jira-cloud-instance-name}.atlassian.net/plugins/servlet/ac/io.tempo.jira/oauth-authorize/?client_id=$CLIENT_ID&redirect_uri=$REDIRECT_URI`  Where *$CLIENT_ID* and *$REDIRECT_URI* match the one you generated in **Tempo > Settings > OAuth 2.0 Applications**  You will be asked to *authorize* or *deny* access to your Tempo data. Granting access redirects you to the configured  *redirect URI* with a new query string parameter named *code* (this is the authorization code). Note that this authorization code  expires quickly.  ![MyApp Request Access](myapp-request-access.png \"MyApp Request Access\")  ##### Step 2 Obtain an access token from Tempo by providing the *authorization code* to:  `POST: https://api.tempo.io/oauth/token/`  sending the following parameters in the body using the \"application/x-www-form-urlencoded\" format: ``` grant_type = \"authorization_code\" client_id = $CLIENT_ID client_secret = $CLIENT_SECRET redirect_uri = $REDIRECT_URI code = $CODE ```  The response includes the access token itself, related information, and a refresh token. ```JSON {   \"access_token\":\"$ACCESS_TOKEN\",   \"expires_in\":5184000,   \"token_type\":\"Bearer\",   \"scope\":\"read write\",   \"refresh_token\":\"$REFRESH_TOKEN\" } ```  ##### Step 3 Provide this *access token* to any API requests using the *Authorization header* :  `curl -H \"Authorization: Bearer $ACCESS_TOKEN\" \"https://api.tempo.io/4/worklogs?from=2022-01-28&to=2022-02-03\"`  The access token will expire after the number of seconds specified in the **expires_in** field and will  no longer be usable.  ### How to retrieve a new access token from the refresh token The *access token* will eventually expire. You need to renew it using the previously received *refresh token*:  `POST: https://api.tempo.io/oauth/token/`  sending the following parameters in the body using the \"application/x-www-form-urlencoded\" format: ``` grant_type = \"refresh_token\" client_id = $CLIENT_ID client_secret = $CLIENT_SECRET redirect_uri = $REDIRECT_URI refresh_token = $REFRESH_TOKEN ```  The response will contain a new *access token* and a new *refresh token*. You\'ll need to utilize these  new tokens for future calls, as the previous ones will no longer be valid.  ### How to revoke a token You can revoke an existing *access token* at any time:  `POST: https://api.tempo.io/oauth/revoke_token/`  sending the following parameters in the body using the \"application/x-www-form-urlencoded\" format: ``` token_type_hint = \"access_token\" client_id = $CLIENT_ID client_secret = $CLIENT_SECRET token = $ACCESS_TOKEN ```  You can also revoke an existing *refresh token*:  `POST: https://api.tempo.io/oauth/revoke_token/`  sending the following parameters in the body using the \"application/x-www-form-urlencoded\" format: ``` {   token_type_hint = \"refresh_token\"   client_id = $CLIENT_ID   client_secret = $CLIENT_SECRET   token = $REFRESH_TOKEN } ```  ## API conventions ### Identifying users The Tempo REST API uses the Atlassian accountId to identify users. The accountId is an opaque identifier that  uniquely identifies the user.  The accountId of the current user can found using the [Jira Myself API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-group-Myself).  Information about a user, given the accountId, can be retrieved using the [Jira User API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/#api-group-User).  ### Dates The API uses strings to represent dates. Dates are formatted as [ISO 8601 calendar dates](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates) (YYYY-MM-DD).  For example, March 29th, 2019 is formatted as 2019-03-29.  ### Delete requests On success, delete requests return a response with status code [204 (No content)](https://httpstatuses.com/204).  No payload body is included in the response.  ### Arrays A few endpoints accept query parameters of type array. That is achieved by repeating the parameter multiple  times, e.g. to get worklogs from three projects:  `.../worklogs?from=2020-01-01&to=2020-12-31&project=10100&project=10200&project=10300`  ## Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call.  Here are a list of different types of error responses  Status code  | Description | Content type ----------------|-------------|--------- 400 | Bad Request | application/json 401 | Unauthorized | text/html 403 | Forbidden | text/html 404 | Not Found | application/json  <br>  The body of the JSON response will be in the following format:  ``` {   \"errors\": {     \"message\": \"Error details\"   } } ```  An example of 400 error ```   {     \"errors\": {       \"message\": \"\'date\' must be valid on the format: \'yyyy-MM-dd\'\"     }   } ```  An example of 404 error ```   {     \"errors\": {       \"message\": \"Account \'xyz\' not found\"     }   } ```
 *
 * The version of the OpenAPI document: 4.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import http from 'http';
import { JiraWorklogIdList } from '../model/jiraWorklogIdList';
import { PageableWorklog } from '../model/pageableWorklog';
import { PageableWorklogIdMapper } from '../model/pageableWorklogIdMapper';
import { TempoWorklogIdList } from '../model/tempoWorklogIdList';
import { WorkAttributeSearchInput } from '../model/workAttributeSearchInput';
import { WorkAttributeValue } from '../model/workAttributeValue';
import { WorkAttributeValueResults } from '../model/workAttributeValueResults';
import { WorkAttributeValuesByWorklog } from '../model/workAttributeValuesByWorklog';
import { WorkAttributeValuesInput } from '../model/workAttributeValuesInput';
import { Worklog } from '../model/worklog';
import { WorklogInput } from '../model/worklogInput';
import { WorklogSearchInput } from '../model/worklogSearchInput';
import { WorklogUpdate } from '../model/worklogUpdate';
import { Authentication, Interceptor } from '../model/models';
export declare enum WorklogsApiApiKeys {
}
export declare class WorklogsApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: WorklogsApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    /**
     * Note: This API only supports creating new Work Attribute values. Work Attribute values can only be updated as part of the Worklog.
     * @summary Bulk create Work Attribute values for Worklogs
     * @param workAttributeValuesInput
     */
    createWorkAttributeValuesForWorklogs(workAttributeValuesInput?: Array<WorkAttributeValuesInput>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Creates a new Worklog using the provided input and returns the newly created Worklog
     * @summary Create Worklog
     * @param worklogInput
     */
    createWorklog(worklogInput?: WorklogInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Worklog;
    }>;
    /**
     * Deletes an existing Worklog for the given id
     * @summary Delete Worklog
     * @param id
     * @param bypassPeriodClosuresAndApprovals Bypass period closures and approvals. If the value is \&#39;true\&#39; and the worklog is approved or from a closed period, the worklog will be deleted. You need the Tempo Administrator permission and Override Mode enabled. [TempoLab only]
     */
    deleteWorklog(id: string, bypassPeriodClosuresAndApprovals?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    /**
     * Retrieves a list of existing Jira Worklog ids that match the informed Tempo Worklog ids. If a Jira Worklog Id cannot be found, it will not be returned on the results
     * @summary Retrieve Jira Worklog ids by Tempo Worklog ids
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param tempoWorklogIdList
     */
    getJiraWorklogIdsByTempoWorklogIds(offset?: number, limit?: number, tempoWorklogIdList?: TempoWorklogIdList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklogIdMapper;
    }>;
    /**
     * Retrieves a list of existing Tempo Worklog ids that match the informed Jira Worklog ids. If a Tempo Worklog Id cannot be found, it will not be returned on the results
     * @summary Retrieve Tempo Worklog ids by Jira Worklog ids
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param jiraWorklogIdList
     */
    getTempoWorklogIdsByJiraWorklogIds(offset?: number, limit?: number, jiraWorklogIdList?: JiraWorklogIdList, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklogIdMapper;
    }>;
    /**
     * Retrieves a specific Work Attribute value using the provided key, for the given Worklog
     * @summary Retrieve Work Attribute value for Worklog
     * @param id
     * @param key
     */
    getWorkAttributeValueForWorklog(id: string, key: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WorkAttributeValue;
    }>;
    /**
     * Retrieves a list of all Work Attribute values for the given Worklog
     * @summary Retrieve Work Attribute values for Worklog
     * @param id
     */
    getWorkAttributeValuesForWorklog(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: WorkAttributeValueResults;
    }>;
    /**
     * Retrieves an existing Worklog for the given id
     * @summary Retrieve Worklog
     * @param id
     */
    getWorklogById(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Worklog;
    }>;
    /**
     * Retrieves a list of Worklogs that matches the given search parameters
     * @summary Retrieve Worklogs
     * @param projectId Retrieve only worklogs for the given project ids
     * @param issueId Retrieve only worklogs for the given issue ids
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param orderBy Order results by the specified field descending. If no order is specified, results will by default be ordered by START_DATE_TIME and ID ascending
     */
    getWorklogs(projectId?: Array<number>, issueId?: Array<number>, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, orderBy?: 'ID' | 'START_DATE_TIME' | 'UPDATED', options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieves a list of all Worklogs associated to the given Account key that matches the search parameters
     * @summary Search Worklogs associated to Account
     * @param accountKey
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     */
    getWorklogsByAccount(accountKey: string, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieves a list of all Worklogs associated to the given Issue id that matches the search parameters
     * @summary Search Worklogs associated to Issue id
     * @param issueId
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     */
    getWorklogsByIssueId(issueId: number, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieves a list of all Worklogs associated to the given projectId that matches the search parameters
     * @summary Retrieve Worklogs associated to projectId
     * @param projectId Id of the project you want to retrieve Worklogs for
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     */
    getWorklogsByProjectId(projectId: number, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieve a list of all Worklogs associated to the given Team id that matches the search parameters
     * @summary Search Worklogs associated to Team
     * @param teamId
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     */
    getWorklogsByTeam(teamId: string, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieves a list of all Worklogs associated to the given User that matches the search parameters
     * @summary Search Worklogs associated to User
     * @param accountId
     * @param from Retrieve results starting with this date
     * @param to Retrieve results up to and including this date
     * @param updatedFrom Retrieve results that have been updated from this date(e.g \&quot;2023-11-16\&quot;) or date time (e.g \&quot;2023-11-06T16:48:59Z\&quot;)
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     */
    getWorklogsByUser(accountId: string, from?: string, to?: string, updatedFrom?: string, offset?: number, limit?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Retrieves a list of existing Work Attribute values that matches the given worklog ids
     * @summary Search Work Attribute values
     * @param workAttributeSearchInput
     */
    searchWorkAttributeValuesForWorklogs(workAttributeSearchInput?: WorkAttributeSearchInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<WorkAttributeValuesByWorklog>;
    }>;
    /**
     * Retrieves a list of existing Worklogs that matches the given search parameters
     * @summary Search Worklogs
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param worklogSearchInput
     */
    searchWorklogs(offset?: number, limit?: number, worklogSearchInput?: WorklogSearchInput, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: PageableWorklog;
    }>;
    /**
     * Updates an existing Worklog for the given id using the provided input and returns the updated Worklog
     * @summary Update Worklog
     * @param id
     * @param worklogUpdate
     */
    updateWorklog(id: string, worklogUpdate?: WorklogUpdate, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Worklog;
    }>;
}
//# sourceMappingURL=worklogsApi.d.ts.map