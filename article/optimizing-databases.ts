import showdown from "showdown"
import { binotype} from "@binotype/site"

export const optimizingDatabases: binotype.Site.Page = {
	draft: true,
	tags: [""],
	title: "Optimizing Databases",
	content: new showdown.Converter().makeHtml(``),
}
