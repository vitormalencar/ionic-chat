angular.module('starter', ['ionic', 'starter.service', 'firebase'])
.factory('chat', ['$firebaseArray', function ($firebaseArray) {
		var messages = new Firebase('https://ionic-chat-guaiuba.firebaseio.com/messages');
		return $firebaseArray(messages.limitToLast(10));
	}])
	.controller('ChatCtrl', function ($scope, $ionicListDelegate, chat) {
		$scope.messages = chat;
		$scope.send = function () {
			$scope.messages.$add({
				'text': $scope.text
			});
		};
		$scope.removeItem = function (chat) {
			Chats.remove(chat);
			$ionicListDelegate.closeOptionButtons();
		};
	});
