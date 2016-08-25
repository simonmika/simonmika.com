---
date: 2016-08-18T23:18:43+02:00
draft: true
tags: ["css", "html"]
title: CSS is Still Broken
---

The purpose of CSS is to describe the presentation of a document. It is created to enable [separation of presentation and content](https://en.wikipedia.org/wiki/Separation_of_presentation_and_content). So far CSS has been improving the situation. We have been able to move more and more presentation out of our documents and into CSS.

But even today, almost 20 years after CSS was initially released, I still can't just put all my content in an HTML-document and never have to rearrange it when i create the presentation. The order and nesting of my HTML-formated content always needs to be adopted to the layout I want to achieve with my CSS.

Let us consider a simple example:

```html
<doctype html>
<html>
	<header>
		<meta http-equiv="content-type" content="text/html; charset=utf-8">
		<title>Page Title<title>
	<header>
	<body>
		<header>
		<header>
		<nav>
		</nav>
		<article>
		</article>
		<footer>
		</footer>
	<body>
</html>
```


CSS needs a way to change:
1. The order of elements.
2. The nesting of elements.
3. Combine elements under a new parent.

Another thing that is broken is links. For something to be navigatable it has to be surrounded by an anchor tag.