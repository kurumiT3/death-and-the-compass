import assert from "node:assert/strict";
import { test } from "node:test";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { remarkReadingTime } from "../src/plugins/remark-reading-time.ts";

test("article character count excludes Markdown syntax, punctuation, and link destinations", async () => {
	const renderer = await createMarkdownProcessor({ remarkPlugins: [remarkReadingTime] });
	const result = await renderer.render("你好，世界！[Astro 7](https://example.com)");
	assert.equal(result.metadata.frontmatter.characterCount, 10);
});
