angular.module('starter.controllers', [])

    .controller('PositionsCtrl', function($scope, Position) {
        $scope.positions=Position.query();
    })

// .controller(('PositionCtrl', function($scope, $stateParams, Session) {
//     $scope.session=Sessions.get({sessionId: $stateParams.sessionId});
// })

    .controller('CategoriesCtrl', function($scope, Category) {
        $scope.categories=Category.query();
    })

    .controller('ChatsCtrl', function($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        };
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('AccountCtrl', function($scope) {
        $scope.settings = {
            enableFriends: true
        };
    });
