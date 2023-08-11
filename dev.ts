#!/usr/bin/env -S deno run -A --watch
import dev from "$live/dev.ts";
import site from "./site.json" assert { type: "json" };
import "deco-sites/std/plugins/tailwind/bundler.ts";

// Generate manifest and boot server
await dev(import.meta.url, "./main.ts", site);
