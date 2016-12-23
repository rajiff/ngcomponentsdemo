angular.module('protoApp').controller('protoAppCtrl', ['$scope',
  function($scope) {
    $scope.user = 'foo';

    $scope.userMessages = [{
      message: 'Hello Samarth New'
    }];

    $scope.onUserMessage = function(newMsgObj) {
      console.log("Got new message ", newMsgObj);
      $scope.userMessages.push({
        message: newMsgObj
      });
    }

  }
]);
