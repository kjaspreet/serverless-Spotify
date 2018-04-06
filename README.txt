GitHub Link:
https://github.com/kjaspreet/serverless-Spotify

Spotify: Using this restAPI, whenever user uploads new song file in S3 bucket then it's entry will be updated in DynamoDB table and user can list all/a single song that is in DynamoDB. Also, user can create new playlist. For this, a separate entry will be created in other DynamoDB table.

Instruction: 
- Run sls deploy

URL for Listing Songs:
https://kyp8l938d9.execute-api.us-west-2.amazonaws.com/dev/spotify


URL for Getting a particular Song:
https://kyp8l938d9.execute-api.us-west-2.amazonaws.com/dev/spotify/{file
name}

Example:
curl https://kyp8l938d9.execute-api.us-west-2.amazonaws.com/dev/spotify/song1.txt


URL for Creating Playlist: (User have to specify filename and playlist name)
https://kyp8l938d9.execute-api.us-west-2.amazonaws.com/dev/spotify

Example:
curl -X POST https://kyp8l938d9.execute-api.us-west-2.amazonaws.com/dev/spotify/ --data '{ "filename": "song2.txt","playlist": "Favorite" }'



