
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


var ChatMessage = Backbone.Model.extend({});


var ChatMessageView = Backbone.View.extend({
  render: function(){
    this.$el.html(this.model.get('text'));
    return this.$el;
  }
});


var Chats = Backbone.Collection.extend({model: ChatMessage});


var ChatsView = Backbone.View.extend({

  el: '#messages',

  initialize: function(){
    this.render();
  },

  render: function(){
    this.$el.append(this.collection.map(function(msg){
      return new ChatMessageView({model: msg}).render();
    }));
  }
});

var chats = new Chats(sampleChats);

var chatsView = new ChatsView({collection: chats});
