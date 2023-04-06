let headings = document.getElementsByClassName("heading");
let btn = document.getElementById("accordion-btn");
let icons=document.getElementsByClassName("bi-chevron-down");
console.log(icons);
for(var i=0;i<headings.length;i++)
{
headings[i].addEventListener("click", function(eventObj){
	
	console.log("running");
	let showElement=eventObj.target.parentNode.getElementsByTagName("p")[0];
	showElement.classList.toggle("show");
	
	let iconShow=eventObj.target.parentNode.getElementsByTagName("i")[0];
	console.log(iconShow);
	iconShow.classList.toggle("bi-chevron-up");

	
	
});
}
























// headings.forEach((heading) => {
	
	// heading.addEventListener("click", function(eventObj){
	
	// console.log("running");
	// let showElement=eventObj.target.parentNode.getElementsByTagName("p")[0];
	// showElement.classList.toggle("show");
	// console.log(showElement);
// })

// });


