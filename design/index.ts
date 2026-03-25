import { binotype } from "@binotype/site"

export const design: binotype.Site.Design = {
	logotype: "assets/logotype.svg",
	icon: "icon/favicon.ico",
	styles: [
		"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/styles/default.min.css",
	],
	scripts: ["//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js", "/assets/share-blockquote.js"],
	navigation: "header",
	list: {
		mode: "header",
	},
	home: {
		mode: "header",
		section: "article",
	},
}
