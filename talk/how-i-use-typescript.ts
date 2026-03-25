import showdown from "showdown"
import { binotype } from "@binotype/model"

export const howIUseTypescript: binotype.Site.Page = {
	published: "2018-03-22T19:00:00+02:00",
	tags: ["Uppsala.JS"],
	title: "How I Use TypeScript",
	content: new showdown.Converter().makeHtml(`This talk gives an overview of the benefits of using TypeScript and how to achieve them. It covers the following subjects:

* Tooling Benefits
* Configuration
* Type System
* Object Orientation

# Slides

Navigate using the orange arrows.

<iframe style="width: 100%; height: 21em; max-height: 100vh; margin: 0" src="./talks-ss02-Typescript.html"></iframe>

<a target="blank" href="./talks-ss02-Typescript.html">Open</a> in a new tab.
`),
}
