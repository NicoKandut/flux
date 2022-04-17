import type { Rune } from "./Rune";

export interface Forward extends Rune {
  readonly type: "forward";
  readonly pixels: number;
}
