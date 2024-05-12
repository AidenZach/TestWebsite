// add a listener so that when the document loads . . .
// new listeners  can be attched to elements safely
window.addEventListener("DOMContentLoaded", async () => {
	const repeatBtn = document.getElementById("repeat-btn");
	repeatBtn.addEventListener("click", addVerse);
	// TODO: attach a listener to call addVerse when button is clicked
});

// TODO: define a function to add a verse to our song
function addVerse() {
	const lyrics = document.getElementById("lyrics")
	const firstVerse = lyrics.firstElementChild;
	const nextVerse = firstVerse.cloneNode(true);
	lyrics.appendChild(nextVerse);
}