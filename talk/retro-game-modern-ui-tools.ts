import showdown from "showdown"
import { binotype } from "@binotype/model"

export const retroGameModernUiTools: binotype.Site.Page = {
	published: "2025-11-28T10:00:00+02:00",
	tags: ["Uppsala Tech"],
	title: "Retro Game w/ Modern UI Tools",
	content:
		new showdown.Converter().makeHtml(`A way to create a simple old school game using modern user interface tools. Perfect for side projects. Get the <a href="https://github.com/simonmika/adventures-of-aron">code</a>.

# Slides

Navigate using the orange arrows.

<iframe style="width: 100%; height: 21em; max-height: 100vh; margin: 0" src="./talks-ss11 Retro Game.html"></iframe>

<a target="blank" href="./talks-ss11 Retro Game.html">Open</a> in a new tab.
`)
}
