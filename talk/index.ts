import { binotype } from "@binotype/model"
import { egenKonsult } from "./egen-konsult"
import { howIUseTypeScript } from "./how-i-use-typescript"
import { onProgramming } from "./on-programming"
import { recruiting } from "./recruiting"
import { recruiting2025 } from "./recruiting-2025"
import { retroGameModernUITools } from "./retro-game-modern-ui-tools"

export const talk: binotype.Site.Page = {
	title: "Talks",
	pages: {
		onProgramming,
		howIUseTypeScript,
		egenKonsult,
		recruiting,
		recruiting2025,
		retroGameModernUITools,
	},
}
