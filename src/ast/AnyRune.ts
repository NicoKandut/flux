import type { Forward } from "./Forward";
import type { Repeat } from "./Repeat";
import type { Turn } from "./Turn";

export type AnyRune = Repeat | Forward | Turn;
export type AnyRuneSet = AnyRune | AnyRune[];
