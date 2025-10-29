
// - Create an array to hold three different usernames. 
let userNames = ["user1","user2","user3"];

// - Create an array with the dates of each review (i.e., 2024-10-30).
let dates = ["2024-10-30","2025-10-09","2024-12-30"];

// - Create an array to hold the actual reviews.
let reviews = ["great visuals, soundtrack and acting","very engaging","favorite movie!"];

// - Create an array to hold three different ratings. 
let ratings = [4,5,5];

// - Select ALL review card elements and store in a variable.
let cards = document.querySelectorAll("div.review-card");

// - Loop through each card to update its content with review information:
for(let i = 0; i < cards.length; i++){
	let rating = cards[i].querySelector("div.review-rating");

	//Create a variable that will hold the filled and empty stars. 
	var stars="";
	//Loop to generate star symbols based on the rating:
	for(let j = 0; j < 5; j++){
		//If current counter is less than the rating, then add "★".
		if(j < ratings[i]){
			stars+=("★");
		//Otherwise, add "☆".
		} else {
			stars+=("☆");
		}
	}
	//Set the movie rating element's text to display the generated stars. 
	rating.innerHTML=stars;
	// 	- Set the review rating element's attribute to current rating from the array. 
	rating.setAttribute("data-rating",ratings[i]);

	// 	- Select the current review username element.
	// 	- Set its text to the username from the array and add a space to separate it from the date.
	cards[i].querySelector("p.review-username").firstChild.nodeValue=userNames[i] + " ";

	// 	- Select the current review date element.
	// 	- Set its markup to the date from the array.
	cards[i].querySelector("span.review-date").innerHTML=dates[i];
	
	// 	- Select the current review text element.
	// 	- Set its text to the review text from the array.
	cards[i].querySelector("p.review-text").innerHTML=reviews[i];
}




// Get the dropdown element for filtering ratings by its ID
var filterDropdown = document.getElementById('rating-filter');

// Add an event listener to the dropdown that triggers when the selected option changes
filterDropdown.addEventListener('change', function() {
   	
   	// Store the currently selected rating from the dropdown
    var selected_rating = filterDropdown.value;


	// - Loop through each card:
	// - Select ALL review card elements and store in a variable.
	let allCards = document.querySelectorAll("div.review-card");

	// - Loop through each card to update its content with review information:
	for(let i = 0; i < allCards.length; i++){
		// 	- Select the current review rating element.
		let rating = cards[i].querySelector("div.review-rating");

		// 	- Get its rating attribute value.
		let curRating = rating.getAttribute("data-rating");

		// 	- Check if the selected rating is 'All' or matches the card's rating.
		if(selected_rating == 'All' || selected_rating == curRating){
			cards[i].style.display = "block";
		} else {
			cards[i].style.display = "none";
		}
	}

});



