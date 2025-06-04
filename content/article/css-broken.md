---
date: 2016-08-18T23:18:43+02:00
tags: ["web"]
title: CSS is Still Broken
---

The purpose of CSS is to describe the presentation of a document. It is created to enable [separation of presentation and content](https://en.wikipedia.org/wiki/Separation_of_presentation_and_content). So far CSS has been improving the situation. We have been able to move more and more presentation out of our documents and into CSS.

But even today, almost 20 years after CSS was initially released, I still can't just put all my content in an HTML document and never have to rearrange it when I create the presentation. The order and nesting of my HTML-formatted content always needs to be adapted to the layout I want to achieve with my CSS.

Let us consider a simple example:

```html
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title>Page Title</title>
    </head>
    <body>
        <header>
            <nav>
            </nav>
        </header>
        <article>
        </article>
        <footer>
        </footer>
    </body>
</html>
```

Why should I need to change the markup if I want to render the header and nav elements together as one unit? Today I still need to change my markup in order to achieve the layout I want. That is kind of broken as it defeats the purpose of separating style from content.

CSS needs a way to change:

1. The order of elements
2. The nesting of elements
3. Combine elements under a new parent
4. Turn an element into a link

So far I have no clue how that would look in CSS. Maybe it is time for something totally new.