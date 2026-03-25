import { Component, h, Host } from "@stencil/core"
import { site } from "../../../index"

@Component({
	tag: "simonmika-site",
	styleUrl: "style.css",
})
export class SimonmikaSite {
	render() {
		return (
			<Host>
				<binotype-site debug="context" site={site}></binotype-site>
			</Host>
		)
	}
}
