import { Component, h, Host } from "@stencil/core"
import { site } from "../../../index"
// import * as binotype from "../binotype"
// import { Footer } from "../Footer"

// binotype.Footer.override = Footer
@Component({ tag: "simonmika-site", styleUrl: "style.css" })
export class SimonmikaSite {
	async render() {
		console.log("rendering site", await site())
		return (
			<Host>
				Text
				<h1>Header</h1>
				<div>Division</div>
				{/* <binotype-site site={await site()}></binotype-site> */}
			</Host>
		)
	}
}
