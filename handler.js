const loadtest = require('loadtest');

module.exports.loadtest = async event => {

  // Log Event
  console.log(event);

  // Load Test Options (See: https://github.com/alexfernandez/loadtest#options)
  options = {
    concurrency: event.concurrency,
    requestsPerSecond: event.requestsPerSecond,
    maxSeconds: event.maxSeconds,
    url: event.url,
  };

  // Run loadtest
  loadtest.loadTest(options);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Loadtest executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
  
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
