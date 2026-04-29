import showdown from "showdown"
import { binotype } from "@binotype/model"

export const recruiting2025: binotype.Site.Page = {
	published: "2025-06-05T10:00:00+02:00",
	tags: ["Uppsala Tech"],
	title: "Recruiting and Become Recruited 2025",
	content:
		new showdown.Converter().makeHtml(`An updated step by step guide on how to recruit programmers including checklists and what to do and not to do. It also covers some insight what you can do to improve the likelihood of becoming recruited.

# Slides

Navigate using the orange arrows.

<iframe style="width: 100%; height: 21em; max-height: 100vh; margin: 0" src="./talks-ss09-Recruiting.html"></iframe>

<a target="blank" href="./talks-ss09-Recruiting.html">Open</a> in a new tab.

`)
}
