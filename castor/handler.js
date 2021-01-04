'use strict';

const loadtest = require('loadtest');

module.exports.loadtest = (event, context) => {
  
  // Load Test Options (See: https://github.com/alexfernandez/loadtest#options)
  const options = {
    method: 'GET',
    concurrency: 1,
    requestsPerSecond: 1,
    maxSeconds: 59,
    body:'',
    url: "https://aangelo-castor-app.azurewebsites.net",
    // url: "https://enwh56372d9x.x.pipedream.net",   requestGenerator: requestGenerator
  };
  
  // Generate Request
  function requestGenerator(params, options, client, callback) {
    options.headers['Content-Type'] = 'application/json';
    options.path = '/owners?lastName=' + generateRandomLetter();
    const request = client(options, callback);
    return request;
  }

  // Generate Random Letter
  function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  // Run Loadtest
  loadtest.loadTest(options);

};