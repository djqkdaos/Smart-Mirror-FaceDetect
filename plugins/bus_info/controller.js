function bus_info($scope, $http, SpeechService, Focus) {
	console.log("버스 추가");
	
	SpeechService.addCommand('bus', function (busName) {
		console.log('버스실행');
		//-----------------------------------------------------------------
		busName = String(busName);
		busName.replace(/\s/g,"");
		
		var busid;
		console.log(busName);
		var request = require('request');
		var apikey = 'hdXmCfUVimrmir28yWIbrHJthhsHIopiJdKM%2FQTuOT%2FgvuuwumMRnvgwdXKr2%2FEqFdPieGOw7kWRJ8w4TDDz3A%3D%3D'
		var url1 = 'http://data.busan.go.kr/openBus/service/busanBIMS2/busStop';
		var queryParams1 = '?' + encodeURIComponent('ServiceKey') + '='+apikey; /* Service Key*/
		queryParams1 += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(apikey); /* 공공데이터포털에서 받은 인증키 */
		queryParams1 += '&' + encodeURIComponent('bstopnm') + '=' + encodeURIComponent(busName); /* 정류소 명 */
		
		setImmediate(function(){ 
			request({
			url: url1 + queryParams1,
			method: 'GET'
		}, function (error, response, body) {
			//console.log('Status', response.statusCode);
			//console.log('Headers', JSON.stringify(response.headers));
			//console.log('Reponse received', body);
			
			var parseString1 = require('xml2js').parseString;
			parseString1(body, function (err, result1) {
			//console.dir(result1);//log는 html과 같은 트리구조로 출력 dir은 json형태의 트리구조로 출력
			busid = result1;
				});
			console.log(Object.values(busid)[0].body[0].items[0].item[0].bstopId[0]);
			console.log('-------------------------------');
			global.bstopid = Object.values(busid)[0].body[0].items[0].item[0].bstopId[0];
			console.log('버스아이디'+global.bstopid);
		});
		});
		//------------------------------------------------------------------
		

		
		
		
		setTimeout(function() {
			if(responsiveVoice.voiceSupport()) {	 
				 responsiveVoice.speak(busName+"정류장 도착 정보 입니다.","Korean Female");
			}
			console.log('버스아이디2'+global.bstopid);
			var url = 'http://data.busan.go.kr/openBus/service/busanBIMS2/stopArr';
			var queryParams = '?' + encodeURIComponent('ServiceKey') + '='+apikey; /* Service Key*/
			queryParams += '&' + encodeURIComponent('ServiceKey') + '=' + encodeURIComponent(apikey); /* 공공데이터포털에서 받은 인증키 */
			queryParams += '&' + encodeURIComponent('bstopid') + '=' + encodeURIComponent(bstopid); /* 정류소ID */
			console.log('버스아이디3'+global.bstopid);
			request({
				url: url + queryParams,
				method: 'GET'
			}, function (error, response, body) {
				//console.log('Status', response.statusCode);
				//console.log('-----------------------------');
				//console.log('Headers', JSON.stringify(response.headers));
				//console.log('-----------------------------');
				//console.log('Reponse received', body);
				var busInfo_json;
				var parseString = require('xml2js').parseString;
				parseString(body, function (err, result) {
				console.dir(result);//log는 html과 같은 트리구조로 출력 dir은 json형태의 트리구조로 출력
				busInfo_json = result;
				});
			console.dir(Object.values(busInfo_json)[0]);
			console.dir(Object.values(busInfo_json)[0].body[0].items[0].item);
		

			console.log(document.getElementById("busTimeUI"));
			var bus = document.getElementById("busTimeUI");					
			while(bus.firstChild){
				bus.removeChild(bus.firstChild);
				}
				
				bus.style.fontcolor = 'white';
				bus.style.margin = '100px';
				bus.style.marginTop = "500px";
				//bus.style.border-collapse='separate';
				//bus.style.background='#fff';
				  //@include border-radius(5px);
				//bus.style.margin='50px auto';
				  //@include box-shadow(0px 0px 5px rgba(0,0,0,0.3));
				
				//bus.style.margin = '100px';
			var tbody = document.createElement("tbody");
			//tbody.style.background= '#353a40';
			var headTr = document.createElement("tr");
			var tableHead1 = document.createElement("th");
			var tableHead2 = document.createElement("th");
			var tableHead3 = document.createElement("th");
			var tableHeadText1 = document.createTextNode("버스번호");
			var tableHeadText2 = document.createTextNode("남은 도착시간");
			var tableHeadText3 = document.createTextNode("남은 정류소");

			tableHead1.appendChild(tableHeadText1);
			tableHead2.appendChild(tableHeadText3);
			tableHead3.appendChild(tableHeadText2);
			headTr.appendChild(tableHead1);
			headTr.appendChild(tableHead2);
			headTr.appendChild(tableHead3);
			headTr.style.color = 'black';
			headTr.style.padding = '10px';
			headTr.style.font = 'bold';
			headTr.style.fontSize = "30px";
			//headTr.style.vertical-align='top';
			headTr.style.background='#B2CCFF';
			
			document.getElementById("busTimeUI").appendChild(headTr);
			
			for(var i =0; i<Object.values(busInfo_json)[0].body[0].items[0].item.length; i++){
				console.dir('버스번호:'+Object.values(busInfo_json)[0].body[0].items[0].item[i].lineNo);
				console.dir('남은 도착시간:'+Object.values(busInfo_json)[0].body[0].items[0].item[i].min1);
				console.dir('남은 정류소:'+Object.values(busInfo_json)[0].body[0].items[0].item[i].station1);
								var tableTr = document.createElement("tr");							
								var nodeBusNum = document.createElement("td");                 // Create a <li> node
								var nodeStation = document.createElement("td");
								var nodeTime = document.createElement("td");							
								
								var textnodeBusNum = document.createTextNode(Object.values(busInfo_json)[0].body[0].items[0].item[i].lineNo+'번');         // Create a text node
								var textnodeStation = document.createTextNode(Object.values(busInfo_json)[0].body[0].items[0].item[i].station1+'개 정류소'); 
								var textnodeTime = document.createTextNode(Object.values(busInfo_json)[0].body[0].items[0].item[i].min1+'분'); 
								nodeBusNum.appendChild(textnodeBusNum);
								nodeStation.appendChild(textnodeStation);
								nodeTime.appendChild(textnodeTime);							
								tableTr.appendChild(nodeBusNum);
								tableTr.appendChild(nodeStation);
								tableTr.appendChild(nodeTime);
								tableTr.style.fontSize = "30px";
								nodeBusNum.style.background = '#f3f6f7';
								nodeBusNum.style.color = 'black';
								nodeBusNum.style.font = 'bold';
								nodeBusNum.style.width = '180px';
								nodeStation.style.width = '300px';
								nodeTime.style.width = '300px';
								nodeStation.style.border = '1px solid white';
								nodeTime.style.border = '1px solid white';
								
								
								tbody.appendChild(tableTr);
								//nodeStation.style.color = 'white';
								//nodeTime.style.color = 'white';
								document.getElementById("busTimeUI").appendChild(tbody);
							
								//document.getElementById("busStation").appendChild(nodeStation);
								//document.getElementById("busTime").appendChild(nodeTime);
								
			}
		
		
		
		
		
		Focus.change('bus_info');
		
		
		
			});
		}, 4000);
	});



}

angular.module('SmartMirror')
    .controller('bus_info', bus_info);
