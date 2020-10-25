'use strict';

const loadtest = require('loadtest');

module.exports.loadtest = (event, context) => {
  
  // Load Test Options (See: https://github.com/alexfernandez/loadtest#options)
  const options = {
    method: 'GET',
    concurrency: 1,
    requestsPerSecond: 1,
    maxSeconds: 60,
    body:'',
    url: "http://stage-erebus-app.azurewebsites.net",
    requestGenerator: requestGenerator
  };
  
  function requestGenerator(params, options, client, callback) {
    options.headers['Content-Type'] = 'application/json';
    options.path = '/api/items/' + (Math.floor(Math.random() * 100) + 1);
    const request = client(options, callback);
    return request;
  }

  // Run Loadtest
  loadtest.loadTest(options);

};