
// - Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.
var favMovies = ["Lord of the Rings","Twilight","Superman"];

// - Create an array with URLs for each movie poster. 	
var posterURLS = ["https://tse2.mm.bing.net/th/id/OIP.BmZHhgg5XvJSgJ1MAINI3AHaLG?rs=1&pid=ImgDetMain&o=7&rm=3","https://th.bing.com/th/id/R.fd6435b5b606a7ecfadf98838b8e768f?rik=XY0rw9LbK%2fiW0g&pid=ImgRaw&r=0","https://image.tmdb.org/t/p/w500/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg"];

// - Create an array with links to the HTML files for each movie page.
var moviePages = ["lotr.html"];

// - Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!
var movieRatings = [5,3,5];


	
// - Select ALL movie card elements in the index.html file and store in a variable.
let movieCards = document.querySelectorAll("div.movie-card");

// - Loop through each card to update its content with movie information:
for (let i = 0; i < movieCards.length; i++) {
	//Select the current movie image element. 
	let img = movieCards[i].querySelector("img.movie-image");
	
	//Set its link to the movie poster link from the array. 
	img.src=posterURLS[i];
	
	//Set its alt text to the movie title from the array. 
	img.alt=favMovies[i];

	//Select the current movie link element.
	let link = movieCards[i].querySelector("a.movie-link");
	
	//Set its link to the HTML page for that movie from the array. 
	link.href=moviePages[i];
	
	//Set its text to the movie title from the array.
	link.innerHTML= favMovies[i];

	//Select the current movie rating element.
	let rating = movieCards[i].querySelector("div.rating");

	//Create a variable that will hold the filled and empty stars. 
	var stars="";
	//Loop to generate star symbols based on the rating:
	for(let j = 0; j < 5; j++){
		//If current counter is less than the rating, then add "★".
		if(j < movieRatings[i]){
			stars+=("★");
		//Otherwise, add "☆".
		} else {
			stars+=("☆");
		}
	}
	//Set the movie rating element's text to display the generated stars. 
	rating.innerHTML=stars;
}
