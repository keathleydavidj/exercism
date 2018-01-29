import R from 'ramda';

const nextRow = R.pipe(
  array => R.zip(R.init(array), R.tail(array)),
  R.map(([fst, snd]) => fst + snd),
  R.prepend(1),
  R.append(1),
);

const generateTriangle = num =>
  R.unfold((row) => (R.length(row) > num) ? false : [row, nextRow(row)], [1]);

export default class Triangle {
  constructor(numberOfRows) {
    const triangle = generateTriangle(numberOfRows);
    this.rows = triangle;
    this.lastRow = R.last(triangle);
  }
}
