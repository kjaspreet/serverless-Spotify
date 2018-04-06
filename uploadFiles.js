'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const s3 = new AWS.S3();

module.exports.uploadFiles = (event, context, callback) => {
  event.Records.forEach((record) => {
    const filename = record.s3.object.key;

    const params = {
      TableName: 'takehometable',
      Item: {
        fileName: filename
      }
    }

    dynamoDb.put(params, (err, result) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
};
