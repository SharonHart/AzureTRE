/*
 * Azure TRE API
 *
 * Welcome to the Azure TRE API - for more information about templates and workspaces see the [Azure TRE documentation](https://microsoft.github.io/AzureTRE)
 *
 * The version of the OpenAPI document: 0.2.14
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

using System;
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using TRE.Rest.Client.Client;
using TRE.Rest.Client.Api;

namespace TRE.Rest.Client.Test.Api
{
    /// <summary>
    ///  Class for testing HealthApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class HealthApiTests : IDisposable
    {
        private HealthApi instance;

        public HealthApiTests()
        {
            instance = new HealthApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of HealthApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' HealthApi
            //Assert.IsType<HealthApi>(instance);
        }

        /// <summary>
        /// Test GetHealthStatusApiHealthGet
        /// </summary>
        [Fact]
        public void GetHealthStatusApiHealthGetTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //var response = instance.GetHealthStatusApiHealthGet();
            //Assert.IsType<Object>(response);
        }
    }
}