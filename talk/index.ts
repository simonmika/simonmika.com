import { binotype } from "@binotype/model"
import { egenKonsult } from "./egen-konsult"
import { howIUseTypescript } from "./how-i-use-typescript"
import { onProgramming } from "./on-programming"
import { recruiting } from "./recruiting"
import { recruiting2025 } from "./recruiting-2025"
import { retroGameModernUiTools } from "./retro-game-modern-ui-tools"

export const talk: binotype.Site.Page = {
	title: "Talks",
	pages: {
		onProgramming,
		howIUseTypescript,
		egenKonsult,
		recruiting,
		recruiting2025,
		retroGameModernUiTools,
	},
}
