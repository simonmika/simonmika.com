import { binotype } from "@binotype/model"
import { about } from "./about"
import { article } from "./article"
import { contact } from "./contact"
import { description } from "./description"
import { design } from "./design"
import { subscribe } from "./subscribe"
import { talk } from "./talk"

export const site: binotype.Site = {
	url: "https://simonmika.com",
	language: "en-US",
	title: "Simon Says",
	tagline: "truths, opinions and preconceptions",
	description:
		"Simon says contains opinionated articles on subjects such as software development, software startups and engineering recruitment.\nThe articles convey lessons learned during work as software engineer, engineering manager and a consultant.",
	keywords: ["simon mika", "blog", "personal", "tech", "programming"],
	author: "Simon Mika",
	design,
	page: {
		pages: {
			article,
			talk,
			about,
			contact,
			description,
			subscribe,
		},
	},
}
