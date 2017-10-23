

var fs = require('fs');

var gcs = require('@google-cloud/storage')({
  projectId: 'mindful-ship-176106',
  keyFilename: '/home/pi/smart-mirror/plugins/face_detection/keyfile.json'
});



// Reference an existing bucket.
var bucket = gcs.bucket('smartmirrortest');

// Upload a local file to a new file to be created in your bucket.
bucket.upload('/home/pi/smart-mirror/image.jpg', function(err, file) {
  if (!err) {
    // "zebra.jpg" is now in your bucket.
  }
});