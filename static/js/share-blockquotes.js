var quotes = document.getElementsByTagName("blockquote")
for (var i = 0; i < quotes.length; i++){
	var twitter = document.createElement("a")
	twitter.href = "https://twitter.com/intent/tweet?source=webclient&text=" + encodeURIComponent(quotes[i].textContent.trim() + " via " + document.URL)
	twitter.target = "_blank"
	twitter.className = "share twitter"
	quotes[i].insertBefore(twitter, quotes[i].firstChild)
	var linkedin = document.createElement("a")
	linkedin.href = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(document.URL) + "&title=" + encodeURIComponent(document.title) + "&summary=" + encodeURIComponent(quotes[i].textContent.trim()) + "&source=Simon says"
	linkedin.target = "_blank"
	linkedin.className = "share linkedin"
	quotes[i].insertBefore(linkedin, quotes[i].firstChild)
}