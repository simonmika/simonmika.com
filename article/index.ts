import { binotype } from "@binotype/model"
import { abstractions } from "./abstractions"
import { cssBroken } from "./css-broken"
import { naming } from "./naming"
import { optimizingDatabases } from "./optimizing-databases"
import { optimizingExecutionSpeed } from "./optimizing-execution-speed"
import { optimizingSoftware } from "./optimizing-software"
import { programmingInterview } from "./programming-interview"
import { recruitingProcess } from "./recruiting-process"
import { rockStarProgrammers } from "./rock-star-programmers"
import { takingRiskWhenDying } from "./taking-risk-when-dying"
import { toLive } from "./to-live"

export const article: binotype.Site.Page = {
	title: "Articles",
	pages: {
		abstractions,
		cssBroken,
		naming,
		optimizingDatabases,
		optimizingExecutionSpeed,
		optimizingSoftware,
		programmingInterview,
		recruitingProcess,
		rockStarProgrammers,
		takingRiskWhenDying,
		toLive,
	},
}
