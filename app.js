
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

// Model for each chat message
var ChatMessage = Backbone.Model.extend({});

// View for each individual message
var ChatMessageView = Backbone.View.extend({
  render: function(){
    this.$el.html(this.model.get('text'));
    return this.$el;
  }
});

// Chat message collection
var Chats = Backbone.Collection.extend({model: ChatMessage});

// Container for chat messages
var ChatsView = Backbone.View.extend({

  el: '#messages',

  events: {
    // 'submit input':this.addText
  },

  initialize: function(){
    this.render();
  },

  addText: function(e){
    // e && e.preventDefault();
    // var message = $('#input').val();
    // this.collection.add({text: message});
    // this.render();
  },

  render: function(){
    this.$el.append(this.collection.map(function(msg){
      return new ChatMessageView({model: msg}).render();
    }));
  }
});


// Initialize with an instants of the Chats collection, passing in the sample data
var chats = new Chats(sampleChats);

// Initialize the view for the chats container, specifying the collection to be associated with
var chatsView = new ChatsView({collection: chats});
