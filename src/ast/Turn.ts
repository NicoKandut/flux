import type { Rune } from "./Rune";

export interface Turn extends Rune {
  readonly degrees: number;
  readonly type: "turn";
}
