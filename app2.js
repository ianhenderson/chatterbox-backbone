$(function(){

  var sampleChats = [
    {
      text: "Whats up dudes??"
    },
    {
      text: "Totally rad!!"
    },
    {
      text: "Just chillin!"
    }
  ];


  var Message = Backbone.Model.extend({
    defaults: {
      text: "Hello dudes!"
    }
  });

  var Chats = Backbone.Collection.extend({
    model: Message
  });

  var ChatView = Backbone.View.extend({
    el: $('#messages'),

    initialize: function(){
      this.collection = new Chats(sampleChats);
      this.render();
    },

    render: function(){
      var self = this;
      _(this.collection.models).each(function(msg){
        console.log(msg);
        self.$el.append(msg);
      });
      // this.collection.models.each
    }
  });

  var chatView = new ChatView();

});
