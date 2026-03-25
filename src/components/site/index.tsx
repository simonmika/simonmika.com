import { Component, h, Host } from "@stencil/core"
import { site } from "../../../index"
import * as binotype from "../binotype"
import { Footer } from "../Footer"

binotype.Footer.override = Footer
@Component({
	tag: "simonmika-site",
	styleUrl: "style.css",
})
export class SimonmikaSite {
	render() {
		return (
			<Host>
				<binotype-site site={site}></binotype-site>
			</Host>
		)
	}
}
