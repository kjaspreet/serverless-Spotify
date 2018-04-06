'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.searchFiles = (event, context, callback) => {

  const params = {
    TableName: 'takehometable',
    Key: {
      fileName: event.pathParameters.filename,
    },
  };

  dynamoDb.get(params, (error, result) => {
    if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t fetch the song',
      });
      return;
    }

    //file not found
    if(result.Item == undefined)
    {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Song File Not Found'),
      };
      callback(null, response);
    }

    else
    {
      const response = {
        statusCode: 200,
        body: JSON.stringify('Song '+result.Item.fileName + ' has been found'),
      };
      callback(null, response);
      return;
    }
    
  });
};
