import { binotype } from "@binotype/model"
import { VNode } from "@stencil/core"
import { parser } from "../src/components/binotype/parser"
import egenKonsult from "./egen-konsult.tup"
import howIUseTypescript from "./how-i-use-typescript.tup"
import onProgramming from "./on-programming.tup"
import recruiting from "./recruiting.tup"
import recruiting2025 from "./recruiting-2025.tup"
import retroGameModernUiTools from "./retro-game-modern-ui-tools.tup"

export async function talk(): Promise<binotype.Page<VNode>> {
	return {
		title: "Talks",
		pages: {
			onProgramming: await parser.parse(onProgramming, "talk/onProgramming"),
			howIUseTypescript: await parser.parse(howIUseTypescript, "talk/howIUseTypescript"),
			egenKonsult: await parser.parse(egenKonsult, "talk/egenKonsult"),
			recruiting: await parser.parse(recruiting, "talk/recruiting"),
			recruiting2025: await parser.parse(recruiting2025, "talk/recruiting2025"),
			retroGameModernUiTools: await parser.parse(retroGameModernUiTools, "talk/retroGameModernUiTools")
		}
	}
}
