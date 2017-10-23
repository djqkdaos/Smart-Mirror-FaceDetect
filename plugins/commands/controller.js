function face($scope, $http, SpeechService, Focus) {
	
		var exec = require('child_process').exec;

		child = exec('fswebcam -r 1280x720 --no-banner /home/pi/smart-mirror/image.jpg',
  			function (error, stdout, stderr) {
    		console.log('stdout: ' + stdout);
    		console.log('stderr: ' + stderr);
    		if (error !== null) {
     	 console.log('exec error: ' + error);
  					  }
	

    
	SpeechService.addCommand('', function () {
				

		Focus.change("face");
	});


}

angular.module('SmartMirror')
    .controller('Face', face);
