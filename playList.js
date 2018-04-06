'use strict';
const AWS = require('aws-sdk'); 
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.playList = (event, context, callback) => {

    const data =  JSON.parse(event.body);

    const params = {
      TableName: 'playlist',
      Item: {
        fileName: data.filename,
        playList: data.playlist
      }
    };

    dynamoDb.put(params, (error, result) => {
      if (error) {
      console.error(error);
      callback(null, {
        statusCode: error.statusCode || 501,
        headers: { 'Content-Type': 'text/plain' },
        body: 'Couldn\'t store the song in playlist.',
      });
      return;
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify('Song has been successfully added to Playlist'),
    };
    callback(null, response);

  });

};
