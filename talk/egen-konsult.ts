import showdown from "showdown"
import { binotype } from "@binotype/model"

export const egenKonsult: binotype.Site.Page = {
	published: "2025-11-28T10:00:00+02:00",
	tags: ["Uppsala Tech"],
	title: "Egenanställd Konsult",
	content: new showdown.Converter().makeHtml(`Att vara självanställd konsult.

# Slides

Navigate using the orange arrows.

<iframe style="width: 100%; height: 21em; max-height: 100vh; margin: 0" src="./talks-ss10 Egen konsult.html"></iframe>

<a target="blank" href="./talks-ss10 Egen konsult.html">Open</a> in a new tab.`),
}
