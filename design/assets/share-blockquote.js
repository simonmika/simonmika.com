document.addEventListener("DOMContentLoaded", function () {
	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; i++) {
		var destinations = {
			email:
				"mailto:?subject=" +
				encodeURIComponent(quotes[i].textContent.trim()) +
				"&body=" +
				encodeURIComponent(document.URL),
			//		googleplus: "https://plus.google.com/share?url=" + encodeURIComponent(document.URL),
			facebook:
				"https://www.facebook.com/sharer/sharer.php?u=" +
				encodeURIComponent(document.URL),
			linkedin:
				"https://www.linkedin.com/sharing/share-offsite/?url=" +
				encodeURIComponent(document.URL),
			twitter:
				"https://twitter.com/intent/tweet?source=webclient&text=" +
				encodeURIComponent(
					quotes[i].textContent.trim() +
						" " +
						document.URL +
						" via @simonjmika",
				),
		};
		for (destination in destinations) {
			var link = document.createElement("a");
			link.href = destinations[destination];
			link.target = "_blank";
			link.className = "share " + destination;
			quotes[i].insertBefore(link, quotes[i].firstChild);
		}
	}
});
