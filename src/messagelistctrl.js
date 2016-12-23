function MessageListCtrl() {
  var self = this;

  self.$onInit = function() {
    self.usrMsg = '';
  };

  self.sendMessage = function() {
    self.onMessage({
      message: self.usrMsg
    });
  }
}