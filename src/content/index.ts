import { createContentApp, type ContentApp } from "./composition/app";
import { getLegacyDependencies } from "./composition/legacy-dependencies";

const RUNTIME_KEY = "__poeTradeStylerRuntime";

function getCurrentRuntime(): ContentApp | null {
  return (Reflect.get(globalThis, RUNTIME_KEY) as ContentApp | undefined) ?? null;
}

const currentRuntime = getCurrentRuntime();
if (currentRuntime) {
  try {
    currentRuntime.destroy();
  } catch {
    // A previously injected unpacked build may belong to an invalidated
    // extension context. Continue mounting the current build regardless.
  }
}

Reflect.set(globalThis, RUNTIME_KEY, createContentApp(getLegacyDependencies()));
