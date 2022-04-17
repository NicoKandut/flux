import type { AnyRuneSet } from "./AnyRune";
import type { Rune } from "./Rune";

export interface Repeat extends Rune {
  readonly type: "repeat";
  readonly times: number;
  readonly routine: AnyRuneSet;
}
