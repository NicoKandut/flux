import type { AnyRuneSet } from "src/ast/AnyRune";

const INDENTATION = "  ";

export function interpret(rune: AnyRuneSet) {
  return indentedInterpret(rune, 0);
}

function indentedInterpret(rune: AnyRuneSet, level: number) {
  if (Array.isArray(rune)) {
    return rune.map((r) => indentedInterpret(r, level)).join("\n");
  }

  const indent = INDENTATION.repeat(level);

  switch (rune.type) {
    case "forward":
      return `${indent}forward(${rune.pixels})`;
    case "turn":
      return `${indent}turn(${rune.degrees})`;
    case "repeat":
      return `${indent}for x in range(${rune.times}):\n${indentedInterpret(
        rune.routine,
        level + 1
      )}`;
  }
}
