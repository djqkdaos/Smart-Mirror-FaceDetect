(function (angular) {
	'use strict';

	function MirrorCtrl(
		Focus,
		SpeechService,
		AutoSleepService,
		LightService,
		$rootScope, $scope, $timeout, $interval, tmhDynamicLocale, $translate) {

		// Local Scope Vars
		var _this = this;
		$scope.listening = false;
		$scope.debug = false;
		$scope.commands = [];
		$scope.partialResult = $translate.instant('home.commands');
		$scope.layoutName = 'main';
		$scope.config = config;

		// Set up our Focus
		$rootScope.$on('focus', function (targetScope, newFocus) {
			$scope.focus = newFocus;
		})

		Focus.change("default");

		//set lang
		if (config.general.language.substr(0, 2) == 'en') {
			moment.locale(config.general.language,
				{
					calendar: {
						lastWeek: '[Last] dddd',
						lastDay: '[Yesterday]',
						sameDay: '[Today]',
						nextDay: '[Tomorrow]',
						nextWeek: 'dddd',
						sameElse: 'L'
					}
				}
			)
		} else {
			moment.locale(config.general.language)
		}
		//Initialize the speech service

		var resetCommandTimeout;
		SpeechService.init({
			listening: function (listening) {
				$scope.listening = listening;
				if (listening && !AutoSleepService.woke) {
					AutoSleepService.wake()
					$scope.focus = AutoSleepService.scope;
				}
			},
			partialResult: function (result) {
				$scope.partialResult = result;
				$timeout.cancel(resetCommandTimeout);
			},
			finalResult: function (result) {
				if (typeof result !== 'undefined') {
					$scope.partialResult = result;
					resetCommandTimeout = $timeout(restCommand, 5000);
				}
			},
			error: function (error) {
				console.log(error);
				if (error.error == "network") {
					$scope.speechError = "Google Speech Recognizer: Network Error (Speech quota exceeded?)";
				}
			}
		});

		//Update the time
		function updateTime() {
			$scope.date = new moment();

			// Auto wake at a specific time
			if (typeof config.autoTimer !== 'undefined' && typeof config.autoTimer.autoWake !== 'undefined' && config.autoTimer.autoWake == moment().format('HH:mm:ss')) {
				console.debug('Auto-wake', config.autoTimer.autoWake);
				AutoSleepService.wake()
				$scope.focus = AutoSleepService.scope;
				AutoSleepService.startAutoSleepTimer();
			}
		}

		// Reset the command text
		var restCommand = function () {
			$translate('home.commands').then(function (translation) {
				$scope.partialResult = translation;
			});
		};

		_this.init = function () {
			AutoSleepService.startAutoSleepTimer();

			$interval(updateTime, 1000);
			updateTime();
			restCommand();

			var defaultView = function () {
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak("홈으로 이동합니다.","Korean Female");
				}
				console.debug("Ok, going to default view...");
				
				Focus.change("default");
			}
			// List commands
			SpeechService.addCommand('list', function () {
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak("사용가능한 질문 목록입니다.","Korean Female");
					}
				console.debug("Here is a list of commands...");
				console.log(SpeechService.commands);
				$scope.commands.commandPage = []
				$scope.commands.commandPage = SpeechService.getCommands();
				$scope.commands.index = 0
				$scope.commands.totalPages = $scope.commands.commandPage.length
				Focus.change("commands");
			});

			SpeechService.addCommand('list-page', function (pageNum) {
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak(pageNum+"페이지로 이동합니다.","Korean Female");
				}
				if (Focus.get() == 'commands') {
					$scope.commands.commandPage = []
					$scope.commands.commandPage = SpeechService.getCommands();
					$scope.commands.totalPages = $scope.commands.commandPage.length
					if (isNaN(pageNum)) {
						pageNum = $scope.units[pageNum]
					}
					if ( pageNum >= 1 && pageNum <= ($scope.commands.totalPages)) {
						$scope.commands.index = pageNum-1
					}
				}
			})

			// Next Page
			SpeechService.addCommand('list-next', function () {
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak("다음 페이지","Korean Female");
					}
				if (Focus.get() == 'commands') {
					$scope.commands.commandPage = []
					$scope.commands.commandPage = SpeechService.getCommands();
					$scope.commands.totalPages = $scope.commands.commandPage.length
					if ($scope.commands.index < ($scope.commands.totalPages - 1)) {
						$scope.commands.index++
					}
				}
			})

			// Prev Page
			SpeechService.addCommand('list-prev', function () {
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak("이전 페이지.","Korean Female");
					}
				if (Focus.get() == 'commands') {
					$scope.commands.commandPage = []
					$scope.commands.commandPage = SpeechService.getCommands();
					$scope.commands.totalPages = $scope.commands.commandPage.length
					if ($scope.commands.index > 0) {
						$scope.commands.index--
					}
				}
			})

			// Go back to default view
			SpeechService.addCommand('home', function () {
				
				console.debug("Ok, going to default view...");
				
				Focus.change("default");
				if(responsiveVoice.voiceSupport()) {
					responsiveVoice.speak("홈으로 이동합니다.","Korean Female");
				}
			});

			SpeechService.addCommand('debug', function () {
				console.debug("Boop Boop. Showing debug info...");
				$scope.debug = true;
			});

			


			// Check the time
			

			
		};

		_this.init();
	}

	angular.module('SmartMirror')
		.controller('MirrorCtrl', MirrorCtrl);

	function themeController($scope) {
		$scope.layoutName = (typeof config.layout !== 'undefined' && config.layout) ? config.layout : 'main';
	}

	angular.module('SmartMirror')
		.controller('Theme', themeController);

} (window.angular));
