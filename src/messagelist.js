angular.module('protoApp')
  .component('messageList', {
    templateUrl: 'src/messageList.html',
    bindings: {
      user: '<',
      onMessage: '&'
    },
    controller: MessageListCtrl
  });