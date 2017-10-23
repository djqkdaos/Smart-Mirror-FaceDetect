function BusTime_info($scope, $http, SpeechService, Focus) {
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
    .controller('BusTime_info', BusTime_info);
