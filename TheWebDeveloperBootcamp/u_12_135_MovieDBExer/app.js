// Create an array of movie objects. Each movie should have a title,
// rating, and hasWatched properties. Iterate through the array and
// print out something that looks like:
// You have watched "In Bruges" - 5 stars
// You have not watched "Frozen" - 4.5 stars

// Array of movie object
var movies = [
  {
    title: "In Bruges",
    hasWatched: true,
    rating: 5},
  {
    title: "Frozen",
    hasWatched: false,
    rating: 4.5
  }
];

// Version 1 Iteration.
for (var i = 0; i < movies.length; i++) {
  if (movies[i].hasWatched === true) {
    console.log('You have watched "' + movies[i].title + '" - ' + movies[i].rating + ' stars');
  } else {
    console.log('You have not watched "' + movies[i].title + '" - ' + movies[i].rating + ' stars');
  }
}

// Version 2 Iteration.
movies.forEach(function(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  console.log(result);
});

// Version 3 Iteration.
movies.forEach(function(movie){
  console.log(buildString(movie));
});

function buildString(movie){
  var result = "You have ";
  if(movie.hasWatched){
    result += "watched";
  } else {
    result += "not seen ";
  }
  result += "\"" + movie.title + "\" - ";
  result += movie.rating + " stars";
  return result;
}
