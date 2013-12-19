function searchShow(value, element) {
	var searchStr = value.replace(/ /g, '+');
	var xhrMovies = $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=6b518aabb07d86dd2eb0008d094c697b', { query: searchStr });
	
	xhrMovies.done(function(movies) {
    var results = movies.results;
    
      //for (var i = 0; i < results.length; i++) {
      	$("#myInput").trigger("found", [ results ]);
      //}



     
  });
}