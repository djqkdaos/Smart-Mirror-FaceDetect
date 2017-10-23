function Hue($scope, $http, SpeechService, Focus) {
	console.log("휴 추가");
	global.Hue = require('philips-hue');
	global.hue = new Hue();


	hue.bridge = "192.168.0.3";  // from hue.getBridges 
	hue.username = "wRFdbK1r0bfbYV2nt0mzUvZqIg90uSd2ncnkbMcn"; // from hue.auth 

	SpeechService.addCommand('hue_off', function (room) {
	
		switch (room) {
			  case "거실"  : 
						hue.light(1).off();
						hue.getLights()
					  .then(function(lights){
						console.log(lights);
						console.log('------------------');
						console.log(Object.entries(lights)[0].state.bri);
						
					  })
					  .catch(function(err){
						console.error(err.stack || err);
					  });
						
						   break;
			  case "안방"   : 
						hue.light(2).off();
						   break;
			  case "컬러테라피"  : 
						hue.light(3).off();
						   break;
			  default    : 
						   break;
			}
		


		
	});

	SpeechService.addCommand('hue_on', function (room) {
	
		switch (room) {
			  case "거실"  : 
						hue.light(1).on();
						   break;
			  case "안방"   : 
						hue.light(2).on();
						   break;
			  case "컬러테라피"  : 
						hue.light(3).on();
						   break;
			  default    : 
						   break;
			}
		
		


		
	});
	SpeechService.addCommand('hue_red', function (room) {
	
		var state = {bri: 200, sat: 254, hue: 65535};
 
		
		
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		//hue.light(1).setState({effect: "colorloop"}); 컬러루프 은은하게 색상변경
		 
		//hue.light(1).setState({alert: "lselect"});이것도 색상변경하긴하는데 색상변경차이가 많이남

		
	});
	SpeechService.addCommand('hue_green', function (room) {
	//bri=밝기,sat=색의 진한 정도 hue=색조합
		var state = {bri: 200, sat: 254, hue: 25500};
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}

		
	});
	SpeechService.addCommand('hue_yellow', function (room) {
	
		var state = {bri: 200, sat: 254, hue: 12750};
 
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		
	});
	
	SpeechService.addCommand('hue_pink', function (room) {
	
		var state = {bri: 200, sat: 254, hue: 56100};
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		
	});
	
	SpeechService.addCommand('hue_white', function (room) {
	
		var state = {bri: 200, sat: 0, hue: 65535};
 
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		
	});
	SpeechService.addCommand('hue_blue' ,function (room) {
	
		var state = {bri: 200, sat: 0, hue: 46920};
 
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		
	});
	SpeechService.addCommand('hue_colorloop', function (room) {
		
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState({effect: "colorloop"});
						   break;
			  case "안방"   : 
						hue.light(2).setState({effect: "colorloop"});
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState({effect: "colorloop"});
						   break;
			  default    : 
						   break;
			}
		
	});
	SpeechService.addCommand('hue_colorloop_end', function (room) {
		
		switch (room) {
			  case "거실"  : 
						hue.light(1).setState({effect: "none"});
						   break;
			  case "안방"   : 
						hue.light(2).setState({effect: "none"});
						   break;
			  case "컬러테라피"  : 
						hue.light(3).setState({effect: "none"});
						   break;
			  default    : 
						   break;
			}
		
	});
	SpeechService.addCommand('hue_bright', function (room) {
		var livingroom_briPlus, livingroom_sat_info, livingroom_hue_info;
		var bedroom_briPlus, bedroom_sat_info, bedroom_hue_info;
		var colorT_briPlus, colorT_sat_info, colorT_hue_info;
		hue.getLights()
		  .then(function(lights){
			console.log(lights);
			//console.log(Object.entries(lights)[0].state.bri);
			livingroom_briPlus = Object.values(lights)[0].state.bri;
			livingroom_sat_info = Object.values(lights)[0].state.sat;
			livingroom_hue_info = Object.values(lights)[0].state.hue;
			
			bedroom_briPlus = Object.values(lights)[1].state.bri;
			bedroom_sat_info = Object.values(lights)[1].state.sat;
			bedroom_hue_info = Object.values(lights)[1].state.hue;
			
			colorT_briPlus = Object.values(lights)[2].state.bri;
			colorT_sat_info = Object.values(lights)[2].state.sat;
			colorT_hue_info = Object.values(lights)[2].state.hue;
			
		  })
		  .catch(function(err){
			console.error(err.stack || err);
		  });
		 
		  setTimeout(brightPlus,1800);
		  function brightPlus(){
		  //console.log(briPlus);
		  
		  switch (room) {
			  case "거실"  : 
						var state = {bri_inc:75 , sat: livingroom_sat_info, hue: livingroom_hue_info};
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						var state = {bri_inc: 75 , sat: bedroom_sat_info, hue: bedroom_hue_info};
						hue.light(2).setState(state).then(console.log).catch(console.error);
						   break;
			  case "컬러테라피"  : 
						var state = {bri_inc:75 , sat: colorT_sat_info, hue: colorT_hue_info};
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		  }
		  
		
	});
	SpeechService.addCommand('hue_dark', function (room) {
		var livingroom_briPlus, livingroom_sat_info, livingroom_hue_info;
		var bedroom_briPlus, bedroom_sat_info, bedroom_hue_info;
		var colorT_briPlus, colorT_sat_info, colorT_hue_info;
		hue.getLights()
		  .then(function(lights){
			console.log(lights);
			//console.log(Object.entries(lights)[0].state.bri);
			livingroom_briPlus = Object.values(lights)[0].state.bri;
			livingroom_sat_info = Object.values(lights)[0].state.sat;
			livingroom_hue_info = Object.values(lights)[0].state.hue;
			
			bedroom_briPlus = Object.values(lights)[1].state.bri;
			bedroom_sat_info = Object.values(lights)[1].state.sat;
			bedroom_hue_info = Object.values(lights)[1].state.hue;
			
			colorT_briPlus = Object.values(lights)[2].state.bri;
			colorT_sat_info = Object.values(lights)[2].state.sat;
			colorT_hue_info = Object.values(lights)[2].state.hue;
			
		  })
		  .catch(function(err){
			console.error(err.stack || err);
		  });
		 
		  setTimeout(brightPlus,1800);
		  function brightPlus(){
		  //console.log(briPlus);
		  
		  switch (room) {
			  case "거실"  : 
						var state = {bri_inc:-75 , sat: livingroom_sat_info, hue: livingroom_hue_info};
						hue.light(1).setState(state).then(console.log).catch(console.error);
						   break;
			  case "안방"   : 
						var state = {bri_inc:-75 , sat: bedroom_sat_info, hue: bedroom_hue_info};
						hue.light(2).setState(state).then(console.log).catch(console.error);
						
						   break;
			  case "컬러테라피"  : 
						var state = {bri_inc:-75 , sat: colorT_sat_info, hue: colorT_hue_info};
						hue.light(3).setState(state).then(console.log).catch(console.error);
						   break;
			  default    : 
						   break;
			}
		  }
		
	});
	SpeechService.addCommand('colorTherapy', function () {
		var emotion = new Array();
		var colorT_sat_info, colorT_briPlus, colorT_hue_info;
		var check = 0;
		emotion = global.faceDetection.emotion;
		console.log(emotion);
		
		//------------------------------음악----------------------------
		/*const child_process = require('child_process');
		 
		// 자식 프로세스 생성
		let mpg123 = child_process.spawn('mpg123', ['-R']);
		 
		// stdout에 빨대꽂기
		mpg123.stdout.on('data', function(buf){
			// stdout 출력내용을 라인별로 분리한 다음 에러메세지만 추출
			// 실제로 모듈로 만들어 사용할 땐 여기에서 onError 같은 걸 emit 하면 되겠지
			buf.toString().split("\n").forEach(function(line){
				if (line.indexOf('@E') === 0) {
					console.log('에러: '+line.substr(2).trim());
				}
			});
		});
		 
		// mp3 재생
		function play(soundFile)
		{
			mpg123.stdin.write('LOAD '+soundFile+"\n");
		}*/
		//--------------------------------------------------------------------
		//---------------나중에 중복함수를 글로벌 줘서 줄여라--------
		function loop(){
					
					if(check%10<=4 ){
						satMinus();
					}else{
						satPlus();
					}
				}
		function loop2(){
					
					if(check%10<=4 ){
						briMinus();
					}else{
						briPlus();
					}
				}
		function satMinus(){
			var temp = colorT_sat_info;
			colorT_sat_info = colorT_sat_info-20;
			check = check+1;
			if(temp>=colorT_sat_info){
				var state = {bri: 254, sat: colorT_sat_info, hue: colorT_hue_info};
				hue.light(3).setState(state).then().catch(console.error);
								
				}
			}
		function satPlus(){
			var temp2 = colorT_sat_info;
			colorT_sat_info = colorT_sat_info+20;
			check = check+1;
				if(temp2<=colorT_sat_info){
					var state = {bri: 254, sat: colorT_sat_info, hue: colorT_hue_info};
					hue.light(3).setState(state).then().catch(console.error);
					}
			}
		function briMinus(){
				var temp = colorT_briPlus
				colorT_briPlus = colorT_briPlus-20;
				check = check+1;
				if(temp>=colorT_sat_info){
					var state = {bri: colorT_briPlus, sat: 0, hue: colorT_hue_info};
					hue.light(3).setState(state).then().catch(console.error);
									
					}
				}
			function briPlus(){
				var temp2 = colorT_briPlus
				colorT_briPlus = colorT_briPlus+20;
				check = check+1;
					if(temp2<=colorT_sat_info){
						var state = {bri: colorT_briPlus, sat: 0, hue: colorT_hue_info};
						hue.light(3).setState(state).then().catch(console.error);
						}
				}
		//-------------------------------------------------------------------
		var mpg = require('mpg123');
		global.player = new mpg.MpgPlayer();
		var dirname = '/home/pi/smart-mirror/emotionSound'
			
		//--------------------------------------------------------------
		if(emotion.anger>=0.5){
				if(responsiveVoice.voiceSupport()) {
				  responsiveVoice.speak("화났을 때 좋은 컬러테라피를 실행합니다..","Korean Female");
				}
				var firstState = {bri: 254, sat: 254, hue: 14910};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				
				
				player.play(dirname+'/'+"anger.mp3");
					
		//------------------------------------------------------------------------------
		
		

			
			
		}else if(emotion.contempt>=0.5){
				if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("기분이 좋지않을 때 좋은 컬러테라피를 실행합니다..","Korean Female");
				}
				var firstState = {bri: 254, sat: 254, hue: 25500};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"sad.mp3");
				
					
				//-----------------------------------------------------------------
		}else if(emotion.disgust>=0.5){
				if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("기분이 좋지않을 때 좋은 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 254, hue: 25500};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"sad.mp3");
				
					
			//------------------------------------------------------------------------------
		}else if(emotion.fear>=0.5){
			if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("두려울 때 좋은 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 254, hue: 56100};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"fear.mp3");
				
					
			//------------------------------------------------------------------------------
			
		}else if(emotion.happiness>=0.5){
			if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("행복 할 때 좋은 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 0, hue: 14910};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop2, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"happy.mp3");
	
					
			//------------------------------------------------------------------------------
			
		}else if(emotion.neutral>=0.5){
			if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("기분이 좋게 시작할수 있는 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 0, hue: 14910};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop2, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"happy.mp3");
	
					
			//------------------------------------------------------------------------------
			
		}else if(emotion.sadness>=0.5){
			if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("슬플 때 좋은 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 254, hue: 65535};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;

				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"sadness.mp3");
				
					
			//------------------------------------------------------------------------------
			
		}else{
			if(responsiveVoice.voiceSupport()) {
					  responsiveVoice.speak("놀랐을때 진정 시킬수 있는 컬러테라피를 실행합니다..","Korean Female");
					}
			var firstState = {bri: 254, sat: 254, hue: 46920};
				hue.light(3).setState(firstState).then(console.log).catch(console.error);
				//-------현재 불 정보 get------------------------------
				hue.getLights()
				  .then(function(lights){
					
					colorT_sat_info = Object.values(lights)[2].state.sat;
					colorT_briPlus = Object.values(lights)[2].state.bri;
					colorT_hue_info = Object.values(lights)[2].state.hue;
					
				  })
				  .catch(function(err){
					console.error(err.stack || err);
				  });
				//----------------------------------------------------------
				global.hueInterval = setInterval(loop, 2000);//3초마다 실행 
				setTimeout(global.hueInterval,1000);
				player.play(dirname+'/'+"suprise.mp3");
				
					
			//------------------------------------------------------------------------------
			
		}
		
		
	});
	SpeechService.addCommand('colorTherapy_stop', function () {
		clearInterval(global.hueInterval);
		var firstState = {bri: 254, sat: 0, hue: 14910};
			hue.light(3).setState(firstState).then(console.log).catch(console.error);
		//-----------------------------------------------------------------------
		player.stop();
		
		
	});
	console.log('버스정보 추가');
	
	
	SpeechService.addCommand('bus', function () {
		console.log('버스실행');
		var request = require('request');
		var busStopNm = '송상현광장'
		var apikey = 'hdXmCfUVimrmir28yWIbrHJthhsHIopiJdKM%2FQTuOT%2FgvuuwumMRnvgwdXKr2%2FEqFdPieGOw7kWRJ8w4TDDz3A%3D%3D'
		var url = 'http://data.busan.go.kr/openBus/service/busanBIMS2/stopArr';
		var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+apikey; /* Service Key*/
		queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(apikey); /* 공공데이터포털에서 받은 인증키 */
		queryParams += '&' + encodeURIComponent('nodeNm') + '=' + encodeURIComponent(busStopNm); /* 정류소ID */

		request({
		url: url + queryParams,
		method: 'GET'
	}, function (error, response, body) {
		//console.log('Status', response.statusCode);
		//console.log('-----------------------------');
		//console.log('Headers', JSON.stringify(response.headers));
		//console.log('-----------------------------');
		//console.log('Reponse received', body);
		var json;
		var parseString = require('xml2js').parseString;
			parseString(body, function (err, result) {
			console.dir(result);//log는 html과 같은 트리구조로 출력 dir은 json형태의 트리구조로 출력
			json = result;
		});
		console.dir(Object.values(json)[0]);
		console.dir(Object.values(json)[0].body[0].items[0].item);
		for(var i =0; i<Object.values(json)[0].body[0].items[0].item.length; i++){
			console.dir('버스번호:'+Object.values(json)[0].body[0].items[0].item[i].lineNo);
			console.dir('남은 도착시간:'+Object.values(json)[0].body[0].items[0].item[i].min1);
			console.dir('남은 정류소:'+Object.values(json)[0].body[0].items[0].item[i].station1);
		}
		
		
		
	});
	});

	



}

angular.module('SmartMirror')
    .controller('Hue', Hue);
