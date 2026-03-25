import { binotype } from "@binotype/model"
import showdown from "showdown"

export const description: binotype.Site.Page = {
	title: "Description",
	menu: false,
	content: new showdown.Converter()
		.makeHtml(`Simon says contains opinionated articles on subjects such as _software development_, _software startups_ and _engineering recruitment_.

The articles convey _lessons learned_ during work as software engineer, engineering manager and a consultant.
`),
}
