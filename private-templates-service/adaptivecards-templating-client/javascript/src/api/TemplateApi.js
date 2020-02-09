/*
 * Adaptive Cards Templating Service Client SDK
 * Adaptive Cards Templating Service API definition.
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.12
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NewTemplate', 'model/Template', 'model/TemplateList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NewTemplate'), require('../model/Template'), require('../model/TemplateList'));
  } else {
    // Browser globals (root is window)
    if (!root.AdaptiveCardsTemplatingServiceClientSdk) {
      root.AdaptiveCardsTemplatingServiceClientSdk = {};
    }
    root.AdaptiveCardsTemplatingServiceClientSdk.TemplateApi = factory(root.AdaptiveCardsTemplatingServiceClientSdk.ApiClient, root.AdaptiveCardsTemplatingServiceClientSdk.NewTemplate, root.AdaptiveCardsTemplatingServiceClientSdk.Template, root.AdaptiveCardsTemplatingServiceClientSdk.TemplateList);
  }
}(this, function(ApiClient, NewTemplate, Template, TemplateList) {
  'use strict';

  /**
   * Template service.
   * @module api/TemplateApi
   * @version 1.0.0
   */

  /**
   * Constructs a new TemplateApi. 
   * @alias module:api/TemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the templateById operation.
     * @callback module:api/TemplateApi~templateByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Template} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find template by id
     * Returns a single template
     * @param {String} templateId ID of template to return
     * @param {module:api/TemplateApi~templateByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Template}
     */
    this.templateById = function(templateId, callback) {
      var postBody = null;

      // verify the required parameter 'templateId' is set
      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling templateById");
      }


      var pathParams = {
        'templateId': templateId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Template;

      return this.apiClient.callApi(
        '/template/{templateId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the templateGet operation.
     * @callback module:api/TemplateApi~templateGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TemplateList} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find all templates
     * Returns all public templates and owned templates
     * @param {module:api/TemplateApi~templateGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TemplateList}
     */
    this.templateGet = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer_auth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = TemplateList;

      return this.apiClient.callApi(
        '/template', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the templatePost operation.
     * @callback module:api/TemplateApi~templatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a new template
     * 
     * @param {module:model/NewTemplate} body Template object to be added
     * @param {module:api/TemplateApi~templatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.templatePost = function(body, callback) {
      var postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling templatePost");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['bearer_auth'];
      var contentTypes = ['application/json'];
      var accepts = [];
      var returnType = null;

      return this.apiClient.callApi(
        '/template', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
