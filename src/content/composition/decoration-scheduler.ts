export interface DecorationTask {
  name: string;
  run(): void;
}

export interface DecorationScheduler {
  destroy(): void;
  runNow(): void;
  schedule(): void;
}

export function createDecorationScheduler(
  tasks: readonly DecorationTask[],
  requestFrame: (callback: FrameRequestCallback) => number =
    requestAnimationFrame,
  cancelFrame: (handle: number) => void =
    typeof cancelAnimationFrame === "function"
      ? cancelAnimationFrame
      : () => undefined
): DecorationScheduler {
  let scheduled = false;
  let stopped = false;
  let frameHandle: number | null = null;

  function isInvalidatedExtensionContext(error: unknown): boolean {
    return String(
      error instanceof Error ? error.message : error
    ).toLowerCase().includes("extension context invalidated");
  }

  function runNow(): void {
    scheduled = false;
    frameHandle = null;

    if (stopped) {
      return;
    }

    for (const task of tasks) {
      try {
        task.run();
      } catch (error) {
        if (isInvalidatedExtensionContext(error)) {
          destroy();
          return;
        }
        console.error(
          `[POE TradeUX] Decoration task failed: ${task.name}`,
          error
        );
      }
    }
  }

  function schedule(): void {
    if (scheduled || stopped) {
      return;
    }

    scheduled = true;
    frameHandle = requestFrame(runNow);
  }

  function destroy(): void {
    if (frameHandle !== null) {
      cancelFrame(frameHandle);
      frameHandle = null;
    }
    scheduled = false;
    stopped = true;
  }

  return { destroy, runNow, schedule };
}
