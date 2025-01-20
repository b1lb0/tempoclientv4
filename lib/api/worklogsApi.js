"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorklogsApi = exports.WorklogsApiApiKeys = void 0;
var request_1 = __importDefault(require("request"));
var models_1 = require("../model/models");
var _1 = require("./");
var defaultBasePath = 'https://api.tempo.io/4';
// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================
var WorklogsApiApiKeys;
(function (WorklogsApiApiKeys) {
})(WorklogsApiApiKeys || (exports.WorklogsApiApiKeys = WorklogsApiApiKeys = {}));
var WorklogsApi = /** @class */ (function () {
    function WorklogsApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this._defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new models_1.VoidAuth(),
        };
        this.interceptors = [];
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(WorklogsApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklogsApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorklogsApi.prototype, "defaultHeaders", {
        get: function () {
            return this._defaultHeaders;
        },
        set: function (defaultHeaders) {
            this._defaultHeaders = defaultHeaders;
        },
        enumerable: false,
        configurable: true
    });
    WorklogsApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    WorklogsApi.prototype.setApiKey = function (key, value) {
        this.authentications[WorklogsApiApiKeys[key]].apiKey = value;
    };
    WorklogsApi.prototype.addInterceptor = function (interceptor) {
        this.interceptors.push(interceptor);
    };
    /**
     * Note: This API only supports creating new Work Attribute values. Work Attribute values can only be updated as part of the Worklog.
     * @summary Bulk create Work Attribute values for Worklogs
     * @param workAttributeValuesInput
     */
    WorklogsApi.prototype.createWorkAttributeValuesForWorklogs = function (workAttributeValuesInput_1) {
        return __awaiter(this, arguments, void 0, function (workAttributeValuesInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_1, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/work-attribute-values';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                localVarFormParams = {};
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(workAttributeValuesInput, "Array<WorkAttributeValuesInput>")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_1 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_1(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Creates a new Worklog using the provided input and returns the newly created Worklog
     * @summary Create Worklog
     * @param worklogInput
     */
    WorklogsApi.prototype.createWorklog = function (worklogInput_1) {
        return __awaiter(this, arguments, void 0, function (worklogInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_2, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(worklogInput, "WorklogInput")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_2 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_2(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Worklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Deletes an existing Worklog for the given id
     * @summary Delete Worklog
     * @param id
     * @param bypassPeriodClosuresAndApprovals Bypass period closures and approvals. If the value is \&#39;true\&#39; and the worklog is approved or from a closed period, the worklog will be deleted. You need the Tempo Administrator permission and Override Mode enabled. [TempoLab only]
     */
    WorklogsApi.prototype.deleteWorklog = function (id_1, bypassPeriodClosuresAndApprovals_1) {
        return __awaiter(this, arguments, void 0, function (id, bypassPeriodClosuresAndApprovals, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_3, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                localVarFormParams = {};
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling deleteWorklog.');
                }
                if (bypassPeriodClosuresAndApprovals !== undefined) {
                    localVarQueryParameters['bypassPeriodClosuresAndApprovals'] = models_1.ObjectSerializer.serialize(bypassPeriodClosuresAndApprovals, "boolean");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'DELETE',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_3 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_3(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a list of existing Jira Worklog ids that match the informed Tempo Worklog ids. If a Jira Worklog Id cannot be found, it will not be returned on the results
     * @summary Retrieve Jira Worklog ids by Tempo Worklog ids
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param tempoWorklogIdList
     */
    WorklogsApi.prototype.getJiraWorklogIdsByTempoWorklogIds = function (offset_1, limit_1, tempoWorklogIdList_1) {
        return __awaiter(this, arguments, void 0, function (offset, limit, tempoWorklogIdList, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_4, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/tempo-to-jira';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(tempoWorklogIdList, "TempoWorklogIdList")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_4 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_4(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklogIdMapper");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a list of existing Tempo Worklog ids that match the informed Jira Worklog ids. If a Tempo Worklog Id cannot be found, it will not be returned on the results
     * @summary Retrieve Tempo Worklog ids by Jira Worklog ids
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param jiraWorklogIdList
     */
    WorklogsApi.prototype.getTempoWorklogIdsByJiraWorklogIds = function (offset_1, limit_1, jiraWorklogIdList_1) {
        return __awaiter(this, arguments, void 0, function (offset, limit, jiraWorklogIdList, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_5, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/jira-to-tempo';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(jiraWorklogIdList, "JiraWorklogIdList")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_5 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_5(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklogIdMapper");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a specific Work Attribute value using the provided key, for the given Worklog
     * @summary Retrieve Work Attribute value for Worklog
     * @param id
     * @param key
     */
    WorklogsApi.prototype.getWorkAttributeValueForWorklog = function (id_1, key_1) {
        return __awaiter(this, arguments, void 0, function (id, key, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_6, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/{id}/work-attribute-values/{key}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)))
                    .replace('{' + 'key' + '}', encodeURIComponent(String(key)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling getWorkAttributeValueForWorklog.');
                }
                // verify required parameter 'key' is not null or undefined
                if (key === null || key === undefined) {
                    throw new Error('Required parameter key was null or undefined when calling getWorkAttributeValueForWorklog.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_6 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_6(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "WorkAttributeValue");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a list of all Work Attribute values for the given Worklog
     * @summary Retrieve Work Attribute values for Worklog
     * @param id
     */
    WorklogsApi.prototype.getWorkAttributeValuesForWorklog = function (id_1) {
        return __awaiter(this, arguments, void 0, function (id, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_7, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/{id}/work-attribute-values'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling getWorkAttributeValuesForWorklog.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_7 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_7(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "WorkAttributeValueResults");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves an existing Worklog for the given id
     * @summary Retrieve Worklog
     * @param id
     */
    WorklogsApi.prototype.getWorklogById = function (id_1) {
        return __awaiter(this, arguments, void 0, function (id, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_8, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling getWorklogById.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_8 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_8(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Worklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogs = function (projectId_1, issueId_1, from_1, to_1, updatedFrom_1, offset_1, limit_1, orderBy_1) {
        return __awaiter(this, arguments, void 0, function (projectId, issueId, from, to, updatedFrom, offset, limit, orderBy, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_9, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (projectId !== undefined) {
                    localVarQueryParameters['projectId'] = models_1.ObjectSerializer.serialize(projectId, "Array<number>");
                }
                if (issueId !== undefined) {
                    localVarQueryParameters['issueId'] = models_1.ObjectSerializer.serialize(issueId, "Array<number>");
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                if (orderBy !== undefined) {
                    localVarQueryParameters['orderBy'] = models_1.ObjectSerializer.serialize(orderBy, "'ID' | 'START_DATE_TIME' | 'UPDATED'");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_9 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_9(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogsByAccount = function (accountKey_1, from_1, to_1, updatedFrom_1, offset_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (accountKey, from, to, updatedFrom, offset, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_10, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/account/{accountKey}'
                    .replace('{' + 'accountKey' + '}', encodeURIComponent(String(accountKey)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'accountKey' is not null or undefined
                if (accountKey === null || accountKey === undefined) {
                    throw new Error('Required parameter accountKey was null or undefined when calling getWorklogsByAccount.');
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_10 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_10(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogsByIssueId = function (issueId_1, from_1, to_1, updatedFrom_1, offset_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (issueId, from, to, updatedFrom, offset, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_11, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/issue/{issueId}'
                    .replace('{' + 'issueId' + '}', encodeURIComponent(String(issueId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'issueId' is not null or undefined
                if (issueId === null || issueId === undefined) {
                    throw new Error('Required parameter issueId was null or undefined when calling getWorklogsByIssueId.');
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_11 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_11(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogsByProjectId = function (projectId_1, from_1, to_1, updatedFrom_1, offset_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (projectId, from, to, updatedFrom, offset, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_12, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/project/{projectId}'
                    .replace('{' + 'projectId' + '}', encodeURIComponent(String(projectId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'projectId' is not null or undefined
                if (projectId === null || projectId === undefined) {
                    throw new Error('Required parameter projectId was null or undefined when calling getWorklogsByProjectId.');
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_12 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_12(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogsByTeam = function (teamId_1, from_1, to_1, updatedFrom_1, offset_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (teamId, from, to, updatedFrom, offset, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_13, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/team/{teamId}'
                    .replace('{' + 'teamId' + '}', encodeURIComponent(String(teamId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'teamId' is not null or undefined
                if (teamId === null || teamId === undefined) {
                    throw new Error('Required parameter teamId was null or undefined when calling getWorklogsByTeam.');
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_13 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_13(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
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
    WorklogsApi.prototype.getWorklogsByUser = function (accountId_1, from_1, to_1, updatedFrom_1, offset_1, limit_1) {
        return __awaiter(this, arguments, void 0, function (accountId, from, to, updatedFrom, offset, limit, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_14, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/user/{accountId}'
                    .replace('{' + 'accountId' + '}', encodeURIComponent(String(accountId)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'accountId' is not null or undefined
                if (accountId === null || accountId === undefined) {
                    throw new Error('Required parameter accountId was null or undefined when calling getWorklogsByUser.');
                }
                if (from !== undefined) {
                    localVarQueryParameters['from'] = models_1.ObjectSerializer.serialize(from, "string");
                }
                if (to !== undefined) {
                    localVarQueryParameters['to'] = models_1.ObjectSerializer.serialize(to, "string");
                }
                if (updatedFrom !== undefined) {
                    localVarQueryParameters['updatedFrom'] = models_1.ObjectSerializer.serialize(updatedFrom, "string");
                }
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'GET',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_14 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_14(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a list of existing Work Attribute values that matches the given worklog ids
     * @summary Search Work Attribute values
     * @param workAttributeSearchInput
     */
    WorklogsApi.prototype.searchWorkAttributeValuesForWorklogs = function (workAttributeSearchInput_1) {
        return __awaiter(this, arguments, void 0, function (workAttributeSearchInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_15, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/work-attribute-values/search';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(workAttributeSearchInput, "WorkAttributeSearchInput")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_15 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_15(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Array<WorkAttributeValuesByWorklog>");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Retrieves a list of existing Worklogs that matches the given search parameters
     * @summary Search Worklogs
     * @param offset Skip over a number of elements by specifying an offset value for the query
     * @param limit Limit the number of elements on the response
     * @param worklogSearchInput
     */
    WorklogsApi.prototype.searchWorklogs = function (offset_1, limit_1, worklogSearchInput_1) {
        return __awaiter(this, arguments, void 0, function (offset, limit, worklogSearchInput, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_16, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/search';
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                if (offset !== undefined) {
                    localVarQueryParameters['offset'] = models_1.ObjectSerializer.serialize(offset, "number");
                }
                if (limit !== undefined) {
                    localVarQueryParameters['limit'] = models_1.ObjectSerializer.serialize(limit, "number");
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'POST',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(worklogSearchInput, "WorklogSearchInput")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_16 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_16(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "PageableWorklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    /**
     * Updates an existing Worklog for the given id using the provided input and returns the updated Worklog
     * @summary Update Worklog
     * @param id
     * @param worklogUpdate
     */
    WorklogsApi.prototype.updateWorklog = function (id_1, worklogUpdate_1) {
        return __awaiter(this, arguments, void 0, function (id, worklogUpdate, options) {
            var localVarPath, localVarQueryParameters, localVarHeaderParams, produces, localVarFormParams, localVarUseFormData, localVarRequestOptions, authenticationPromise, interceptorPromise, _loop_17, _i, _a, interceptor;
            var _this = this;
            if (options === void 0) { options = { headers: {} }; }
            return __generator(this, function (_b) {
                localVarPath = this.basePath + '/worklogs/{id}'
                    .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
                localVarQueryParameters = {};
                localVarHeaderParams = Object.assign({}, this._defaultHeaders);
                produces = ['application/json'];
                // give precedence to 'application/json'
                if (produces.indexOf('application/json') >= 0) {
                    localVarHeaderParams.Accept = 'application/json';
                }
                else {
                    localVarHeaderParams.Accept = produces.join(',');
                }
                localVarFormParams = {};
                // verify required parameter 'id' is not null or undefined
                if (id === null || id === undefined) {
                    throw new Error('Required parameter id was null or undefined when calling updateWorklog.');
                }
                Object.assign(localVarHeaderParams, options.headers);
                localVarUseFormData = false;
                localVarRequestOptions = {
                    method: 'PUT',
                    qs: localVarQueryParameters,
                    headers: localVarHeaderParams,
                    uri: localVarPath,
                    useQuerystring: this._useQuerystring,
                    json: true,
                    body: models_1.ObjectSerializer.serialize(worklogUpdate, "WorklogUpdate")
                };
                authenticationPromise = Promise.resolve();
                authenticationPromise = authenticationPromise.then(function () { return _this.authentications.default.applyToRequest(localVarRequestOptions); });
                interceptorPromise = authenticationPromise;
                _loop_17 = function (interceptor) {
                    interceptorPromise = interceptorPromise.then(function () { return interceptor(localVarRequestOptions); });
                };
                for (_i = 0, _a = this.interceptors; _i < _a.length; _i++) {
                    interceptor = _a[_i];
                    _loop_17(interceptor);
                }
                return [2 /*return*/, interceptorPromise.then(function () {
                        if (Object.keys(localVarFormParams).length) {
                            if (localVarUseFormData) {
                                localVarRequestOptions.formData = localVarFormParams;
                            }
                            else {
                                localVarRequestOptions.form = localVarFormParams;
                            }
                        }
                        return new Promise(function (resolve, reject) {
                            (0, request_1.default)(localVarRequestOptions, function (error, response, body) {
                                if (error) {
                                    reject(error);
                                }
                                else {
                                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                                        body = models_1.ObjectSerializer.deserialize(body, "Worklog");
                                        resolve({ response: response, body: body });
                                    }
                                    else {
                                        reject(new _1.HttpError(response, body, response.statusCode));
                                    }
                                }
                            });
                        });
                    })];
            });
        });
    };
    return WorklogsApi;
}());
exports.WorklogsApi = WorklogsApi;
