var colors = [
	"Blue", 
	"Red", 
	"Orange", 
	"Purple", 
	"Hazel", 
	"Aquamarine", 
	"Periwinkle", 
	"Azure", 
	"Fuchsia", 
	"Chocolate", 
	"Amber", 
	"Amaranth"
];

var reindeer = [
	"Dasher", 
	"Dancer", 
	"Prancer", 
	"Vixen", 
	"Comet", 
	"Cupid", 
	"Donner", 
	"Blitzen"
];


//How many items are in color?
//console.log("Colors:", colors.length);

//How many reindeer are there?
//console.log("Reindeer:", reindeer.length);


//declare a variable tied to html document
var hohohoElement = document.getElementById("coloredReindeer");

//Use a for loop to list the colors
//i < reindeer.length (i is less than the length of reindeer)
// i++ (increase by one)
// log the colors + reindeer
// use .innerHTML to put into HTML document

for (i = 0; i < reindeer.length; i++) {

	var coloredReindeer = colors[i] + " " + reindeer[i];
	
	console.log(coloredReindeer);
	
	hohohoElement.innerHTML += coloredReindeer + "</br>";
}



