/*global App:true*/
App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data) {
    return $('#messages').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return '<p> <b>' + data.dish + ': </b>' + data.table + '</p>';
  }
});
