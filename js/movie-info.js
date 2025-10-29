// - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.
var movieInfo = ["Lord of the Rings","https://tse2.mm.bing.net/th/id/OIP.BmZHhgg5XvJSgJ1MAINI3AHaLG?rs=1&pid=ImgDetMain&o=7&rm=3",5,"A young Hobbit known as Frodo has been thrown on an amazing adventure, when he is appointed the job of destroying the One Ring, which was created by the Dark Lord Sauron. He is assigned with three warriors including Legolas, Aragorn, and Boromir."];

document.querySelector("img.movie-image").src=movieInfo[1];

document.querySelector("img.movie-image").alt=movieInfo[0];

document.querySelector("h2.movie-name").innerHTML = movieInfo[0];

document.querySelector("p.description").innerHTML = movieInfo[3];

//Create a variable that will hold the filled and empty stars. 
var stars="";
	
//Loop to generate star symbols based on the rating:
for(let j = 0; j < 5; j++){
    //If current counter is less than the rating, then add "★".
    if(j < movieInfo[2]){
        stars+=("★");
    //Otherwise, add "☆".
    } else {
        stars+=("☆");
    }
}
//Set the movie rating element's text to display the generated stars. 
document.querySelector("div.rating").innerHTML=stars; 