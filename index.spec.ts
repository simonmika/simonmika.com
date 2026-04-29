import { describe, expect, it } from "vitest"
import { binotype } from "@binotype/model"
import { site } from "./index"

describe("simonmika-com", () => {
	it.each([
		"/",
		"/articles",
		"/articles/abstractions",
		"/articles/naming",
		"/articles/to-live",
		"/about",
		"/contact",
		"/talks",
		"/non-existent"
	] as const)("binotype.Context.load(%s)", path => expect(binotype.Context.load(site, path)).toMatchSnapshot())
})
