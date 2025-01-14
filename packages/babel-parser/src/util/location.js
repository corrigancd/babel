// @flow

export type Pos = {
  start: number,
};

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

export class Position {
  line: number;
  column: number;
  index: number;

  constructor(line: number, col: number, index: number) {
    this.line = line;
    this.column = col;

    // this.index = index;
    // Object.defineProperty(this, "index", { enumerable: false, value: index });
    indexes.set(this, index);
  }
}

export class SourceLocation {
  start: Position;
  end: Position;
  filename: string;
  identifierName: ?string;

  constructor(start: Position, end?: Position) {
    this.start = start;
    // $FlowIgnore (may start as null, but initialized later)
    this.end = end;
  }
}

export const indexes: WeakMap<Position, number> = new WeakMap();

/**
 * creates a new position with a non-zero column offset from the given position.
 * This function should be only be used when we create AST node out of the token
 * boundaries, such as TemplateElement ends before tt.templateNonTail. This
 * function does not skip whitespaces.
 *
 * @export
 * @param {Position} position
 * @param {number} columnOffset
 * @returns {Position}
 */
export function createPositionWithColumnOffset(
  position: Position,
  columnOffset: number,
) {
  const { line, column } = position;
  return new Position(
    line,
    column + columnOffset,
    indexes.get(position) + columnOffset,
  );
}
