Backbone.sync = function(method, model, options) {
  console.log(arguments);
};


var Show = Backbone.Model.extend({});

var ShowCollection = Backbone.Collection.extend({
  model: Show
});

var ShowView = Backbone.View.extend({
  el: '#busqueda',
  template: _.template('<li data-id="<%= id %>" data-title="<%= title %>" class="showitem"><a href="#<%= id %>"><%= title %></a></li>'),
  events: {
    'found #myInput': 'addShow',
    'click .showitem': 'viewDetails'
  },
  addShow: function(e, results) {
    //alert(id + nombre);
    e.preventDefault;
    $("#lista").empty();

    for (var i = 0; i < results.length; i++) {
      var show = new Show();
      show.set('id', results[i].id);
      show.set('title', results[i].title);

      this.collection.add(show);
    }
    
  },
  viewDetails: function(e) {
    e.preventDefault;
    var movieId = $(e.currentTarget).data('id');
    var movieTitle = $(e.currentTarget).data('title');

    if (confirm('¿Quieres marcar ' + movieTitle + ' como visto?')) {
      alert('Acabas de marcar ' + movieTitle + ' como visto!');

    } 



  },
  initialize: function() {
    this.listenTo(this.collection, 'add', this.renderFoundShow);
  },
  renderFoundShow: function(show) {
    this.$el.find('ul.showList').append(this.template(show.toJSON()));
  }


});

var ShowRouter = Backbone.Router.extend({
  routes : {
    'show/:id': 'showDetail'
  },
  showDetail: function(id) {
    console.log(id);
    alert(App.views.shows.collection.get(id).get('title'));
  }
});

var App = {
  views: {
    shows : new ShowView({
      collection: new ShowCollection()
    })
  },
  routers: {
    show: new ShowRouter()
  }
};
